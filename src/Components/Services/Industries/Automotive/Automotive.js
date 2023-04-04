import React, { useEffect } from 'react'
import "../../Industries/Industries.css"

import Automotive_img1 from "./AutomotiveImages/Automotive_img1.png"

import Grid from '../../../Templates/Grid/Grid'

import Award from "../../../LandingPage/Awards/Award"
import Project from "../../../LandingPage/Projects/Project"
import Blogs from "../../../LandingPage/Blogs/Blog"
import Industrytop from '../../../Templates/IndustriesTemplates/IndustryTop/Industrytop'
import Challenges from '../../../Templates/IndustriesTemplates/Challenges/Challenges'

import I1 from "./AutomotiveImages/1.png"
import I2 from "./AutomotiveImages/2.png"
import I3 from "./AutomotiveImages/3.png"
import I4 from "./AutomotiveImages/4.png"


import Igrid from '../../../Templates/IndustriesTemplates/IndustryGrid/Igrid'
import Iservices from '../../../Templates/IndustriesTemplates/IndustryServices/Iservices.js'
import Meeting from '../../../Templates/IndustriesTemplates/Meeting/Meeting'
import Layout from '../../../Templates/Layout/Layout'


export default function Automotive() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const challengeData = [
        "Supply chain disruptions",
        "Technological advancement",
        "Strategic Plan",
        "Competitive products",
        "Sustainability",
        "Self-driving"
    ]

    const gridData = [
        {
            name: "Order fulfillment & Fleet Tracking",
            img: I1,
            content: "A novel CRM-integrated approach for real-time order tracking utilising GPS and delivery process optimization",
            points: ["Ensure vehicle availability/options to optimize operational costs",
                "Daily demand based route plan",
                "Driving directions to vehicle drivers using GPS",
                "Inventory tracking from source to delivery point",
                "Reprioritizing delivery schedule and real time order status tracking"],
            p: "1"
        },

        {
            name: "Aided selling using mobile devices ",
            img: I2,
            content: "New technology allows 3D graphics to be shown on mobile devices like tablets and smartphones with a very small footprint. It enables interaction with the 3D model, assures a better customer experience during and after the sale, provides technical staff training, creates an electronic catalogue, etc.",
            points: ["Ability for OEMs to update content dynamically",
                "Enhanced brand/product experience for customers"],
            p: "1"
        },

        {
            name: "Connected Car and Vehicles",
            img: I3,
            content: "In order to assist OEM in developing cutting-edge products, BDM uses a domain-centric strategy when offering skills in next-generation technologies like linked automobiles, NFC, and V2V communications.",
            points: ["Advanced driving assistance systems, active safety, body electronics, entertainment and navigation, instrument clusters, and telematics",
                "In-board and system design, reliability engineering, verification and validation, and value-added services"],
            p: "1"
        },

        {
            name: "Implementing Corporate Planning and Consolidation",
            img: I4,
            content: "The BPC experience of BDM has aided in the installation of SAP and other technologies and is assisting businesses in understanding the benefits of enterprise planning and consolidation.",
            points: ["Collaboration Platform for Field Service and Manufacturing: ",
                "Engineering Services"],
            p: "1"
        },


    ]
    return (
        <Layout>
            <div className='industries-outer'>
                <Industrytop bgimg={Automotive_img1} 
                    content="One may reasonably argue that the automotive industry has undergone a paradigm change in recent years. This is especially true when other contemporary needs are taken into account, such as autonomous driving, shared mobility, diminishing fuel reserves, and restrictive laws. In our opinion at BDM, the upheaval in the car sector is only a chance to embrace digitalization and change how our customers view their supply chains, manufacturing capabilities, and data analytics. With our distinctive knowledge of cutting-edge technology, we offered a wide range of services. Veterans of the car industry have moved into new areas and enhanced their operational performance with our assistance; now, you can too! The automotive sector, which comprises businesses engaged in the designing, marketing, producing, and reselling of automobiles among other things, is one of the most significant revenue-generating industries in the whole globe. The car business is profitable, but it also confronts a number of challenges, including shifting customer tastes, the rise of new developing economies, technology improvements, more digitalization, automation, and new environmentally friendly options." />
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
