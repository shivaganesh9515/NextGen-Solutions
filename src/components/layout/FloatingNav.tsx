'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, memo, useCallback, useMemo, useRef } from 'react'
import { Rocket, Menu, X, Home, Briefcase, User, FolderOpen, DollarSign, Mail } from 'lucide-react'
import { NAVIGATION_ITEMS } from '@/lib/constants'
import { scrollToSection, throttle } from '@/lib/utils'
import Button from '@/components/ui/Buttons'
import { useRouter, usePathname } from 'next/navigation'

// Icon mapping for mobile navigation
const SECTION_ICONS = {
  home: Home,
  services: Briefcase,
  about: User,
  portfolio: FolderOpen,
  pricing: DollarSign,
  contact: Mail,
} as const

const FloatingNav = memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolling, setIsScrolling] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const rafRef = useRef<number | null>(null)
  const lastScrollY = useRef(0)
  
  // Memoize section icons to prevent re-creation
  const sectionIcons = useMemo(() => SECTION_ICONS, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isMobileMenuOpen])

  // Enhanced scroll handling with performance optimizations
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      
      rafRef.current = requestAnimationFrame(() => {
        const currentScrollY = window.pageYOffset
        const scrollDelta = Math.abs(currentScrollY - lastScrollY.current)
        
        // Only update if scroll delta is significant (reduces re-renders)
        if (scrollDelta < 5 && !isScrolling) return
        
        lastScrollY.current = currentScrollY
        
        // Set scrolling state with debounced reset
        setIsScrolling(true)
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }
        scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 100)
        
        // On detail pages, always keep navbar shrunk
        if (pathname !== '/') {
          setIsExpanded(false)
          return
        }
        
        // Optimized expanded state calculation
        const shouldBeExpanded = currentScrollY < 80
        setIsExpanded(shouldBeExpanded)
        
        // Optimized active section detection
        const sections = ['home', 'services', 'about', 'portfolio', 'pricing', 'contact']
        let currentActiveSection = 'home'
        const offset = window.innerWidth < 768 ? 60 : 80
        
        // Use more efficient section detection
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i])
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= offset) {
              currentActiveSection = sections[i]
              break
            }
          }
        }
        
        setActiveSection(currentActiveSection)
      })
    }, 16) // ~60fps throttling

    // Set initial state based on current page
    if (pathname !== '/') {
      setIsExpanded(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [pathname, isScrolling])

  const handleScrollToSection = useCallback((sectionId: string) => {
    if (pathname !== '/') {
      router.push(`/#${sectionId}`)
      return
    }
    
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }, [pathname, router])

  // Optimized mobile menu toggle
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])
  
  // Optimized mobile menu close
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])
  
  // Prevent body scroll when mobile menu is open with performance optimization
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      
      return () => {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        window.scrollTo(0, scrollY)
      }
    }
  }, [isMobileMenuOpen])
  
  // Optimized escape key handler
  useEffect(() => {
    if (!isMobileMenuOpen) return
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobileMenu()
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen, closeMobileMenu])

  return (
    <>
      {/* Mobile-First Floating Navbar */}
      <motion.nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 safe-area-padding ${isScrolling ? 'pointer-events-none' : 'pointer-events-auto'} ${
          isExpanded 
            ? 'bg-transparent backdrop-blur-none' 
            : 'bg-black/25 backdrop-blur-xl border border-white/15 mx-2 sm:mx-4 lg:mx-8 rounded-xl sm:rounded-2xl shadow-2xl'
        }`}
        style={{
          top: isExpanded 
            ? (typeof window !== 'undefined' && window.innerWidth < 768 ? '2px' : '2px') 
            : (typeof window !== 'undefined' && window.innerWidth < 768 ? '1px' : '1px'),
        }}
        initial={{ y: -150, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          scale: isExpanded ? 1 : (typeof window !== 'undefined' && window.innerWidth < 768 ? 0.85 : 0.85),
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 30,
          duration: 0.3
        }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isExpanded ? 'py-0.5 sm:py-1' : 'py-0.5'
          }`}>
            
            {/* Logo with mobile optimization */}
            <motion.button 
              onClick={() => handleScrollToSection('home')}
              className="flex items-center group hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50 rounded-lg p-1 touch-target"
              aria-label="Navigate to home section"
              animate={{
                scale: isExpanded ? 1 : 0.95,
              }}
              transition={{ duration: 0.3 }}
            >
              <span className={`font-light bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-space-grotesk transition-all duration-300 ${
                isExpanded ? 'text-base sm:text-lg lg:text-xl font-size-lg' : 'text-base sm:text-lg lg:text-xl font-size-lg'
              }`}>
                NEXTGEN
              </span>
              <span className={`font-light bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-space-grotesk transition-all duration-300 ${
                isExpanded ? 'text-base sm:text-lg lg:text-xl ml-1' : 'text-base sm:text-lg lg:text-xl ml-1'
              }`}>
                SOLUTIONS
              </span>
            </motion.button>

            {/* Desktop Navigation with separate glass morphism buttons */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
              {NAVIGATION_ITEMS.slice(1).map((item) => {
                const sectionId = item.href.replace('#', '')
                const isActive = activeSection === sectionId
                
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleScrollToSection(sectionId)}
                    className={`glass-effect rounded-full font-light transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50 touch-target backdrop-blur-md border ${
                      isExpanded ? 'px-2 xl:px-3 py-1 text-xs' : 'px-1.5 xl:px-2 py-0.5 text-xs'
                    } ${
                      isActive 
                        ? 'text-white bg-violet-600/90 border-violet-500/50 shadow-lg shadow-violet-500/30 scale-105 font-medium' 
                        : 'text-gray-300 bg-white/8 border-white/20 hover:text-white hover:bg-white/15 hover:border-white/30 hover:scale-105'
                    }`}
                    aria-label={`Navigate to ${item.name} section`}
                    animate={{
                      scale: isExpanded ? 1 : 0.96,
                    }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: isExpanded ? 1.05 : 1.01 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                )
              })}
              
              <motion.div
                animate={{
                  scale: isExpanded ? 1 : 0.96,
                }}
                transition={{ duration: 0.3 }}
              >
                <Button 
                  variant="animated" 
                  onClick={() => handleScrollToSection('contact')}
                  className="get-quote-btn magnetic-button transition-all duration-300 focus:ring-2 focus:ring-violet-500/50"
                  style={{
                    fontSize: isExpanded ? '10px' : '9px',
                    padding: isExpanded ? '6px 14px' : '4px 10px'
                  }}
                >
                  <Rocket className={`mr-2 transition-all duration-300 ${
                    isExpanded ? 'w-4 h-4' : 'w-3 h-3'
                  }`} />
                  <span className="font-medium tracking-wide">Get Quote</span>
                </Button>
              </motion.div>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className={`lg:hidden backdrop-blur-md bg-white/10 border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500/50 touch-target ${
                isExpanded ? 'h-10 w-10 sm:h-11 sm:w-11' : 'h-9 w-9 sm:h-10 sm:w-10'
              } ${isMobileMenuOpen ? 'bg-violet-600/80 border-violet-500/50' : ''}`}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              animate={{
                scale: isExpanded ? 1 : 0.95,
                rotate: isMobileMenuOpen ? 180 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={isExpanded ? 18 : 16} className="text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={isExpanded ? 18 : 16} className="text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Menu with Better UX */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Mobile Menu Backdrop */}
            <motion.div 
              className="lg:hidden fixed inset-0 bg-black/90 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
            
            {/* Mobile Menu Panel */}
            <motion.div 
              className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-950/95 backdrop-blur-xl border-l border-white/20 z-50 overflow-y-auto safe-area-padding"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <button
                  onClick={() => {
                    handleScrollToSection('home')
                  }}
                  className="flex items-center hover:scale-105 transition-transform duration-200 touch-target"
                  aria-label="Navigate to home section"
                >
                  <span className="text-xl font-light bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-space-grotesk">
                    NEXTGEN
                  </span>
                  <span className="text-xl font-light bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-space-grotesk ml-2">
                    SOLUTIONS
                  </span>
                </button>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200 touch-target"
                  aria-label="Close navigation menu"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>
              
              {/* Mobile Navigation Items */}
              <div className="flex flex-col py-6">
                {NAVIGATION_ITEMS.map((item, index) => {
                  const sectionId = item.href.replace('#', '')
                  const isActive = activeSection === sectionId
                  const IconComponent = sectionIcons[sectionId as keyof typeof sectionIcons] || Home
                  
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => handleScrollToSection(sectionId)}
                      className={`flex items-center px-6 py-4 text-left transition-all duration-200 touch-target hover:bg-white/10 active:bg-white/15 ${
                        isActive 
                          ? 'text-white bg-violet-600/20 border-r-2 border-violet-500 font-medium' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      aria-label={`Navigate to ${item.name} section`}
                    >
                      <IconComponent size={20} className={`mr-4 ${isActive ? 'text-violet-400' : 'text-gray-400'}`} />
                      <span className="text-lg font-light">{item.name}</span>
                      {isActive && (
                        <motion.div 
                          className="ml-auto w-2 h-2 bg-violet-500 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        />
                      )}
                    </motion.button>
                  )
                })}
              </div>
              
              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-white/10 mt-auto">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <Button 
                    variant="animated" 
                    onClick={() => handleScrollToSection('contact')}
                    className="w-full get-quote-btn-mobile magnetic-button text-center justify-center"
                  >
                    <Rocket className="mr-2 w-4 h-4" />
                    <span className="font-medium">Get Free Quote</span>
                  </Button>
                </motion.div>
                
                {/* Social proof in mobile menu */}
                <motion.div 
                  className="mt-6 pt-4 border-t border-white/10 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <p className="text-sm text-gray-400 font-light">
                    <span className="text-green-400 font-medium">200+</span> Happy Clients
                  </p>
                  <p className="text-sm text-gray-400 font-light mt-1">
                    <span className="text-yellow-400 font-medium">4.9/5</span> Rating
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
})

FloatingNav.displayName = 'FloatingNav'

export default FloatingNav