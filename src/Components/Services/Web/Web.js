import React, { useEffect } from 'react'
import "../Research/Research.css"

import Web_img1 from "./WebImages/Web_img1.png"
import R1 from "./WebImages/1.png"
import R2 from "./WebImages/2.png"
import R3 from "./WebImages/3.png"
import R4 from "./WebImages/4.png"
import R5 from "./WebImages/5.png"
import R6 from "./WebImages/6.png"

import T1 from "./WebImages/T1.png"
import T2 from "./WebImages/T2.png"
import T3 from "./WebImages/T3.png"

import A1 from "./WebImages/A1.png"

import Web_img2 from "./WebImages/Web_img2.png"
import Web_img3 from "./WebImages/Web_img3.png"

import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'
import Layout from '../../Layout/Layout'
import { useStateContext } from '../../../contexts/ContextProvider'

export default function Web() {
    const { mode } = useStateContext()

    const projectData = [
        {
            title: "Quiz App",
            content: "Optionally you can add the ability to give a score to the user at the end of the game, if the score is above a threshold value you declare the player to be a winner.A very interesting project to work on.",
        },
        {
            title: "Restaurant Website",
            content: "This project aims to create a fully responsive restaurant website. You can extend the functionality by connecting it with a real-time database and allowing users to order food online.",
        },
        {
            title: "Covid Awareness",
            content: "this is the idea for our tenth project, making a covid 19 awareness website. Importance of vaccination, and the need to stay in isolation in case one experiences symptoms. In short a general-purpose awareness website.",
        },
    ]

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])


    const detailData = [
        {
            title: "Build Engaging Web Solution",
            content1: "Because of the high calibre and variety of services provided, BDM is recognized as the top web development company. We at BDM provide a wide range of services, from creating websites for the Internet (World Wide Web) or an intranet (a private network). The online design and development services we provide include creating specialised web pages, social networking sites, and e-commerce platforms. Our team of skilled designers and developers never stops working to help our clients establish their online presence, build brand recognition, and realise their potential for exponential growth. The BDM team consistently aims to achieve two goals for the client, namely, growth maximisation in a highly economical manner.",
            content2: "At BDM, we put in a lot of effort to help our clients create a clear plan and then create brief, specific tactics that are appropriate for their organisation.",
            points: ["Static Website", "Dynamic Website", "E - Commerce Website", "Web Portals", "Landing Pages", "Website Designing"]
        }
    ]

    const gridData = [
        {
            name: "Static Website",
            firstLetter: "S",
            img: R1,
            tool: T1,
            content: "Websites can store requests and communicate quickly thanks to a static website design. Today, it has emerged as the best choice for proprietors of small businesses. You won't ever need to worry about content changing frequently if your website is static. We provide the best services for designing and developing static websites."
        },

        {
            name: "Dynamic Website",
            firstLetter: "D",
            img: R2,
            tool: T2,
            content: "It is crucial for website owners to maintain their sites updated in light of shifting technology, fashion, and consumer preferences. A dynamic website makes all of this simple to do. You can choose a website for your company at BDM from a variety of templates. A dynamic website gives you the flexibility to alter it whenever you need to."
        },

        {
            name: "E-Commerce Website",
            firstLetter: "E",
            img: R3,
            content: "We have established user-friendly, well-designed websites in response to the e-commerce sector boom to give customers the greatest possible online purchasing experience. We've always gone above and beyond expectations and increased ROI, whether it be by assisting you in choosing the best platform for your business or by creating a unique eCommerce solution."
        },

        {
            name: "Web Portals",
            firstLetter: "W",
            img: R4,
            content: "Web portal development changes how businesses interact with their clients, partners, and staff digitally. Web portals can be used by businesses to provide access to services, goods, information, and communication tools for target people as well as self-service functionality. A web portal is a safe online-based platform that offers access to a range of features and material through a simple interface."
        },

        {
            name: "Landing Page",
            firstLetter: "L",
            img: R5,
            content: "The best choice for improving marketing campaign conversion rates and reducing the cost of getting a sale is to use landing pages. Landing pages give you more information about your target market. Additionally, landing pages can assist a company in building credibility and brand value."
        },
        {
            name: "Website Designing",
            firstLetter: "W",
            img: R6,
            tool: T3,
            content: "Your website is the first point of contact customers have with your company in the modern digital environment. With an award-winning design team, BDM is a top web design company that builds cutting-edge, profitable websites that capture your brand, boost conversion rates, and help you reach your objectives."
        },

    ]

    return (
        <Layout>
            <div className='research-outer'>
                <Top bgimg={Web_img1} />
                <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                    <u>Web Development Services</u>
                </div>
                <div className='research-component'>
                    <Details detailData={detailData} />
                </div>

                <div className='research-component'>
                    <Grid gridData={gridData} />
                </div>

                <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                    <u>Our Web Development Process</u>
                </div>
                <div style={{ width: "90%", display: "flex", justifyContent: "center", marginTop: "5%", marginBottom: "5%" }}>
                    <img src={mode === "dark" ? Web_img2 : Web_img3} />
                </div>

                <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                    <u>Awards & Recognition</u>
                </div>
                <div className='research-component'>
                    <Award img={A1} i={"1"} />
                </div>

                <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                    <u>Our Recent Projects</u>
                </div>
                <div className='research-component'>
                    <Project projectData={projectData} />
                </div>

                <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                    <u>Featured Blog posts</u>
                </div>
                <div className='research-component'>
                    <Blogs />
                </div>

            </div>
        </Layout>
    )
}
