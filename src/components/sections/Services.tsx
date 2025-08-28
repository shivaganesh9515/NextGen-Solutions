'use client'
import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import { memo, useCallback, useState, useEffect } from 'react'
import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { ExpandableList } from '@/components/ui'
import { 
  Search, 
  Smartphone, 
  Target, 
  Edit, 
  Palette, 
  Code, 
  Video, 
  Mail, 
  BarChart3, 
  MessageCircle, 
  Rocket, 
  MessageSquare, 
  CheckCircle,
  ArrowRight
} from 'lucide-react'

// Memoized service card component with mobile optimization
const ServiceCard = memo(({ service, index }: { 
  service: {
    id: string
    title: string
    description: string
    features: readonly string[]
    price: string
    popular?: boolean
  }, 
  index: number
}) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [ref, isInView] = useIntersectionObserver({
    threshold: isMobile ? 0.05 : 0.1,
    triggerOnce: true
  })

  const [isPressed, setIsPressed] = useState(false)

  const serviceIcons = {
    'SEO Optimization': <Search className="text-violet-400" size={24} />,
    'Social Media Marketing': <Smartphone className="text-pink-400" size={24} />,
    'PPC & Search Marketing': <Target className="text-purple-400" size={24} />,
    'Content Marketing': <Edit className="text-green-400" size={24} />,
    'Graphic Design & Branding': <Palette className="text-orange-400" size={24} />,
    'Website Development': <Code className="text-blue-400" size={24} />,
    'Video Marketing': <Video className="text-red-400" size={24} />,
    'Email Marketing': <Mail className="text-indigo-400" size={24} />,
    'Analytics & Reporting': <BarChart3 className="text-cyan-400" size={24} />,
    'WhatsApp Marketing': <MessageCircle className="text-emerald-400" size={24} />
  }

  const serviceColors = {
    'SEO Optimization': 'text-violet-400',
    'Social Media Marketing': 'text-pink-400',
    'PPC & Search Marketing': 'text-purple-400',
    'Content Marketing': 'text-green-400',
    'Graphic Design & Branding': 'text-orange-400',
    'Website Development': 'text-blue-400',
    'Video Marketing': 'text-red-400',
    'Email Marketing': 'text-indigo-400',
    'Analytics & Reporting': 'text-cyan-400',
    'WhatsApp Marketing': 'text-emerald-400'
  }

  const serviceBadges = {
    'SEO Optimization': { text: 'Most Popular', color: 'text-green-400' },
    'Social Media Marketing': { text: 'Trending', color: 'text-yellow-400' },
    'PPC & Search Marketing': { text: 'High ROI', color: 'text-blue-400' },
    'Video Marketing': { text: 'Hot', color: 'text-red-400' },
    'WhatsApp Marketing': { text: 'India Special', color: 'text-yellow-400' }
  }

  const iconColor = serviceColors[service.title as keyof typeof serviceColors] || 'text-gray-400'
  const badge = serviceBadges[service.title as keyof typeof serviceBadges]

  return (
    <motion.div
      ref={ref}
      className={`service-card p-4 sm:p-6 lg:p-8 group relative overflow-hidden touch-target ${
        service.popular ? 'ring-2 ring-violet-500/50' : ''
      }`}
      initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 20 : 30 }}
      transition={{ duration: isMobile ? 0.4 : 0.5, delay: index * 0.1 }}
      whileHover={!isMobile ? { scale: 1.02, y: -8 } : {}}
      whileTap={{ scale: 0.98 }}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      style={{
        transform: isPressed && isMobile ? 'scale(0.98)' : 'scale(1)',
        transition: 'transform 0.1s ease'
      }}
    >
      {/* Popular badge for mobile */}
      {service.popular && (
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20">
          <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
            Popular
          </div>
        </div>
      )}
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <motion.div 
            className={`glass-effect rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 ${
              isMobile ? 'w-12 h-12' : 'w-14 h-14 sm:w-16 sm:h-16'
            }`}
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.95 }}
          >
            {serviceIcons[service.title as keyof typeof serviceIcons] || <Search className="text-gray-400" size={isMobile ? 20 : 24} />}
          </motion.div>
          {badge && !service.popular && (
            <div className="glass-effect px-2 sm:px-4 py-1 sm:py-2 rounded-full">
              <span className={`text-xs sm:text-sm font-light ${badge.color}`}>{badge.text}</span>
            </div>
          )}
        </div>
        
        <h3 className={`font-semibold mb-3 sm:mb-4 hero-text ${
          isMobile ? 'text-lg' : 'text-xl'
        }`}>{service.title}</h3>
        <p className={`text-gray-400 font-light mb-4 sm:mb-6 leading-relaxed ${
          isMobile ? 'text-sm' : 'text-base'
        }`}>
          {service.description}
        </p>
        
        <ExpandableList
          items={service.features}
          renderItem={(feature: string) => (
            <li className="flex items-start">
              <CheckCircle className={`mr-2 mt-0.5 flex-shrink-0 ${iconColor}`} size={isMobile ? 14 : 16} />
              <span className="leading-tight">{feature}</span>
            </li>
          )}
          initialDisplayCount={isMobile ? 3 : 4}
          showMoreText="more features"
          showLessText="Show less"
          className={`text-gray-500 space-y-2 mb-4 sm:mb-6 ${isMobile ? 'text-xs' : 'text-sm'}`}
          itemClassName=""
          buttonClassName={`text-xs font-medium transition-colors cursor-pointer px-2 py-1 rounded-full mt-2 ${
            isMobile 
              ? 'text-violet-400 hover:text-violet-300 bg-white/5 hover:bg-white/10' 
              : 'text-violet-400 hover:text-violet-300 bg-white/5 hover:bg-white/10'
          }`}
          ariaLabel={`${service.title} features`}
        />
        
        <div className="flex items-center justify-between">
          <div className={`text-gray-500 font-medium ${
            isMobile ? 'text-sm' : 'text-base'
          }`}>{service.price}</div>
          <Link href={`/services/${service.id}`}>
            <motion.button 
              className={`glass-effect rounded-full font-medium hover:bg-white/15 transition-all duration-300 flex items-center touch-target ${
                isMobile ? 'px-3 py-2 text-xs' : 'px-4 py-2 text-sm'
              }`}
              whileHover={!isMobile ? { scale: 1.02 } : {}}
              whileTap={{ scale: 0.98 }}
            >
              Learn More 
              <ArrowRight className="ml-1 sm:ml-2" size={isMobile ? 12 : 14} />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
})

