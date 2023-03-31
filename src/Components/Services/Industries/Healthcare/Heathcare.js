import React, {useEffect} from 'react'
import "../../Industries/Industries.css"

import Healthcare_img1 from "./HealthcareImages/Healthcare_img1.png"

import Grid from '../../../Templates/Grid/Grid'

import Award from "../../../LandingPage/Awards/Award"
import Project from "../../../LandingPage/Projects/Project"
import Blogs from "../../../LandingPage/Blogs/Blog"
import Industrytop from '../../../Templates/IndustriesTemplates/IndustryTop/Industrytop'
import Challenges from '../../../Templates/IndustriesTemplates/Challenges/Challenges'

import I1 from "./HealthcareImages/1.png"
import I2 from "./HealthcareImages/2.png"
import I3 from "./HealthcareImages/3.png"
import I4 from "./HealthcareImages/4.png"


import Igrid from '../../../Templates/IndustriesTemplates/IndustryGrid/Igrid'
import Iservices from '../../../Templates/IndustriesTemplates/IndustryServices/Iservices.js'
import Meeting from '../../../Templates/IndustriesTemplates/Meeting/Meeting'


export default function Healthcare({ mode }) {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const challengeData = [
        "Healthcare regulatory changes",
        "Broken supply chain across all industries",
        "Collateral healthcare issues",
        "Dedicated telemedicine platform",
        "Efficient data monitoring",
        "Operational efficiency"
    ]

    const gridData = [
        {
            name: "Patient Experience",
            img: I1,
            content: "The prevalence of linked devices and the rise of the IoMT (Internet of Medical Things) have profoundly changed how people seek care, communicate with healthcare professionals, track their progress, and manage recovery. Digital health has been a major disruptor in this area.",
            points: ["Wearables & IOT for tracking fitness and health parameters",
                "Remote Monitoring",
                "Tele Consultation",
                "Apps for personalized recommendations and continuous engagement",
                "Crowdsourcing of reviews and recommendations, support groups and advice"],
            p: "1"
        },

        {
            name: "Provider",
            img: I2,
            content: "The patient is at the core of the healthcare ecosystem, and a number of providers are vying for their business. As a result, physicians are now obligated to deliver a seamless experience from check-in through recovery, which in addition to being best-in-class must also be customised and adapted to each patient's particular needs.",
            points: ["Patient Monitoring, Remote Consultation and Chronic Patient care",
                "Appointments, Scheduling and Marketing",
                "Blockchain based Secure Supply Chains",
                "Smart Building, Asset Monitoring and Utilization", "AI driven predictive solutions to help in proactive care"],
            p: "1"
        },

        {
            name: "Payer",
            img: I3,
            content: "The response time to an emergency or medical condition might be the difference between life and death in the field of healthcare. Digital technology have the potential to significantly shorten the time it takes to process insurance from several days to just a few hours. It should come as no surprise that many Payers are in the process of upgrading their core in order to maximise results while delivering better, faster, and more efficient member experiences.",
            points: ["CRM, Customer Experience",
                "Analytics-AI driven claims workflow",
                "Policy administration and pricing",
                "eCommerce and Comparisons"],
            p: "1"
        },

        {
            name: "Compliance & Security",
            img: I4,
            content: "Since compliance affects the interaction between patients and healthcare providers, its significance in the healthcare sector cannot be overstated. Government standards governing data protection, privacy, regulatory clearances, and certification must be scrupulously adhered to every every component of the healthcare ecosystem.",
            points: ["Secure Product development",
                "Cloud Security and Dev Sec Ops",
                "Compliance with country specific regulations related to PHI (Patient Health Information)"],
            p: "1"
        },


    ]
    return (
        <div className='industries-outer'>
            <Industrytop bgimg={Healthcare_img1} mode={mode}
                content="The landscape of the life sciences and healthcare industries is changing for a variety of reasons, including rising prices, developing patient engagement strategies, and shifting regulatory environments. Additionally, the Life Sciences and Healthcare industries are under intense financial strain as a result of their requirement to go digital. The Life Sciences and Healthcare industries face highly strict compliance requirements and regulatory frameworks when engaging with IT / ITeS suppliers. But during the past few years, expenditure on these has increased. The use of next-generation technology is highly widespread in the healthcare sector, which offers enormous prospects for service providers. BDM collaborates with IT / ITeS service providers to generate leads for next-generation technology services in the healthcare and pharmaceutical sectors." />
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
