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
      <nav className="bg-white shadow-md fixed w-full z-10 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                {/* Logo with Next.js Image component */}
                <div className="relative h-10 w-10 mr-3">
                  <Image
                    src="/logo.jpg" // Path to your logo in public folder
                    alt="WORLDWIDE INDIAN EXPORTERS"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-bold text-blue-800">WORLDWIDE INDIAN EXPORTERS</span>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <Link 
                  href="/" 
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname === '/' 
                      ? 'border-blue-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Home
                </Link>
                <a 
                  href="/About" 
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname === '/About' 
                      ? 'border-blue-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  About Us
                </a>
                <a 
                  href="/Product" 
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname === '/Product' 
                      ? 'border-blue-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Products
                </a>
                <a 
                  href="/Contact" 
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname === '/Contact' 
                      ? 'border-blue-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center">
              <span className="text-gray-500 text-sm">+ (91) - 70924 15161</span>
              <span className="ml-3 text-gray-500 text-sm">worldwideindianexporters@gmail.com</span>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  pathname === '/' 
                    ? 'bg-blue-50 border-blue-500 text-blue-700' 
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Home
              </Link>
              <a 
                href="/About" 
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  pathname === '/About' 
                    ? 'bg-blue-50 border-blue-500 text-blue-700' 
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                About Us
              </a>
              <a 
                href="/Product" 
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  pathname === '/Product' 
                    ? 'bg-blue-50 border-blue-500 text-blue-700' 
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Products
              </a>
              <a 
                href="/Contact" 
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  pathname === '/Contact' 
                    ? 'bg-blue-50 border-blue-500 text-blue-700' 
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Contact Us
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-4 space-y-1">
                <p className="text-gray-500 text-sm">+ (91) - 70924 15161</p>
                <p className="text-gray-500 text-sm">worldwideindianexporters@gmail.com</p>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      <main>{children}</main>
    </>
  );
};

export default Layout;