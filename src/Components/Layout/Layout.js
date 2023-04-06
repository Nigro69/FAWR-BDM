import React, { useState } from 'react'
import Navbar from '../LandingPage/Navbar/Navbar.js'
import Footer from '../LandingPage/Foooter/Footer.js'
import { useStateContext } from '../../contexts/ContextProvider.js'

function Layout({ children }) {
    const {mode, setAppmode} = useStateContext()

    const handleMode = () => {
        if (mode === "dark")
        setAppmode("light")
        else
        setAppmode("dark")
    }

    return (
        <div className={`h-full flex flex-col ${mode === "dark" ? "bg-[#211F22] text-white " : "bg-white text-black"}`} >
            <Navbar mode={mode} handleMode={handleMode} />
            <div  >
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout