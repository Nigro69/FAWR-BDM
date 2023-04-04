import React, {  useState } from 'react'
import Navbar from '../../LandingPage/Navbar/Navbar'
import Footer from '../../LandingPage/Foooter/Footer'

function Layout({ children }) {
    const [mode, setMode] = useState("dark")

    const handleMode = () => {
        if (mode === "dark")
            setMode("light")
        else
            setMode("dark")
    }

    return (
        <div className={`h-screen flex flex-col ${mode === "dark" ? "bg-[#211F22] text-white" : "bg-white text-black"}`} >
            <Navbar  handleMode={handleMode} />
            <div  >
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout