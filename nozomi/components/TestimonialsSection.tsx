import { Star, Quote } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Mother of Leo (4)",
    text: "Nozomi has been an absolute blessing for our family. Leo comes home every day excited to tell us about his new discoveries. The teachers are incredibly warm and attentive.",
  },
  {
    name: "David Chen",
    role: "Father of Mia (3)",
    text: "We looked at five different preschools before choosing Nozomi. The play-based curriculum and beautiful, safe facilities made it an easy choice. Mia has grown so confident here.",
  },
  {
    name: "Emily Roberts",
    role: "Mother of Sam (5)",
    text: "The transition to kindergarten was seamless for Sam, and we owe it all to the dedicated staff at Nozomi. They truly nurture a lifelong love of learning.",
  }
];

const TestimonialsSection = () => {
  return (
    <section className="w-full py-24 px-8 md:px-20 bg-pink-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
          <div className="flex-1">
            <span className="text-pink-400 font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Loved by kids, <br /> trusted by parents.
            </h2>
          </div>
          <div className="flex gap-2 pb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-pink-100 relative group hover:shadow-xl transition-shadow duration-300">
              <Quote className="w-12 h-12 text-pink-200 absolute top-8 right-8 opacity-50 group-hover:scale-110 transition-transform" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 bg-gray-100">
                  <PlaceholderImage text="P" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{test.name}</h4>
                  <span className="text-xs text-gray-500 font-medium">{test.role}</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic relative z-10">
                "{test.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
