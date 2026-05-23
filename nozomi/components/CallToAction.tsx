import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="w-full py-24 px-8 md:px-20">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-pink-400 to-pink-300 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-300/30 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />
        
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to join our <br className="hidden md:block" /> Nozomi Family?
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-10 font-medium">
            Enrollments are now open for the upcoming school year. Schedule a tour today and discover the magic of learning with us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-pink-500 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Schedule a Tour <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/curriculum" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Explore Curriculum
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
