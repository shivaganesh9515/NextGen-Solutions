'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { STATS } from '@/lib/constants'
import { Rocket, Play, Send, Users, Star, CheckCircle, Zap, BarChart3 } from 'lucide-react'

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })
  const [hideSpline, setHideSpline] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home')
      if (!heroSection) return

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
      const scrollPosition = window.pageYOffset

      // Hide spline when scrolling out of hero section
      setHideSpline(scrollPosition > heroBottom - 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex flex-col pt-16 lg:pt-20">
      {/* SPLINE BACKGROUND - BALANCED WITH FORM */}
      <div 
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
          hideSpline ? 'opacity-0 pointer-events-none' : 'opacity-90'
        }`}
        style={{ zIndex: 10 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/40 z-10"></div>
        <iframe 
          src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW/" 
          frameBorder="0" 
          width="100%" 
          height="100%" 
          className="w-full h-full"
          style={{ filter: 'brightness(0.7) contrast(0.9) saturate(0.85)' }}
          title="3D Background Animation"
        />
      </div>

      {/* HERO CONTENT */}
      <div className="relative flex-1 flex items-center justify-center px-6 lg:px-12">
        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN - HERO TEXT */}
            <div className="text-center lg:text-left">
              {/* HERO BADGE */}
              <motion.div 
                className="inline-flex items-center glass-effect px-6 py-3 rounded-full mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="pulse-glow w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-sm font-light text-gray-300">Welcome to the Future of Digital Marketing</span>
              </motion.div>
              
              {/* MAIN HEADLINE */}
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-8 font-space-grotesk"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="hero-text block mb-2">NAVIGATING THE</span>
                <span className="text-gradient block mb-2">DIGITAL</span>
                <span className="hero-text block">LANDSCAPE</span>
              </motion.h1>
              
              {/* DESCRIPTION */}
              <motion.p 
                className="text-lg sm:text-xl mb-12 max-w-xl mx-auto lg:mx-0 font-light text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                Your digital marketing agency helping businesses grow and succeed online through SEO, PPC, social media marketing, and content creation.
              </motion.p>
              
              {/* FEATURE PILLS */}
              <motion.div 
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                {[
                  { icon: CheckCircle, text: 'Proven Results', color: 'bg-green-500/20 text-green-400' },
                  { icon: Zap, text: 'Fast Growth', color: 'bg-yellow-500/20 text-yellow-400' },
                  { icon: BarChart3, text: 'Data-Driven', color: 'bg-blue-500/20 text-blue-400' }
                ].map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                  <motion.div 
                    key={idx}
                    className={`glass-effect flex items-center space-x-3 px-6 py-3 rounded-full hover:bg-white/15 transition-all duration-500 magnetic ${item.color}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + idx * 0.1 }}
                  >
                    <IconComponent size={16} />
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.div>
                )
                })}
              </motion.div>
              
              {/* CTA BUTTONS */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
              >
                <motion.button
                  className="get-quote-btn magnetic-button flex items-center justify-center" 
                  onClick={() => scrollToSection('services')}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Rocket className="mr-2" size={16} />
                  <span className="font-medium tracking-wide">Start Your Journey</span>
                </motion.button>
                <motion.button 
                  className="glass-effect px-8 py-4 rounded-full font-medium transition-all duration-500 hover:bg-white/15 magnetic border border-white/20 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('portfolio')}
                >
                  <Play className="mr-2" size={14} />
                  <span className="font-medium tracking-wide">Watch Demo</span>
                </motion.button>
              </motion.div>
            </div>
            
            {/* RIGHT COLUMN - ENHANCED CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="relative z-30"
            >
              {/* Enhanced backdrop for form visibility */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-2xl -m-2"></div>
              <div className="glass-card p-8 lg:p-10 relative border-2 border-white/20 shadow-2xl shadow-violet-500/10">
                {/* Form glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-500/10 rounded-2xl"></div>
                {/* FORM HEADER */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-light text-gradient mb-3 font-space-grotesk">Get Your Free Consultation</h2>
                  <p className="text-gray-400 font-light">Discover how we can grow your business online</p>
                </div>
                
                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative group">
                      <input 
                        type="text" 
                        name="name"
                        required 
                        placeholder="Enter your name" 
                        title="Your Name"
                        className="peer w-full px-4 py-4 text-sm rounded-xl bg-white/5 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      <label className="absolute left-4 -top-6 text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-violet-400">Your Name</label>
                    </div>
                    <div className="relative group">
                      <input 
                        type="email" 
                        name="email"
                        required 
                        placeholder="Enter your email address" 
                        title="Email Address"
                        className="peer w-full px-4 py-4 text-sm rounded-xl bg-white/5 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      <label className="absolute left-4 -top-6 text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-violet-400">Email Address</label>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <select 
                      name="service"
                      required 
                      title="Select a Service"
                      className="w-full px-4 py-4 text-sm rounded-xl bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="" style={{ backgroundColor: '#1f2937', color: 'white' }}>Select a Service</option>
                      <option value="seo" style={{ backgroundColor: '#1f2937', color: 'white' }}>SEO Optimization</option>
                      <option value="ppc" style={{ backgroundColor: '#1f2937', color: 'white' }}>PPC Advertising</option>
                      <option value="social" style={{ backgroundColor: '#1f2937', color: 'white' }}>Social Media Marketing</option>
                      <option value="content" style={{ backgroundColor: '#1f2937', color: 'white' }}>Content Creation</option>
                      <option value="email" style={{ backgroundColor: '#1f2937', color: 'white' }}>Email Marketing</option>
                      <option value="analytics" style={{ backgroundColor: '#1f2937', color: 'white' }}>Analytics & Tracking</option>
                      <option value="whatsapp" style={{ backgroundColor: '#1f2937', color: 'white' }}>WhatsApp Marketing</option>
                      <option value="video" style={{ backgroundColor: '#1f2937', color: 'white' }}>Video Marketing</option>
                    </select>
                  </div>
                  
                  <div className="relative group">
                    <textarea 
                      name="message"
                      required 
                      placeholder="Tell us about your project" 
                      title="Project Details"
                      rows={4} 
                      className="peer w-full px-4 py-4 text-sm rounded-xl bg-white/5 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300 resize-none"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                    <label className="absolute left-4 -top-6 text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-violet-400">Tell us about your project</label>
                  </div>
                  
                  <motion.button 
                    type="submit" 
                    className="w-full get-quote-btn magnetic-button text-center flex items-center justify-center"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Send className="mr-2" size={16} />
                    <span className="font-medium tracking-wide">Request Free Quote</span>
                  </motion.button>
                </form>
                
                {/* SOCIAL PROOF */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Users className="text-violet-400" size={16} />
                      <span className="font-light">200+ Happy Clients</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="text-yellow-400" size={16} fill="currentColor" />
                      <span className="font-light">4.9/5 Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* MOBILE-OPTIMIZED FLOATING STATS */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-12 pb-8 sm:pb-12">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 py-8 sm:py-12 border-t border-white/10">
            {STATS.map((stat, idx) => {
              const animationDuration = isMobile ? 3 : 2.5; // Calculate duration outside transition
              
              return (
                <motion.div 
                key={idx}
                className="text-center floating-stat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -5, 0], // Reduced jump for mobile
                }}
                transition={{ 
                  delay: 1.5 + idx * 0.1,
                  y: {
                    duration: animationDuration, // Use calculated duration
                    repeat: Infinity,
                    repeatDelay: idx * 0.5,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: [0, -8, 0],
                  transition: {
                    y: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }
                }}
              >
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 ${stat.color || 'text-white'}`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-light">
                  {stat.label}
                </div>
              </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
