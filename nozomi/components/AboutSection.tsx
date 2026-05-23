import Image from "next/image"

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
      // Jump up for bottom fill to meet the new, smaller hexagon's bottom-left
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

const AboutSection = () => {
  const { fillPath } = generateHexagons();

  return (
    <div className="w-full flex flex-col">
      {/* Hexagon Shape Divider at the top */}
      <div className="relative w-full h-[120px] overflow-hidden pointer-events-none -mb-[1px]">
        <svg 
          viewBox="0 0 3200 120" 
          className="absolute left-0 bottom-0 w-[3200px] h-[120px] max-w-none"
        >
          {/* White fill for the bottom area */}
          <path 
            d={fillPath} 
            fill="white" 
          />
        </svg>
      </div>

      <section className="relative w-full min-h-screen flex items-center bg-white px-12 md:px-24 py-20 gap-16">

      {/* Left — Text content */}
      <div className="flex-1 flex flex-col justify-center">
        
        <span className="text-pink-300 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
          Our Story
        </span>

        <h2 className="text-5xl md:text-6xl font-extrabold text-pink-200 mb-6 leading-tight">
          About <span className="text-pink-300">Nozomi</span>
        </h2>

        <div className="w-16 h-1 bg-pink-200 rounded-full mb-8" />

        <p className="text-pink-200 text-lg leading-relaxed mb-6">
          At Nozomi Preschool, we believe every child carries within them a world 
          of wonder waiting to be discovered. Our warm, nurturing environment is 
          thoughtfully designed to spark curiosity and celebrate each child's 
          unique journey.
        </p>

        <p className="text-pink-200 text-base leading-relaxed mb-6">
          Founded with a deep love for early childhood development, our dedicated 
          educators work hand-in-hand with families to provide a safe, joyful 
          space where children aged 2–6 can learn through play, creativity, 
          and meaningful connections.
        </p>

        <p className="text-pink-200 text-base leading-relaxed">
          From art and music to storytelling and outdoor exploration, every day 
          at Nozomi is an adventure — carefully guided by passionate teachers 
          who see the extraordinary in every small step forward.
        </p>

      </div>

      {/* Right — Portrait image in a vertical rectangular box */}
      <div className="hidden md:block flex-shrink-0 w-80 h-[560px] relative rounded-3xl overflow-hidden shadow-xl">
        <Image
          src="/Assets/About-Place-holder.jpg"
          alt="About Nozomi Preschool"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

    </section>
    </div>
  )
}

export default AboutSection
