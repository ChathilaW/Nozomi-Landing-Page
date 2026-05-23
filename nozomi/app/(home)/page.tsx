import HeroVideo from "@/components/HeroVideo"
import AboutSection from "@/components/AboutSection"
import MainMenu from "@/components/MainMenu"

const HomePage = () => {
    return (
        <div className="relative w-full">
            {/* Sticky Hero Video Container */}
            <div className="sticky top-0 w-full h-screen z-0">
                <HeroVideo />
            </div>

            {/* Content that scrolls OVER the Hero Video */}
            <div className="relative z-10">
                {/* Full-screen About section with shape divider at the top */}
                <AboutSection />

                {/* The rest of your page content below */}
                <div className="w-full bg-white flex flex-col gap-32 pt-20 pl-10 pb-20 items-center max-md:gap-10 md:flex-row animate-fade-in">
                    <div className="flex-1 w-full">
                        <MainMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage