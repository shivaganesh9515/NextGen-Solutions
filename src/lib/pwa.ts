// PWA utilities for service worker registration and offline functionality

export const registerSW = async (): Promise<ServiceWorkerRegistration | null> => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        updateViaCache: 'none'
      })
      
      console.log('Service Worker registered successfully:', registration)
      
      // Check for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New update available
              showUpdateNotification()
            }
          })
        }
      })
      
      // Handle controller change
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload()
      })
      
      return registration
    } catch (error) {
      console.error('Service Worker registration failed:', error)
      return null
    }
  }
  return null
}

export const unregisterSW = async (): Promise<boolean> => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.getRegistration()
      if (registration) {
        const result = await registration.unregister()
        console.log('Service Worker unregistered:', result)
        return result
      }
    } catch (error) {
      console.error('Service Worker unregistration failed:', error)
    }
  }
  return false
}

export const showUpdateNotification = (): void => {
  // Create a toast notification for app updates
  const notification = document.createElement('div')
  notification.className = 'fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 bg-violet-600 text-white p-4 rounded-xl shadow-lg z-50 flex items-center justify-between'
  notification.innerHTML = `
    <div class="flex-1">
      <p class="font-medium">Update Available</p>
      <p class="text-sm opacity-90">A new version is ready to install.</p>
    </div>
    <button id="update-btn" class="ml-4 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
      Update
    </button>
    <button id="dismiss-btn" class="ml-2 p-2 hover:bg-white/20 rounded-lg transition-colors">
      ×
    </button>
  `
  
  document.body.appendChild(notification)
  
  // Handle update button click
  const updateBtn = notification.querySelector('#update-btn')
  const dismissBtn = notification.querySelector('#dismiss-btn')
  
  updateBtn?.addEventListener('click', async () => {
    const registration = await navigator.serviceWorker.getRegistration()
    if (registration?.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' })
    }
    document.body.removeChild(notification)
  })
  
  dismissBtn?.addEventListener('click', () => {
    document.body.removeChild(notification)
  })
  
  // Auto dismiss after 10 seconds
  setTimeout(() => {
    if (document.body.contains(notification)) {
      document.body.removeChild(notification)
    }
  }, 10000)
}

export const checkOnlineStatus = (): boolean => {
  return navigator.onLine
}

export const addOnlineStatusListener = (callback: (isOnline: boolean) => void): void => {
  window.addEventListener('online', () => callback(true))
  window.addEventListener('offline', () => callback(false))
}

export const removeOnlineStatusListener = (callback: (isOnline: boolean) => void): void => {
  window.removeEventListener('online', () => callback(true))
  window.removeEventListener('offline', () => callback(false))
}

// Install prompt handling
let deferredPrompt: BeforeInstallPromptEvent | null = null

export const setupInstallPrompt = (): void => {
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault()
    deferredPrompt = e as BeforeInstallPromptEvent
    showInstallButton()
  })
  
  window.addEventListener('appinstalled', () => {
    console.log('PWA was installed')
    hideInstallButton()
    deferredPrompt = null
  })
}

export const showInstallPrompt = async (): Promise<boolean> => {
  if (!deferredPrompt) return false
  
  try {
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    console.log(`User response to install prompt: ${outcome}`)
    deferredPrompt = null
    return outcome === 'accepted'
  } catch (error) {
    console.error('Error showing install prompt:', error)
    return false
  }
}

const showInstallButton = (): void => {
  // Create install button
  const installButton = document.createElement('button')
  installButton.id = 'pwa-install-btn'
  installButton.className = 'fixed bottom-20 right-4 bg-violet-600 hover:bg-violet-700 text-white px-4 py-3 rounded-xl shadow-lg z-40 flex items-center gap-2 transition-all duration-300 transform translate-y-0 opacity-100'
  installButton.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7,10 12,15 17,10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
    Install App
  `
  
  installButton.addEventListener('click', showInstallPrompt)
  document.body.appendChild(installButton)
  
  // Animate in
  setTimeout(() => {
    installButton.style.transform = 'translateY(0)'
    installButton.style.opacity = '1'
  }, 100)
}

const hideInstallButton = (): void => {
  const installButton = document.getElementById('pwa-install-btn')
  if (installButton) {
    installButton.style.transform = 'translateY(100px)'
    installButton.style.opacity = '0'
    setTimeout(() => {
      document.body.removeChild(installButton)
    }, 300)
  }
}

// Offline form queue management
export const queueFormSubmission = async (formData: Record<string, unknown>): Promise<void> => {
  if (!('indexedDB' in window)) return
  
  try {
    const db = await openFormDB()
    const transaction = db.transaction(['pending-forms'], 'readwrite')
    const store = transaction.objectStore('pending-forms')
    
    await store.add({
      data: formData,
      timestamp: Date.now()
    })
    
    console.log('Form queued for offline submission')
    
    // Request background sync if available
    if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
      const registration = await navigator.serviceWorker.ready
      await registration.sync.register('contact-form-sync')
    }
  } catch (error) {
    console.error('Failed to queue form submission:', error)
  }
}

const openFormDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('nextgen-forms', 1)
    
    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve(request.result)
    
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result
      if (!db.objectStoreNames.contains('pending-forms')) {
        db.createObjectStore('pending-forms', { keyPath: 'id', autoIncrement: true })
      }
    }
  })
}

// Types for better TypeScript support
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent
    appinstalled: Event
  }
}