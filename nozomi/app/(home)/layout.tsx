import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import React from "react"

const Home = async ({
    children
}: {
    children: React.ReactNode
}
) => {

    return (
        <main className="relative">
            <NavBar />

            {children}

            <Footer />
        </main>
    )

}

export default Home