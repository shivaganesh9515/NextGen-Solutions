'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const SplineBackground = () => {
  const { hideSpline } = useScrollAnimation()

  return (
    <div 
      className={cn(
        "spline-container fixed top-0 w-full h-screen -z-10 transition-opacity duration-300",
        hideSpline ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <iframe 
        src="https://my.spline.design/bganimation-xIKR0ZTWWoifZLAKROH7y9YL" 
        frameBorder="0" 
        width="100%" 
        height="100%" 
        id="spline-background"
        loading="lazy"
        title="3D Background Animation"
      />
    </div>
  )
}

export default SplineBackground
