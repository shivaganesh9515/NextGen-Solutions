'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Users, TrendingUp, Clock, Zap, Search, Share2, Target, Edit, Palette, Code, Video, Mail, BarChart3, MessageCircle, Rocket, Phone } from 'lucide-react'
import Link from 'next/link'

// Service type definition
interface ServiceType {
  id: string
  title: string
  description: string
  features: readonly string[]
  price: string
  icon: string
  popular?: boolean
}

interface ServiceDetailClientProps {
  service: ServiceType
}

export function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  // Icon mapping for service types
  const iconMap = {
    'Search': Search,
    'Share2': Share2,
    'Target': Target,
    'Edit': Edit,
    'Palette': Palette,
    'Code': Code,
    'Video': Video,
    'Mail': Mail,
    'BarChart3': BarChart3,
    'MessageCircle': MessageCircle
  }

  const ServiceIcon = iconMap[service.icon as keyof typeof iconMap] || Search

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of delivering measurable outcomes for our clients'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated specialists with years of industry experience'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Efficient processes that deliver results within timeline'
    },
    {
      icon: Zap,
      title: 'Latest Technology',
      description: 'Cutting-edge tools and strategies for maximum impact'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current situation, goals, and competition to create a tailored strategy.'
    },
    {
      step: '02', 
      title: 'Strategy Development',
      description: 'Our team develops a comprehensive plan with clear timelines and measurable objectives.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the strategy with precision, keeping you updated throughout the process.'
    },
    {
      step: '04',
      title: 'Optimization & Results',
      description: 'Continuous monitoring and optimization to ensure maximum performance and ROI.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-effect inline-flex items-center px-6 py-3 rounded-full mb-8">
                <ServiceIcon className="text-violet-400 mr-3" size={20} />
                <span className="text-sm font-light text-gray-300">Service Details</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-light hero-text mb-6 font-space-grotesk">
                {service.title}
              </h1>

              <p className="text-xl text-gray-400 font-light mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="glass-effect px-6 py-3 rounded-full">
                  <span className="text-violet-400 font-medium">{service.price}</span>
                </div>
                {service.popular && (
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 rounded-full">
                    <span className="text-white font-medium">Most Popular</span>
                  </div>
                )}
              </div>

              <motion.button
                className="get-quote-btn magnetic-button flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="mr-2" size={16} />
                <span className="font-medium tracking-wide">Get Started Today</span>
              </motion.button>
            </motion.div>

            {/* Right Content - Features */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-light hero-text mb-6 font-space-grotesk">
                What&apos;s <span className="text-gradient">Included</span>
              </h3>
              
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <CheckCircle className="text-violet-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose <span className="text-gradient">Our Service</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
              We deliver exceptional results through expertise, dedication, and cutting-edge strategies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <benefit.icon className="text-violet-400 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2 hero-text">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-light hero-text mb-6 font-space-grotesk">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
              A proven methodology that ensures success and exceeds expectations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="text-6xl font-light text-gradient opacity-20">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 hero-text">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Get <span className="text-gradient">Started</span>?
            </h2>
            <p className="text-xl text-gray-400 font-light mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and create a strategy that drives real results for your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <motion.button
                  className="get-quote-btn magnetic-button flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="mr-2" size={16} />
                  <span className="font-medium tracking-wide">Start Your Project</span>
                </motion.button>
              </Link>
              
              <motion.button
                className="glass-effect px-8 py-4 rounded-full font-medium transition-all duration-500 hover:bg-white/15 border border-white/20 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="mr-2" size={16} />
                <span className="font-medium tracking-wide">Schedule Call</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}