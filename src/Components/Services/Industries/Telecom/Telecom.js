import React from 'react'
import "../../Industries/Industries.css"

import Telecom_img1 from "./TelecomImages/Telecom_img1.png"

import Grid from '../../../Templates/Grid/Grid'

import Award from "../../../LandingPage/Awards/Award"
import Project from "../../../LandingPage/Projects/Project"
import Blogs from "../../../LandingPage/Blogs/Blog"
import Industrytop from '../../../Templates/IndustriesTemplates/IndustryTop/Industrytop'
import Challenges from '../../../Templates/IndustriesTemplates/Challenges/Challenges'

import I1 from "./TelecomImages/1.png"
import I2 from "./TelecomImages/2.png"
import I3 from "./TelecomImages/3.png"
import I4 from "./TelecomImages/4.png"



import Igrid from '../../../Templates/IndustriesTemplates/IndustryGrid/Igrid'
import Iservices from '../../../Templates/IndustriesTemplates/IndustryServices/Iservices.js'
import Meeting from '../../../Templates/IndustriesTemplates/Meeting/Meeting'


export default function Telecom({ mode }) {

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    const challengeData = [
        "Complex Operational Processes",
        "Network Security",
        "Personalized Customer Service",
        "Digital transformation",
        "Lack of Telecom Infrastructure",
        "Data Security"
    ]

    const gridData = [
        {
            name: "Personalized Services",
            img: I1,
            content: "The Big Data solution from BDM aids in the development of complex 360-degree profiles. This makes it possible for telecom firms to provide better, more individualised services or goods at every stage of the buying process.",
            points: ["Voice, SMS and data usage patterns",
                "Past purchase patterns",
                "Service usage",
                "Geographic location",
                "Type and number of devices used"],
            p: "1"
        },

        {
            name: "Network Optimization",
            img: I2,
            content: "To increase network performance using already available resources, radio network optimization is carried out. Improved network resource utilisation, problem-solving of current and anticipated issues, and identification of new solutions for future planning are the objectives. To balance coverage, capacity, and quality, radio network optimization significantly improves the network's service quality and resource utilisation.",
            points: ["Network Parameter Audit and Optimization",
                "Network Performance Statistics Analysis (Network Audit) and Optimization",
                "Data Servicer Analysis, Test Evaluation and Optimization"],
            p: "1"
        },

        {
            name: "Business Support Systems",
            img: I3,
            content: "Our clients, who are seeing the telecom industry's ever-growing transformation, are able to manage their operations in pace with the development and develop whole new business models",
            points: ["Charging and billing systems",
                "CRM systems",
                "Customer self-service portals",
                "Data analysis and reporting",
                "Custom web and mobile applications"],
            p: "1"
        },

        {
            name: "DAS Network Design",
            img: I4,
            content: "The most efficient and dependable solution for providing in-building wireless coverage and capacity is still the Distributed antenna system (DAS). Given that most individuals spend their time at home, inside of offices, or in other business places, indoor wireless access is essential. Due to the widespread use of smart phones and other devices, wireless networks must now transport significant amounts of data traffic in addition to voice traffic.",
            points: ["Site survey report",
                "Antenna Layout Design",
                "Coverage Prediction/Simulation Plots", "Antennas EiRP Report"],
            p: "1"
        },

    ]
    return (
        <div className='industries-outer'>
            <Industrytop bgimg={Telecom_img1} mode={mode}
                content="The telecom sector is essential to the overall expansion of other industries. The needs of customers and the changing nature of technology provide special difficulties for the telecom industry. Telecom providers are always making investments in network improvements and capacity expansion to stay up with the ever changing industry. Through the monetization of data, providing and creating content, and investigating verticals, they are investigating new business sources. These businesses must thrive in the areas of IoT, connected devices, and security in order to compete. The Telecom firms will have to make large investments in backend technology, though, to compete in these sectors. The BPO/ITeS and IT service providers would benefit greatly from this. Using our huge databases, account profiling, and research-driven lead generation services in the telecom business, BDM works with top IT/ITeS service providers to link them with the appropriate decision-makers." />
            <div className='industries-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Challenges</u>
            </div>
            <div className='industries-component'>
                <Challenges challengeData={challengeData} mode={mode} />
            </div>

            <div className='industries-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u> Our Offerings</u>
            </div>
            <div className='industries-component'>
                <Igrid gridData={gridData} mode={mode} />
            </div>

            <div className='industries-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u> Our Services</u>
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
                <u> Our Recent Projects</u>
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
