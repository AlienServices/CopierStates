'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            CopiersUtah
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links and Phone - using justify-between */}
          <div className="hidden md:flex items-center">
            {/* Nav Links with specific spacing */}
            <div className="flex space-x-8 mr-8"> {/* Added mr-8 for space before phone */}
              <Link href="/" className="navbar-link">
                Home
              </Link>
              <Link href="/about" className="navbar-link">
                About Us
              </Link>
              <Link href="/contact" className="navbar-link">
                Contact
              </Link>
            </div>

            {/* Phone Number */}
            <a href="tel:8012610510" className="text-gray-600 hover:text-blue-600">
            (801) 261-0510
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/company-info" 
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Company Information
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 