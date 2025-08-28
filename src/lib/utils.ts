import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Animation utilities
export const animations = {
  fadeInUp: "opacity-0 translate-y-8 transition-all duration-800 ease-out",
  fadeInUpActive: "opacity-100 translate-y-0",
  slideInLeft: "opacity-0 -translate-x-8 transition-all duration-800 ease-out",
  slideInLeftActive: "opacity-100 translate-x-0",
  slideInRight: "opacity-0 translate-x-8 transition-all duration-800 ease-out", 
  slideInRightActive: "opacity-100 translate-x-0",
}

// Enhanced smooth scroll utility with performance optimizations
export function scrollToSection(sectionId: string, customOffset?: number) {
  // Remove # if present
  const cleanId = sectionId.replace('#', '')
  const element = document.getElementById(cleanId)
  
  if (!element) {
    console.warn(`Section with id '${cleanId}' not found`)
    return
  }

  // Get responsive offset
  const getOffset = () => {
    if (customOffset !== undefined) return customOffset
    
    // Mobile-first responsive offsets
    if (window.innerWidth < 768) return 60 // Mobile
    if (window.innerWidth < 1024) return 80 // Tablet
    return 100 // Desktop
  }

  // Use RAF for smooth performance
  requestAnimationFrame(() => {
    const offset = getOffset()
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = Math.max(0, elementPosition - offset)
    
    // Use native smooth scroll with fallback
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    } else {
      // Fallback for older browsers
      window.scrollTo(0, offsetPosition)
    }
  })
}

// Optimized throttle function for scroll events
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null
  let lastExecTime = 0
  
  return (...args: Parameters<T>) => {
    const currentTime = Date.now()
    
    if (currentTime - lastExecTime > delay) {
      func(...args)
      lastExecTime = currentTime
    } else {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func(...args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }
}

// Performance-optimized debounce for expensive operations
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}
