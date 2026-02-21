import Image from "next/image"

const AboutSection = () => {
  return (
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
  )
}

export default AboutSection
