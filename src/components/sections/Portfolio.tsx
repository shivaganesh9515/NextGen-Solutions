'use client'
import { motion } from 'framer-motion'
import { memo } from 'react'
import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { ExpandableList } from '@/components/ui'
import { CASE_STUDIES, TESTIMONIALS } from '@/lib/constants'
import { Trophy, ArrowRight, Star, ChevronRight } from 'lucide-react'

// Memoized case study card
const CaseStudyCard = memo(({ study, index }: { 
  study: (typeof CASE_STUDIES)[number]
  index: number 
}) => {
  const [ref, isInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      className="glass-card p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="glass-effect px-4 py-2 rounded-full">
          <span className={`text-sm font-light ${study.categoryColor}`}>{study.category}</span>
        </div>
        <span className="text-sm text-gray-500">{study.duration}</span>
      </div>
      
      <h3 className="text-xl font-semibold mb-4 hero-text">{study.title}</h3>
      <p className="text-gray-400 font-light mb-6">
        {study.description}
      </p>
      
      {/* Technologies */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-300 mb-3">Technologies Used</h4>
        <ExpandableList
          items={study.technologies}
          renderItem={(tech: string) => (
            <span className="bg-white/10 text-xs px-2 py-1 rounded-full text-gray-300">
              {tech}
            </span>
          )}
          initialDisplayCount={3}
          showMoreText="more tech"
          showLessText="Show less"
          className="flex flex-wrap gap-2"
          itemClassName=""
          buttonClassName="text-xs text-violet-400 font-medium hover:text-violet-300 transition-colors cursor-pointer bg-white/5 hover:bg-white/10 px-2 py-1 rounded-full"
          ariaLabel={`${study.title} technologies`}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        {study.metrics.map((metric, idx: number) => (
          <motion.div 
            key={idx}
            className="text-center p-4 rounded-lg bg-white/5"
            whileHover={{ scale: 1.02 }}
          >
            <div className={`text-2xl font-light mb-1 ${metric.color}`}>{metric.value}</div>
            <div className="text-xs text-gray-500">{metric.label}</div>
          </motion.div>
        ))}
      </div>
      
      <div className="border-t border-white/10 pt-4 mb-6">
        <blockquote className="text-sm text-gray-300 italic mb-2">
          &quot;{study.testimonial.quote}&quot;
        </blockquote>
        <cite className="text-xs text-violet-400">- {study.testimonial.author}, {study.testimonial.position}</cite>
      </div>
      
      <div className="flex items-center justify-center">
        <Link href={`/portfolio/${study.id}`}>
          <motion.button 
            className="glass-effect px-6 py-3 rounded-full text-sm font-medium hover:bg-violet-600/20 transition-all duration-300 flex items-center justify-center w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-medium tracking-wide">View Full Case Study</span>
            <ArrowRight className="ml-2" size={14} />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
})

CaseStudyCard.displayName = 'CaseStudyCard'

// Memoized testimonial card
const TestimonialCard = memo(({ testimonial, index }: { 
  testimonial: (typeof TESTIMONIALS)[number]
  index: number 
}) => {
  const [ref, isInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      className="glass-card p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Rating Stars */}
      <div className="flex space-x-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="text-yellow-400" size={16} fill="currentColor" />
        ))}
      </div>
      
      <blockquote className="text-gray-300 leading-relaxed mb-6">
        &quot;{testimonial.content}&quot;
      </blockquote>
      
      <div className="border-t border-white/10 pt-4">
        <div className="font-semibold text-white">{testimonial.name}</div>
        <div className="text-violet-400 text-sm">{testimonial.role}</div>
        <div className="text-gray-400 text-sm">{testimonial.company}</div>
      </div>
    </motion.div>
  )
})

TestimonialCard.displayName = 'TestimonialCard'

const Portfolio = memo(() => {
  const [ref, isInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="portfolio" className="relative py-24 px-6 lg:px-12 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <motion.div 
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-effect inline-flex items-center px-6 py-3 rounded-full mb-8">
            <Trophy className="text-violet-400 mr-3" size={16} />
            <span className="text-sm font-light text-gray-300">Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light hero-text mb-6 font-space-grotesk">
            Real Results from <span className="text-gradient">Real Businesses</span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
            See how we&apos;ve helped our clients achieve remarkable growth through strategic digital marketing
          </p>
        </motion.div>
        
        {/* CASE STUDIES GRID - OPTIMIZED */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>

        {/* CLIENT TESTIMONIALS SECTION - OPTIMIZED */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl lg:text-4xl font-light hero-text mb-4 font-space-grotesk">
            What Our <span className="text-gradient">Clients Say</span>
          </h3>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((testimonial, idx) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={idx} />
          ))}
        </div>

        {/* PORTFOLIO CTA - OPTIMIZED */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-light hero-text mb-4 font-space-grotesk">
              Ready to Join Our <span className="text-gradient">Success Stories</span>?
            </h3>
            <p className="text-xl text-gray-400 font-light mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar results for your business
            </p>
            <div className="flex justify-center">
              <motion.button 
                className="get-quote-btn magnetic-button flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onClick={() => scrollToSection('contact')}
              >
                <ChevronRight className="mr-2" size={16} />
                <span className="font-medium tracking-wide">Start Your Success Story</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

Portfolio.displayName = 'Portfolio'

export default Portfolio

