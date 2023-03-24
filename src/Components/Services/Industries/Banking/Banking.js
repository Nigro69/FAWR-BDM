import React from 'react'
import "../../Industries/Industries.css"

import Banking_img1 from "./BankingImages/Banking_img1.png"

import Grid from '../../../Templates/Grid/Grid'

import Award from "../../../LandingPage/Awards/Award"
import Project from "../../../LandingPage/Projects/Project"
import Blogs from "../../../LandingPage/Blogs/Blog"
import Industrytop from '../../../Templates/IndustriesTemplates/IndustryTop/Industrytop'
import Challenges from '../../../Templates/IndustriesTemplates/Challenges/Challenges'

import I1 from "./BankingImages/1.png"
import I2 from "./BankingImages/2.png"
import I3 from "./BankingImages/3.png"
import I4 from "./BankingImages/4.png"


import Igrid from '../../../Templates/IndustriesTemplates/IndustryGrid/Igrid'
import Iservices from '../../../Templates/IndustriesTemplates/IndustryServices/Iservices.js'
import Meeting from '../../../Templates/IndustriesTemplates/Meeting/Meeting'


export default function Banking({ mode }) {

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    const challengeData = [
        "Traditional banking habits",
        "Security and fraud instances",
        "Cross-border transactions",
        "Competitive products",
        "Pressure on operating margins",
        "Regulatory compliance"
    ]

    const gridData = [
        {
            name: "Governance Risk & Compliance",
            img: I1,
            content: "In order for a company to achieve its goals, the three core elements Governance, risk management, and compliance must all function in unison. Data governance and reconciliation processes are made simpler and more automated with the aid of BDM Governance Risk & Compliance solutions for Banking & Financial IT services, which also support Basel, Dodd-Frank, and FATCA compliance.",
            points: ["Credit Risk & Fraud Analytics",
                "Regulatory reporting",
                "Data Governance",
                "Trade Reconciliation"],
            p: "1"
        },

        {
            name: "Smart Operations",
            img: I2,
            content: "Banks occasionally neglect to manage their fundamental operations well due to the intense pressure to keep up with the quick pace of tech-savvy customer requirements. Operational effectiveness is increased with the aid of BDM Smart Operation Solutions for Banking & Financial IT Services. For the purpose of starting automation and reengineering processes, we employ our BI & Insights application.",
            points: ["Real-Time Analytics",
                "Case Management as a Service",
                "Straight Through Processing",
                "End to End Testings", "Campaign Management", "Dashboards and MIS", "Alternative Channel Strategies", "Data migration and consolidation"],
            p: "1"
        },

        {
            name: "Customer Experience",
            img: I3,
            content: "It is becoming increasingly challenging for banks to attract and keep the interest of their tech-savvy consumers due to the rapidly increasing customer expectations and the quick arrival of rivals. By acquiring deep insights into consumer wants and preferences, BDM Customer Experience Solutions for Banking & Financial Services helps the business evolve so that it can serve its customers better.",
            points: ["Social Banking Ecosystem ",
                "Social Gamification",
                "Customer Lifetime Value",
                "Financial Advisory Tools"],
            p: "1"
        },

        {
            name: "Digital Landing & Leasing Service",
            img: I4,
            content: "The traditional method of managing lending and leasing operations has been rocked by the constantly evolving borrower expectations for a simple and quick digital experience as well as a flexible lending experience for lenders. With less human work required to handle backend operations thanks to BDM expertise in integrating Q2's Lending and Leasing solutions, Banking and Financial Services can digitise their client experience while also boosting efficiency and profitability.",
            points: ["CRM implementation",
                "Automated underwriting with risk scoring and KYC/AML through API integration",
                "Automated funding, invoices and repayments with payment gateway integrations"],
            p: "1"
        },


    ]
    return (
        <div className='industries-outer'>
            <Industrytop bgimg={Banking_img1} mode={mode}
                content="Major upheavals are occurring in the banking and financial services sector, whether it is conventional banks defying digital service providers or changing banking rules. In addition, the Banking and Financial Services sector's complex organisational structure makes it challenging for any salesman to identify the right decision-makers and schedule meetings with them. In order to provide lead generation services for the BFS sector, BDM collaborates with top IT / ITeS service providers as an extension of their sales staff. We assist our customers in establishing connections with the pertinent decision-makers across the C-level suite by utilising our comprehensive databases, account profiling, and research-driven approach." />
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
