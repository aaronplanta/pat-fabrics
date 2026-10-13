"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full text-stone-50">
            {/* Top Bar (Now its own separate block so the blurs don't conflict) */}
            <div className="bg-stone-900/80 backdrop-blur-md shadow-sm relative z-20">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-2xl font-bold tracking-tight"
                            onClick={() => setIsOpen(false)} // Close menu if clicking logo
                        >
                            PAT FABRICS
                        </Link>

                        {/* Desktop Nav (Hidden on Mobile) */}
                        <nav className="hidden md:flex space-x-6 text-sm font-medium">
                            <Link href="/" className="hover:text-stone-300 transition">Home</Link>
                            <Link href="/contact" className="hover:text-stone-300 transition">About & Contact</Link>
                        </nav>

                        {/* Mobile Burger Button (Hidden on Desktop) */}
                        <button
                            className="md:hidden p-2 text-stone-300 hover:text-white transition"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {/* SVG Icon changes from Burger to X based on isOpen state */}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Dropdown (Now a sibling to the top bar) */}
            {isOpen && (
                <nav className="md:hidden absolute top-full left-0 w-full bg-stone-900/80 backdrop-blur-md px-6 py-6 flex flex-col space-y-4 border-t border-stone-700/50 text-sm font-medium shadow-xl z-10">
                    <Link
                        href="/"
                        className="hover:text-stone-300 transition block"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/contact"
                        className="hover:text-stone-300 transition block"
                        onClick={() => setIsOpen(false)}
                    >
                        About & Contact
                    </Link>
                </nav>
            )}
        </header>
    );
}