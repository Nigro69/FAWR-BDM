import React, {useEffect} from 'react'
import "../../Industries/Industries.css"

import Ecommerce_img1 from "./EcommerceImages/Ecommerce_img1.png"

import Grid from '../../../Templates/Grid/Grid'

import Award from "../../../LandingPage/Awards/Award"
import Project from "../../../LandingPage/Projects/Project"
import Blogs from "../../../LandingPage/Blogs/Blog"
import Industrytop from '../../../Templates/IndustriesTemplates/IndustryTop/Industrytop'
import Challenges from '../../../Templates/IndustriesTemplates/Challenges/Challenges'

import I1 from "./EcommerceImages/1.png"
import I2 from "./EcommerceImages/2.png"
import I3 from "./EcommerceImages/3.png"
import I4 from "./EcommerceImages/4.png"
import I5 from "./EcommerceImages/5.png"


import Igrid from '../../../Templates/IndustriesTemplates/IndustryGrid/Igrid'
import Iservices from '../../../Templates/IndustriesTemplates/IndustryServices/Iservices.js'
import Meeting from '../../../Templates/IndustriesTemplates/Meeting/Meeting'


export default function Ecommerce({ mode }) {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const challengeData = [
        "Customer Retention",
        "Technology Partnerships",
        "Complicated user experience (UX)",
        "Omni-channel experience",
        "Data Security",
        "Cyber-security"
    ]

    const gridData = [
        {
            name: "Omni Channel",
            img: I1,
            content: "The ability to enhance the consumer experience ('anywhere, anytime') as linked smartphones and other internet-enabled devices increase is the next opportunity.",
            points: ["m-Commerce and e-Commerce applications and platforms",
                " Commerce through Smart Watch and TV",
                "Social Commerce and marketing",
                " Front end modernization and API enablement", " Personalization"],
            p: "1"
        },

        {
            name: "Advanced Customer Insights",
            img: I2,
            content: "In order to connect with customers and offer more individualised services, analytics and insights are an essential component of digital commerce channels. BDM offers cutting-edge insights on consumer behaviour and corporate operations.",
            points: ["Buyer’s Behavior Prediction",
                "Cart Abandonment",
                " Dynamic Pricing",
                " Product Recommendations", "Demand Forecasting", " Sentiment Analysis"],
            p: "1"
        },

        {
            name: "Customer Loyalty & Rewards",
            img: I3,
            content: "Experiences build consumer loyalty, which is driving a move away from transaction-based systems and toward continuously forging strong connections with customers.",
            points: ["360 degree customer engagement ",
                "Personalized messages, user interface and information",
                "Personalized and Real time coupons",
                "Customer Advocacy", "Peer to Peer and Social Deals"],
            p: "1"
        },

        {
            name: "Platform Extension",
            img: I4,
            content: "Existing ecommerce platforms need to be upgraded to enable new capabilities as new technologies and devices develop.",
            points: ["Digital Wallets",
                "Contextual Search",
                "Search Engine Optimization", "Integration with Third Party Applications and SDKs like Apple touch, Masterpass, Google Wallet"],
            p: "1"
        },

        {
            name: "Engineering Efficiency",
            img: I5,
            content: "Due to shifting consumer expectations and the quick speed of technological innovation, businesses are evolving quickly. Businesses must use modern engineering technologies for a quicker time to market if they are to keep up and continually innovate.",
            points: ["DevOps",
                "Test Automation",
                "Mobile Security", "API Enablement and Management"],
            p: "1"
        },


    ]
    return (
        <div className='industries-outer'>
            <Industrytop bgimg={Ecommerce_img1} mode={mode}
                content="For retailers, brands, and cataloguers today, the development of e-commerce has created a number of opportunities across a variety of platforms. We are at a turning point when changes in consumer behaviour and points of engagement are altering how businesses must deal with customers and run their operations. There are several possibilities and hazards for stakeholders as a result of the disruption in the economics and value chains of the established industries. Businesses must better understand their customers in order to offer seamless, customised experiences. To do this, they must leverage emerging technology. A perfect e-commerce platform enables a service that continuously adjusts its operations to the always changing, tech-savvy, and cross-channel consumers, making items accessible at the appropriate location, at the right time, and at the right price." />
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
