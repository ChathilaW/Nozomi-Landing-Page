'use client'

import React, { useEffect } from 'react';
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PlaceholderImage from './PlaceholderImage';
import { galleryData } from '@/constants/gallery';

interface BlueLotusProps {
  className?: string;
}

const BlueLotus: React.FC<BlueLotusProps> = ({ className }) => {
  const router = useRouter();

  useEffect(() => {
    // Prefetch the gallery page to make routing instantaneous
    router.prefetch('/gallery');
  }, [router]);

  return (
    <div className={cn("relative flex justify-center items-center pt-16 pb-32 md:pb-48", className)}>
      <style>{`
        @keyframes rotate-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotate-counter-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .lotus-spin {
          animation: rotate-clockwise 40s linear infinite;
        }
        .lotus-spin:hover {
          animation-play-state: paused;
        }
        .image-counter-spin {
          animation: rotate-counter-clockwise 40s linear infinite;
        }
        .lotus-spin:hover .image-counter-spin {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="w-[24rem] h-[24rem] md:w-[48rem] md:h-[48rem] relative drop-shadow-2xl">
        <svg viewBox="-70 -70 240 240" className="w-full h-full overflow-visible">
          <defs>
            <path id="outer-petal" d="M 50 50 Q -10 -10 50 -60 Q 110 -10 50 50 Z" />
          </defs>

          <g className="lotus-spin" style={{ transformOrigin: '50px 50px' }}>
            {/* Outer Petals with Images & Routing */}
          {galleryData.map((cat, i) => {
            const angle = i * 60; // 6 petals
            return (
              <g key={`outer-${cat.slug}`} transform={`rotate(${angle}, 50, 50)`}>
                <g 
                  className="transition-transform duration-300 hover:scale-[1.15] group" 
                  style={{ transformOrigin: '50px 50px' }}
                >
                  <clipPath id={`clip-outer-${i}`}>
                    <use href="#outer-petal" />
                  </clipPath>
                  
                  {/* Disable pointer events on the rectangular HTML bounding box so it doesn't overlap and steal clicks */}
                  <foreignObject x="-10" y="-60" width="120" height="110" clipPath={`url(#clip-outer-${i})`} className="pointer-events-none">
                    <div className="w-full h-full flex items-center justify-center">
                      {/* Counter-rotate the static angle using a perfect centered square */}
                      <div 
                        className="w-[200px] h-[200px] shrink-0"
                        style={{ transform: `rotate(${-angle}deg)` }}
                      >
                        {/* Dynamic counter-rotation to negate the lotus spin */}
                        <div className="w-full h-full image-counter-spin bg-pink-50/80 relative">
                          {cat.coverImage ? (
                            <Image 
                              src={cat.coverImage} 
                              alt={cat.title} 
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover" 
                              priority
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center p-8">
                              <PlaceholderImage 
                                text={cat.shortTitle} 
                                className="rounded-none border-none text-pink-500 !bg-transparent w-full h-full" 
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </foreignObject>

                  {/* Exact SVG petal path overlay to capture clicks perfectly without rectangular overlap */}
                  <use 
                    href="#outer-petal" 
                    fill="transparent" 
                    stroke="#F472B6" 
                    strokeWidth="2" 
                    opacity="0.8" 
                    className="pointer-events-auto cursor-pointer" 
                    onClick={() => router.push(`/gallery#${cat.slug}`)}
                  />
                </g>
              </g>
            )
          })}
          
          {/* Middle Petals - updated to 6 for symmetry */}
          {[30, 90, 150, 210, 270, 330].map(angle => (
            <path
              key={`middle-${angle}`}
              d="M 50 50 Q 35 30 50 15 Q 65 30 50 50 Z"
              fill="#F472B6" // pink-400
              transform={`rotate(${angle}, 50, 50)`}
              opacity="0.9"
              className="pointer-events-none"
            />
          ))}

          {/* Inner Petals - updated to 6 for symmetry */}
          {[0, 60, 120, 180, 240, 300].map(angle => (
            <path
              key={`inner-${angle}`}
              d="M 50 50 Q 40 35 50 25 Q 60 35 50 50 Z"
              fill="#EC4899" // pink-500
              transform={`rotate(${angle}, 50, 50)`}
              className="pointer-events-none"
            />
          ))}

          {/* Center */}
          <circle cx="50" cy="50" r="6" fill="#FDE047" className="pointer-events-none" /> {/* yellow-300 */}
          <circle cx="50" cy="50" r="3" fill="#FACC15" className="pointer-events-none" /> {/* yellow-400 */}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default BlueLotus;
