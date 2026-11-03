import Image from "next/image";
import Link from "next/link";
import { Arrow, ThreadMark } from "./components/brand";

const basePath = process.env.NODE_ENV === "production" ? "/pat-fabrics" : "";
const fabrics = [
  { title: "Fine Merino", category: "THE EVERYDAY LUXURY", description: "Exceptionally soft. Naturally breathable. Made for pieces that feel as good as they look.", image: "merino.png", use: "Knitwear & base layers", color: "Olive" },
  { title: "Worsted Wool", category: "THE TAILOR’S ESSENTIAL", description: "A smooth finish and beautiful drape, for tailoring with quiet confidence.", image: "worsted.png", use: "Suits & tailored separates", color: "Charcoal" },
  { title: "Heavy Outerwear", category: "THE COLD-WEATHER CLASSIC", description: "Substantial warmth and lasting structure. A foundation for seasons to come.", image: "outwear.png", use: "Overcoats & winter jackets", color: "Navy" },
  { title: "Textured Tweed", category: "THE HERITAGE WEAVE", description: "Distinctive texture with enduring character, for garments with a story to tell.", image: "tweed.png", use: "Jackets & statement pieces", color: "Brown" },
];

export default function Home() {
  return <>
    <section className="hero shell">
      <div className="hero-copy">
        <p className="eyebrow"><span className="small-rule" /> NATURAL FIBRES. EXCEPTIONAL POSSIBILITIES.</p>
        <h1>Great garments<br />begin with<br /><em>better fabric.</em></h1>
        <p className="hero-description">Premium sheep wool for those who create with intention. Thoughtfully sourced for clothing brands, designers, and makers in Metro Manila.</p>
        <div className="hero-actions"><Link href="#collections" className="button">Explore the collection <Arrow /></Link><Link href="/contact" className="text-link">Let’s talk fabric <Arrow /></Link></div>
        <div className="hero-footnote"><ThreadMark /><span>Pure wool. Beautifully versatile.<br /><strong>Your next collection starts here.</strong></span></div>
      </div>
      <div className="hero-visual">
        <div className="hero-image"><Image src={`${basePath}/images/worsted.png`} alt="Soft folds of charcoal worsted wool, showing the fine woven texture" fill preload sizes="(max-width: 760px) 100vw, 48vw" /></div>
        <div className="wool-seal"><span>THE NATURAL CHOICE</span><strong>100%</strong><span>PURE SHEEP WOOL</span></div>
        <div className="image-caption"><span>THE ART OF A GOOD FOUNDATION</span><span>WORSTED WOOL</span></div>
        <div className="fabric-note"><span className="fabric-swatch" /><div><span>IN FOCUS</span><strong>Charcoal Worsted Wool</strong><small>Refined texture. Effortless drape.</small></div></div>
      </div>
    </section>
    <div className="qualities"><div className="shell qualities-inner"><span><ThreadMark /> Naturally exceptional</span><span>100% authentic sheep wool</span><span>Wholesale, with a personal touch</span><span>Based in Makati, Philippines <span aria-hidden="true">↗</span></span></div></div>
    <section className="collection-section shell section-space" id="collections">
      <div className="section-heading"><div><p className="eyebrow">THE FABRIC LIBRARY</p><h2>A texture for <em>every vision.</em></h2></div><p>From the first sketch to the final stitch,<br />find the wool that brings it all together.</p></div>
      <div className="fabric-grid">{fabrics.map((fabric, index) => <article className="fabric-card" key={fabric.title}>
        <Link href="/contact#contact-details" className="fabric-image-link" aria-label={`Enquire about ${fabric.title}`}><div className="fabric-image"><Image src={`${basePath}/images/${fabric.image}`} alt={`${fabric.color} ${fabric.title.toLowerCase()} fabric close-up`} fill sizes="(max-width: 760px) 50vw, 25vw" /></div><span className="fabric-number">0{index + 1}</span><span className="fabric-image-action"><Arrow /></span></Link>
        <p className="eyebrow fabric-category">{fabric.category}</p><h3><Link href="/contact#contact-details">{fabric.title}</Link></h3><p className="fabric-description">{fabric.description}</p><div className="fabric-use"><span>{fabric.use}</span><span aria-hidden="true">↗</span></div>
      </article>)}</div>
    </section>
    <section className="story" id="our-story"><div className="shell story-grid"><div className="story-copy"><p className="eyebrow">ONE MATERIAL. ENDLESS POTENTIAL.</p><h2>Good fabric is felt.<br /><em>Great fabric is remembered.</em></h2><p>We believe exceptional clothing starts long before the first stitch. It starts with the integrity of the fibre, the richness of the texture, and a supplier who understands your vision.</p><p>That’s why we focus on one thing: premium sheep wool. From our home in Makati, we help local brands create pieces worth keeping.</p><Link href="/contact" className="text-link light-link">Get to know PAT Fabrics <Arrow /></Link></div><div className="story-image"><Image src={`${basePath}/images/bg2.png`} alt="Wool outerwear and knitwear styled into contemporary everyday garments" fill sizes="(max-width: 760px) 100vw, 50vw" /><span className="story-image-label">FROM FIBRE TO FINISHED PIECE</span></div></div></section>
    <section className="shell section-space difference"><div className="section-heading"><div><p className="eyebrow">THE PAT DIFFERENCE</p><h2>Considered materials.<br /><em>A dependable partner.</em></h2></div><p>Luxury textiles, made more accessible<br />for the people who bring them to life.</p></div><div className="benefits">{[
      ["01", "Pure by nature", "Authentic sheep wool with the natural softness, warmth, and lasting character your garments deserve."],
      ["02", "Built for your brand", "Wholesale sourcing with attention to consistent fabric weights and dye lots, from one production run to the next."],
      ["03", "Closer to your craft", "World-class textiles, right here in Makati. Source locally and spend more time on what you do best: creating."],
    ].map(([number, title, description]) => <article key={number}><span className="benefit-number">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="swatch-section shell"><div className="swatch-art" aria-hidden="true"><span /><span /><span /></div><div><p className="eyebrow">SOMETHING BEAUTIFUL STARTS HERE</p><h2>Feel the difference.<br /><em>Find your fabric.</em></h2><p>A screen can only tell you so much. Let’s talk about your next collection and put the right swatches in your hands.</p><Link href="/contact#contact-details" className="button">Request fabric swatches <Arrow /></Link></div></section>
  </>;
}
