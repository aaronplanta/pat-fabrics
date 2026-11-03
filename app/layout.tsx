import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navbar from "./components/navbar";
import { Arrow, ThreadMark } from "./components/brand";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap", variable: "--font-poppins" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], display: "swap", variable: "--font-cormorant" });
export const metadata: Metadata = { title: "PAT Fabrics | The Foundation of Fine Clothing", description: "Discover premium sheep wool for designers, makers, and clothing brands. Explore merino, worsted wool, outerwear, and tweed in Makati, Metro Manila." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${poppins.variable} ${cormorant.variable}`}><a href="#main-content" className="skip-link">Skip to content</a><Navbar /><main id="main-content">{children}</main><footer className="site-footer"><div className="shell"><div className="footer-top"><div><Link href="/" className="brand footer-brand"><ThreadMark /><span>PAT <span className="brand-light">FABRICS</span></span></Link><p>Fine wool. Thoughtful sourcing.<br />For the things you’re yet to create.</p></div><nav aria-label="Footer navigation"><span className="eyebrow">EXPLORE</span><Link href="/#collections">Our collections</Link><Link href="/#our-story">Our story</Link><Link href="/contact">About & contact</Link></nav><div className="footer-contact"><span className="eyebrow">LET’S MAKE SOMETHING</span><a href="tel:+639322751087">0932 275 1087 <Arrow /></a><p>Bel-Air, Makati City<br />Metro Manila, Philippines</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} PAT Fabrics. All rights reserved.</span><span>Natural fibres. Lasting impressions.</span></div></div></footer></body></html>;
}
