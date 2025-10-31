"use client"

import { useState, useEffect, useRef, RefObject } from 'react';
import Head from 'next/head';
// import Image from 'next/image';

const Products = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('cardamom');
    const [, setImageError] = useState({
        cardamom: false,
        pepper: false
    });
    const cardamomRef = useRef<HTMLDivElement>(null);
    const pepperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToSection = (sectionRef: RefObject<HTMLDivElement | null>) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // const handleImageError = (imageType: string) => {
    //     setImageError(prev => ({ ...prev, [imageType]: true }));
    //     console.log(`Image failed to load: ${imageType}`);
    // };

    return (
        <div className="min-h-screen bg-gray-50 relative overflow-hidden">
            {/* Background Image with Blur */}
            <div
                className="fixed inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('/spices 1.jpg')"
                }}
            >
                <div className="absolute inset-0 bg-opacity-40 backdrop-blur-sm"></div>
            </div>

            {/* Main Content */}
            <div className="pt-24 z-10">
                <Head>
                    <title>Premium Spices - Worldwide Indian Exporters</title>
                    <meta name="description" content="Discover premium Indian spices including Cardamom and Black Pepper, sourced directly from the finest plantations in India." />
                </Head>

                {/* Hero Section */}
                <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Premium Indian Spices</h1>
                    <p className="text-xl text-black-100 max-w-3xl mx-auto">
                        Experience the Authentic Taste of India's Finest Spices, Direct from Source to Your Table
                    </p>
                </section>

                {/* Quick Navigation */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <div className={`bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-4 shadow-lg transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => { setActiveTab('cardamom'); scrollToSection(cardamomRef); }}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === 'cardamom'
                                    ? 'bg-blue-500 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                🌿 Cardamom - Queen of Spices
                            </button>
                            <button
                                onClick={() => { setActiveTab('pepper'); scrollToSection(pepperRef); }}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === 'pepper'
                                    ? 'bg-blue-500 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                🌶️ Black Pepper - King of Spices
                            </button>
                        </div>
                    </div>
                </div>

                {/* Cardamom Section */}
                <section ref={cardamomRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className={`bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Image Section - DEBUG VERSION */}
                            <div className="relative h-80 lg:h-96"> 
                                <div className="flex flex-col h-full space-y-2">
                                    {/* Top image - 70% height */}
                                    <div className="relative h-100 bg-blue-500"> {/* Added bg color to see div */}
                                        <img
                                            src="/Cardamom.jpg"
                                            alt="Premium Indian Cardamom"
                                            className="w-full h-full object-cover rounded-t-lg"
                                        />
                                    </div>

                                     <div className="relative h-100 bg-blue-500"> {/* Added bg color to see div */}
                                        <img
                                            src="/cardamom-seeds-bowl_492824-1063.jpg"
                                            alt="Premium Indian Cardamom"
                                            className="w-full h-full object-cover rounded-t-lg"
                                        />
                                    </div>

                                    <div className="relative h-100 bg-blue-500"> {/* Added bg color to see div */}
                                        <img
                                            src="/cardamom-elaichi-kerala.jpg"
                                            alt="Premium Indian Cardamom"
                                            className="w-full h-full object-cover rounded-t-lg"
                                        />
                                    </div>

                                    {/* Bottom row - 30% height */}
                                    {/* <div className="flex space-x-2 h-24">
                                        <div className="relative flex-1 h-full bg-green-500">
                                            <img
                                                src="/cardamom-elaichi-kerala.jpg"
                                                alt="Cardamom Closeup"
                                                className="w-full h-full object-cover rounded-bl-lg"
                                            />
                                        </div>
                                        <div className="relative flex-1 h-full bg-yellow-500">
                                            <img
                                                src="/spice5.jpg"
                                                alt="Black Pepper"
                                                className="w-full h-full object-cover rounded-br-lg"
                                            />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            
                            {/* Content Section */}
                            <div className="p-8">
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl mr-3">👑</span>
                                    <h2 className="text-3xl font-bold text-gray-900">Cardamom - The Queen of Spices</h2>
                                </div>

                                <p className="text-gray-700 mb-6 text-lg">
                                    Known as the Queen of Spices, Indian Cardamom is celebrated for its rich aroma, intense flavor, and exceptional freshness.
                                    At WORLDWIDE INDIAN EXPORTERS, we source premium-grade green cardamom from trusted farmers and plantations across Kerala
                                    and Karnataka, ensuring every pod meets international export standards.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                                Naturally sun-dried for long-lasting aroma and color
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                                Carefully graded and hand-selected for quality assurance
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                                Available in Green (Small) and Black (Large) Cardamom varieties
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                                Ideal for use in food, confectionery, tea, and medicinal products
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Health Benefits</h3>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                                Improves digestion and detoxifies the body
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                                Enhances flavor in sweet and savory dishes
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                                Natural antioxidant and breath freshener
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Specifications Table */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Product Specifications</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-gray-50 rounded-lg overflow-hidden">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Parameter</th>
                                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Specification</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Variety</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">Green Cardamom / Large Cardamom</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Grades</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">6mm, 7mm, 8mm, and above</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Color</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">Deep Green / Black (depending on variety)</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Moisture</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">8–12% max</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Foreign Matter</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">0.5% max</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Shelf Life</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">12 months (stored in cool, dry place)</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Packaging</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">5kg, 10kg, 25kg PP / Jute Bags / Customized</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Origin</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">Kerala, Tamil Nadu, India</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                    <p className="text-green-800 text-center font-medium">
                                        At WORLDWIDE INDIAN EXPORTERS, our cardamom is a perfect blend of quality, purity, and natural flavor,
                                        ready to enrich global cuisines.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Black Pepper Section */}
                <section ref={pepperRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className={`bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Content Section */}
                            <div className="p-8 order-2 lg:order-1">
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl mr-3">👑</span>
                                    <h2 className="text-3xl font-bold text-gray-900">Black Pepper - The King of Spices</h2>
                                </div>

                                <p className="text-gray-700 mb-6 text-lg">
                                    Called the King of Spices, Indian Black Pepper is one of the world's most traded spices. Known for its pungent flavor,
                                    bold aroma, and high piperine content, it is a staple in kitchens and industries worldwide. Our pepper is carefully
                                    sourced from the finest plantations in Kerala and Karnataka, processed hygienically, and graded for export quality.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                                                High-quality black pepper with strong aroma and flavor
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                                                Naturally sun-dried and machine-cleaned
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                                                Available in Whole, Cracked, and Powdered forms
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                                                Suitable for culinary, pharmaceutical, and spice blending uses
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Health Benefits</h3>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                                Rich in antioxidants and boosts immunity
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                                Aids digestion and nutrient absorption
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                                Helps maintain metabolism and general wellness
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Specifications Table */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Product Specifications</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-gray-50 rounded-lg overflow-hidden">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Parameter</th>
                                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Specification</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Variety</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">Malabar / Tellicherry Black Pepper</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Grades</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">FAQ, ASTA Grade</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Piperine Content</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">5–8%</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Moisture</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">10–12% max</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Foreign Matter</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">0.5% max</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Form</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">Whole / Cracked / Powder</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Shelf Life</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">12 months (in cool, dry storage)</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Packaging</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">5kg, 10kg, 25kg PP / Jute Bags / Customized</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Origin</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">Kerala, Karnataka, India</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                                    <p className="text-amber-800 text-center font-medium">
                                        At WORLDWIDE INDIAN EXPORTERS, we ensure that our Black Pepper reflects the authentic taste and strength
                                        of India's spice heritage — pure, aromatic, and world-class.
                                    </p>
                                </div>
                            </div>

                             {/* Image Section - DEBUG VERSION */}
                            <div className="relative h-80 lg:h-96"> 
                                <div className="flex flex-col h-full space-y-2">
                                    {/* Top image - 70% height */}
                                    <div className="relative h-100 bg-blue-500"> {/* Added bg color to see div */}
                                        <img
                                            src="/spice5.jpg"
                                            alt="Premium Indian Pepper"
                                            className="w-full h-full object-cover rounded-t-lg"
                                        />
                                    </div>

                                     <div className="relative h-100 bg-blue-500"> {/* Added bg color to see div */}
                                        <img
                                            src="/spices4.jpg"
                                            alt="Premium Indian Pepper"
                                            className="w-full h-full object-cover rounded-t-lg"
                                        />
                                    </div>

                                    <div className="relative h-100 bg-blue-500"> {/* Added bg color to see div */}
                                        <img
                                            src="/spices3.jpg"
                                            alt="Premium Indian Pepper3"
                                            className="w-full h-full object-cover rounded-t-lg"
                                        />
                                    </div>

                                    {/* Bottom row - 30% height */}
                                    {/* <div className="flex space-x-2 h-24">
                                        <div className="relative flex-1 h-full bg-green-500">
                                            <img
                                                src="/cardamom-elaichi-kerala.jpg"
                                                alt="Cardamom Closeup"
                                                className="w-full h-full object-cover rounded-bl-lg"
                                            />
                                        </div>
                                        <div className="relative flex-1 h-full bg-yellow-500">
                                            <img
                                                src="/spice5.jpg"
                                                alt="Black Pepper"
                                                className="w-full h-full object-cover rounded-br-lg"
                                            />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <div className={`bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-12 shadow-xl transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to Source Premium Indian Spices?</h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                            Connect with WORLDWIDE INDIAN EXPORTERS for the finest quality Cardamom and Black Pepper,
                            directly sourced from India's best plantations.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="/Contact"
                                className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                Request a Quote
                            </a>
                            <a
                                href="/Contact"
                                className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                            >
                                Contact Sales
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Products;