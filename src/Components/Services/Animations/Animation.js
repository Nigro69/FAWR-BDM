import React, {useEffect} from 'react'
import "../Research/Research.css"

import Animation_img1 from "./AnimationImages/Animation_img1.png"
import R1 from "./AnimationImages/1.png"
import R2 from "./AnimationImages/2.png"
import R3 from "./AnimationImages/3.png"
import R4 from "./AnimationImages/4.png"
import R5 from "./AnimationImages/5.png"
import R6 from "./AnimationImages/6.png"

import T1 from "./AnimationImages/T1.png"
import T2 from "./AnimationImages/T2.png"
import T3 from "./AnimationImages/T3.png"
import T4 from "./AnimationImages/T4.png"
import T5 from "./AnimationImages/T5.png"
import T6 from "./AnimationImages/T6.png"

import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'

export default function Animation({ mode }) {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])


    const projectData = [
        {
            title: "Logo Mania",
            content: "Partnered with a logo company to get all thier logos animated with our special softwares and set of video editors",
        },
        {
            title: "Social Media co",
            content: "Need to cross-promote your social media channels? Look no further. This project could be perfect for a YouTube channel owner who has other social platforms to push. ",
        },
        {
            title: "Unbeat opener",
            content: "This project is an all-in-one solution for creating a high-energy video reel. Combine text, video footage, and stock photos to create videos that set the tone for an upbeat production.",
        },
    ]

    const detailData = [
        {
            title: "Experience the power of animation with BDM",
            content1: "Today, animation is utilised as a medium for creative expression, communication, and consumer connection in a variety of disciplines and is no longer limited to a particular skill set or business. As a result, the practise of animation is today utilised to spread concepts and facilitate communication in a variety of fields, including medicine, engineering, film and television, forensics, marketing, etc.",
            content2: "Your company may benefit from outsourcing your needs for bespoke animation to BDM. Your project will be executed by the best specialists available to you, free from any administrative or hiring headaches.",
            content3: "With the help of our animation solutions, we can produce cutting-edge visual imagery for full-length animated films, short-form content, brand and image marketing, business presentations, instructional videos, etc. Additionally, we are aware that businesses must meet strict deadlines; as a result, we provide efficient and affordable animation solutions.",
            points: ["2D / 3D Animation", "Logo Animation", "Whiteboard animation", "Character Animation", "Stop Motion Animation", "Motion Graphics"]
        }
    ]

    const gridData = [
        {
            name: "2D / 3D Animation",
            firstLetter: "2",
            img: R1,
            tool: T1,
            content: "Our skilled animators are always prepared to offer top-notch results that may astonish the target audience, whether it be through the creation of animated logos, the development of distinctive 2D and 3D characters for films, or the production of business advertisements that focus on results."
        },

        {
            name: "Logo Animation",
            firstLetter: "L",
            img: R2,
            tool: T2,
            content: "For your company's branding or marketing requirements, our skilled animators can provide personalised and unique 3D, 2D, Flash, and animated logos. The animated logos we create are ideal for social media awareness campaigns, web advertising, video presentations, and inbound marketing."
        },

        {
            name: "Whiteboard Animation",
            firstLetter: "W",
            img: R3,
            tool: T3,
            content: "Scribe animations, often referred as as whiteboard animations, are perfect for explainer films, online video marketing, and training and development courses. Our whiteboard panel artists have collaborated with customers from all around the world to produce effective, excellent, hand-drawn films."
        },

        {
            name: "Character Animation",
            firstLetter: "C",
            img: R4,
            tool: T4,
            content: "Character animation requires specialised knowledge that can only be provided by those that not only comprehend your needs but also have the ability to put their creativity front and centre. They ensure that your brand is seen fast and effectively thanks to their extensive understanding of design techniques and aesthetics."
        },

        {
            name: "Stop Motion Animation",
            firstLetter: "S",
            img: R5,
            tool: T5,
            content: "We produce breathtaking stop motion cartoons for a range of uses, including commercials, movies, music videos, and advertising, among others. Design and development, character design and storyboarding, animation, voice recording, visual effects, and compositing are all part of our stop motion services."
        },
        {
            name: "Motion Graphics",
            firstLetter: "M",
            img: R6,
            tool: T6,
            content: "BDM is a well-known supplier of motion graphics design services. From idea creation to complex 3D animation, we offer a comprehensive range of motion graphics design services for movies and commercials. You won't find a better or more affordable service provider than BDM for your motion graphics needs."
        },

    ]

    return (
        <div className='research-outer'>
            <Top bgimg={Animation_img1} />
            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Animations Services</u>
            </div>
            <div className='research-component'>
                <Details detailData={detailData} />
            </div>

            <div className='research-component'>
                <Grid gridData={gridData} />
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
