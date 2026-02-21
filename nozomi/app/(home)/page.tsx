import HeroVideo from "@/components/HeroVideo"
import AboutSection from "@/components/AboutSection"
import MainMenu from "@/components/MainMenu"

const HomePage = () => {
    return (
        <>
            {/* Full-screen hero video */}
            <HeroVideo />

            {/* Full-screen About section */}
            <AboutSection />

            {/* The rest of your page content below */}
            <div className="flex flex-col gap-32 pt-20 pl-10 items-center max-md:gap-10 md:flex-row animate-fade-in">
                <div className="flex-1">
                    <MainMenu />
                </div>
            </div>
        </>
    )
}

export default HomePage