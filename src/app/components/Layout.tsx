'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* FIXED: Improved navbar with better responsive handling */}
      <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="relative h-8 w-8 md:h-10 md:w-10 mr-2 md:mr-3 flex-shrink-0">
                  <Image
                    src="/logo.jpg"
                    alt="WORLDWIDE INDIAN EXPORTERS"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-blue-800 whitespace-nowrap">
                  WORLDWIDE INDIAN EXPORTERS
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - Better responsive spacing */}
            <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-6">
              <div className="flex space-x-3 lg:space-x-8">
                <Link 
                  href="/" 
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                    pathname === '/' 
                      ? 'border-blue-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  href="/About" 
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                    pathname === '/About' 
                      ? 'border-blue-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  About Us
                </Link>
                <Link 
                  href="/Product" 
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                    pathname === '/Product' 
                      ? 'border-blue-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Products
                </Link>
                <Link 
                  href="/Contact" 
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                    pathname === '/Contact' 
                      ? 'border-blue-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Contact Us
                </Link>
              </div>
              
              {/* Desktop Contact Info - Shows only on larger screens */}
              <div className="hidden xl:flex xl:items-center xl:space-x-3 ml-4 border-l border-gray-300 pl-4">
                <span className="text-gray-600 text-xs whitespace-nowrap">+ (91) - 70924 15161</span>
                <span className="text-gray-600 text-xs whitespace-nowrap">worldwideindianexporters@gmail.com</span>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  pathname === '/' 
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/About" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  pathname === '/About' 
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                About Us
              </Link>
              <Link 
                href="/Product" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  pathname === '/Product' 
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Products
              </Link>
              <Link 
                href="/Contact" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  pathname === '/Contact' 
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Contact Us
              </Link>
            </div>
            
            {/* Mobile Contact Info */}
            <div className="px-4 py-4 border-t border-gray-200 bg-gray-50">
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <svg className="h-4 w-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm">+ (91) - 70924 15161</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="h-4 w-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm break-all">worldwideindianexporters@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Main content with proper spacing */}
      <main className="pt-16 min-h-screen">
        {children}
      </main>
    </>
  );
};

export default Layout;