import React from 'react'
import "../Research/Research.css"

import Strategy_img1 from "./StrategyImages/Strategy_img1.png"
import R1 from "./StrategyImages/1.png"
import R2 from "./StrategyImages/2.png"
import R3 from "./StrategyImages/3.png"
import R4 from "./StrategyImages/4.png"
import R5 from "./StrategyImages/5.png"


import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'

export default function Strategy({ mode }) {

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    const projectData = [
        {
            title: "RBA Soultion",
            content: "The process of developing internal resources, internal methodology (strategies, business processes), and internal methodologies (business processes) .",
        },
        {
            title: "Cloud Sources Pvt",
            content: "Development, succession planning , forward-looking process used to lay out a particular plan of action to employ the workforce to accomplish the organization's mission, initiatives, and goals.",
        },
        {
            title: "Meida Outsourcing",
            content: "The process of developing internal resources, internal methodology (strategies, business processes), and internal methodologies (business processes) .",
        },
    ]

    const detailData = [
        {
            title: "Corporate strategy and strategic planning",
            content1: "Strategy consultants provide in-depth industry expertise and impartial advice to provide organizations with the best outcomes for major choices. It is a subset of management consulting, which often denotes giving advice to a company's top management. Strategy consultants collaborate with organizations from the public and commercial sectors on a variety of challenges across all industries.",
            content2: "In order to ensure that every factor is taken into account when making critical choices that may affect the company's future, consultants are typically called in. While executives are often occupied with the day-to-day operations of the organization, they may dedicate their whole attention to the issue at hand. Additionally, consultants provide in-depth industry or topic knowledge, such as market positioning or restructuring.",
            points: ["Organisational strategy", "Functional Strategy", "Digital Strategy", "Corporate Strategy", "Economic Policy"]
        }
    ]

    const gridData = [
        {
            name: "Organisational strategy",
            firstLetter: "O",
            img: R1,
            content: "Organizational strategy examines the factors that must be in play for a company to eventually carry out its business plan. The top recommendations include creating corporate governance and organisational frameworks, determining how competitive an organisation is, creating human capital strategies, and assisting with strategic change management initiatives."
        },

        {
            name: "Functional Strategy",
            firstLetter: "F",
            img: R2,
            content: "The process of developing strategic plans and roadmaps for organisational functions, such as sales and marketing, finance, human resources, supply chain management, research and development, or procurement, is known as functional strategy."
        },

        {
            name: "Digital Strategy",
            firstLetter: "D",
            img: R3,
            content: "The primary focus of a digital strategy consultant is on the use of technology to transform business models and open up opportunities for a digital platform. They incorporate a transformation process that facilitates the use of technology to achieve overarching business objectives."
        },

        {
            name: "Corporate Strategy",
            firstLetter: "C",
            img: R4,
            content: "The creation of company-wide and business unit objectives and goals is known as corporate strategy, sometimes known as strategic management. Strategy consultants are frequently employed to assist with, among other things, the creation of vision and mission statements, strategy plans, and implementation roadmaps."
        },

        {
            name: "Economic Policy",
            firstLetter: "E",
            img: R5,
            content: "A variety of economic consulting services that assist countries and international organisations in formulating policy are included in the Economic Policy service category. The majority of services include information on fiscal and monetary policy, financial value analysis for litigation, economic research for antitrust lawsuits, and many other topics."
        },

    ]

    return (
        <div className='research-outer'>
            <Top bgimg={Strategy_img1} />
            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Strategy Consultant Services</u>
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
                <Project projectData={projectData}/>
            </div>

            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u> Featured Blog posts</u>
            </div>
            <div className='research-component'>
                <Blogs />
            </div>

        </div>
    )
}
