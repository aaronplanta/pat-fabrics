export default function Contact() {
    const faqs = [
        { q: "Do you provide fabric swatches before we commit to a bulk order?", a: "Yes. We highly encourage brands to feel the quality of our wool firsthand. Call us to request a comprehensive swatch book featuring our current weights, weaves, and color varieties." },
        { q: "What is your Minimum Order Quantity (MOQ)?", a: "We work with brands of various sizes, but we do have standard wholesale MOQs depending on the specific fabric type. Please call our team to discuss the exact requirements for your production run." },
        { q: "Can you deliver fabric rolls directly to our manufacturing facility?", a: "Yes. We coordinate the secure delivery of bulk fabric rolls to tailoring houses and garment manufacturing facilities across Metro Manila and surrounding areas." }
    ];

    return (
        <div className="max-w-4xl mx-auto px-6 py-16">

            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner with PAT Fabrics</h1>
                <p className="text-lg text-stone-400 max-w-2xl mx-auto">
                    From boutique luxury labels to established menswear brands, our wool is woven into some of the finest garments in the industry.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
                {/* About Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-stone-200">Who We Are</h2>
                    <p className="text-stone-400 leading-relaxed">
                        PAT Fabrics is a specialized textile supplier dedicated entirely to premium sheep wool. We believe that true luxury starts at the thread level. By focusing our expertise on one distinct material, we help clothing brands craft exceptional garments that stand out in a crowded market. Whether you are cutting bespoke suits or scaling a seasonal knitwear line, we provide the raw materials to bring your vision to life.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="bg-stone-900 text-stone-50 p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 border-b border-stone-700 pb-2">Contact Us</h2>
                    <p className="mb-6 text-stone-300 text-sm">
                        Stop guessing from digital photos. Call us directly to discuss your brand&apos;s specific textile needs, request physical swatches, or place a wholesale order.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex flex-col">
                            <span className="text-stone-400 text-sm uppercase tracking-wider font-semibold">Phone (Call & Viber)</span>
                            <span className="text-xl font-bold hover:text-stone-300">09322751087</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-stone-400 text-sm uppercase tracking-wider font-semibold">Location</span>
                            <span className="text-lg">Bel-Air, Makati City, Metro Manila</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-stone-400 text-sm uppercase tracking-wider font-semibold">Business Hours</span>
                            <span className="text-lg">Monday – Friday, 8:00 AM to 5:00 PM</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* FAQ Section */}
            <div>
                <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-stone-200">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {faqs.map((faq, idx) => (
                        <div key={idx}>
                            <h3 className="font-semibold text-lg text-stone-200">{faq.q}</h3>
                            <p className="text-stone-400 mt-1">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}