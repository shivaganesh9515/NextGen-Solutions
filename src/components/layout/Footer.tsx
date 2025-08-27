'use client'
import { SITE_CONFIG, CONTACT_INFO, SERVICES } from '@/lib/constants'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <footer className="bg-gray-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="font-bold text-xl">
              NEXTGEN <span className="text-gradient">SOLUTIONS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for digital marketing success. We help businesses grow and succeed online.
            </p>
            <div className="flex space-x-4">
              <a href={SITE_CONFIG.links.twitter} className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href={SITE_CONFIG.links.linkedin} className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href={SITE_CONFIG.links.instagram} className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Portfolio', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.id}`}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{CONTACT_INFO.email.hello}</p>
              <p>{CONTACT_INFO.phone}</p>
              <p>{CONTACT_INFO.address.street}</p>
              <p>{CONTACT_INFO.address.city}</p>
              <p className="text-violet-400">{CONTACT_INFO.hours}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} NextGen Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
