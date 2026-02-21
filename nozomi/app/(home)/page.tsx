import HeroVideo from "@/components/HeroVideo"
import MainMenu from "@/components/MainMenu"

const HomePage = () => {
    return (
        <>
            {/* Full-screen hero video — fills viewport on first load */}
            <HeroVideo />

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