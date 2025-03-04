'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Set isClient to true once component mounts on client
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const navItems = [
    { name: 'Projects', href: '/projects' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Impact', href: '/impact' },
    { name: 'Governance', href: '/governance' },
    { name: 'Learning', href: '/learning' },
    { name: 'Events', href: '/events' },
  ];
  
  // Helper to determine active link styling
  const getNavItemClass = (path: string) => {
    const baseClass = "inline-flex items-center px-1 pt-1 pb-2 text-sm font-medium";
    const activeClass = "text-primary-600 border-b-2 border-primary-500";
    const inactiveClass = "text-neutral-600 hover:text-primary-500 hover:border-b-2 hover:border-primary-300";
    
    return `${baseClass} ${pathname === path ? activeClass : inactiveClass}`;
  };

  return (
    <header className="bg-white border-b border-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:space-x-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">S</span>
              </div>
              <span className="ml-3 text-xl font-bold text-neutral-800">Sustained</span>
              <span className="ml-2 text-sm text-neutral-500">Aachen</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={getNavItemClass(item.href)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Dashboard button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/dashboard" 
              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-500 hover:bg-primary-600"
            >
              My Dashboard
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isClient && isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-4 px-4 space-y-1 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 px-3 rounded-md ${
                  pathname === item.href 
                    ? 'bg-primary-50 text-primary-600 font-medium' 
                    : 'text-neutral-600 hover:bg-neutral-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/dashboard"
              className="block py-2 px-3 mt-4 text-center rounded-md bg-primary-500 text-white font-medium hover:bg-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              My Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}