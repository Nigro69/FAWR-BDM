import React from 'react'
import "../../Industries/Industries.css"

import Travel_img1 from "./TravelImages/Travel_img1.png"

import Grid from '../../../Templates/Grid/Grid'

import Award from "../../../LandingPage/Awards/Award"
import Project from "../../../LandingPage/Projects/Project"
import Blogs from "../../../LandingPage/Blogs/Blog"
import Industrytop from '../../../Templates/IndustriesTemplates/IndustryTop/Industrytop'
import Challenges from '../../../Templates/IndustriesTemplates/Challenges/Challenges'

import I1 from "./TravelImages/1.png"
import I2 from "./TravelImages/2.png"
import I3 from "./TravelImages/3.png"
import I4 from "./TravelImages/4.png"
import I5 from "./TravelImages/5.png"


import Igrid from '../../../Templates/IndustriesTemplates/IndustryGrid/Igrid'
import Iservices from '../../../Templates/IndustriesTemplates/IndustryServices/Iservices.js'
import Meeting from '../../../Templates/IndustriesTemplates/Meeting/Meeting'


export default function Travel({ mode }) {

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    const challengeData = [
        "Supply chain integration",
        "Reverse logistics",
        "Digital transformation",
        "E-Commerce Boom",
        "Customer security",
        "Improving Customer Service"
    ]

    const gridData = [
        {
            name: "Operational Capacity Planning",
            img: I1,
            content: "At the operational level, effective daily management of transit hubs and transportation routes is necessary. Planning for vehicle capacity and staff shifts in warehouses and distribution centres are also a part of this management. With the aid of BDM's Big Data solution, logistics and transportation firms may better understand the dynamics both inside and outside of the distribution network, allowing them to predict how those dynamics will affect needed capacity.",
            points: ["Personal shift planning",
                "Market oriented demand management"],
            p: "1"
        },

        {
            name: "Information Modeling",
            img: I2,
            content: "With the help of sensor-driven technology, our IoT solution enables the collection of product data and provides continuous end-to-end view of stock levels. Visualizations aid in comprehending the characteristics of data and choosing the best analytics methods. Transport and logistics firms will be able to build new applications with the help of our Big Data and IoT platform, which will make them wiser and enable them to offer comprehensive solutions rather than stranded static data in software products with no real use.",
            points: ["Advanced data visualization",
                "Event driven architecture"],
            p: "1"
        },

        {
            name: "Predictive Network Planning",
            img: I3,
            content: "Providers of transportation and logistics are quite familiar with the supply chains of their clients. A model defining the topology of the whole supply chain and monitoring of the factors influencing this supply chain's performance must be connected and constantly compared in order to meet the customer's need for predictive risk assessment. Our Big Data solution gives transport and logistics professionals the ability to get information that is useful for identifying supply chain hazards. We offer complicated event processing methods as well as semantic analytics, which are necessary to find patterns in this stream of connected bits of data.",
            points: ["Topology and network distribution",
                "Resource Optimization"],
            p: "1"
        },

        {
            name: "Connected & Smart Enterprise",
            img: I4,
            content: "Smart consumers today connect with service providers across a variety of platforms, including mobile, tablet, online, social media, etc. Therefore, businesses must constantly be on their toes to deliver a faultless travel cycle; this is only feasible if a business is connected and smart.",
            points: ["Application Integration",
                "Enterprise Communication Bus",
                "Social Media Connect", "Cloud Infrastructure, Data & Security Management", "Social Integration"],
            p: "1"
        },

        {
            name: "Mobility Solutions",
            img: I5,
            content: "People's dependence on smartphones has increased as a result of their widespread use. Users of mobile phones have access to information at any time and from any location. Travel, Transport and Logistics businesses may provide their consumers with the best services possible with the aid of BDM Mobility Solutions.",
            points: ["Automated Notification",
                "Airport & City Navigation with Augmented Reality",
                "Make mobile payment", "Distribute Digital Coupons"],
            p: "1"
        },


    ]
    return (
        <div className='industries-outer'>
            <Industrytop bgimg={Travel_img1} mode={mode}
                content="Due to technology improvements, the TTL sector has undergone a digital transformation over time. The transportation sector's reach and perspective are being gradually expanded by modern technology and digitization. The TTL value chain today offers services in the areas of e-ticketing, payment wallets, shared mobility, and last-mile connection, to name a few improvements and breakthroughs. The capacity to give information, services, and transportation assistance everywhere, anytime is one trend in the sector, along with the ability to purchase tickets, share rides or cabs, and manage travel statistics.  The need for effective and user-friendly end-user networks is therefore urgent. This opens up huge prospects for IT/ITeS businesses to capitalise on the demand for these services. With the aid of lead generation services in the travel, transportation, and logistics sectors, BDM works with the IT/ITeS businesses to schedule meetings with the appropriate stakeholders and decision-makers." />
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
