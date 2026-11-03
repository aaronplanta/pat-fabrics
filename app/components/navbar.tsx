"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arrow, ThreadMark } from "./brand";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) { setIsOpen(false); toggleRef.current?.focus(); }
    }
    function closeOnDesktop() { if (window.innerWidth > 760) setIsOpen(false); }
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => { window.removeEventListener("keydown", closeOnEscape); window.removeEventListener("resize", closeOnDesktop); };
  }, [isOpen]);
  return <>
    <div className="announcement">Exceptional wool. Endless possibilities. <span>Thoughtfully supplied in Metro Manila.</span></div>
    <header className="site-header"><div className="shell nav-inner">
      <Link href="/" className="brand" onClick={() => setIsOpen(false)} aria-label="PAT Fabrics home"><ThreadMark /><span>PAT <span className="brand-light">FABRICS</span><small>THE FOUNDATION OF FINE CLOTHING</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation"><Link href="/#collections">Our collections</Link><Link href="/#our-story">Our story</Link><Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>About & contact</Link></nav>
      <Link href="/contact#contact-details" className="nav-cta">Let’s create together <Arrow /></Link>
      <button ref={toggleRef} className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls={isOpen ? "mobile-navigation" : undefined} aria-label={isOpen ? "Close navigation" : "Open navigation"}><span className={isOpen ? "menu-lines is-open" : "menu-lines"}><span /><span /></span></button>
    </div>{isOpen && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation"><Link href="/#collections" onClick={() => setIsOpen(false)}>Our collections <Arrow /></Link><Link href="/#our-story" onClick={() => setIsOpen(false)}>Our story <Arrow /></Link><Link href="/contact" onClick={() => setIsOpen(false)}>About & contact <Arrow /></Link><Link href="/contact#contact-details" onClick={() => setIsOpen(false)}>Request swatches <Arrow /></Link></nav>}</header>
  </>;
}
