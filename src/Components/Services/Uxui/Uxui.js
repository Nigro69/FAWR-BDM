import React from 'react'
import "../Research/Research.css"

import Uxui_img1 from "./UxuiImages/Uxui_img1.png"
import R1 from "./UxuiImages/1.png"
import R2 from "./UxuiImages/2.png"
import R3 from "./UxuiImages/3.png"
import R4 from "./UxuiImages/4.png"
import R5 from "./UxuiImages/5.png"
import R6 from "./UxuiImages/6.png"

import T1 from "./UxuiImages/T1.png"

import A1 from "./UxuiImages/A1.png"

import Uxui_img2 from "./UxuiImages/Uxui_img2.png"
import Uxui_img3 from "./UxuiImages/Uxui_img3.png"

import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'

export default function Uxui({ mode }) {

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });



    const projectData = [
        {
            title: "Fitness App",
            content: "The right app that acts as a virtual personal trainer or training partner to keep you motivated and accountable.",
        },
        {
            title: "Real Time",
            content: "every single user is notified to capture and share a photo during the same 2-minute period every day. While everyone recieves the push notification at the same time, the time of day that notification arrives varies wildly.",
        },
        {
            title: "Infothon",
            content: "Device Info is a simple and powerful Android application which gives you complete information about your Mobile device with advanced user interfaces.",
        },
    ]


    const detailData = [
        {
            title: "User-centric Design for your Business",
            content1: "In addition to grabbing the user's attention, having an amazing UI may improve the user experience and strengthen the brand of the company. In order to increase UX, businesses must concentrate on developing immersive UI designs. We at BDM recognise the importance of user-centered designs and the effect they have on the user experience. We make certain that user views are at the centre of our development process so that we can provide improved usability in each of the products we produce.",
            content2: "Our team of skilled UI/UX designers focuses on user expectations and applies UX design principles at every level of the app development process. We specialise in designing user interfaces that are aesthetically pleasing, simple to use, and completely usable. Our UI design services give our clients access to a scalable and reliable user experience, maximising their ROI and advancing their branding strategy.",
            points: ["App / Web Design", "Information Architecture", "Competitive Analysis", "User Research", "Visual Design", "Interaction Design"]
        }
    ]

    const gridData = [
        {
            name: "App/Web Design",
            firstLetter: "A",
            img: R1,
            tool: T1,
            content: "We build appealing user flows and aesthetically pleasing interfaces because we are aware of how users engage with websites and mobile applications. The fastest route to a customer's loyalty is through a modern, yet plain, clean, and straightforward UI and UX design."
        },

        {
            name: "Information Architecture",
            firstLetter: "I",
            img: R2,
            content: "Information architecture is crucial to the average user experience. Cohesive IAs assist in integrating design and architectural ideas. The knowledgeable UI Services team at e-Zest classifies and arranges information into a logical framework. The user goals, business goals, and product usability are all properly matched by our well defined information architecture process."
        },

        {
            name: "Competitive Analysis",
            firstLetter: "C",
            img: R3,
            content: "A competitive analysis offers tactical insights into the characteristics, workflows, and emotions elicited by the design solutions of your rivals. You may strategically build your solution with the aim of creating a better product and/or experience by comprehending these features of rivals' offerings."
        },

        {
            name: "User Research",
            firstLetter: "U",
            img: R4,
            content: "The goal of user research methodology is to comprehend user behaviour and demands using a variety of methods, including task analysis, surveys, and direct observation. User research is helpful at every stage of the product design process, from initial concept development through the market launch."
        },

        {
            name: "Visual Design",
            firstLetter: "V",
            img: R5,
            content: "At BDM, we provide a range of digital and graphic design services, from high- end video creation to brand identity.In order to achieve your messaging objectives, we mix the finest user experience with aesthetic design."
        },
        {
            name: "Interaction Design",
            firstLetter: "I",
            img: R6,
            content: "To develop the ideal user experiences, interaction designers put a strong emphasis on how customers engage with their goods. Our interface design services provide business executives and developers a visual representation of the most important user scenarios and application flow diagrams, bridging the gap between business needs and specification."
        },

    ]

    return (
        <div className='research-outer'>
            <Top bgimg={Uxui_img1} />
            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>UX / UI Design Services</u>
            </div>
            <div className='research-component'>
                <Details detailData={detailData} />
            </div>

            <div className='research-component'>
                <Grid gridData={gridData} />
            </div>

            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Our Design Process</u>
            </div>
            <div style={{ width: "90%", display: "flex", justifyContent: "center", marginTop: "5%", marginBottom: "5%" }}>
                <img src={mode === "dark" ? Uxui_img2 : Uxui_img3} />
            </div>

            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Awards & Recognition</u>
            </div>
            <div className='research-component'>
                <Award img={A1} i={"0"} />
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
    )
}
