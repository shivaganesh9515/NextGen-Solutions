'use client'
import { motion } from 'framer-motion'
import { DollarSign, BarChart3, Smartphone, Shield, Headphones, Check } from 'lucide-react'

const Pricing = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  const pricingPlans = [
    {
      id: '1',
      name: 'Starter',
      price: '₹15,000',
      period: '/month',
      description: 'Perfect for small businesses getting started with digital marketing',
      features: [
        'Basic SEO (5 keywords)',
        'Social Media Management (2 platforms)',
        'Google My Business Optimization',
        'Monthly Performance Report',
        'Email Support'
      ],
      buttonText: 'Get Started',
      buttonStyle: 'glass-effect'
    },
    {
      id: '2',
      name: 'Growth',
      price: '₹35,000',
      period: '/month',
      description: 'Ideal for growing businesses looking to scale their digital presence',
      features: [
        'Advanced SEO (15 keywords)',
        'Social Media Management (4 platforms)',
        'PPC Campaign Management (₹20K ad spend)',
        'Content Marketing (8 pieces/month)',
        'WhatsApp Marketing Setup',
        'Bi-weekly Strategy Calls'
      ],
      buttonText: 'Start Growing Now',
      buttonStyle: 'get-quote-btn',
      isPopular: true
    },
    {
      id: '3',
      name: 'Enterprise',
      price: '₹75,000',
      period: '/month',
      description: 'Comprehensive solution for established businesses and enterprises',
      features: [
        'Premium SEO (50+ keywords)',
        'All Social Platforms + Influencer Marketing',
        'Advanced PPC (₹1L+ ad spend)',
        'Complete Content Strategy',
        'Video Marketing & Creative Design',
        'Dedicated Account Manager',
        '24/7 Priority Support'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'glass-effect'
    }
  ]

  const includedFeatures = [
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      color: 'text-violet-400'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      color: 'text-purple-400'
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      color: 'text-green-400'
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      color: 'text-blue-400'
    }
  ]

  return (
    <section id="pricing" className="relative py-24 px-6 lg:px-12 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-effect inline-flex items-center px-6 py-3 rounded-full mb-8">
            <DollarSign className="text-violet-400 mr-3" size={16} />
            <span className="text-sm font-light text-gray-300">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light hero-text mb-6 font-space-grotesk">
            Choose Your <span className="text-gradient">Growth Plan</span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
            Flexible pricing packages designed to fit businesses of all sizes, from startups to enterprises
          </p>
        </motion.div>
        
        {/* PRICING CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`pricing-card p-8 ${plan.isPopular ? 'popular' : ''} ${plan.isPopular ? 'lg:scale-105' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: plan.isPopular ? 1.05 : 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              whileHover={{ scale: plan.isPopular ? 1.08 : 1.02, y: -8 }}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-0 left-1/2 transform -translate-x-1/2" >
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-md text-sm font-semibold flex items-center space-x-2">
                    
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`text-center mb-8 ${plan.isPopular ? 'mt-6' : ''}`}>
                <h3 className="text-2xl font-semibold mb-4 hero-text">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-light text-gradient">{plan.price}</span>
                  <span className="text-gray-400 font-light">{plan.period}</span>
                </div>
                <p className="text-gray-400 font-light">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex items-center text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                  >
                    <Check className="text-violet-400 mr-3" size={16} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button 
                className={`w-full px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center ${
                  plan.buttonStyle === 'get-quote-btn' 
                    ? 'get-quote-btn text-center' 
                    : 'glass-effect hover:bg-white/15 border border-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
              >
                <span className="font-medium tracking-wide">{plan.buttonText}</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        {/* PRICING FAQ - All plans include */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-2xl font-light hero-text mb-8">All plans include</h3>
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            {includedFeatures.map((feature, idx) => (
              <motion.div 
                key={idx}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <feature.icon size={20} className={`${feature.color} mb-3`} />
                <span className="text-gray-400">{feature.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ENTERPRISE CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-light hero-text mb-4 font-space-grotesk">
              Need Something <span className="text-gradient">Custom</span>?
            </h3>
            <p className="text-xl text-gray-400 font-light mb-8 max-w-2xl mx-auto">
              For enterprises or businesses with specific requirements, we create tailored solutions that scale with your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="get-quote-btn magnetic flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
              >
                <span className="mr-2">💼</span>
                <span className="font-medium tracking-wide">Contact Sales Team</span>
              </motion.button>
              <motion.button
                className="glass-effect px-8 py-4 rounded-full font-medium transition-all duration-500 hover:bg-white/15 magnetic border border-white/20 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
              >
                <span className="mr-2">📅</span>
                <span className="font-medium tracking-wide">Schedule Demo</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* FAQ SECTION */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Can I change my plan later?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.'
              },
              {
                q: 'What happens if I exceed my plan limits?',
                a: "We'll notify you before you reach your limits and help you upgrade to a suitable plan to avoid any service interruption."
              },
              {
                q: 'Do you offer custom solutions?',
                a: 'Absolutely! We work with businesses of all sizes to create custom digital marketing strategies that fit their unique needs.'
              },
              {
                q: 'Is there a setup fee?',
                a: 'No setup fees for any of our plans. We believe in transparent pricing with no hidden costs.'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.8 + idx * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <h4 className="font-semibold mb-2 text-white">{faq.q}</h4>
                <p className="text-gray-300 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
