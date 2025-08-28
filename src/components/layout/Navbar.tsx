'use client'

import { useState, useCallback, memo } from 'react'
import { Menu, X, Rocket } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'
import { NAVIGATION_ITEMS } from '@/lib/constants'
import Button from '@/components/ui/Buttons'

const Navbar = memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = useCallback((href: string) => {
    scrollToSection(href)
    setIsMobileMenuOpen(false)
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleNavClick(href)
    }
  }, [handleNavClick])
  
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])
  
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <header className="relative z-30">
      <nav 
        className="flex items-center justify-between px-6 lg:px-12 py-6 lg:py-8"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('#home')}
          onKeyDown={(e) => handleKeyDown(e, '#home')}
          className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50 rounded-lg"
          aria-label="Go to home page"
          type="button"
        >
          <div className="relative">
            <span className="text-2xl lg:text-3xl tracking-tight font-light bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent font-space-grotesk">
              NEXTGEN
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
          </div>
          <span className="text-2xl lg:text-3xl font-light bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-space-grotesk">
            SOLUTIONS
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul 
            className="flex backdrop-blur-sm rounded-full p-2 bg-white/5 border border-white/10"
            role="menubar"
            aria-label="Main menu"
          >
            {NAVIGATION_ITEMS.slice(1).map((item) => (
              <li key={item.name} role="none">
                <button
                  onClick={() => handleNavClick(item.href)}
                  onKeyDown={(e) => handleKeyDown(e, item.href)}
                  className="px-6 py-3 rounded-full text-sm font-light text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                  role="menuitem"
                  aria-label={`Navigate to ${item.name}`}
                  type="button"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          
          <Button 
            variant="animated" 
            onClick={() => handleNavClick('#contact')}
            className="inline-flex items-center justify-center"
            aria-label="Get a quote - Navigate to contact section"
          >
            <Rocket className="w-4 h-4 mr-2" aria-hidden="true" />
            <span className="font-medium tracking-wide">Get Quote</span>
          </Button>
        </div>

        {/* Mobile Menu Button - ARIA FIXED */}
        {/* Mobile Menu Button - BULLETPROOF VERSION */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden backdrop-blur-sm bg-white/5 border border-white/10 h-12 w-12 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
              aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-controls="mobile-menu"
              type="button"
              data-expanded={isMobileMenuOpen}  // ✅ Use data attribute instead
            >
              <span className="sr-only">
                {isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              </span>
              {isMobileMenuOpen ? (
                <X size={20} aria-hidden="true" />
              ) : (
                <Menu size={20} aria-hidden="true" />
              )}
            </button>

      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 backdrop-blur-2xl bg-gray-900/95 z-40"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Close button */}
          <div className="absolute top-6 right-6">
            <button 
              onClick={closeMobileMenu}
              className="backdrop-blur-sm bg-white/5 border border-white/10 h-12 w-12 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
              aria-label="Close mobile menu"
              type="button"
            >
              <span className="sr-only">Close mobile menu</span>
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          
          {/* Mobile menu content */}
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-light">
            <nav role="navigation" aria-label="Mobile navigation">
              <ul className="flex flex-col items-center space-y-8">
                {NAVIGATION_ITEMS.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      onKeyDown={(e) => handleKeyDown(e, item.href)}
                      className="hover:text-violet-400 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50 px-4 py-2 rounded"
                      aria-label={`Navigate to ${item.name}`}
                      type="button"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            <Button 
              variant="animated" 
              onClick={() => handleNavClick('#contact')}
              className="mt-8 inline-flex items-center justify-center"
              aria-label="Get a quote - Navigate to contact section"
            >
              <Rocket className="w-4 h-4 mr-2" aria-hidden="true" />
              <span className="font-medium tracking-wide">Get Quote</span>
            </Button>
          </div>
        </div>
      )}

      {/* Add SR-only styles */}
      <style jsx>{`
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }
      `}</style>
    </header>
  )
})

Navbar.displayName = 'Navbar'

export default Navbar
