import Image from "next/image";

export default function Home() {
    const fabrics = [
        {
            title: "Fine Merino Wool",
            use: "Premium base layers, lightweight sweaters, activewear.",
            trait: "Ultra-soft, breathable, and moisture-wicking.",
            image: "images/merino.png"
        },
        {
            title: "Worsted Wool",
            use: "Tailored suits, blazers, high-end trousers.",
            trait: "Smooth, durable finish with excellent drape.",
            image: "images/worsted.png"
        },
        {
            title: "Heavy Outerwear",
            use: "Overcoats, peacoats, winter jackets.",
            trait: "Thick, highly insulating, and weather-resistant.",
            image: "images/outwear.png"
        },
        {
            title: "Textured Tweed",
            use: "Heritage jackets, skirts, statement pieces.",
            trait: "Rugged, distinct woven patterns, highly durable.",
            image: "images/tweed.png"
        },
    ];

    const basePath = process.env.NODE_ENV === 'production' ? '/ron-fabrics' : '';

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-cover bg-center bg-stone-900/70 bg-blend-overlay text-stone-100 py-24 px-6 text-center" style={{ backgroundImage: `url('${basePath}/images/bg.png')` }}>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Elevate Your Brand with Premium Fabrics
                    </h1>
                    <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
                        PAT Fabrics supplies ultra-premium, 100% authentic sheep wool to fashion houses. Based in Makati, we provide the foundational textiles for your luxury garments.
                    </p>
                    <p className="inline-block bg-stone-100 text-stone-900 font-semibold px-8 py-4 rounded shadow-lg">
                        BEST FABRICS IN THE CITY
                    </p>
                </div>
            </section>

            {/* Core Collections */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Our Core Wool Collections</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {fabrics.map((fabric, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow-sm border border-stone-200 flex flex-col h-full overflow-hidden">

                            {/* Image Section */}
                            <div className="relative h-48 w-full bg-stone-100">
                                <Image
                                    src={fabric.image}
                                    alt={fabric.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="object-cover"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl text-black font-semibold mb-3">{fabric.title}</h3>
                                <p className="text-sm text-stone-600 mb-2 flex-grow">
                                    <strong className="text-stone-800">Best For:</strong> {fabric.use}
                                </p>
                                <p className="text-sm text-stone-600">
                                    <strong className="text-stone-800">Characteristics:</strong> {fabric.trait}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-cover bg-center bg-stone-900/70 bg-blend-overlay py-20 px-6" style={{ backgroundImage: `url('${basePath}/images/bg2.png')` }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl text-white font-bold mb-8 text-center">Why Top Brands Source From Us</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded shadow-sm">
                            <h4 className="text-black font-bold text-lg mb-2">Unmatched Material Purity</h4>
                            <p className="text-stone-600">We specialize exclusively in premium sheep wool, guaranteeing authentic texture, warmth, and longevity for your final garments.</p>
                        </div>
                        <div className="text-black bg-white p-6 rounded shadow-sm">
                            <h4 className="font-bold text-lg mb-2">Wholesale B2B Focus</h4>
                            <p className="text-stone-600">We cater specifically to the volume and consistency requirements of clothing lines, ensuring dye lots and fabric weights remain uniform.</p>
                        </div>
                        <div className="text-black bg-white p-6 rounded shadow-sm">
                            <h4 className="font-bold text-lg mb-2">Local Access to Luxury</h4>
                            <p className="text-stone-600">Based in Bel-Air, Makati, we eliminate the headache of international shipping delays, allowing you to source world-class textiles right here in Metro Manila.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}