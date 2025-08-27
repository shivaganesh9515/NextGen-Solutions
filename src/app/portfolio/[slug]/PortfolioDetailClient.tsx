'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Rocket, FolderOpen } from 'lucide-react'
import Link from 'next/link'

// Case study type definition
interface CaseStudyType {
  id: string
  title: string
  category: string
  categoryColor: string
  duration: string
  client: string
  location: string
  projectType: string
  description: string
  challenge: string
  solution: string
  results: Record<string, string>
  metrics: Array<{
    value: string
    label: string
    color: string
  }>
  technologies: string[]
  testimonial: {
    quote: string
    author: string
    position: string
  }
}

interface PortfolioDetailClientProps {
  caseStudy: CaseStudyType
}

export function PortfolioDetailClient({ caseStudy }: PortfolioDetailClientProps) {
  return (
    <div className="min-h-screen bg-gray-950 text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="glass-effect inline-flex items-center px-6 py-3 rounded-full mb-8">
              <Award className="text-violet-400 mr-3" size={20} />
              <span className="text-sm font-light text-gray-300">Case Study</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-light hero-text mb-6 font-space-grotesk">
              {caseStudy.title}
            </h1>

            <p className="text-xl text-gray-400 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
              {caseStudy.description}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className={`glass-effect px-6 py-3 rounded-full ${caseStudy.categoryColor}`}>
                <span className="font-medium">{caseStudy.category}</span>
              </div>
              <div className="glass-effect px-6 py-3 rounded-full">
                <Calendar className="inline mr-2" size={16} />
                <span className="font-medium">{caseStudy.duration}</span>
              </div>
              <div className="glass-effect px-6 py-3 rounded-full">
                <MapPin className="inline mr-2" size={16} />
                <span className="font-medium">{caseStudy.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudy.metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`text-4xl font-light font-space-grotesk mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Challenge */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-light hero-text mb-6 font-space-grotesk">
                The <span className="text-gradient">Challenge</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-light hero-text mb-6 font-space-grotesk">
                Our <span className="text-gradient">Solution</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {caseStudy.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light hero-text mb-4 font-space-grotesk">
              Technologies <span className="text-gradient">& Tools</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-4 justify-center">
            {caseStudy.technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="glass-effect px-6 py-3 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gray-300 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Testimonial */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-light hero-text mb-6 font-space-grotesk">
              The <span className="text-gradient">Results</span>
            </h2>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            className="glass-card p-12 max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-2xl text-gray-300 leading-relaxed mb-8 italic">
              &ldquo;{caseStudy.testimonial.quote}&rdquo;
            </blockquote>
            
            <div className="border-t border-white/10 pt-8">
              <div className="font-semibold text-white text-lg">{caseStudy.testimonial.author}</div>
              <div className="text-violet-400">{caseStudy.testimonial.position}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-card p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-light hero-text mb-6 font-space-grotesk">
              Ready for Similar <span className="text-gradient">Results</span>?
            </h2>
            <p className="text-xl text-gray-400 font-light mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve remarkable growth for your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <motion.button
                  className="get-quote-btn magnetic-button flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Rocket className="mr-2" size={16} />
                  <span className="font-medium tracking-wide">Start Your Project</span>
                </motion.button>
              </Link>
              
              <Link href="/#portfolio">
                <motion.button
                  className="glass-effect px-8 py-4 rounded-full font-medium transition-all duration-500 hover:bg-white/15 border border-white/20 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FolderOpen className="mr-2" size={16} />
                  <span className="font-medium tracking-wide">View More Cases</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}