'use client';

import { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  brand: 'ministry' | 'multimedia';
  navItems?: Array<{ label: string; href: string }>;
}

export default function Header({ brand, navItems = [] }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const brandName = brand === 'ministry' ? 'Gideon Peprah Ministries' : 'Valour Multimedia';

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container-max">
        <nav className="flex justify-between items-center h-16 px-4 sm:px-6 md:px-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary hover:opacity-80 transition-opacity">
            <span>{brand === 'ministry' ? '⛪' : '🎬'}</span>
            <span className="hidden sm:inline">{brandName}</span>
            <span className="sm:hidden text-sm">{brand === 'ministry' ? 'Ministry' : 'Valour'}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col gap-1 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
