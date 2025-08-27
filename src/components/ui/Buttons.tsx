'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'animated' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', icon: Icon, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden"
    
    const variants = {
      primary: `
        bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 
        text-white shadow-lg hover:shadow-violet-500/25 hover:scale-105 hover:-translate-y-1
        before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full 
        before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
        before:transition-all before:duration-500 hover:before:left-[100%]
      `,
      secondary: `
        backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 
        hover:border-violet-500/50
      `,
      animated: `
        bg-white text-gray-900 border border-white rounded-full font-space-grotesk
        hover:bg-violet-600 hover:text-white hover:scale-105 hover:-translate-y-1
        hover:shadow-[0_20px_40px_rgba(139,92,246,0.4)] active:scale-98 active:translate-y-0
        transition-all duration-400 font-bold uppercase tracking-wider
        hover:tracking-[2px] active:tracking-[2px] text-base
        font-medium
      `,
      glass: `
        backdrop-blur-sm bg-white/5 border border-white/20 text-white hover:bg-white/15
      `
    }
    
    const sizes = {
      sm: "px-4 py-2 text-sm rounded-lg min-h-[36px]",
      md: "px-6 py-3 text-base rounded-xl min-h-[44px]",
      lg: "px-8 py-4 text-lg rounded-xl min-h-[48px]"
    }
    
    return (
      <button 
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {Icon && <Icon className="w-4 h-4 mr-2" />}
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
export default Button
