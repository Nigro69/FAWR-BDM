import React, { useEffect } from 'react'
import "../../Industries/Industries.css"

import Energy_img1 from "./EnergyImages/Energy_img1.png"

import Grid from '../../../Templates/Grid/Grid'

import Award from "../../../LandingPage/Awards/Award"
import Project from "../../../LandingPage/Projects/Project"
import Blogs from "../../../LandingPage/Blogs/Blog"
import Industrytop from '../../../Templates/IndustriesTemplates/IndustryTop/Industrytop'
import Challenges from '../../../Templates/IndustriesTemplates/Challenges/Challenges'

import I1 from "./EnergyImages/1.png"
import I2 from "./EnergyImages/2.png"
import I3 from "./EnergyImages/3.png"
import I4 from "./EnergyImages/4.png"



import Igrid from '../../../Templates/IndustriesTemplates/IndustryGrid/Igrid'
import Iservices from '../../../Templates/IndustriesTemplates/IndustryServices/Iservices.js'
import Meeting from '../../../Templates/IndustriesTemplates/Meeting/Meeting'
import Layout from '../../../Templates/Layout/Layout'


export default function Energy() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const challengeData = [
        "Capital Investment",
        "Smart Grid",
        "Stiff competition",
        "Distributed Energy Resources",
        "Energy Storage",
        "Evolving Business Model"
    ]

    const gridData = [
        {
            name: "Business agility and efficiency",
            img: I1,
            content: "When meeting the demands of both the existing and new power systems, energy and utility businesses need a flexible, contemporary network architecture that drives better efficiency. Benefit from next-generation networking architecture and connectivity solutions to improve resource management and boost agility:",
            points: ["Reliable, scalable connectivity ",
                "Boost connectivity speed",
                " Improve service delivery and application performance"],
            p: "1"
        },

        {
            name: "Smart security",
            img: I2,
            content: "Customers and regulators want their utilities to remain operational despite inclement weather, cyberattacks and hacks, and catastrophic occurrences, therefore grid dependability and resiliency are crucial. In order to protect your smart grid from attacks and maintain service, we provide intelligent security solutions:",
            points: ["Cyber risk monitoring",
                "Threat monitoring",
                " Managed Security Services",
                "Mobile security"],
            p: "1"
        },

        {
            name: "Grid integration",
            img: I3,
            content: "Distribution grids are being improved by smart technologies like the internet of things (IoT) and machine-to-machine (M2M) capabilities to better serve customers. To assist your energy ecosystem, use near real-time analytics on operations and consumption:",
            points: [" Intelligent Energy",
                " Intelligent Gas",
                " Intelligent Water",
                "Smart Cities",
                " Utility Smart Meter Calculator"],
            p: "1"
        },

        {
            name: "Remote resource management",
            img: I4,
            content: "Employing artificial intelligence and machine learning, energy and utility firms like yours are attempting to simplify processes. You're prepared to maintain asset performance, save time, manage resources, and increase support with the help of digitally integrated fleet and asset management solutions:",
            points: ["Allows employees and offices to stay connected on multiple devices, in multiple locations",
                "Drone management platform enables remote field management and maintenance support",
                "Track customer assets"],
            p: "1"
        },

    ]
    return (
        <Layout>
            <div className='industries-outer'>
                <Industrytop bgimg={Energy_img1} 
                    content="The industrial world today is experiencing an exponential rise of data, particularly in the energy and utilities sector. Unfortunately, despite the fact that there is a wealth of useful data available, a large portion of it is still traditionally siloed across business units, making it difficult for businesses involved in the production of conventional power, renewable energy, power transmission and distribution, retail energy services, and water to optimise their operations. They struggle to efficiently maintain and run plants, transmission lines, sub-stations, power metres, water pipes, or effluents with little local presence and requirements-based dispatching. Businesses in the energy and utilities sector require digital intervention to unlock value from siloed data from several distributed assets and put it to use to provide a connected experience across functions. Are you prepared to satisfy changing market demands and provide services to clients with higher levels of sophistication? We have utility technology solutions that can support your efficient and economical resource delivery." />
                <div className='industries-title' >
                    <u>Challenges</u>
                </div>
                <div className='industries-component'>
                    <Challenges challengeData={challengeData}  />
                </div>

                <div className='industries-title' >
                    <u>Our Offerings</u>
                </div>
                <div className='industries-component'>
                    <Igrid gridData={gridData}  />
                </div>

                <div className='industries-title' >
                    <u>Our Services</u>
                </div>

                <div className='industries-component'>
                    <Iservices  />
                </div>

                <div className='industries-component'>
                    <Meeting  />
                </div>

                <div className='industries-title' >
                    <u>Awards & Recognition</u>
                </div>
                <div className='industries-component'>
                    <Award  />
                </div>

                <div className='industries-title' >
                    <u>Our Recent Projects</u>
                </div>
                {/* <div className='industries-component'>
                <Project  />
            </div> */}

                <div className='industries-title' >
                    <u>Featured Blog posts</u>
                </div>
                <div className='industries-component'>
                    <Blogs  />
                </div>

            </div>
        </Layout>
    )
}
