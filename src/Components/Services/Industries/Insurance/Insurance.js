import React, { useEffect } from 'react'
import "../../Industries/Industries.css"

import Insurance_img1 from "./InsuranceImages/Insurance_img1.png"

import Grid from '../../../Templates/Grid/Grid'

import Award from "../../../LandingPage/Awards/Award"
import Project from "../../../LandingPage/Projects/Project"
import Blogs from "../../../LandingPage/Blogs/Blog"
import Industrytop from '../../../Templates/IndustriesTemplates/IndustryTop/Industrytop'
import Challenges from '../../../Templates/IndustriesTemplates/Challenges/Challenges'

import I1 from "./InsuranceImages/1.png"
import I2 from "./InsuranceImages/2.png"
import I3 from "./InsuranceImages/3.png"
import I4 from "./InsuranceImages/4.png"
import I5 from "./InsuranceImages/5.png"


import Igrid from '../../../Templates/IndustriesTemplates/IndustryGrid/Igrid'
import Iservices from '../../../Templates/IndustriesTemplates/IndustryServices/Iservices.js'
import Meeting from '../../../Templates/IndustriesTemplates/Meeting/Meeting'
import Layout from '../../../Templates/Layout/Layout'


export default function Insurance() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const challengeData = [
        "Channel management",
        "Technological advancement",
        "Legacy system",
        "Handling huge amounts of data",
        "Time to market",
        "Product augmentation"
    ]

    const gridData = [
        {
            name: "Digital Insurance Framework",
            img: I1,
            content: "Reimagining how business is conducted via the use of digital technology is referred to as digital transformation. There are generally four components to digital business models: content (what is offered to customers, such as products, awareness, and services), customer experience (how it is delivered, such as personalised, omnichannel, convenience, etc.), business logistics (visibility, consistency, proactivity, etc.), and insights-driven business models (Data driven intelligence embedded to process). Design thinking seminars for value stream mapping and reimagination, agile implementation methodology are part of BDM service for digital transformation",
            p: "0"
        },

        {
            name: "Conversational Engagement",
            img: I2,
            content: "With the fewest possible client inputs, BDM’s conversational solution can provide a premium estimate for both L&A and P&C LOBs. Our approach allows customers the ability to change any input at any moment to obtain a more customised premium estimate while keeping humanised contact as the primary focus. We assist insurers in reaching a sizable number of clients thanks to our solution's capacity to handle several channels, including popular messengers and social media behemoths. As a result, we assist both clients and insurers by enabling them to receive premium estimates via cellphones at any time and from any location.",
            p: "0"
        },

        {
            name: "Insurance Intelligent Process Automation",
            img: I3,
            content: "With its intelligent automation solution for insurance, BDM aims to address the aforementioned questions. Along the whole insurance value chain, intelligent automation aids insurers in streamlining their business operations. For insurers, it simplifies front and back office business procedures. Intelligent automation adopts a comprehensive approach to automation by combining Robotic Process Automation (RPA), Conversational Solutions, Natural Language Processing, Character / Image Recognition Techniques, and Third-Party Data Extraction and Enrichment Tools.",
            points: ["Learner user behavior tracking.",
                "Adaptive & predictive analytics for learner performance, retention, & engagement.",
                "Big data development and implementation services along with batch and real-time analytics services.",
                "Content instrumentation services that track meta data, learner activities & usage statistics."],
            p: "0"
        },

        {
            name: "Claims Transformation",
            img: I4,
            content: "For insurance policyholders and beneficiaries, claims represent a crucial turning point. Claimants' experiences are greatly impacted by the ease of submitting a claim, transparency in the state of the procedure, clarity in the paperwork requirements, speed of decision-making, and settlement ratios. As a result, it affects insurance firms' reputation.",
            points: ["Digitization of the claims process",
                "Conversational solutions with pre-built use cases for claims.",
                "IoT platforms for damage assessment using drones",
                "Business intelligence for the claims function covering KPIs related to loss and expense ratios, losses paid and incurred, and operational claims counts."],
            p: "1"
        },
        {
            name: "Digitizing Small Commercial Insurance business",
            img: I5,
            content: "The fundamental issues in a digital sales and service process, such as personalised coverages, insights-driven suggestions, and conversational interaction powered by artificial intelligence, have been addressed by BDM by using a design thinking methodology.The solution method from BDM employs a bouquet of coverages strategy to customise based on the risk characteristics and industrial sector of the customer. Additionally, it makes use of social validation strategies to give information on the preferences of policyholders from comparable sectors. Last but not least, it also makes use of an AI-powered chat and voice bot to make proactive and helpful interventions .",
            p: "0"
        },


    ]
    return (
        <Layout>
            <div className='industries-outer'>
                <Industrytop bgimg={Insurance_img1} 
                    content="The insurance sector is dealing with quickening technology development and more stringent governmental regulatory compliance. Insurance firms are utilising Internet of Things, Advanced Analytics, and Machine Learning to generate precise individual risk profiles in order to meet the rising demand for individualised rates and usage-based coverage. This offers a special chance for IT & ITeS service providers to support the insurance sector's transformation and adaptation. The difficulty for IT / ITeS providers is to get their message through as the insurance sector increases its spending with IT and ITeS businesses to accomplish their transformational and digital aspirations. Our comprehensive databases, account mapping, and research-driven strategy, which aids our clients in the IT & ITeS business in connecting with the appropriate decision-makers and influencers, are the results of our competence in lead generation for insurance." />
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
