import { Baby, BookOpen, Palette, Music } from "lucide-react";

const programs = [
  {
    title: "Toddler Program",
    age: "2 - 3 Years",
    description: "A gentle introduction to learning through sensory play, music, and guided socialization.",
    icon: <Baby className="w-8 h-8 text-pink-400" />,
    color: "bg-pink-50 border-pink-200"
  },
  {
    title: "Preschool",
    age: "3 - 4 Years",
    description: "Fostering independence and curiosity through hands-on activities, art, and early literacy.",
    icon: <Palette className="w-8 h-8 text-blue-400" />,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Pre-Kindergarten",
    age: "4 - 5 Years",
    description: "Preparing little minds for big steps with structured learning, math concepts, and creative expression.",
    icon: <BookOpen className="w-8 h-8 text-yellow-500" />,
    color: "bg-yellow-50 border-yellow-200"
  },
  {
    title: "After School Club",
    age: "5 - 6 Years",
    description: "Extended enrichment programs focusing on music, language, and physical coordination.",
    icon: <Music className="w-8 h-8 text-green-400" />,
    color: "bg-green-50 border-green-200"
  }
];

const ProgramsSection = () => {
  return (
    <section className="w-full py-24 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <span className="text-pink-400 font-bold tracking-widest uppercase text-sm mb-4">Our Programs</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center">
          Learning Tailored for <br className="hidden md:block" /> Every Stage
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mb-16 text-lg">
          We offer thoughtfully crafted programs that respect your child's natural pace of learning, 
          combining play-based discovery with foundational academics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {programs.map((prog, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-start p-8 rounded-3xl border-2 ${prog.color} hover:-translate-y-2 transition-transform duration-300 cursor-pointer shadow-sm hover:shadow-xl bg-white`}
            >
              <div className={`p-4 rounded-2xl mb-6 ${prog.color.split(' ')[0]}`}>
                {prog.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{prog.title}</h3>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold mb-4">
                {prog.age}
              </span>
              <p className="text-gray-500 text-sm leading-relaxed">
                {prog.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
