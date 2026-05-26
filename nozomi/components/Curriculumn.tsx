import { BookOpen, Palette, Shapes, Music, Heart, Globe } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";

const curriculumAreas = [
  {
    title: "Language & Literacy",
    description: "Building strong communication skills through storytelling, phonics, and early reading activities.",
    icon: <BookOpen className="w-8 h-8 text-blue-400" />,
    color: "bg-blue-50"
  },
  {
    title: "Math & Logic",
    description: "Discovering numbers, shapes, and patterns through hands-on puzzles and counting games.",
    icon: <Shapes className="w-8 h-8 text-yellow-400" />,
    color: "bg-yellow-50"
  },
  {
    title: "Creative Arts",
    description: "Expressing imagination freely using paints, clay, crafts, and collaborative art projects.",
    icon: <Palette className="w-8 h-8 text-pink-400" />,
    color: "bg-pink-50"
  },
  {
    title: "Music & Movement",
    description: "Developing rhythm and coordination with singing, dancing, and musical instruments.",
    icon: <Music className="w-8 h-8 text-green-400" />,
    color: "bg-green-50"
  },
  {
    title: "Social Emotional",
    description: "Learning to share, empathize, and build meaningful friendships in a supportive space.",
    icon: <Heart className="w-8 h-8 text-red-400" />,
    color: "bg-red-50"
  },
  {
    title: "World Discovery",
    description: "Exploring nature, science, and cultures to foster a deep curiosity about the world.",
    icon: <Globe className="w-8 h-8 text-indigo-400" />,
    color: "bg-indigo-50"
  }
];

export default function Curriculum() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-8 md:px-20 animate-fade-in">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 mb-24">
        <div className="flex-1">
          <span className="text-pink-400 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Approach</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight mb-8">
            Learning through <span className="text-pink-400">Play</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            At Nozomi, our curriculum is carefully crafted to balance structured learning with child-led discovery. 
            We believe that children learn best when they are actively engaged, asking questions, and exploring 
            their environment safely and joyfully.
          </p>
        </div>
        <div className="flex-1 w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl relative hover:scale-105 transition-transform duration-500 cursor-pointer">
          <PlaceholderImage text="Curriculum Hero" />
        </div>
      </section>

      {/* Core Areas Grid */}
      <section className="max-w-7xl mx-auto mb-24">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16">Core Learning Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculumAreas.map((area, i) => (
            <div key={i} className={`${area.color} p-10 rounded-[2rem] border border-transparent hover:border-black/5 hover:-translate-y-2 transition-all duration-300 cursor-pointer`}>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {area.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="max-w-4xl mx-auto bg-pink-50 rounded-[3rem] p-12 shadow-sm border border-pink-100">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-10 text-center">A Typical Day at Nozomi</h2>
        <div className="flex flex-col gap-8">
          {[
            { time: "08:30 AM", activity: "Arrival & Free Play" },
            { time: "09:30 AM", activity: "Morning Circle & Story Time" },
            { time: "10:15 AM", activity: "Healthy Snack" },
            { time: "10:45 AM", activity: "Outdoor Exploration & Art" },
            { time: "12:00 PM", activity: "Lunch & Rest" },
            { time: "02:00 PM", activity: "Music, Movement & Goodbye Circle" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 border-b border-pink-200/50 pb-6 last:border-0 last:pb-0">
              <div className="bg-white text-pink-500 font-bold px-6 py-3 rounded-full text-sm shadow-sm w-fit shrink-0">
                {item.time}
              </div>
              <div className="text-gray-700 text-lg font-medium">
                {item.activity}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
