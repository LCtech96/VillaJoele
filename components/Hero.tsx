'use client'

import { useState, useRef, useEffect } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play può essere bloccato dal browser
      })
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/video/villa-joele-hero.mp4" type="video/mp4" />
          {/* Fallback image se il video non è disponibile */}
        </video>
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-rustic-800 via-rustic-700 to-baroque-900" />
        )}
        {/* Overlay scuro per migliorare la leggibilità */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Card Hero con contenuto */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="card-elegant max-w-4xl w-full p-12 text-center animate-fade-in-up">
          <div className="mb-8">
            <div className="ornament-barocco relative inline-block w-full">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gradient-rustic mb-4">
                Villa Joele
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-baroque-700 italic font-light mt-4">
              Dove la geometria sacra incontra l&apos;arte siciliana
            </p>
          </div>
          
          <div className="mt-8 space-y-4">
            <p className="text-lg text-baroque-600 leading-relaxed">
              Un rifugio d&apos;arte dove il tempo si è fermato. 
              Dimora storica d&apos;artista ai piedi dell&apos;Etna, 
              dove due esagoni si fondono in un&apos;architettura vernacolare unica.
            </p>
            
            <div className="pt-6">
              <a
                href="https://wa.me/393923491109"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-rustic-600 hover:bg-rustic-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contattaci su WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

