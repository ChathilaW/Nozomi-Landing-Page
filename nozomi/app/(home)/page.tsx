import HeroVideo from "@/components/HeroVideo"
import AboutSection from "@/components/AboutSection"
import ProgramsSection from "@/components/ProgramsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import CallToAction from "@/components/CallToAction"
import Footer from "@/components/Footer"
import SakuraBackground from "@/components/SakuraBackground"

const HomePage = () => {
    return (
        <div className="relative w-full">
            {/* Sticky Hero Video Container */}
            <div className="sticky top-0 w-full h-screen z-0">
                <HeroVideo />
            </div>

            {/* Content that scrolls OVER the Hero Video */}
            <div className="relative w-full min-h-screen">
                {/* Background Layer with falling transparent petals */}
                <SakuraBackground />

                {/* Content Layer */}
                <div className="relative z-10 w-full flex flex-col items-center">
                    <AboutSection />
                    <ProgramsSection />
                    <TestimonialsSection />
                    <CallToAction />
                </div>
            </div>
        </div>
    )
}

export default HomePage