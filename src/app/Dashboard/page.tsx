// pages/index.js
"use client"
import Head from 'next/head';
// import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images
  const backgroundImages = [
    "spices6.jpg",
    "BG1.jpg",
    "Cardamom.jpg",
    "spice5.jpg",
    "BG3.jpg",
    "BG4.jpg"
  ];

  // Automatically cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>WORLDWIDE INDIAN EXPORTERS - Excellence in Export Import Business</title>
        <meta name="description" content="Leading export import company committed to quality and excellence" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
      {/* Hero Section */}
      <div className="relative bg-blue-800 h-screen">
        {/* Background Images Container with Slide Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out ${index === currentImageIndex ? 'translate-x-0' :
                  index < currentImageIndex ? '-translate-x-full' : 'translate-x-full'
                }`}
              style={{
                backgroundImage: `url('${image}')`,
              }}
              aria-hidden="true"
            ></div>
          ))}
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-blue-900 mix-blend-multiply opacity-70" aria-hidden="true"></div>
        </div>

        
        <div className="relative max-w-7xl mx-auto h-full flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              WE ARE COMMITTED TO EXCEL IN EXPORT BUSINESS
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Delivering quality products and exceptional service to clients worldwide with reliability and professionalism.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <a
                href="/Product"
                className="inline-block px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300"
              >
                Our Products
              </a>
              <a
                href="/Contact"
                className="inline-block px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 bg-opacity-80 hover:bg-opacity-90 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Show background image ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      {/* </div> */}

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Commitment to Excellence
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We stand out in the export import industry through our unwavering dedication to quality and customer satisfaction.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">Quality Assurance</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    We maintain the highest standards of quality control throughout our supply chain to ensure customer satisfaction.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">Global Network</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    With partners and clients across the globe, we facilitate seamless international trade operations.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">Efficiency</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Our streamlined processes ensure timely delivery and cost-effective solutions for all your import-export needs.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">Logistics Expertise</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    We handle all aspects of shipping, customs clearance, and documentation with precision and expertise.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to explore opportunities?</span>
            <span className="block text-blue-600">Start your export-import journey with us today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              {/* <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Product Enquiry
              </a> */}
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/Contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="xl:col-span-1">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white">WORLDWIDE INDIAN EXPORTERS</span>
              </div>
              <p className="mt-4 text-base text-gray-300">
                Committed to excellence in export import business with quality products and reliable service.
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-base text-gray-300">+ (91) - 70924 15161</p>
                <p className="text-base text-gray-300">worldwideindianexporters@gmail.com</p>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="/About" className="text-base text-gray-300 hover:text-white">About Us</a></li>
                    <li><a href="/Product" className="text-base text-gray-300 hover:text-white">Products</a></li>
                    {/* <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li> */}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="/Contact" className="text-base text-gray-300 hover:text-white">Contact Us</a></li>
                    {/* <li><a href="#" className="text-base text-gray-300 hover:text-white">Product Enquiry</a></li> */}
                    <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 text-center">
              WORLDWIDE INDIAN EXPORTERS Pvt. Ltd. &copy;{new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div >
  );
}