import PlaceholderImage from "@/components/PlaceholderImage";

const staffMembers = [
  {
    name: "Ms. Emily Lawson",
    role: "Center Director",
    bio: "With over 15 years in early childhood education, Emily is passionate about creating a nurturing space where every child can thrive.",
  },
  {
    name: "Mr. James Chen",
    role: "Lead Preschool Teacher",
    bio: "James brings energy and creativity to the classroom. His play-based approach makes learning letters and numbers a joyful adventure.",
  },
  {
    name: "Ms. Sarah Jenkins",
    role: "Pre-K Teacher",
    bio: "Specializing in kindergarten readiness, Sarah focuses on social-emotional development and foundational academic skills.",
  },
  {
    name: "Ms. Aisha Patel",
    role: "Art & Music Specialist",
    bio: "Aisha believes every child is an artist. She introduces our little ones to a world of colors, rhythms, and cultural exploration.",
  },
  {
    name: "Mr. David Torres",
    role: "Toddler Lead",
    bio: "David's gentle patience and warm demeanor make him a favorite among our youngest learners as they navigate their first classroom experiences.",
  },
  {
    name: "Ms. Rachel Green",
    role: "Assistant Teacher",
    bio: "Rachel supports our lead teachers and brings a special talent for storytelling that keeps the children captivated during circle time.",
  }
];

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-8 md:px-20 animate-fade-in">
      
      <div className="max-w-7xl mx-auto text-center mb-24">
        <span className="text-pink-400 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Team</span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight mb-6">
          Meet the <span className="text-pink-400">Educators</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
          Our passionate and experienced team is dedicated to fostering a love of learning 
          and providing the highest quality care for your children.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {staffMembers.map((staff, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            
            {/* Portrait Container */}
            <div className="w-56 h-56 rounded-full overflow-hidden shadow-md mb-8 relative border-4 border-transparent group-hover:border-pink-200 transition-all duration-300">
              <PlaceholderImage text="Portrait" />
              {/* Optional playful decorative blob behind the image could go here */}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">{staff.name}</h3>
            <span className="text-pink-400 font-semibold text-sm uppercase tracking-wide mb-4">
              {staff.role}
            </span>
            <p className="text-gray-500 leading-relaxed max-w-sm">
              {staff.bio}
            </p>

          </div>
        ))}
      </div>

    </div>
  );
}