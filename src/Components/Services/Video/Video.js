import React, {useEffect} from 'react'
import "../Research/Research.css"

import Video_img1 from "./VideoImages/Video_img1.png"
import R1 from "./VideoImages/1.png"
import R2 from "./VideoImages/2.png"
import R3 from "./VideoImages/3.png"
import R4 from "./VideoImages/4.png"
import R5 from "./VideoImages/5.png"
import R6 from "./VideoImages/6.png"

import A1 from "./VideoImages/A1.png"


import Video_img2 from "./VideoImages/Video_img2.png"
import Video_img3 from "./VideoImages/Video_img3.png"
import Video_img4 from "./VideoImages/Video_img4.png"

import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'

export default function Research({ mode }) {


    const projectData = [
        {
            title: "The Motion Video co",
            content: "popular type of video is called Motion Graphics. Motion graphics, or motion animation, is a style of video which involves computer animations, illustrations, graphics, and/or typography as the primary techniques for creating what you see in a video.",
        },
        {
            title: "Filmy Inc",
            content: "a series of still photographs on film projected onto a screen using light in rapid succession.",
        },
        {
            title: "Video run",
            content: "The controls attribute adds video controls, like play, pause, and volume. It is a good idea to always include width and height attributes. If height and width ...",
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
            title: "Videos lead to conversions",
            content1: "Do you find it difficult to showcase business goals in a way that accurately represents your brand persona? To assist your company objectives, we integrate our video editing services with your digital strategy. Our services assist companies in enhancing customer interactions, enhancing social media presence, enhancing SERP ranks, and enhancing conversion rates.",
            content2: "With the best video editing programmes, we have more than 20 years of expertise creating product videos. Our skilled video editors provide production companies, small and large corporations, and individuals with excellent services. Contact us if you want expert films that are tailored to your particular requirements.",
            points: ["Advertisement", "Onboarding", "Corporate video", "Product Demo", "Testimonial", "Vlog Creation"]
        }
    ]

    const gridData = [
        {
            name: "Advertisement",
            firstLetter: "A",
            img: R1,
            content: "We at BDM continually remain current on the newest marketing trends and technology, and our professionals are pioneers in the field of digital marketing. We are aware that video advertisements are effective instruments for attracting your audience because they have quickly overtaken other forms of digital marketing as the dominant force."
        },

        {
            name: "Onboarding",
            firstLetter: "O",
            img: R2,
            content: "The main capabilities and value proposition of your product and business are demonstrated in onboarding films. They play a significant role in the user onboarding processes. Utilizing video material is a very effective way to introduce prospects to your business or product."
        },

        {
            name: "Corporate Video",
            firstLetter: "C",
            img: R3,
            content: "Corporate films serve a variety of functions and contribute subtly to the success of any organisation. Our skilled video editors at BDM help companies that wish to edit conference films, employer/employee training videos, and corporate event recordings. Our video editors meticulously read through client creative briefs to determine the corporate film's goals, target audience, and usage style."
        },

        {
            name: "Product Demo",
            firstLetter: "P",
            img: R4,
            content: "Our product video editing services aid in spreading the word about your new releases on social media. Utilize our services to increase website traffic and income for your company.  To get the necessary results, we employ the most cutting-edge and effective video editing techniques and technology."
        },

        {
            name: "Testimonial",
            firstLetter: "T",
            img: R5,
            content: "With 20 years of expertise handling all sorts of testimonial video editing requirements, BDM is a top supplier of testimonial video editing services in India and overseas. Our testimonial video editing specialists have the specialised knowledge and careful attention to detail necessary for testimonial video editing."
        },
        {
            name: "Vlog Creation",
            firstLetter: "V",
            img: R6,
            content: "Our vlog video editing services transform your unprocessed material into captivating and engaging films for your audience. To get the necessary results, we employ the most cutting-edge and effective vlog video editing techniques and technology."
        },

    ]

    return (
        <div className='research-outer'>
            <Top bgimg={Video_img1} />
            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Video Services</u>
            </div>
            <div className='research-component'>
                <Details detailData={detailData} />
            </div>

            <div className='research-component'>
                <Grid gridData={gridData} />
            </div>

            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>How it works</u>
            </div>
            <div style={{ width: "90%", display: "flex", justifyContent: "center", marginTop: "5%", marginBottom: "5%" }}>
                <img src={mode === "dark" ? Video_img2 : Video_img4} />
            </div>

            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Tools we work with</u>
            </div>
            <div style={{ width: "90%", display: "flex", justifyContent: "center", marginTop: "5%", marginBottom: "5%" }}>
                <img src={Video_img3} />
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
                <Project projectData={projectData}/>
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
