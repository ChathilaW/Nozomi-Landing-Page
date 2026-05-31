"use client";

import PlaceholderImage from "@/components/PlaceholderImage";
import { galleryData } from "@/constants/gallery";
import Image from "next/image";
import { useState } from "react";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Gallery() {
  const [lightboxData, setLightboxData] = useState<{ images: string[], currentIndex: number } | null>(null);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-8 md:px-20 animate-fade-in">
      
      <div className="max-w-7xl mx-auto text-center mb-20">
        <span className="text-pink-400 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Moments</span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight mb-6">
          Our <span className="text-pink-400">Gallery</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
          Take a peek into the daily adventures, art projects, and joyful moments that make Nozomi Preschool so special.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mb-20 space-y-32">
        {galleryData.map((cat) => (
          <div key={cat.slug} id={cat.slug} className="scroll-mt-32">
            {/* Category Header */}
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{cat.title}</h2>
              <div className="h-1.5 w-24 bg-pink-300 mx-auto md:mx-0 rounded-full"></div>
            </div>

            {/* Cover Image */}
            <div className="w-full aspect-[21/9] md:aspect-[4/1] mb-12 rounded-[2rem] overflow-hidden shadow-lg relative group border-4 border-pink-300">
              {cat.coverImage ? (
                <Image 
                  src={cat.coverImage} 
                  alt={`${cat.title} Cover`} 
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  className="object-cover" 
                />
              ) : (
                <PlaceholderImage text={`${cat.title} - Cover Event`} className="!bg-pink-100/80" />
              )}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Image Grid */}
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
              {cat.images?.map((imgSrc, i) => {
                return (
                  <div 
                    key={i} 
                    className="relative rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group flex-shrink-0"
                    onClick={() => setLightboxData({ images: cat.images || [], currentIndex: i })}
                  >
                    <img 
                      src={imgSrc} 
                      alt={`${cat.title} ${i + 1}`}
                      loading="lazy"
                      className="h-48 sm:h-56 md:h-64 lg:h-72 w-auto block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none">
                      <span className="text-white font-semibold text-lg">{cat.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {/* Lightbox Overlay */}
      {lightboxData && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8 animate-fade-in cursor-zoom-out"
          onClick={() => setLightboxData(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all z-50"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxData(null);
            }}
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          
          {/* Prev Button */}
          <button
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-all z-50"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxData(prev => prev ? { ...prev, currentIndex: prev.currentIndex > 0 ? prev.currentIndex - 1 : prev.images.length - 1 } : null);
            }}
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-all z-50"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxData(prev => prev ? { ...prev, currentIndex: prev.currentIndex < prev.images.length - 1 ? prev.currentIndex + 1 : 0 } : null);
            }}
          >
            <ChevronRightIcon className="h-8 w-8" />
          </button>

          {/* Preloaders for instant navigation */}
          <div className="opacity-0 absolute inset-0 pointer-events-none -z-10">
            <Image 
              src={lightboxData.images[lightboxData.currentIndex < lightboxData.images.length - 1 ? lightboxData.currentIndex + 1 : 0]} 
              alt="Next preloader" 
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
            <Image 
              src={lightboxData.images[lightboxData.currentIndex > 0 ? lightboxData.currentIndex - 1 : lightboxData.images.length - 1]} 
              alt="Prev preloader" 
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>

          {/* Main Image */}
          <div className="relative w-full max-w-5xl aspect-square md:aspect-video cursor-default" onClick={(e) => e.stopPropagation()}>
            <Image 
              key={lightboxData.currentIndex}
              src={lightboxData.images[lightboxData.currentIndex]} 
              alt="Gallery Image Fullscreen" 
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
