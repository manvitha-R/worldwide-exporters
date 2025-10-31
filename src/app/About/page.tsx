"use client"

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/spices5.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-opacity-40 backdrop-blur-sm"></div>
      </div>

      {/* Main Content */}
      <div className="pt-24 z-10">
        <Head>
          <title>About Us - Worldwide Indian Exporters</title>
          <meta name="description" content="Learn about Worldwide Indian Exporters, a dynamic team passionately connecting India's finest products to the world." />
        </Head>

        {/* Hero Section */}

        <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">The New Standard in Global Indian Exports</h1>
          <p className="text-gray-200">
            At WORLDWIDE INDIAN EXPORTERS, we are more than just an export company; we are a bridge. We are a dynamic team of passionate professionals dedicated to curating and delivering the unparalleled richness of Indian products to a global audience.
          </p>
        </section>

        {/* Intro Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-white mb-4">
                At <b>WORLDWIDE INDIAN EXPORTERS, </b>
                we are more than just an export company; we are a bridge. We are a dynamic team of passionate professionals dedicated to curating and delivering the unparalleled richness of Indian products to a global audience.
              </p>
              <p className="text-white">
                Founded in 2025, we embody a new generation of export expertise—agile, digitally-native, and deeply committed to authenticity and quality.
              </p>
            </div>
            <div className={`transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Replace with your actual image */}
              <div className="relative h-80 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
                  <Image
                    src={"/BG3.jpg"}
                    alt="About us Image"
                    fill
                    className='obect-cover' />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-8 shadow-xl transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700">
                It&rsquo;s simple: to be the most reliable partner you&rsquo;ve ever worked with. We&rsquo;re a team who believe that exporting shouldn&rsquo;t be complicated. We&rsquo;re here to open the doors to India&rsquo;s best for you, ensuring you get exactly what you need, on time and as promised.
              </p>
            </div>

            <div className={`bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-8 shadow-xl transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700">
                Our ambition is to redefine the experience of sourcing from India. We&rsquo;re building a company known for its integrity and personal touch—where you know the people you&rsquo;re working with. We aim to connect the heart of Indian craftsmanship to the global market, one successful partnership at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className={`bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-6 text-center shadow-xl transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality & Authenticity</h3>
              <p className="text-gray-700 text-sm">
                We handpick our suppliers and meticulously vet every product, ensuring that what reaches you is genuine, high-quality, and exactly as promised.
              </p>
            </div>

            {/* Value 2 */}
            <div className={`bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-6 text-center shadow-xl transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity & Transparency</h3>
              <p className="text-gray-700 text-sm">
                We believe in honest communication. No hidden costs, no surprises—just clear, straightforward partnerships.
              </p>
            </div>

            {/* Value 3 */}
            <div className={`bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-6 text-center shadow-xl transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reliability & Efficiency</h3>
              <p className="text-gray-700 text-sm">
                From order to delivery, our streamlined processes and expert knowledge ensure your shipments are handled with precision and care.
              </p>
            </div>

            {/* Value 4 */}
            <div className={`bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-6 text-center shadow-xl transition-all duration-700 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation & Agility</h3>
              <p className="text-gray-700 text-sm">
                As a new and compact team, we are agile enough to adapt to your unique needs and innovative in finding solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Partner With Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-6 shadow-xl mb-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Expert Curation</h3>
                </div>
                <p className="text-gray-700">
                  We don&rsquo;t just move boxes; we understand products. Our team has deep knowledge across various sectors, from textiles and handicrafts to agricultural produce and industrial components.
                </p>
              </div>

              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">The Power of Six</h3>
                </div>
                <p className="text-gray-700">
                  Our small, dedicated team is our strength. It means you get direct access to decision-makers, personalized service, and a team that is truly invested in your success.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-6 shadow-xl mb-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">End-to-End Service</h3>
                </div>
                <p className="text-gray-700">
                  We manage the entire export process for you—sourcing, quality checks, documentation, logistics, and customs clearance—making your import experience effortless.
                </p>
              </div>

              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-6 shadow-xl mb-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Digital-First Approach</h3>
                </div>
                <p className="text-gray-700">
                  Leveraging modern technology, we ensure efficient order tracking, seamless communication, and data-driven insights for your supply chain.

                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className={`bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-12 shadow-xl transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold text-white mb-6">Experience a New, Better Way of Sourcing from India</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hands with WORLDWIDE INDIAN EXPORTERS and discover the difference that passion, expertise, and dedication can make to your business.
            </p>
            <a
              href="/Contact"
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Our Team Today
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;