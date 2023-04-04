import React, { useEffect } from 'react'
import "./Research.css"

import Research_img1 from "./ResearchImages/Research_img1.png"
import R1 from "./ResearchImages/1.png"
import R2 from "./ResearchImages/2.png"
import R3 from "./ResearchImages/3.png"
import R4 from "./ResearchImages/4.png"
import R5 from "./ResearchImages/5.png"
import R6 from "./ResearchImages/6.png"

import T1 from "./ResearchImages/T1.png"
import T2 from "./ResearchImages/T2.png"
import T3 from "./ResearchImages/T3.png"
import T4 from "./ResearchImages/T4.png"

import A1 from "./ResearchImages/A1.png"

import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Layout from '../../Templates/Layout/Layout'

export default function Research() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])


    const projectData = [
        {
            title: "Mentalh Health Research",
            content: "Research has advanced the understanding of psychiatric disorders and made major contributions to their treatment. The helplessness of the past has been replaced.",
        },
        {
            title: "EV Vehicles Survey",
            content: "Our monthly market intelligence report on electric vehicles (EV) is a useful guide for automobile manufacturers, OEM suppliers, and investors to keep.",
        },
        {
            title: "Crypto CoinGecko",
            content: "With almost 13,000 cryptocurrencies and 617 exchanges, CoinGecko is the ultimate destination for everything related to cryptocurrencies. It lets you check out the list of cryptos and NFTs.",
        },
    ]

    const detailData = [
        {
            title: "In-depth analysis of markets & industries",
            content1: "BDM has experience gathering, processing, and evaluating market intelligence since it is a top provider of research intelligence services. We develop a competitive strategy based on a thorough understanding of the target market and consumers using research intelligence tools that pinpoint profitable markets and chances for expansion.",
            content2: "We collaborate with customers from a variety of industries as part of our tailored research intelligence consulting services, supporting them with competitive research intelligence analysis.",
            content3: " BDM Research Intelligence products are made to support you in achieving your main research goals. Together, we discover and comprehend your needs and then explain the solutions we believe will lead to the greatest outcomes. Then, we put your selected solution into practise and work with you to get the most out of it as quickly as feasible.",
            points: ["Benchmarking", "Market Research", "Company Research", "Audience Analysis", "Consumer Journey", "App Intelligence"]
        }
    ]

    const gridData = [
        {
            name: "Benchmarking",
            firstLetter: "B",
            img: R1,
            tool: T1,
            content: "You need more than just your own data if you want to drive success in the digital sphere. Competitive benchmarking tool provide you context so you can spot high-value opportunities, monitor your progress, and dominate your market."
        },

        {
            name: "Market Research",
            firstLetter: "M",
            img: R2,
            tool: T2,
            content: "Market research services perform in-depth research and reporting into a variety of markets.  Additionally, we examine market activities to offer firms specialised market information and fresh viewpoints on their own advertising initiatives. Reports, infographics, and ad-hoc deliverables are used to highlight insights."
        },

        {
            name: "Company Research",
            firstLetter: "C",
            img: R3,
            tool: T3,
            content: "With the help of company research tools, firms now have access to a level of information that was unthinkable even ten years ago. By incorporating these technologies into your workflow, you can boost sales and create a level of customer and supplier relationships that is unmatched in transparency."
        },

        {
            name: "Audience Analysis",
            firstLetter: "A",
            img: R4,
            content: "To enhance marketing strategy, customer experience, and brand impression, companies sometimes use audience analysis to develop a deeper knowledge of their existing and future consumers. A detailed audience study guarantees that communications and actions reflect the audience's beliefs, aspirations, and resistance to change genuinely and address these issues."
        },

        {
            name: "Consumer Journey",
            firstLetter: "C",
            img: R5,
            content: "Amplitude's customer analytics products ask 'why' rather than 'what' the consumer is doing. Our customer analytics provide a comprehensive view of the customer journey to assist identify trends and comprehend behaviour."
        },
        {
            name: "App Intelligence",
            firstLetter: "A",
            img: R6,
            tool: T4,
            content: "Despite an increased emphasis on sponsored acquisition, paid search still accounts for 60% of app downloads. App Intelligence correctly assesses the performance of both your and your rivals' organic user acquisition strategies. Discover the keywords that are generating downloads and look into new phrases to improve your search marketing."
        },


    ]
    return (
        <Layout>
            <div className='research-outer'>
                <Top bgimg={Research_img1} />
                <div className='reserach-title' >
                    <u>Research Intelligence Services</u>
                </div>
                <div className='research-component'>
                    <Details detailData={detailData} />
                </div>

                <div className='research-component'>
                    <Grid gridData={gridData} />
                </div>

                <div className='reserach-title' >
                    <u>Awards & Recognition</u>
                </div>
                <div className='research-component'>
                    <Award img={A1} i={"0"} />
                </div>

                <div className='reserach-title' >
                    <u> Our Recent Projects</u>
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
