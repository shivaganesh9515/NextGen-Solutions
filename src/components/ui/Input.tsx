'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: LucideIcon
  variant?: 'default' | 'floating'
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, icon: Icon, variant = 'floating', ...props }, ref) => {
    const baseStyles = "w-full px-4 py-4 text-sm rounded-xl bg-white/5 border border-white/20 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50"
    
    if (variant === 'floating') {
      return (
        <div className="relative group">
          {Icon && (
            <Icon className="absolute left-4 top-4 w-4 h-4 text-gray-400 peer-focus:text-violet-400 transition-colors" />
          )}
          <input
            type={type}
            className={cn(
              baseStyles,
              "placeholder-transparent peer",
              Icon && "pl-12",
              error && "border-red-500/50 focus:border-red-500 focus:ring-red-500/50",
              className
            )}
            placeholder=" "
            ref={ref}
            {...props}
          />
          {label && (
            <label className={cn(
              "absolute left-4 transition-all duration-300 pointer-events-none",
              "peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4",
              "peer-focus:-top-6 peer-focus:text-sm peer-focus:text-violet-400",
              "text-sm text-gray-400 -top-6",
              Icon && "peer-placeholder-shown:left-12 peer-focus:left-4"
            )}>
              {label}
            </label>
          )}
          {error && (
            <p className="mt-2 text-sm text-red-400">{error}</p>
          )}
        </div>
      )
    }

    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-gray-300">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <Icon className="absolute left-4 top-4 w-4 h-4 text-gray-400" />
          )}
          <input
            type={type}
            className={cn(
              baseStyles,
              Icon && "pl-12",
              error && "border-red-500/50 focus:border-red-500 focus:ring-red-500/50",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export default Input
