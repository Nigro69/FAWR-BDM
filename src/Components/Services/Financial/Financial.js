import React, {useEffect} from 'react'
import "../Research/Research.css"

import Financial_img1 from "./FinancialImages/Financial_img1.png"
import R1 from "./FinancialImages/1.png"
import R2 from "./FinancialImages/2.png"
import R3 from "./FinancialImages/3.png"
import R4 from "./FinancialImages/4.png"
import R5 from "./FinancialImages/5.png"
import R6 from "./FinancialImages/6.png"


import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'

export default function Financial({ mode }) {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const projectData = [
        {
            title: "Smart Leads",
            content: "A variety of services relating to the purchase, merger, or sale of an organisation are offered to clients via transaction services. ",
        },
        {
            title: "HomeCap",
            content: "To streamline the demands assisting with any other intellectual property-related difficulties as well as the trademark registration done completely. ",
        },
        {
            title: "RBA Solutions",
            content: "The process of developing internal resources, internal methodology (strategies, business processes), and internal methodologies (business processes) .",
        },
    ]

    const detailData = [
        {
            title: "Helps in Attaining Goals",
            content1: "It may be quite nerve-wracking for anyone to plan properly and allocate finances. An professional who provides assistance at each stage, from planning to building an asset portfolio, is a financial adviser. A group of skilled specialists who offer guidance on effective asset and money management make up the financial advising services. Certified financial planners, wealth managers, investment advisers, and certified public accountants are just a few examples of the many professionals that offer financial advice services. A skilled financial counsellor will ask you about your objectives, gain an understanding of your debts, income, and spending, and then develop the best strategy for achieving your goals.",
            content2: "Our team of experts is well-versed in domestic law and has first-hand understanding of issues pertaining to the financial services industry. We have agreements with top consultants who have already dealt with regulators and can offer an insightful viewpoint.",
            points: ["Transaction Services", "Corporate Finance", "Crises & Recovery", "Risk Management", "Accounting & Tax Advisory", "Forensics & Litigation"]
        }
    ]

    const gridData = [
        {
            name: "Transaction Services",
            firstLetter: "T",
            img: R1,
            content: "A variety of services relating to the purchase, merger, or sale of an organisation are offered to clients via transaction services. The breadth of services includes everything from developing an M&A strategy, doing appraisals, & conducting due diligence before a deal is announced to post-merger integration support and other operational transaction services."
        },

        {
            name: "Corporate Finance",
            firstLetter: "C",
            img: R2,
            content: "Corporate finance is the subspecialty of consulting that deals with capital structure and funding issues. Financing (including alternative investments), restructuring, working capital management (also strongly related to the finance consulting category under operations consulting), initial public offerings (IPOs), and capital markets are some of the key concepts."
        },

        {
            name: "Crises & Recovery",
            firstLetter: "C",
            img: R3,
            content: "Companies frequently seek the advice of crisis & recovery advisers while facing financial challenges. They receive assistance from experts in understanding the crisis scenario and putting in place a longer-term turnaround strategy. Insolvency management, restructuring, turnaround consulting, and debt management are important services."
        },

        {
            name: "Risk Management",
            firstLetter: "R",
            img: R4,
            content: "Risk management consultants assist businesses in preventing (or minimising) the impact of market and enterprise uncertainty on their business objectives. Risk control, internal audit, and IT risk are some of the main services."
        },

        {
            name: "Accounting & Tax Advisory",
            firstLetter: "A",
            img: R5,
            content: "Helping businesses comply with tax law is the focus of the tax advising market category, which offers ideas such corporate tax planning, location advice, transfer pricing, and tax-aligned supply chains. The main goal is to assist customers in overcoming the obstacles that their businesses and the finance department face in terms of accounting and financial reporting."
        },
        {
            name: "Forensics & Litigation",
            firstLetter: "F",
            img: R6,
            content: "A variety of services that result from ongoing or upcoming disputes or litigation cases are provided to clients by the forensics & litigation segment. Offerings include litigation support, electronic discovery, forensic accounting services, and dispute advisory. Forensic accounting integrates investigative, auditing, and accounting expertise."
        },

    ]

    return (
        <div className='research-outer'>
            <Top bgimg={Financial_img1} />
            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Financial Advisory Services</u>
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
                <u>Featured Blog posts</u>
            </div>
            <div className='research-component'>
                <Blogs />
            </div>

        </div>
    )
}
