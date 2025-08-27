import Link from 'next/link'
import { Home, Search } from 'lucide-react'
import Button from '@/components/ui/Buttons'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-violet-400 to-pink-400 mx-auto mt-4 rounded-full"></div>
        </div>
        
        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-light mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            Oops! The page you&apos;re looking for seems to have wandered off into the digital landscape. 
            Don&apos;t worry, let&apos;s get you back on track to growing your business.
          </p>
        </div>
        
        {/* Action Buttons - FIXED */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/">
            <Button variant="animated" size="lg" className="inline-flex items-center">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link href="/#services">
            <Button variant="glass" size="lg" className="inline-flex items-center">
              <Search className="w-4 h-4 mr-2" />
              Explore Services
            </Button>
          </Link>
        </div>
        
        {/* Quick Links */}
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-light mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Popular Pages
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link 
              href="/#services" 
              className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-2 h-2 bg-violet-400 rounded-full group-hover:scale-110 transition-transform"></div>
              <span className="text-gray-300 group-hover:text-white transition-colors">Our Services</span>
            </Link>
            <Link 
              href="/#about" 
              className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-110 transition-transform"></div>
              <span className="text-gray-300 group-hover:text-white transition-colors">About Us</span>
            </Link>
            <Link 
              href="/#portfolio" 
              className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-2 h-2 bg-pink-400 rounded-full group-hover:scale-110 transition-transform"></div>
              <span className="text-gray-300 group-hover:text-white transition-colors">Portfolio</span>
            </Link>
            <Link 
              href="/#contact" 
              className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-110 transition-transform"></div>
              <span className="text-gray-300 group-hover:text-white transition-colors">Contact</span>
            </Link>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-600/10 rounded-full blur-2xl animate-pulse delayed-pulse"></div>
      </div>
    </div>
  )
}
