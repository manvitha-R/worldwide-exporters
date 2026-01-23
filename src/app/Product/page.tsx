"use client"

import { useState, useEffect, useRef, RefObject } from 'react';
import Link from 'next/link';

const Products = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('cardamom');
    const [, setImageError] = useState({
        cardamom: false,
        pepper: false
    });
    const cardamomRef = useRef<HTMLDivElement>(null);
    const pepperRef = useRef<HTMLDivElement>(null);
    const garlicRef = useRef<HTMLDivElement>(null);
    const cloveRef = useRef<HTMLDivElement>(null);
    const turmericRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToSection = (sectionRef: RefObject<HTMLDivElement | null>) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

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

            {/* Main Content - ADD mt-16 for navbar space */}
            <div className="pt-24 z-10">
                {/* Quick Navigation */}
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mb-6 md:mb-8">
                    <div className={`bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4">
                            <button
                                onClick={() => { setActiveTab('cardamom'); scrollToSection(cardamomRef); }}
                                className={`px-4 py-3 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${activeTab === 'cardamom'
                                    ? 'bg-blue-500 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Cardamom - Queen of Spices
                            </button>
                            <button
                                onClick={() => { setActiveTab('pepper'); scrollToSection(pepperRef); }}
                                className={`px-4 py-3 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${activeTab === 'pepper'
                                    ? 'bg-blue-500 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Black Pepper - King of Spices
                            </button>
                            <button
                                onClick={() => { setActiveTab('garlic'); scrollToSection(garlicRef); }}
                                className={`px-4 py-3 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${activeTab === 'garlic'
                                    ? 'bg-blue-500 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Kodaikanal Garlic - Premium Hill Garlic
                            </button>
                            <button
                                onClick={() => { setActiveTab('clove'); scrollToSection(cloveRef); }}
                                className={`px-4 py-3 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${activeTab === 'clove'
                                    ? 'bg-blue-500 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Clove - Aromatic Whole Spice
                            </button>
                            <button
                                onClick={() => { setActiveTab('turmeric'); scrollToSection(turmericRef); }}
                                className={`px-4 py-3 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${activeTab === 'turmeric'
                                    ? 'bg-blue-500 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Turmeric - Golden Spice
                            </button>
                        </div>
                    </div>
                </div>

                {/* Cardamom Section */}
                <section ref={cardamomRef} className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 md:py-12">
                    <div className={`bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex flex-col lg:grid lg:grid-cols-2">
                            {/* Image Section - Mobile Optimized */}
                            <div className="relative h-64 sm:h-80 lg:h-full lg:min-h-96">
                                <div className="flex lg:flex-col h-full space-y-2 lg:space-y-2 overflow-hidden">
                                    <div className="relative flex-1 lg:flex-none lg:h-1/3">
                                        <img
                                            src="/Cardamom.jpg"
                                            alt="Premium Indian Cardamom"
                                            className="w-full h-full object-cover lg:rounded-t-lg"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="relative flex-1 lg:flex-none lg:h-1/3">
                                        <img
                                            src="/cardamom-seeds-bowl_492824-1063.jpg"
                                            alt="Premium Indian Cardamom seeds"
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="relative flex-1 lg:flex-none lg:h-1/3">
                                        <img
                                            src="/cardamom-elaichi-kerala.jpg"
                                            alt="Kerala Cardamom plantation"
                                            className="w-full h-full object-cover lg:rounded-b-lg"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-4 sm:p-6 lg:p-8">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Cardamom - The Queen of Spices</h2>
                                </div>

                                <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                                    Known as the Queen of Spices, Indian Cardamom is celebrated for its rich aroma, intense flavor, and exceptional freshness.
                                    At WORLDWIDE INDIAN EXPORTERS, we source premium-grade green cardamom from trusted farmers and plantations across Kerala
                                    and Karnataka, ensuring every pod meets international export standards.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Features</h3>
                                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Naturally sun-dried for long-lasting aroma and color
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Carefully graded and hand-selected for quality assurance
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Available in Green (Small) and Black (Large) Cardamom varieties
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Ideal for use in food, confectionery, tea, and medicinal products
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-4 md:mt-0">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Health Benefits</h3>
                                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Improves digestion and detoxifies the body
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Enhances flavor in sweet and savory dishes
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Natural antioxidant and breath freshener
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Specifications Table */}
                                <div className="mb-4 sm:mb-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Product Specifications</h3>
                                    <div className="overflow-x-auto -mx-2 sm:mx-0">
                                        <div className="min-w-full bg-gray-50 rounded-lg overflow-hidden">
                                            <table className="min-w-full text-sm sm:text-base">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                        <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Parameter</th>
                                                        <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Specification</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Variety</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Green Cardamom / Large Cardamom</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Grades</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">6mm, 7mm, 8mm, and above</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Color</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Deep Green / Black</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Moisture</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">8–12% max</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Foreign Matter</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">0.5% max</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Shelf Life</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">12 months</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Packaging</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">5kg, 10kg, 25kg bags</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Origin</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Kerala, Tamil Nadu, India</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4">
                                    <p className="text-green-800 text-center font-medium text-sm sm:text-base">
                                        At WORLDWIDE INDIAN EXPORTERS, our cardamom is a perfect blend of quality, purity, and natural flavor,
                                        ready to enrich global cuisines.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Black Pepper Section */}
                <section ref={pepperRef} className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 md:py-12">
                    <div className={`bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex flex-col lg:grid lg:grid-cols-2">
                            {/* Content Section */}
                            <div className="p-4 sm:p-6 lg:p-8 order-2 lg:order-1">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Black Pepper - The King of Spices</h2>
                                </div>

                                <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                                    Called the King of Spices, Indian Black Pepper is one of the world's most traded spices. Known for its pungent flavor,
                                    bold aroma, and high piperine content, it is a staple in kitchens and industries worldwide. Our pepper is carefully
                                    sourced from the finest plantations in Kerala and Karnataka, processed hygienically, and graded for export quality.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Features</h3>
                                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                High-quality black pepper with strong aroma and flavor
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Naturally sun-dried and machine-cleaned
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Available in Whole, Cracked, and Powdered forms
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Suitable for culinary, pharmaceutical, and spice blending uses
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-4 md:mt-0">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Health Benefits</h3>
                                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Rich in antioxidants and boosts immunity
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Aids digestion and nutrient absorption
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Helps maintain metabolism and general wellness
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Specifications Table */}
                                <div className="mb-4 sm:mb-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Product Specifications</h3>
                                    <div className="overflow-x-auto -mx-2 sm:mx-0">
                                        <div className="min-w-full bg-gray-50 rounded-lg overflow-hidden">
                                            <table className="min-w-full text-sm sm:text-base">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                        <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Parameter</th>
                                                        <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Specification</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Variety</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Malabar / Tellicherry</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Grades</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">FAQ, ASTA Grade</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Piperine Content</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">5–8%</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Moisture</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">10–12% max</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Foreign Matter</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">0.5% max</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Form</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Whole / Cracked / Powder</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Shelf Life</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">12 months</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Packaging</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">5kg, 10kg, 25kg bags</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Origin</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Kerala, Karnataka, India</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 sm:p-4">
                                    <p className="text-amber-800 text-center font-medium text-sm sm:text-base">
                                        At WORLDWIDE INDIAN EXPORTERS, we ensure that our Black Pepper reflects the authentic taste and strength
                                        of India's spice heritage — pure, aromatic, and world-class.
                                    </p>
                                </div>
                            </div>

                            {/* Image Section - Mobile Optimized */}
                            <div className="relative h-64 sm:h-80 lg:h-full lg:min-h-96 order-1 lg:order-2">
                                <div className="flex lg:flex-col h-full space-y-2 lg:space-y-2 overflow-hidden">
                                    <div className="relative flex-1 lg:flex-none lg:h-1/3">
                                        <img
                                            src="/spice5.jpg"
                                            alt="Premium Indian Pepper"
                                            className="w-full h-full object-cover lg:rounded-t-lg"
                                            loading="lazy"
                                        />
                                    </div>
                                    {/* <div className="relative flex-1 lg:flex-none lg:h-1/3">
                                        <img
                                            src="/spices4.jpg"
                                            alt="Indian Black Pepper"
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div> */}
                                    <div className="relative flex-1 lg:flex-none lg:h-1/3">
                                        <img
                                            src="/spices3.jpg"
                                            alt="Black Pepper grains"
                                            className="w-full h-full object-cover lg:rounded-b-lg"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Kodaikanal Garlic Section */}
                <section ref={garlicRef} className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 md:py-12">
                    <div className={`bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transition-all duration-700 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex flex-col lg:grid lg:grid-cols-2">
                            {/* Image Section */}
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <div className="flex lg:flex-col h-full space-y-2 lg:space-y-2 overflow-hidden">
                                    <div className="relative flex-1">
                                        <img
                                            src="/garlic.jpeg"
                                            alt="Premium Kodaikanal Garlic"
                                            className="w-full h-full object-cover lg:rounded-t-lg"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="relative flex-1">
                                        <img
                                            src="/garlic2.jpeg"
                                            alt="Kodaikanal Garlic cloves"
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-4 sm:p-6 lg:p-8">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Kodaikanal Garlic - Premium Hill Garlic</h2>
                                </div>

                                <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                                    Kodaikanal Garlic is a unique variety of Indian garlic grown in the cool, high-altitude regions of the Western Ghats
                                    in Tamil Nadu. Known for its strong aroma, rich flavor, and high medicinal value, this garlic is widely preferred
                                    in culinary and traditional wellness applications.
                                </p>
                                <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                                    At WORLDWIDE INDIAN EXPORTERS, we source authentic Kodaikanal hill garlic directly from local farmers, ensuring
                                    freshness, purity, and export-grade quality in every shipment.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Key Features</h3>
                                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Grown naturally in high-altitude, chemical-free environments
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Strong pungency and intense aroma
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Larger cloves with high oil content
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Carefully cleaned, sorted, and packed for export
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Suitable for culinary, pharmaceutical, and ayurvedic uses
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-4 md:mt-0">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Health Benefits</h3>
                                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Known for boosting immunity and digestion
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Helps regulate blood pressure and cholesterol
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Rich in antioxidants and antibacterial properties
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Commonly used in traditional medicine and home remedies
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Specifications Table */}
                                <div className="mb-4 sm:mb-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Product Specifications</h3>
                                    <div className="overflow-x-auto -mx-2 sm:mx-0">
                                        <div className="min-w-full bg-gray-50 rounded-lg overflow-hidden">
                                            <table className="min-w-full text-sm sm:text-base">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                        <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Parameter</th>
                                                        <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Specification</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Product Name</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Kodaikanal Garlic</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Type</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Fresh / Naturally Dried</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Bulb Size</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Medium to Large</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Clove Count</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">6–10 cloves per bulb</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Color</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Off-white to light purple</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Moisture</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">65% max (fresh)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Foreign Matter</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">0.5% max</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Shelf Life</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">4–6 months (proper storage)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Packaging</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">5kg, 10kg, 20kg mesh bags / Customized</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Origin</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Kodaikanal, Tamil Nadu, India</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="mb-4 sm:mb-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Applications</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm sm:text-base">
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 flex-shrink-0"></span>
                                            Cooking and seasoning
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 flex-shrink-0"></span>
                                            Pickles and spice blends
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 flex-shrink-0"></span>
                                            Ayurvedic and herbal products
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 flex-shrink-0"></span>
                                            Food processing industries
                                        </li>
                                    </ul>
                                </div> */}

                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 sm:p-4">
                                    <p className="text-purple-800 text-center font-medium text-sm sm:text-base">
                                        At WORLDWIDE INDIAN EXPORTERS, we ensure that our Kodaikanal Garlic retains its natural strength, aroma, and
                                        medicinal properties, making it a preferred choice for international buyers seeking authentic Indian produce.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Clove Section */}
                <section ref={cloveRef} className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 md:py-12">
                    <div className={`bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transition-all duration-700 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex flex-col lg:grid lg:grid-cols-2">
                            {/* Image Section */}
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <div className="flex lg:flex-col h-full space-y-2 lg:space-y-2 overflow-hidden">
                                    <div className="relative flex-1">
                                        <img
                                            src="/clove.jpeg"
                                            alt="Premium Indian Clove Whole Spice"
                                            className="w-full h-full object-cover lg:rounded-t-lg"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="relative flex-1">
                                        <img
                                            src="/clove2.jpeg"
                                            alt="High Quality Clove Aromatic Spice"
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-4 sm:p-6 lg:p-8">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Clove - Aromatic Whole Spice</h2>
                                </div>

                                <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                                    Clove is one of India's most valuable and aromatic spices, widely used for its strong flavor, warm aroma, and medicinal properties.
                                    Grown in the tropical regions of India, Indian cloves are known for their high oil content, bold fragrance, and superior quality.
                                </p>
                                <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                                    At WEINIDIAN EXPORTERS, we source premium-grade cloves directly from trusted growers and process them hygienically to meet
                                    international export standards. Our cloves retain their natural aroma, rich color, and essential oil content, making them ideal
                                    for both culinary and industrial use.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Key Features</h3>
                                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-amber-700 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Handpicked and sun-dried for maximum aroma
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-amber-700 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                High essential oil (eugenol) content
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-amber-700 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Uniform size and deep brown color
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-amber-700 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Free from artificial additives and preservatives
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-amber-700 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Suitable for food, pharmaceutical, and cosmetic industries
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-4 md:mt-0">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Health Benefits</h3>
                                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-red-700 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Powerful antioxidant and antibacterial properties
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-red-700 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Supports oral health and digestion
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-red-700 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Helps relieve cough, cold, and respiratory issues
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-red-700 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Commonly used in traditional medicine and herbal formulations
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Specifications Table */}
                                <div className="mb-4 sm:mb-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Product Specifications</h3>
                                    <div className="overflow-x-auto -mx-2 sm:mx-0">
                                        <div className="min-w-full bg-gray-50 rounded-lg overflow-hidden">
                                            <table className="min-w-full text-sm sm:text-base">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                        <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Parameter</th>
                                                        <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Specification</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Product Name</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Clove</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Botanical Name</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Syzygium aromaticum</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Form</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Whole Cloves</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Color</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Dark Brown</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Aroma</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Strong & Pungent</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Oil Content</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">15–20%</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Moisture</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">10–12% max</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Foreign Matter</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">0.5% max</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Shelf Life</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">12 months</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Packaging</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">5kg, 10kg, 25kg PP / Jute Bags / Customized</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Origin</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">India</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* Applications Section */}
                                <div className="mb-4 sm:mb-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Applications</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm sm:text-base">
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-amber-700 rounded-full mr-2 flex-shrink-0"></span>
                                            Culinary seasoning and spice blends
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-amber-700 rounded-full mr-2 flex-shrink-0"></span>
                                            Bakery and confectionery products
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-amber-700 rounded-full mr-2 flex-shrink-0"></span>
                                            Pharmaceutical and ayurvedic preparations
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-amber-700 rounded-full mr-2 flex-shrink-0"></span>
                                            Toothpaste, mouth fresheners, and cosmetics
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 sm:p-4">
                                    <p className="text-amber-800 text-center font-medium text-sm sm:text-base">
                                        At WEINIDIAN EXPORTERS, we deliver export-quality Indian cloves that reflect purity, potency, and authenticity—bringing India's rich spice heritage to global markets.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Turmeric Section */}
                <section ref={turmericRef} className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 md:py-12">
                    <div className={`bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transition-all duration-700 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex flex-col lg:grid lg:grid-cols-2">
                            {/* Image Section */}
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <div className="flex lg:flex-col h-full space-y-2 lg:space-y-2 overflow-hidden">
                                    <div className="relative flex-1">
                                        <img
                                            src="/round-turmeric.jpg"
                                            alt="Round Turmeric Bulb Variety"
                                            className="w-full h-full object-cover lg:rounded-t-lg"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="relative flex-1">
                                        <img
                                            src="/finger-turmeric.jpg"
                                            alt="Finger Turmeric Variety"
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="relative flex-1">
                                        <img
                                            src="/turmeric2.jpg"
                                            alt="Turmeric"
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-4 sm:p-6 lg:p-8">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Turmeric - Round & Finger Varieties</h2>
                                </div>

                                <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                                    Indian Turmeric is world-renowned for its vibrant color, strong aroma, and high curcumin content.
                                    At WEINIDIAN EXPORTERS, we offer both Round Turmeric (Bulb) and Finger Turmeric, sourced directly from
                                    trusted farms across India and processed under strict quality standards to meet international export requirements.
                                </p>
                                <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                                    Both varieties are naturally cultivated, carefully boiled, sun-dried, and polished to preserve their
                                    natural color, flavor, and medicinal value.
                                </p>

                                {/* Turmeric Varieties Comparison */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                                        <div className="flex items-center mb-3">
                                            <span className="text-2xl mr-2">🌕</span>
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">Round Turmeric (Bulb Turmeric)</h3>
                                        </div>
                                        <p className="text-gray-700 mb-3 text-sm sm:text-base">
                                            Round turmeric is characterized by its thick, round rhizomes and is widely used in spice grinding and industrial processing.
                                        </p>
                                        <h4 className="text-md font-semibold text-gray-800 mb-2">Key Features:</h4>
                                        <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                High yield and uniform size
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Bright yellow-orange color
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Strong earthy aroma
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Preferred for turmeric powder production
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-orange-50 border border-orange-100 rounded-lg p-4">
                                        <div className="flex items-center mb-3">
                                            <span className="text-2xl mr-2">✋</span>
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">Finger Turmeric</h3>
                                        </div>
                                        <p className="text-gray-700 mb-3 text-sm sm:text-base">
                                            Finger turmeric consists of long, slender rhizomes and is known for its higher curcumin content and deep color.
                                        </p>
                                        <h4 className="text-md font-semibold text-gray-800 mb-2">Key Features:</h4>
                                        <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Rich in curcumin and essential oils
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Intense natural color
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Strong medicinal value
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                Ideal for culinary and pharmaceutical use
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Health Benefits */}
                                <div className="mb-6 sm:mb-8">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Health Benefits (Both Varieties)</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 text-sm sm:text-base">
                                        <div className="flex items-start">
                                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            Powerful anti-inflammatory and antioxidant properties
                                        </div>
                                        <div className="flex items-start">
                                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            Supports immunity and digestion
                                        </div>
                                        <div className="flex items-start">
                                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            Widely used in Ayurvedic and herbal formulations
                                        </div>
                                        <div className="flex items-start">
                                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            Natural coloring agent in food products
                                        </div>
                                    </div>
                                </div>

                                {/* Specifications Table */}
                                <div className="mb-4 sm:mb-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Product Specifications</h3>
                                    <div className="overflow-x-auto -mx-2 sm:mx-0">
                                        <div className="min-w-full bg-gray-50 rounded-lg overflow-hidden">
                                            <table className="min-w-full text-sm sm:text-base">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                        <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Parameter</th>
                                                        <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Specification</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Product Name</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Turmeric (Round & Finger)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Botanical Name</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Curcuma longa</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Form</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Whole Dried / Polished</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Curcumin Content</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">2–5% (varies by grade)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Color</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">Bright Yellow to Orange</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Moisture</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">8–10% max</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Foreign Matter</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">0.5% max</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Shelf Life</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">12–18 months</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Packaging</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">5kg, 10kg, 25kg PP / Jute Bags / Customized</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 font-medium">Origin</td>
                                                        <td className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-600">India</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* Applications Section */}
                                <div className="mb-4 sm:mb-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Applications</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm sm:text-base">
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 flex-shrink-0"></span>
                                            Spice powders and blends
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 flex-shrink-0"></span>
                                            Food processing and coloring
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 flex-shrink-0"></span>
                                            Pharmaceutical and nutraceutical products
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 flex-shrink-0"></span>
                                            Cosmetics and personal care items
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4">
                                    <p className="text-yellow-800 text-center font-medium text-sm sm:text-base">
                                        At WEINIDIAN EXPORTERS, we ensure that both Round and Finger Turmeric meet global quality expectations—delivering purity, potency, and the authentic essence of Indian turmeric to international markets.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
                    <div className={`bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-6 sm:p-8 md:p-12 shadow-xl transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Ready to Source Premium Indian Spices & Garlic?</h2>
                        <p className="text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg">
                            Connect with WORLDWIDE INDIAN EXPORTERS for the finest quality Cardamom, Black Pepper, and Kodaikanal Garlic,
                            directly sourced from India's best plantations and farms.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                            <Link
                                href="/Contact"
                                className="inline-block bg-white text-blue-600 font-bold py-3 px-6 sm:px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
                            >
                                Request a Quote
                            </Link>
                            <Link
                                href="/Contact"
                                className="inline-block border-2 border-white text-white font-bold py-3 px-6 sm:px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm sm:text-base"
                            >
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Products;