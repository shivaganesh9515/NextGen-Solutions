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

// Smooth scroll utility
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