ServiceCard.displayName = 'ServiceCard'

const Services = memo(() => {
  const [ref, isInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })
  
  // Direct mobile check to avoid ReferenceError
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = (typeof window !== 'undefined' && window.innerWidth < 768) ? 60 : 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, [])

  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gray-950 safe-area-padding">
      <div className="max-w-7xl mx-auto">
        {/* MOBILE-OPTIMIZED SECTION HEADER */}
        <motion.div 
          ref={ref}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 20 : 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-effect inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8">
            <Rocket className="text-violet-400 mr-2 sm:mr-3" size={isMobile ? 16 : 20} />
            <span className="text-xs sm:text-sm font-light text-gray-300">Our Premium Services</span>
          </div>
          <h2 className={`font-light hero-text mb-4 sm:mb-6 font-space-grotesk ${
            isMobile ? 'text-2xl' : 'text-3xl sm:text-4xl lg:text-5xl'
          }`}>
            Complete <span className="text-gradient">Digital Solutions</span> Suite
          </h2>
          <p className={`text-gray-400 font-light max-w-3xl mx-auto ${
            isMobile ? 'text-base' : 'text-lg sm:text-xl'
          }`}>
            From SEO to video marketing, we offer comprehensive digital marketing services designed to elevate your brand and accelerate growth
          </p>
        </motion.div>
        
        {/* MOBILE-OPTIMIZED SERVICES GRID */}
        <div className={`grid gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 ${
          isMobile ? 'grid-cols-1' : 'sm:grid-cols-2 lg:grid-cols-3'
        }`}>
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
        {/* MOBILE-OPTIMIZED CTA SECTION */}
        <motion.div 
          className={`glass-card text-center ${
            isMobile ? 'p-6 sm:p-8' : 'p-8 lg:p-12'
          }`}
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className={`font-light hero-text mb-3 sm:mb-4 font-space-grotesk ${
            isMobile ? 'text-xl' : 'text-2xl sm:text-3xl lg:text-4xl'
          }`}>
            Need a <span className="text-gradient">Custom Package</span>?
          </h3>
          <p className={`text-gray-400 font-light mb-6 sm:mb-8 max-w-2xl mx-auto ${
            isMobile ? 'text-sm' : 'text-base sm:text-lg lg:text-xl'
          }`}>
            Let&apos;s discuss your specific requirements and create a tailored solution that fits your budget and goals
          </p>
          <div className="flex justify-center">
            <motion.button 
              className={`flex items-center justify-center mx-auto touch-target ${
                isMobile ? 'get-quote-btn-mobile' : 'get-quote-btn'
              }`}
              onClick={() => scrollToSection('contact')}
              whileHover={!isMobile ? { scale: 1.02 } : {}}
              whileTap={{ scale: 0.98 }}
            >
              <MessageSquare className="mr-2" size={isMobile ? 16 : 18} />
              <span className="font-medium tracking-wide">Get Custom Quote</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

Services.displayName = 'Services'

export default Services
