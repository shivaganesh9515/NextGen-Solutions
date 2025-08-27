'use client'
import { useEffect, useState } from 'react'
import { registerSW, setupInstallPrompt, addOnlineStatusListener, removeOnlineStatusListener } from '@/lib/pwa'
import { Wifi, WifiOff } from 'lucide-react'

interface PWAProviderProps {
  children: React.ReactNode
}

const PWAProvider = ({ children }: PWAProviderProps) => {
  const [isOnline, setIsOnline] = useState(true)
  const [showOfflineToast, setShowOfflineToast] = useState(false)

  useEffect(() => {
    // Register service worker
    registerSW()
    
    // Setup install prompt
    setupInstallPrompt()
    
    // Check initial online status
    setIsOnline(navigator.onLine)
    
    // Setup online/offline listeners
    const handleOnlineStatus = (online: boolean) => {
      setIsOnline(online)
      if (!online) {
        setShowOfflineToast(true)
        setTimeout(() => setShowOfflineToast(false), 5000)
      } else if (showOfflineToast) {
        setShowOfflineToast(false)
      }
    }
    
    addOnlineStatusListener(handleOnlineStatus)
    
    return () => {
      removeOnlineStatusListener(handleOnlineStatus)
    }
  }, [showOfflineToast])

  return (
    <>
      {children}
      
      {/* Offline Toast */}
      {showOfflineToast && (
        <div className="fixed top-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 bg-red-600 text-white p-4 rounded-xl shadow-lg z-50 flex items-center gap-3 animate-slide-in-right">
          <WifiOff size={20} />
          <div className="flex-1">
            <p className="font-medium">You&apos;re offline</p>
            <p className="text-sm opacity-90">Some features may be limited</p>
          </div>
        </div>
      )}
      
      {/* Online Status Indicator */}
      <div className={`fixed top-4 left-4 p-2 rounded-full transition-all duration-300 z-40 ${
        isOnline 
          ? 'bg-green-600 text-white opacity-0 pointer-events-none' 
          : 'bg-gray-800 text-gray-400 opacity-100'
      }`}>
        {isOnline ? <Wifi size={16} /> : <WifiOff size={16} />}
      </div>
    </>
  )
}

export default PWAProvider