import React, { useState } from 'react'
import "./Landing.css"

import Firstpage from '../Firstpage/Firstpage'
import Ourservices from '../Ourservices/Ourservices'
import Industries from '../Industries/Industries'
import About from '../About/About'
import Career from '../Career/Career'
import Partner from '../Partner/Partner'
import Other from '../Other/Other'
import Companies from '../Companies/Companies'
import Footer from '../Foooter/Footer'
import Award from '../Awards/Award'
import Project from '../Projects/Project'
import Blog from '../Blogs/Blog'
import Navbar from '../Navbar/Navbar'
import Aboutoption from '../Navbar/NavbarOptions/Aboutoption/Aboutoption'
import Careeroption from '../Navbar/NavbarOptions/Careeroption/Careeroption'
import Solutionoption from '../Navbar/NavbarOptions/Solutionoption/Solutionoption'
import Terms from '../../Policies/Terms/Terms'
import Privacy from '../../Policies/Privacy/Privacy'
import Cookie from '../../Policies/Cookie/Cookie'

import T1 from "../Testimonials/TestimonialsImages/1.png"
import Testimonial from '../Testimonials/Testimonial'
import Pricing from '../Pricing/Pricing'
import Layout, { useLayoutContext } from '../../Layout/Layout'
import { useStateContext } from '../../../contexts/ContextProvider'


// import Contact from "../../Contact/Contact"

export default function Landing() {
    const { mode } = useStateContext();
    const projectData = [
        {
            title: "Gradle",
            content: "One of the best ways to manage infrastructure is by using code. helps to simplify and automate the provisioning and management of infrastructure. Infrastructure as code helps you manage your organization's infrastructure more easily as a DevOps engineer.",
        },
        {
            title: "Docker",
            content: "Docker is a popular container technology for hosting services and applications that virtualizes operating systems and builds lightweight containers",
        },
        {
            title: "Build Automation Framework",
            content: "Another important aspect of DevOps is built automation. To streamline the software build process, it is often necessary to automate various tasks, such as code compilation and testing.",
        },
    ]


    return (
        <Layout >
            <div style={{ backgroundColor: mode === "dark" ? "#211F22" : "white" }} className="landing-outer">
                {/* <Navbar /> */}
                {/* <Contact /> */}
                <div className='landing-element'>
                    <Firstpage mode={mode} />
                </div>
                <div className='landing-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                    <u>Our Services</u>
                </div>
                <div className='landing-element'>
                    <Ourservices mode={mode} />
                </div>

                <div className='landing-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                    <u>Industries we serve</u>
                </div>

                <div className='landing-element'>
                    <Industries mode={mode} />
                </div>

                <div className='landing-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                    <u>About Us</u>
                </div>

                <div className='landing-element'>
                    <About mode={mode} />
                </div>

                <div className='landing-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                    <u> Awards &
                        Recognitions</u>
                </div>

                <div className='landing-element'>
                    <Award mode={mode} />
                </div>

                <div className='landing-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                    <u>Career</u>
                </div>

                <div className='landing-element'>
                    <Career mode={mode} />
                </div>
                <div className='landing-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                    <u> Our Other Products</u>
                </div>

                <div className='landing-element'>
                    <Other mode={mode} />
                </div>

                <div className='landing-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                    <u> Our Partners</u>
                </div>

                <div className='landing-element'>
                    <Partner mode={mode} />
                </div>

                <div className='landing-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                    <u>Our Other Companies</u>
                </div>

                <div className='landing-element'>
                    <Companies mode={mode} />
                </div>


                <div className='landing-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                    <u>Testimonials</u>
                </div>

                <div className='landing-element' style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <Testimonial mode={mode} />
                </div>

                {/* <div className='landing-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Pricing</u>
            </div>

            <div className='landing-element' style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <Pricing mode={mode} />
            </div> */}



                <div className='landing-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                    <u>Our Recent Projects</u>
                </div>

                <div className='landing-element'>
                    <Project mode={mode} projectData={projectData} />
                </div>

                <div className='landing-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                    <u> Our Featured Blogs</u>
                </div>

                <div className='landing-element'>
                    <Blog mode={mode} />
                </div>


                {/* <Footer /> */}

            </div>
        </Layout>
    )
}
