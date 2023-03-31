import React, {useEffect} from 'react'
import "../Research/Research.css"

import Social_img1 from "./SocialImages/Social_img1.png"
import R1 from "./SocialImages/1.png"
import R2 from "./SocialImages/2.png"
import R3 from "./SocialImages/3.png"
import R4 from "./SocialImages/4.png"
import R5 from "./SocialImages/5.png"
import R6 from "./SocialImages/6.png"

import T1 from "./SocialImages/T1.png"
import T2 from "./SocialImages/T2.png"
import T3 from "./SocialImages/T3.png"
import T4 from "./SocialImages/T4.png"
import T5 from "./SocialImages/T5.png"

import Social_img2 from "./SocialImages/Social_img2.png"

import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'

export default function Social({ mode }) {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const projectData = [
        {
            title: "FunkyMonk",
            content: "Social networking service, widely used for public communications within organizations. You can design a project around this platform where each student will have to post a question, an idea, or insight about the material covered in class.",
        },
        {
            title: "Brick-by-brick",
            content: "Social networking service, widely used for private communications within organizations. You can design a project around this platform where each student will have to post a question, an idea, or insight about the material covered in class.",
        },
        {
            title: "Social Bird",
            content: "Social networking service, widely used for private communications within organizations. You can design a project around this platform where each student will have to post a question, an idea, or insight about the material covered in class.",
        },
    ]


    const detailData = [
        {
            title: "Promote Your Business's News and Story on the Right Platform",
            content1: "Social media marketing is the practice of using social media to promote brands, develop niche fan bases, improve website traffic, and eventually boost revenue. In order to build their brand and online presence on platforms where their target audience is already perusing, small companies and entrepreneurs may do so through social media marketing. Understanding how to sell on social media is more important for reaching your target demographics and building brand recognition as social media usage continues to expand tremendously. However, a lot of marketers dive into the world of digital and social media marketing without having a complete knowledge of what social media marketing is and what it entails.",
            content2: "To assist you in starting your campaign, our social media marketing professionals break down the differences between business-to-business (B2B) and business-to-consumer (B2C) social media marketing.",
            points: ["Social Networking", "Bookmarking", "Social News", "Media Sharing", "Microblogging", "Online Forum"]
        }
    ]

    const gridData = [
        {
            name: "Social Networking",
            firstLetter: "S",
            img: R1,
            tool: T1,
            content: "Companies may identify & store interesting information to include in their schedule by using social bookmarking. This is a great method to make content selection simpler & hasten social media growth. The majority of social bookmarking websites enable businesses to identify which subjects are trending, most current, or connected to a certain issue."
        },
        {
            name: "Bookmarking",
            firstLetter: "B",
            img: R2,
            content: "Companies may identify & store interesting information to include in their schedule by using social bookmarking. This is a great method to make content selection simpler & hasten social media growth. The majority of social bookmarking websites enable businesses to identify which subjects are trending, most current, or connected to a certain issue."
        },
        {
            name: "Social News",
            firstLetter: "S",
            img: R3,
            tool: T2,
            content: "The key advantage of Social News is that it maintains your company in the public eye. By ensuring that they keep up to date and in contact with their target audience, various social platforms assist journalists and public relations professionals in enhancing the public's knowledge of their brand and overall corporate image."
        },

        {
            name: "Media Sharing",
            firstLetter: "M",
            img: R4,
            tool: T3,
            content: "Platforms for sharing media provide companies the opportunity to produce photos and movies that reflect their brand's image and values as well as to increase their visibility and get the support of a specific user base. The utilization of graphics to convey a message that customers can identify to or aspire to is what gives these platforms their enormous appeal."
        },

        {
            name: "Microblogging",
            firstLetter: "M",
            img: R5,
            tool: T4,
            content: "Microblogging is the practise of creating brief blog posts with a direct, time-sensitive audience. These short blogs can comprise several material types, such as audio, text, photographs, or video, and are shared utilising social networking sites like Twitter or Instagram."
        },

        {
            name: "Online Forum",
            firstLetter: "O",
            img: R6,
            tool: T5,
            content: "The Social Media Forums may be helpful to businesses, startups, and marketers alike. You may obtain advice on social media for your enterprises or ask questions. This social media forum will cover a wide range of topics, including forums for Facebook, Twitter, LinkedIn, Instagram, etc."
        },

    ]

    return (
        <div className='research-outer'>
            <Top bgimg={Social_img1} />
            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Social Media Marketing Services</u>
            </div>
            <div className='research-component'>
                <Details detailData={detailData} />
            </div>

            <div className='research-component'>
                <Grid gridData={gridData} />
            </div>

            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Platforms we use</u>
            </div>
            <div style={{ width: "90%", display: "flex", justifyContent: "center", marginTop: "5%", marginBottom: "5%" }}>
                <img src={Social_img2} />
            </div>

            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Awards & Recognition</u>
            </div>
            <div className='research-component'>
                <Award i={"0"} />
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
