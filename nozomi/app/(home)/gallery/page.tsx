import PlaceholderImage from "@/components/PlaceholderImage";
import Footer from "@/components/Footer";
import { galleryData } from "@/constants/gallery";

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

      <div className="max-w-7xl mx-auto mb-20 space-y-32">
        {galleryData.map((cat) => (
          <div key={cat.slug} id={cat.slug} className="scroll-mt-32">
            {/* Category Header */}
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{cat.title}</h2>
              <div className="h-1.5 w-24 bg-pink-300 mx-auto md:mx-0 rounded-full"></div>
            </div>

            {/* Cover Image */}
            <div className="w-full aspect-[21/9] md:aspect-[4/1] mb-12 rounded-[2rem] overflow-hidden shadow-lg relative group">
              {cat.coverImage ? (
                <img 
                  src={cat.coverImage} 
                  alt={`${cat.title} Cover`} 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <PlaceholderImage text={`${cat.title} - Cover Event`} className="!bg-pink-100/80" />
              )}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Image Grid (10 images) */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
              {[...Array(10)].map((_, i) => {
                // Determine a pseudo-random aspect ratio based on index for a masonry look
                const aspectClass = i % 3 === 0 ? 'aspect-[3/4]' : i % 2 === 0 ? 'aspect-square' : 'aspect-[4/3]';
                
                return (
                  <div key={i} className="break-inside-avoid relative rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
                    <div className={`w-full ${aspectClass}`}>
                       <PlaceholderImage text={`Image ${i + 1}`} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <span className="text-white font-semibold text-lg">{cat.title} {i + 1}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}