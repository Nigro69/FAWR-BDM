import React from 'react'
import "../../Industries/Industries.css"

import Airline_img1 from "./AirlineImages/Airline_img1.png"

import Grid from '../../../Templates/Grid/Grid'

import Award from "../../../LandingPage/Awards/Award"
import Project from "../../../LandingPage/Projects/Project"
import Blogs from "../../../LandingPage/Blogs/Blog"
import Industrytop from '../../../Templates/IndustriesTemplates/IndustryTop/Industrytop'
import Challenges from '../../../Templates/IndustriesTemplates/Challenges/Challenges'

import I1 from "./AirlineImages/1.png"
import I2 from "./AirlineImages/2.png"
import I3 from "./AirlineImages/3.png"
import I4 from "./AirlineImages/4.png"
import I5 from "./AirlineImages/5.png"


import Igrid from '../../../Templates/IndustriesTemplates/IndustryGrid/Igrid'
import Iservices from '../../../Templates/IndustriesTemplates/IndustryServices/Iservices.js'
import Meeting from '../../../Templates/IndustriesTemplates/Meeting/Meeting'


export default function Airline({ mode }) {

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    const challengeData = [
        "Digital Transformation",
        "Airline Infrastructure",
        "In-Flight Connectivity",
        "Contactless Technology",
        "Technological Advancement",
        "Big Data"
    ]

    const gridData = [
        {
            name: "Customer Experience",
            img: I1,
            content: "The BDM have developed a paradigm for creating consumer experiences that combines three disruptive triggers: location-based services (Lo), mobile apps (Mo), and personalization (Me). Our solution addresses how these triggers may be integrated to change the digital customer experience by utilising our in-depth knowledge in business mobility and the data analytics & insights arena.",
            points: ["Location based experience personalization",
                "Omni channel Experience.",
                "Customer Engagement & Digital Loyalty Solutions"],
            p: "1"
        },

        {
            name: "Analytics & Business Insights",
            img: I2,
            content: "Business intelligence and analytics are crucial in solving various operational and revenue-impacting issues. Travel firms may distinguish their customer experiences and boost their income with the correct selection of reports, the flexibility to generate ad-hoc reports without any technical expertise, a single source of truth, and good data quality.",
            points: ["Marketing Analytics",
                "Revenue Management",
                "Customer Analytics",
                "Digital Analytics"],
            p: "1"
        },

        {
            name: "Mobility Solutions",
            img: I3,
            content: "Today's passengers desire to have instant access to all travel-related services and information wherever they are and at any time. BDM offers a comprehensive selection of mobility solutions together with cutting-edge accelerators that may give your airline business the ultimate mobile advantage. Our solution range fully addresses the mobility requirements of contemporary travellers.",
            points: ["Mobility Advisory Services",
                "Mobility Application Development Services",
                "Mobility Quality Assurance (QA) Services",
                "Enterprise Mobility Management (EMM)"],
            p: "1"
        },

        {
            name: "Infrastructure Management",
            img: I4,
            content: "The infrastructure transformation services provided by BDM assist businesses answer this issue, prioritizing the proper projects, ensure service transformation that decreases time to market and therefore aids in growing market share.",
            points: ["Cloud Technology Management Services",
                "Unified Communication and Device Management",
                "Big Data & Database Management", "anaged Infrastructure Services (GNOC) – 24×7"],
            p: "1"
        },

        {
            name: "Security Management",
            img: I5,
            content: "he Security-as-a-Service (SaaS) offerings from BDM are comprehensive and include compliance management, identity and access governance, cyber security, and application and mobile security. There are several options provided:",
            points: ["Compliance Monitoring",
                "Threat Monitoring",
                "Identity Monitoring",
                "Cyber Monitoring"],
            p: "1"
        },


    ]
    return (
        <div className='industries-outer'>
            <Industrytop bgimg={Airline_img1} mode={mode}
                content="Customer experience is crucial to the airline industry. Although airlines strive to offer a seamless travel experience while maximising business efficiency, estimates indicate that airline spending on security has increased by 25% over the past year, primarily as a result of data collection and transmission, capital expenditure, security delays, and security diversions. It's a good opportunity for airlines to increase operational efficiency, carry out large-scale change, and provide a very distinctive consumer travel experience because of the unstable economy, rising operating costs, and rising passenger numbers. These may be accomplished by depending on useful data, enhanced e-commerce tactics, reliable back-end operational systems, and social media interactions. For the airline industry, BDM Technologies has created a distinctive combination of services and solutions. Our services are built around the fundamental technological pillars of cloud computing, social computing, mobility, and analytics, which are ideal for the travel sector." />
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
