'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/architettura', label: 'Architettura' },
    { href: '/collezione', label: 'Collezione' },
    { href: '/suite', label: 'Le Suite' },
    { href: '/territorio', label: 'Territorio' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-rustic-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif text-rustic-700 font-bold">
              Villa Joele
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-rustic-700 border-b-2 border-rustic-600'
                    : 'text-baroque-700 hover:text-rustic-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/393923491109"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rustic-600 hover:bg-rustic-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Contatti
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-baroque-700 hover:text-rustic-600"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? 'text-rustic-700 bg-rustic-100'
                    : 'text-baroque-700 hover:text-rustic-600 hover:bg-rustic-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/393923491109"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block bg-rustic-600 hover:bg-rustic-700 text-white px-3 py-2 rounded-lg text-base font-semibold text-center transition-colors"
            >
              Contatti
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

