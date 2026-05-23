import PlaceholderImage from "@/components/PlaceholderImage";
import Footer from "@/components/Footer";

export default function GalleryPage() {
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

      <div className="max-w-7xl mx-auto mb-20">
        {/* CSS columns for masonry-style layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          
          <div className="break-inside-avoid relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
            <div className="aspect-[4/3] w-full">
              <PlaceholderImage text="Playground Fun" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white font-bold text-lg">Playground Fun</span>
            </div>
          </div>

          <div className="break-inside-avoid relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
            <div className="aspect-[3/4] w-full">
              <PlaceholderImage text="Painting Session" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white font-bold text-lg">Painting Session</span>
            </div>
          </div>

          <div className="break-inside-avoid relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
            <div className="aspect-square w-full">
              <PlaceholderImage text="Music Class" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white font-bold text-lg">Music Class</span>
            </div>
          </div>

          <div className="break-inside-avoid relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
            <div className="aspect-[16/9] w-full">
              <PlaceholderImage text="Field Trip" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white font-bold text-lg">Field Trip</span>
            </div>
          </div>

          <div className="break-inside-avoid relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
            <div className="aspect-[3/4] w-full">
              <PlaceholderImage text="Reading Corner" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white font-bold text-lg">Reading Corner</span>
            </div>
          </div>

          <div className="break-inside-avoid relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
            <div className="aspect-[4/3] w-full">
              <PlaceholderImage text="Graduation Day" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white font-bold text-lg">Graduation Day</span>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}