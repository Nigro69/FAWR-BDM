import React, { useEffect } from 'react'
import "../Research/Research.css"

import Appdev_img1 from "./AppImages/Appdev_img1.png"
import R1 from "./AppImages/1.png"
import R2 from "./AppImages/2.png"
import R3 from "./AppImages/3.png"
import R4 from "./AppImages/4.png"
import R5 from "./AppImages/5.png"
import R6 from "./AppImages/6.png"

import T1 from "./AppImages/T1.png"
import T2 from "./AppImages/T2.png"
import T3 from "./AppImages/T3.png"
import T4 from "./AppImages/T4.png"
import T5 from "./AppImages/T5.png"

import A1 from "./AppImages/A1.png"

import Appdev_img2 from "./AppImages/Appdev_img2.png"
import Appdev_img3 from "./AppImages/Appdev_img3.png"

import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'
import Layout from '../../Templates/Layout/Layout'

export default function Appdev() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])


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
            title: "Build your Dream App",
            content1: "BDM not only pays attention to your demands but also makes use of the greatest resources as they build applications for a brighter tomorrow and revolutionise your apps with cutting-edge technical solutions. We first assess the features, and then in accordance, we create an exceptional solution. Along with helping you, we also employ clever management strategies. To guarantee complete transparency, we design the formal pathways.",
            content2: "We are skilled in creating mobile apps that use a variety of cutting-edge technologies, including blockchain, AI/ML, AR/VR, and IoT. In order to develop an effective app with dependable and quick-witted technologies, we believe in using the best of all the most recent technologies. Our team of professionals from the sector carefully attends to each and every aspect of the application to make it dynamic and user-friendly.",
            points: ["Android App Development", "iOS App Development", "Hybrid App Development", "Mobile App Design", "Mobile Backend Engineering", "QA and Testing"]
        }
    ]

    const gridData = [
        {
            name: "Android App Development",
            firstLetter: "A",
            img: R1,
            tool: T1,
            content: "BDM provides a wide array of cutting-edge, out-of-the-box Android app development services that aid businesses in bolstering their marketing plans and capturing a sizeable share of the market. Our offshore app development team specialises in creating apps that are interactive, very feature-rich, and highly functional."
        },

        {
            name: "IOS App Development",
            firstLetter: "I",
            img: R2,
            tool: T2,
            content: "A renowned IOS app development business, BDM is well-known for providing top-notch services. As a reputable Ios mobile app development firm, we assist our clients in enhancing their target market offers through mobile applications by helping them become more visible, more agile, more innovative."
        },

        {
            name: "Hybrid App Development",
            firstLetter: "H",
            img: R3,
            content: "Being a top hybrid app development company, BDM offers the best hybrid mobile app development solutions that assist companies in connecting with untapped client bases, driving a significant number of conversions, and maximising return on investment. Our expert team of hybrid application developers can assist your company maximise marketing efforts by creating robust, cross-platform applications."
        },

        {
            name: "Mobile App Design",
            firstLetter: "M",
            img: R4,
            tool: T3,
            content: "The goal of our comprehensive approach is to provide the best-in-industry outcomes in terms of brand memory, customer engagement, and leads. It includes intensive user research, UX strategy, and visual UI. Everything we create for always has the consumer and end user in mind."
        },

        {
            name: "Mobile Backend Engineering",
            firstLetter: "M",
            img: R5,
            tool: T4,
            content: "Our API architects put a lot of effort into creating a tailored solution to fit your demands right from the beginning of product design and strategy. Our experts have developed original, from-scratch solutions as well as middleware-based approaches that integrate with your current systems."
        },
        {
            name: "QA and Testing",
            firstLetter: "Q",
            img: R6,
            tool: T5,
            content: "Our job doesn't end with creation; we make sure to see it through to completion while continuously evaluating the app's quality and the development process. Only applications that successfully complete all of the automatic and human tests we subject them to receive our seal of approval, since we view quality assurance and testing as being of utmost importance to any project we do."
        },

    ]

    return (
        <Layout>
            <div className='research-outer'>
                <Top bgimg={Appdev_img1} />
                <div className='reserach-title' >
                    <u>App Development Services</u>
                </div>
                <div className='research-component'>
                    <Details detailData={detailData} />
                </div>

                <div className='research-component'>
                    <Grid gridData={gridData} />
                </div>

                <div className='reserach-title' >
                    <u>Our App Development Process</u>
                </div>
                <div style={{ width: "90%", display: "flex", justifyContent: "center", marginTop: "5%", marginBottom: "5%" }}>
                    <img src={mode === "dark" ? Appdev_img2 : Appdev_img3} />
                </div>

                <div className='reserach-title' >
                    <u>Awards & Recognition</u>
                </div>
                <div className='research-component'>
                    <Award img={A1} i={"1"} />
                </div>

                <div className='reserach-title' >
                    <u>Our Recent Projects</u>
                </div>
                <div className='research-component'>
                    <Project projectData={projectData} />
                </div>

                <div className='reserach-title' >
                    <u>Featured Blog posts</u>
                </div>
                <div className='research-component'>
                    <Blogs />
                </div>

            </div>
        </Layout>
    )
}
