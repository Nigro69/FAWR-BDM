import React, {useEffect} from 'react'
import "../../Industries/Industries.css"

import Media_img1 from "./MediaImages/Media_img1.png"

import Grid from '../../../Templates/Grid/Grid'

import Award from "../../../LandingPage/Awards/Award"
import Project from "../../../LandingPage/Projects/Project"
import Blogs from "../../../LandingPage/Blogs/Blog"
import Industrytop from '../../../Templates/IndustriesTemplates/IndustryTop/Industrytop'
import Challenges from '../../../Templates/IndustriesTemplates/Challenges/Challenges'

import I1 from "./MediaImages/1.png"
import I2 from "./MediaImages/2.png"
import I3 from "./MediaImages/3.png"
import I4 from "./MediaImages/4.png"
import I5 from "./MediaImages/5.png"


import Igrid from '../../../Templates/IndustriesTemplates/IndustryGrid/Igrid'
import Iservices from '../../../Templates/IndustriesTemplates/IndustryServices/Iservices.js'
import Meeting from '../../../Templates/IndustriesTemplates/Meeting/Meeting'


export default function Media({ mode }) {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const challengeData = [
        "Advanced Analytics",
        "Customer Retention",
        "Content Piracy",
        "Competitive products",
        "Complicated user experience (UX)",
        "Data Security"
    ]

    const gridData = [
        {
            name: "Digital Media Solutions",
            img: I1,
            content: "For the digital content industry, which includes streaming, podcasts, digital books & periodicals, and information services, we provide tech-enabled, data-driven solutions. To do this, we use the power of digital and agile to design scalable, tailored, and interesting experiences.",
            points: ["Strategy",
                "Digital Experience",
                "Portals/Apps",
                "Asset & Content Management",
                "Augmented Intelligence"],
            p: "1"
        },

        {
            name: "Media Service & Solutions",
            img: I2,
            content: "By utilising cutting-edge technologies like blockchain for managing rights, NFTs for subscriptions, and many more, we are rethinking the media supply chain. Your IT will expand thanks to the capabilities provided by our comprehensive content life-cycle solutions.",
            points: ["Content Supply Chain",
                "Monetization",
                "Content Protection",
                "Rights Management", "NFT"],
            p: "1"
        },

        {
            name: "Quality of Experience",
            img: I3,
            content: "Viewers today may not be willing to tolerate buffering or an out-of-sync video due to their low patience. You risk losing companies who are interested in advertising on your platform soon if there are no adequate metrics for ad rendering. Whether you're establishing a streaming service or offering AVoD on the platform, we offer design, development, and validation services for all media consumption.",
            points: ["Design, Development & Maintenance",
                "Data Validation",
                "Validation across Platforms",
                "Ad Verification & Measurement"],
            p: "1"
        },

        {
            name: "Sports Entertainment",
            img: I4,
            content: "In addition to using digital technology to interact with fans, the sports business is undergoing significant changes in how teams are selected and player performance is evaluated during the season. We support sports leagues, franchises, and broadcasting firms.",
            points: ["Fan engagement & Loyalty Programs",
                "Insights-driven Content Personalization",
                "Smart Stadiums & Experience Management", "In-game Analytics and Interaction", "Player and Team Performance Management"],
            p: "1"
        },

        {
            name: "Data Analytics & AI",
            img: I5,
            content: "While it is crucial to better understand the audience, their consumption habits, and their involvement, it is also crucial to integrate these engagement patterns into the content analytics. You can more precisely forecast user behaviour and proactively foster loyalty or manage risk with data-driven awareness of people & content.",
            points: ["Customer & Market Analytics",
                "Viewership Analytics",
                "Information Monetization",
                "Computer Vision", "AI & ML in Content Processes"],
            p: "1"
        },


    ]
    return (
        <div className='industries-outer'>
            <Industrytop bgimg={Media_img1} mode={mode}
                content="The media and entertainment sector is going through a revolution. Over the past several years, the media and entertainment sector has seen significant change due to factors including interactivity, digitalization, many platforms and devices, and globalisation of the services-based environment. The new technologies that will propel the next wave of change in the sector include social media, mobility, analytics, and cloud computing. Numerous external influences and technological advancements, including wireless, mobile, digitalization, internet access rates, cloud storage, consumer analytics, and social media, are dependent on the Media & Entertainment industries. Therefore, in order to provide customers with appropriate material, these businesses must alter their pricing strategies, modernise their infrastructure, and heavily rely on analytics. Large prospects exist for IT & ITeS businesses in this sector as it continues to expand. In the Media & Entertainment sector, BDM collaborates with top IT / ITeS service providers as an extension of their sales team to assist them in connecting with the appropriate decision-makers utilising our huge databases, account profiling, and research-driven lead generating services." />
            <div className='industries-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Challenges</u>
            </div>
            <div className='industries-component'>
                <Challenges challengeData={challengeData} mode={mode} />
            </div>

            <div className='industries-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Our Offerings</u>
            </div>
            <div className='industries-component'>
                <Igrid gridData={gridData} mode={mode} />
            </div>

            <div className='industries-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Our Services</u>
            </div>

            <div className='industries-component'>
                <Iservices mode={mode} />
            </div>

            <div className='industries-component'>
                <Meeting mode={mode} />
            </div>

            <div className='industries-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Awards & Recognition</u>
            </div>
            <div className='industries-component'>
                <Award mode={mode} />
            </div>

            <div className='industries-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Our Recent Projects</u>
            </div>
            {/* <div className='industries-component'>
                <Project mode={mode} />
            </div> */}

            <div className='industries-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Featured Blog posts</u>
            </div>
            <div className='industries-component'>
                <Blogs mode={mode} />
            </div>

        </div>
    )
}
