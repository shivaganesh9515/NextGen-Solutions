'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'service' | 'pricing'
  hover?: boolean
  gradient?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, children, ...props }, ref) => {
    const baseStyles = "relative rounded-2xl transition-all duration-300"
    
    const variants = {
      default: "bg-white/5 border border-white/10 p-6",
      glass: `
        backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent 
        border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.1)]
        shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]
      `,
      service: `
        bg-gradient-to-br from-gray-900/90 to-gray-800/70 border border-gray-700/50
        backdrop-blur-sm overflow-hidden
        before:absolute before:inset-0 before:bg-gradient-to-br 
        before:from-violet-600/10 before:via-purple-600/10 before:to-pink-600/10
        before:opacity-0 before:transition-opacity before:duration-600
        hover:before:opacity-100
        after:absolute after:inset-px after:bg-gradient-to-br 
        after:from-gray-900/95 after:to-gray-800/85 after:rounded-[calc(1.5rem-1px)]
        after:-z-10
      `,
      pricing: `
        bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-white/10
        overflow-hidden
      `
    }
    
    const hoverEffects = hover ? {
      glass: "hover:shadow-[0_30px_60px_rgba(139,92,246,0.2)] hover:border-violet-500/20 hover:bg-gradient-to-br hover:from-violet-600/15 hover:to-purple-600/8 hover:scale-102 hover:-translate-y-2",
      service: "hover:border-violet-600/30 hover:shadow-[0_25px_50px_rgba(139,92,246,0.15)] hover:-translate-y-3 hover:rotate-x-5",
      default: "hover:border-violet-500/50 hover:bg-white/10",
      pricing: "hover:border-violet-500/50 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(139,92,246,0.15)]"
    } : {}
    
    return (
      <div
        ref={ref}
        className={cn(
          baseStyles, 
          variants[variant], 
          hover && hoverEffects[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = "Card"
export default Card
