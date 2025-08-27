export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="relative">
        {/* Main Spinner */}
        <div className="w-16 h-16 border-4 border-violet-200/20 border-t-violet-500 rounded-full animate-spin"></div>
        
        {/* Pulsing Background */}
        <div className="absolute inset-0 w-16 h-16 border-4 border-violet-500/20 rounded-full animate-pulse"></div>
        
        {/* Loading Text */}
        <div className="mt-8 text-center">
          <h2 className="text-xl font-light bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Loading...
          </h2>
          <p className="text-sm text-gray-400 mt-2">Preparing your digital marketing experience</p>
        </div>
        
        {/* Floating Dots */}
        <div className="absolute -top-8 -left-8 w-2 h-2 bg-violet-400 rounded-full animate-bounce"></div>
        <div className="absolute -top-4 -right-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-200"></div>
        <div className="absolute -bottom-6 -left-6 w-1 h-1 bg-pink-400 rounded-full animate-bounce delay-400"></div>
      </div>
    </div>
  )
}
