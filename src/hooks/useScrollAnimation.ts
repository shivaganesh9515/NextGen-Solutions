'use client'

import { useEffect, useState } from 'react'

export const useScrollAnimation = () => {
  const [showFloatingNav, setShowFloatingNav] = useState(false)
  const [hideSpline, setHideSpline] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home')
      if (!heroSection) return

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
      const scrollPosition = window.pageYOffset

      // Show/hide floating nav
      if (scrollPosition > heroBottom - 200) {
        setShowFloatingNav(true)
        setHideSpline(true)
      } else {
        setShowFloatingNav(false)
        setHideSpline(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { showFloatingNav, hideSpline }
}
