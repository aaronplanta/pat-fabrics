import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"], // Regular, Medium, SemiBold, Bold
    display: "swap",
});

export const metadata: Metadata = {
    title: "PAT Fabrics | Premium Fabrics",
    description: "Premium Sheep Wool Fabrics for Exceptional Clothing Brands in Metro Manila.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className} bg-stone-50 text-stone-900 flex flex-col min-h-screen`}>
                {/* Navigation */}
                <Navbar />

                {/* Main Content */}
                <main className="flex-grow">
                    {children}
                </main>

                {/* Footer */}
                <footer className="bg-stone-200 text-stone-600 text-center py-8">
                    <p className="text-sm">© 2026 PAT Fabrics. Makati City, Metro Manila.</p>
                </footer>
            </body>
        </html>
    );
}