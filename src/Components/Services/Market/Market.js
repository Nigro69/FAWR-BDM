import React, { useEffect } from 'react'
import "../Research/Research.css"

import Market_img1 from "./MarketImages/Market_img1.png"
import R1 from "./MarketImages/1.png"
import R2 from "./MarketImages/2.png"
import R3 from "./MarketImages/3.png"
import R4 from "./MarketImages/4.png"
import R5 from "./MarketImages/5.png"
import R6 from "./MarketImages/6.png"

import T1 from "./MarketImages/T1.png"
import T2 from "./MarketImages/T2.png"
import T3 from "./MarketImages/T3.png"

import A1 from "./MarketImages/A1.png"

import Market_img2 from "./MarketImages/Market_img2.png"
import Market_img3 from "./MarketImages/Market_img3.png"

import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'
import Layout from '../../Layout/Layout'
import { useStateContext } from '../../../contexts/ContextProvider'

export default function Market() {
    const { mode } = useStateContext()


    const projectData = [
        {
            title: "Digital Marketing Agency",
            content: "Digital marketing is so vast that some strategies work best in the long term,some works best with specific industries, etc. Doing a customer satisfaction survey for a digital marketing agency helps strategies in digital marketing.",
        },
        {
            title: "Analytical Comparison",
            content: "Few items you can analyse are total marketing expense, ability to measure ROI, ability to receive feedback, conversion ratio, interaction with the audience.",
        },
        {
            title: "EV Strategy",
            content: "The EV Project partnered with city, regional and state governments, utilities, and other organizations in 18 cities to deploy about 12,500 public and residential charging stations. It also demonstrated 8,650 plug-in electric vehicles.",
        },
    ]


    const detailData = [
        {
            title: "Marketing Automation to Amplify Marketing Effectiveness",
            content1: "In order to produce quality leads, over 51% of firms use marketing automation tools, and 58% of B2B businesses aim to invest in platforms to automate their marketing processes. A trustworthy partner is necessary to help with a solid technological basis and strategic marketing automation advice since the configuration of automation CRM is complicated and requires knowledge to manage campaigns.",
            content2: "Platform-based and bespoke marketing automation software solutions are configured and integrated as part of BDM marketing automation services, which help firms stay one step ahead of the competition. Our services with platforms enable companies nurture leads, personalise the customer journey, integrate the sales and marketing teams, and maximise ROI with the correct strategy and optimization.",
            points: ["Platform Evaluation", "Platform Set Up & Support", "Platform Integration", "Content Marketing Strategy", "Demand Generation Strategy", "Automation Management"]
        }
    ]

    const gridData = [
        {
            name: "Platform Evaluation",
            firstLetter: "P",
            img: R1,
            tool: T1,
            content: "Our specialists will effectively assess your business process, needs, and pertinent platforms, supported by our tried-and-true Automation Centre of Excellence, to help you select the best marketing automation platform and create the most effective adoption approach."
        },

        {
            name: "Platform Set Up & Support",
            firstLetter: "P",
            img: R2,
            content: "Our professionals configure the CRM marketing automation or SMS marketing automation solution, whether it is platform-based or custom, and help your team get it up and running after the evaluation and selection of the automation platform to be used for business."
        },

        {
            name: "Platform Integration",
            firstLetter: "P",
            img: R3,
            tool: T2,
            content: "Our reputable consulting services for marketing automation have the necessary exposure and knowledge to combine the best marketing platform with the CRM for a smooth exchange of data between the marketing and CRM systems."
        },

        {
            name: "Content Marketing Strategy",
            firstLetter: "C",
            img: R4,
            tool: T3,
            content: "By consistently coordinating business objectives with automation efforts, we work with you to deliver all of your content needs, from developing an editorial calendar to distributing it across the appropriate channels. This will help you close the gap between content marketing and your marketing automation software."
        },

        {
            name: "Demand Generation Strategy",
            firstLetter: "D",
            img: R5,
            content: "As an industry leader in marketing automation consulting services, we help customers create effective demand generation and market-winning strategies by providing a full range of demand generating services that span the whole lead lifecycle."
        },
        {
            name: "Automation Management",
            firstLetter: "A",
            img: R6,
            content: "We are able to manage the entire scope of the marketing automation system, from managing the leads and guiding them through the sales funnel to qualifying them for the sales team, thanks to our strategic partnerships with the top automation platforms and expertise in the configuration and integration of these platforms."
        },

    ]

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <Layout>
                <div className='research-outer'>
                    <Top bgimg={Market_img1} />
                    <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Marketing Automation Services</u>
                    </div>
                    <div className='research-component'>
                        <Details detailData={detailData} />
                    </div>

                    <div className='research-component'>
                        <Grid gridData={gridData} />
                    </div>

                    <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Benefits of Marketing Automation</u>
                    </div>
                    <div style={{ width: "90%", display: "flex", justifyContent: "center", marginTop: "5%", marginBottom: "5%" }}>
                        <img src={mode === "dark" ? Market_img2 : Market_img3} />
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
