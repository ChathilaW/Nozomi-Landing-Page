'use client'

import React, { useMemo, useEffect, useState } from 'react';

const generateHexagons = () => {
  let cx = 0;
  let rightX = 0;
  let R = 35; // Uniform circumradius for all hexagons
  const ratio = 1; // 1 means they remain the exact same size
  const mid = 60; // Midline y-coordinate
  const sq3 = 1.7320508;

  let fillPath = "";

  for (let i = 0; i < 150; i++) { // Generate enough to fill any screen width
    const currentR = R;
    const W = currentR * sq3;

    if (i === 0) {
      cx = W / 2;
      rightX = W;
      // Start path at the left vertical edge
      fillPath = `M 0 ${(mid + currentR / 2).toFixed(1)}`;
    } else {
      cx = rightX + W / 2;
      // Jump up for bottom fill to meet the new hexagon's bottom-left
      fillPath += ` L ${rightX.toFixed(1)} ${(mid + currentR / 2).toFixed(1)}`;
      rightX = rightX + W;
    }

    const bY = mid + currentR;
    const brY = mid + currentR / 2;

    // Bottom boundary (down to bottom vertex, then up to bottom-right)
    fillPath += ` L ${cx.toFixed(1)} ${bY.toFixed(1)} L ${rightX.toFixed(1)} ${brY.toFixed(1)}`;

    R = R * ratio;
  }

  // Close the fill path by going down to cover the entire bottom section
  fillPath += ` L ${rightX.toFixed(1)} 200 L 0 200 Z`;

  return { fillPath };
};

const SakuraBackground = () => {
  const { fillPath } = useMemo(() => generateHexagons(), []);
  const [petals, setPetals] = useState<any[]>([]);

  useEffect(() => {
    // Generate random petals only on the client to avoid hydration mismatch
    const newPetals = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      fallDuration: 10 + Math.random() * 15, // 10s to 25s for slow falling
      fallDelay: -Math.random() * 25,
      swayDuration: 4 + Math.random() * 5, // 4s to 9s sway cycle
      swayType: Math.floor(Math.random() * 3) + 1, // 1, 2, or 3
      shapeType: Math.floor(Math.random() * 3) + 1, // 1, 2, or 3
      size: 15 + Math.random() * 25, // 15px to 40px varying sizes
    }));
    setPetals(newPetals);
  }, []);

  const getPetalPath = (type: number) => {
    switch (type) {
      case 1: return "M 50 100 C 20 80 0 50 0 30 C 0 10 20 0 40 0 C 45 0 50 10 50 10 C 50 10 55 0 60 0 C 80 0 100 10 100 30 C 100 50 80 80 50 100 Z";
      case 2: return "M 50 0 C 80 20, 100 50, 50 100 C 0 50, 20 20, 50 0 Z";
      case 3: return "M 50 100 C 30 70 10 40 10 20 C 10 5 30 0 50 10 C 70 0 90 5 90 20 C 90 50 70 80 50 100 Z";
      default: return "M 50 0 C 80 20, 100 50, 50 100 C 0 50, 20 20, 50 0 Z";
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ mixBlendMode: 'screen', zIndex: 0 }}>
      <style>{`
        @keyframes fall-down {
          0% { transform: translateY(-20vh); }
          100% { transform: translateY(120vh); }
        }
        @keyframes sway-1 {
          0% { transform: translateX(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          50% { transform: translateX(50px) rotateX(180deg) rotateY(90deg) rotateZ(60deg); }
          100% { transform: translateX(0px) rotateX(360deg) rotateY(180deg) rotateZ(120deg); }
        }
        @keyframes sway-2 {
          0% { transform: translateX(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          50% { transform: translateX(-50px) rotateX(-180deg) rotateY(-90deg) rotateZ(-60deg); }
          100% { transform: translateX(0px) rotateX(-360deg) rotateY(-180deg) rotateZ(-120deg); }
        }
        @keyframes sway-3 {
          0% { transform: translateX(0px) rotateX(45deg) rotateY(0deg) rotateZ(0deg); }
          50% { transform: translateX(40px) rotateX(225deg) rotateY(180deg) rotateZ(90deg); }
          100% { transform: translateX(0px) rotateX(405deg) rotateY(360deg) rotateZ(180deg); }
        }
        .petal-wrapper {
          position: absolute;
          top: 0;
          animation-name: fall-down;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .petal-inner {
          width: 100%;
          height: 100%;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          color: black;
          will-change: transform;
        }
      `}</style>

      {/* Scrolling White Background with Hexagon Edge */}
      <div className="absolute inset-0 w-full h-full flex flex-col">
        <div className="relative w-full h-[120px] overflow-hidden shrink-0 -mb-[1px]">
          <svg viewBox="0 0 3200 120" className="absolute left-0 bottom-0 w-[3200px] h-[120px] max-w-none">
            <path d={fillPath} fill="white" />
          </svg>
        </div>
        <div className="flex-1 w-full bg-white" />
      </div>

      {/* Viewport-Fixed Black Petals */}
      {/* mix-blend-mode naturally hides them over transparent areas, so they magically appear exactly at the white SVG boundary! */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ perspective: '1000px' }}>
        <div className="sticky top-0 w-full h-screen pointer-events-none overflow-hidden">
          {petals.map(p => (
            <div
              key={p.id}
              className="petal-wrapper"
              style={{
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.fallDuration}s`,
                animationDelay: `${p.fallDelay}s`,
              }}
            >
              <div
                className="petal-inner"
                style={{
                  animationName: `sway-${p.swayType}`,
                  animationDuration: `${p.swayDuration}s`,
                  animationDelay: `${p.fallDelay}s`,
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                  <path d={getPetalPath(p.shapeType)} />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

      export default SakuraBackground;
