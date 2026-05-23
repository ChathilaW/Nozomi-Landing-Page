import PlaceholderImage from "./PlaceholderImage"
import { Sparkles } from "lucide-react"

const AboutSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center px-8 md:px-24 py-32 gap-16">
      {/* Left — Text content */}
      <div className="flex-1 flex flex-col justify-center">
        
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-pink-400" />
          <span className="text-pink-400 text-sm font-bold tracking-[0.3em] uppercase">
            Our Story
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl font-extrabold text-gray-800 mb-8 leading-tight">
          Welcome to <span className="text-pink-400">Nozomi</span>
        </h2>

        <div className="w-20 h-1.5 bg-pink-300 rounded-full mb-10" />

        <p className="text-gray-600 text-xl leading-relaxed mb-6 font-medium">
          At Nozomi Preschool, we believe every child carries within them a world 
          of wonder waiting to be discovered. Our warm, nurturing environment is 
          thoughtfully designed to spark curiosity and celebrate each child's 
          unique journey.
        </p>

        <p className="text-gray-500 text-lg leading-relaxed mb-6">
          Founded with a deep love for early childhood development, our dedicated 
          educators work hand-in-hand with families to provide a safe, joyful 
          space where children aged 2–6 can learn through play, creativity, 
          and meaningful connections.
        </p>

        <p className="text-gray-500 text-lg leading-relaxed mb-10">
          From art and music to storytelling and outdoor exploration, every day 
          at Nozomi is an adventure — carefully guided by passionate teachers 
          who see the extraordinary in every small step forward.
        </p>

        <button className="self-start px-8 py-4 bg-pink-400 hover:bg-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          Learn More About Us
        </button>

      </div>

      {/* Right — Portrait images collage layout */}
      <div className="hidden lg:flex flex-1 relative h-[600px] items-center justify-center">
        <div className="absolute w-[60%] h-[70%] left-0 top-10 rounded-[40px] overflow-hidden shadow-2xl z-10 hover:scale-105 transition-transform duration-500 cursor-pointer">
          <PlaceholderImage text="Kids Playing" />
        </div>
        <div className="absolute w-[50%] h-[60%] right-0 bottom-10 rounded-[40px] overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500 cursor-pointer">
          <PlaceholderImage text="Art Class" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse delay-700" />
      </div>

    </section>
  )
}

export default AboutSection
