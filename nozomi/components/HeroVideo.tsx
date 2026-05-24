'use client'

import { useEffect, useState } from 'react'

const HeroVideo = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fade out starting immediately, fully gone by 400px of scroll
  const textOpacity = Math.max(1 - scrollY / 400, 0)
  // Slight upward parallax drift as it fades out
  const textTranslateY = scrollY * 0.5 

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Full-screen video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/Video-placeholder.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered text content */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6"
        style={{ 
          opacity: textOpacity,
          transform: `translateY(${textTranslateY}px)`,
          pointerEvents: textOpacity > 0 ? 'auto' : 'none' 
        }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-4 tracking-tight">
          Welcome to Nozomi
        </h1>
        <p className="text-xl md:text-2xl font-medium drop-shadow-md max-w-2xl">
          Where little minds grow, explore, and flourish every day.
        </p>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white animate-bounce z-10"
        style={{ 
          opacity: textOpacity,
          pointerEvents: textOpacity > 0 ? 'auto' : 'none' 
        }}
      >
        <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

export default HeroVideo
