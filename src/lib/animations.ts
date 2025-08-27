// @/lib/animations.ts
// Animation presets and utilities for Framer Motion

import { Variants } from 'framer-motion'
// ✅ Removed 'Viewport' import - it doesn't exist in framer-motion

// Define proper animation type for consistency
// Removed unused AnimationConfig type definition

// More specific type for motion properties
type MotionProps = {
  initial?: {
    opacity?: number
    x?: number
    y?: number
    scale?: number
    rotate?: number
    filter?: string
    width?: number | string
    letterSpacing?: string
    backgroundPosition?: string | string[]
  }
  animate?: {
    opacity?: number | number[]
    x?: number | number[]
    y?: number | number[]
    scale?: number | number[]
    rotate?: number | number[]
    filter?: string
    width?: number | string
    letterSpacing?: string
    backgroundPosition?: string | string[]
  }
  whileHover?: {
    scale?: number
    y?: number
    rotate?: number
    rotateX?: number
    boxShadow?: string
  }
  whileTap?: {
    scale?: number
  }
  whileInView?: {
    opacity?: number
    x?: number
    y?: number
    scale?: number
    rotate?: number
  }
  viewport?: {
    once?: boolean
    margin?: string
    amount?: number
  }
  transition?: {
    duration?: number
    ease?: string | [number, number, number, number]  // ✅ Proper mutable tuple type
    delay?: number
    repeat?: number
    type?: 'spring' | 'tween' | 'keyframes'
    stiffness?: number
    damping?: number
    mass?: number
    when?: 'beforeChildren' | 'afterChildren'
    staggerChildren?: number
    delayChildren?: number
  }
  exit?: {
    opacity?: number
    y?: number
    scale?: number
  }
}

// ✅ Define easing curves as mutable tuples to fix readonly error
const smoothEasing: [number, number, number, number] = [0.23, 1, 0.32, 1]
const bouncyEasing: [number, number, number, number] = [0.175, 0.885, 0.32, 1.275]
const sharpEasing: [number, number, number, number] = [0.4, 0, 0.2, 1]
const gentleEasing: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

// Animation presets and utilities
export const animations = {
  // Entrance animations
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: smoothEasing }  // ✅ Using mutable tuple
  },
  
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: smoothEasing }
  },
  
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: smoothEasing }
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.8, rotate: 5 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    transition: { duration: 0.8, ease: bouncyEasing }
  },
  
  blurIn: {
    initial: { opacity: 0, filter: 'blur(15px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    transition: { duration: 1.5, ease: "easeOut" }
  },

  // Continuous animations
  float: {
    animate: {
      y: [-10, 0, -10],
      rotate: [-1, 1, -1],
    },
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  
  pulse: {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  
  // Hover animations
  scaleOnHover: {
    whileHover: { scale: 1.05, y: -5 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  },
  
  rotateOnHover: {
    whileHover: { rotate: 5, scale: 1.02 },
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  },

  // Enhanced hover animations
  buttonHover: {
    whileHover: { 
      scale: 1.05, 
      y: -2,
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)' 
    },
    whileTap: { scale: 0.98 },
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 25,
      mass: 0.8
    }
  },

  cardHover: {
    whileHover: { 
      y: -10,
      scale: 1.02,
      rotateX: 5,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
    },
    transition: { 
      type: 'spring', 
      stiffness: 300, 
      damping: 20 
    }
  }
} as const

// Stagger animations
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      when: 'beforeChildren'
    }
  }
}

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: smoothEasing }
  }
}

// Advanced stagger variants
export const staggerContainerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

export const staggerContainerSlow: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

// Scroll-triggered animations
export const scrollAnimations = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px', amount: 0.3 },
    transition: { duration: 0.8, ease: smoothEasing }
  },
  
  slideInFromLeft: {
    initial: { opacity: 0, x: -80 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-100px', amount: 0.3 },
    transition: { duration: 1, ease: smoothEasing }
  },
  
  slideInFromRight: {
    initial: { opacity: 0, x: 80 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-100px', amount: 0.3 },
    transition: { duration: 1, ease: smoothEasing }
  },

  scaleInOnScroll: {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: '-50px', amount: 0.4 },
    transition: { duration: 0.6, ease: bouncyEasing }
  },

  rotateInOnScroll: {
    initial: { opacity: 0, rotate: -10, scale: 0.9 },
    whileInView: { opacity: 1, rotate: 0, scale: 1 },
    viewport: { once: true, margin: '-50px', amount: 0.3 },
    transition: { duration: 0.8, ease: smoothEasing }
  }
} as const

// Text animations
export const textAnimations = {
  typewriter: {
    initial: { width: 0 },
    animate: { width: '100%' },
    transition: { duration: 2, ease: "easeInOut" }
  },
  
  gradientShift: {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear"
    }
  },

  letterSpacing: {
    initial: { letterSpacing: '0.1em', opacity: 0 },
    animate: { letterSpacing: '0em', opacity: 1 },
    transition: { duration: 1, ease: smoothEasing }
  },

  wordReveal: {
    initial: { y: '100%', opacity: 0 },
    animate: { y: '0%', opacity: 1 },
    transition: { duration: 0.8, ease: smoothEasing }
  }
} as const

// Page transition animations for Next.js 15
export const pageTransitions = {
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.5, ease: smoothEasing }
  },

  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.4, ease: "easeInOut" }
  },

  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
    transition: { duration: 0.3, ease: smoothEasing }
  }
} as const

// ✅ Fixed utility functions with proper return types
export const createDelayedAnimation = (
  baseAnimation: typeof animations.fadeIn, 
  delay: number
) => ({
  ...baseAnimation,
  transition: {
    ...baseAnimation.transition,
    delay
  }
})

export const createStaggeredList = (
  itemCount: number, 
  staggerDelay: number = 0.1
) => {
  return Array.from({ length: itemCount }, (_, index) => ({
    ...animations.fadeIn,
    transition: {
      ...animations.fadeIn.transition,
      delay: index * staggerDelay
    }
  }))
}

export const createScrollAnimation = (
  animation: keyof typeof scrollAnimations,
  options: {
    once?: boolean
    margin?: string
    amount?: number
  } = {}
) => {
  const baseAnimation = scrollAnimations[animation]
  return {
    ...baseAnimation,
    viewport: {
      ...baseAnimation.viewport,
      ...options
    }
  }
}

export const combineAnimations = (
  ...animationConfigs: Partial<MotionProps>[]
): MotionProps => {
  return animationConfigs.reduce((combined, current) => ({
    ...combined,
    ...current,
    transition: {
      ...combined.transition,
      ...current.transition
    }
  }), {} as MotionProps)
}

// Spring presets for consistent motion feel
export const springPresets = {
  default: { type: 'spring' as const, stiffness: 300, damping: 25 },
  gentle: { type: 'spring' as const, stiffness: 200, damping: 20 },
  bouncy: { type: 'spring' as const, stiffness: 400, damping: 15 },
  slow: { type: 'spring' as const, stiffness: 150, damping: 30 }
} as const

// ✅ Fixed easing presets - using the predefined mutable tuples
export const easingPresets = {
  smooth: smoothEasing,
  bouncy: bouncyEasing,
  sharp: sharpEasing,
  gentle: gentleEasing
} as const
