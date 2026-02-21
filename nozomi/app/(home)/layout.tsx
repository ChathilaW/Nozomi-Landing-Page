import NavBar from "@/components/NavBar"
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

        </main>
    )

}

export default Home