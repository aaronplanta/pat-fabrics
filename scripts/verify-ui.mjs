// Validate the static GitHub Pages build using Chrome's DevTools Protocol.
// Run after npm run build: node scripts/verify-ui.mjs
import { createServer } from 'node:http';
import { readFile, stat, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
const root = path.resolve('out');
const mime = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.png':'image/png', '.svg':'image/svg+xml', '.woff2':'font/woff2', '.ico':'image/x-icon', '.txt':'text/plain' };
const server = createServer(async (req, res) => {
  try {
    let file = path.join(root, decodeURIComponent(new URL(req.url, 'http://localhost').pathname).replace(/^\/pat-fabrics/, ''));
    if (!file.startsWith(root + path.sep) && file !== root) throw Error('Invalid path');
    try { if ((await stat(file)).isDirectory()) file = file === root || file === root + path.sep ? path.join(file, 'index.html') : file + '.html'; } catch { file += '.html'; }
    res.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream');
    res.end(await readFile(file));
  } catch { res.writeHead(404); res.end('Not found'); }
});
await new Promise(resolve => server.listen(4173, '127.0.0.1', resolve));
const chrome = spawn(process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check', '--remote-debugging-port=9223', `--user-data-dir=${path.resolve('.next/ui-browser')}`, 'about:blank'], { windowsHide:true, stdio:'ignore' });
const sleep = ms => new Promise(r=>setTimeout(r,ms));
let ws;
try {
  let tabs;
  for (let i=0;i<40;i++) { try { tabs=await (await fetch('http://127.0.0.1:9223/json')).json(); break; } catch { await sleep(250); } }
  assert(tabs, 'Chrome started');
  ws=new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl);
  await new Promise(r=>ws.addEventListener('open',r,{once:true}));
  let id=0;const pending=new Map();const errors=[];
  ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);if(m.error){p.reject(Error(m.error.message));}else{p.resolve(m.result);}}if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.text);});
  const call=(method,params={})=>new Promise((resolve,reject)=>{const n=++id;pending.set(n,{resolve,reject});ws.send(JSON.stringify({id:n,method,params}));});
  const evaluate=async expression=>{const r=await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
  await call('Page.enable');await call('Runtime.enable');
  await mkdir('.next/ui-previews',{recursive:true});
  for(const width of [320,390,768,1024,1440]) {
    await call('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<760});
    for(const route of ['', '/contact']) {
      await call('Page.navigate',{url:`http://127.0.0.1:4173/pat-fabrics${route}`});
      await sleep(650);await evaluate('document.fonts.ready');
      assert(await evaluate('getComputedStyle(document.querySelector("h1")).fontFamily.includes("Cormorant Garamond")'), 'Editorial heading font applies');
      const result=await evaluate(`(async()=>{await Promise.all([...document.images].map(i=>{i.loading='eager';return i.decode().catch(()=>{});}));return {width:innerWidth,scroll:document.documentElement.scrollWidth,broken:[...document.images].filter(i=>!i.naturalWidth).map(i=>i.src),overflow:[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>document.documentElement.clientWidth+1).slice(0,10).map(e=>({tag:e.tagName,cls:e.className,width:e.getBoundingClientRect().width,right:e.getBoundingClientRect().right}))}})()`);
      assert(result.scroll<=width,`Horizontal overflow at ${width}${route}: ${JSON.stringify(result)}`);
      assert.equal(result.broken.length,0,`Images load at ${width}${route}`);
      if(width===390||width===1440){const size=await evaluate('({width:innerWidth,height:document.documentElement.scrollHeight})');const shot=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{x:0,y:0,...size,scale:1}});await writeFile(`.next/ui-previews/${route?'contact':'home'}-${width}.png`,Buffer.from(shot.data,'base64'));}
      if(width===390) {
        await evaluate('document.querySelector(".menu-toggle").click()');
        assert(await evaluate('document.querySelector(".menu-toggle").getAttribute("aria-expanded")==="true"'),'Mobile menu opens');
        await call('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
        await sleep(60);assert(await evaluate('!document.querySelector(".mobile-nav")'),'Escape closes menu');
        if(!route){await evaluate('document.querySelector(".menu-toggle").click()');await sleep(50);await evaluate('document.querySelector(".mobile-nav a").click()');await sleep(150);assert(await evaluate('!document.querySelector(".mobile-nav") && location.hash==="#collections"'),'Collection navigation works');}
        if(route){await evaluate('document.querySelector("summary").click()');assert(await evaluate('document.querySelector("details").open'),'FAQ expands');await evaluate('document.querySelector("summary").click()');assert(await evaluate('!document.querySelector("details").open'),'FAQ closes');}
      }
      console.log(`PASS ${width}px ${route||'/'}: no overflow, all images loaded`);
    }
  }
  assert.equal(errors.length,0,`Browser errors: ${errors.join(', ')}`);
  console.log('PASS mobile navigation, Escape, collection anchor, FAQ interactions, and no browser exceptions.');
} finally { ws?.close();chrome.kill();server.close(); }
