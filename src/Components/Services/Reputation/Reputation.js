import React, { useEffect } from 'react'
import "../Research/Research.css"

import Reputation_img1 from "./ReputationImages/Reputation_img1.png"
import R1 from "./ReputationImages/1.png"
import R2 from "./ReputationImages/2.png"
import R3 from "./ReputationImages/3.png"
import R4 from "./ReputationImages/4.png"
import R5 from "./ReputationImages/5.png"



import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'
import Layout from '../../Layout/Layout'
import { useStateContext } from '../../../contexts/ContextProvider'

export default function Reputation() {
    const { mode } = useStateContext()

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const projectData = [
        {
            title: "RBA Soultion",
            content: "The process of developing internal resources, internal methodology (strategies, business processes), and internal methodologies (business processes) .",
        },
        {
            title: "Cloud Sources Pvt",
            content: "Development, succession planning , forward-looking process used to lay out a particular plan of action to employ the workforce to accomplish the organization's mission, initiatives, and goals.",
        },
        {
            title: "Meida Outsourcing",
            content: "The process of developing internal resources, internal methodology (strategies, business processes), and internal methodologies (business processes) .",
        },
    ]

    const detailData = [
        {
            title: "Good reputation is the topmost priority",
            content1: "Building a solid reputation requires time and effort, whether it's for a business, an individual, or a political organisation. But in a matter of minutes, that goodwill may be harmed or tarnished. Steps must be done to establish, nurture, and maintain reputation in a sustained way due to the hyperactive media of today, which serve as the prosecution, the jury, and the judge, as well as the continual glare of a real-time social media without borders. The demand for a specialised reputation management organisation has increased.",
            content2: "Today's reputation management consultants must have a thorough awareness of audience mindsets, be able to craft a straightforward but captivating story that is authentic and driven by persuasive communication in a variety of media. The founding fathers of the field of public relations wanted public relations to be this because it is the key to influencing opinion in an ethical manner.",
            points: ["Reputation Strategy", "Reputation Campaign", "Online Reputation", "Reputation Monitoring", "Reputation Audit"]
        }
    ]

    const gridData = [
        {
            name: "Reputation Strategy",
            firstLetter: "R",
            img: R1,
            content: "We collaborate with you strategically to help you establish and maintain the reputation of your business. Our strategy combines the application of science with the expertise of our counsellors, who collaborate with the leadership of the company to jointly develop a corporate reputation programme with an actionable agenda for a focused engagement of key stakeholders"
        },

        {
            name: "Reputation Campaign",
            firstLetter: "R",
            img: R2,
            content: "The most significant Business Influential are involved in our reputation efforts to generate advocates. Our corporate reputation initiatives engage the most crucial Business Influential for your business, going well beyond media relations. We develop comprehensive Reputation Management campaigns, whether for internet, mobile, or conventional media, or for above-the-line or below-the-line communication."
        },

        {
            name: "Online Reputation",
            firstLetter: "O",
            img: R3,
            content: "Everyone wants to have a good internet reputation, and we are here to help both individuals and companies preserve their online reputations. We have years of ORM experience and are now looking after the online reputation of several clients. Our goal is to satisfy customers, and we have a skilled staff to do just that."
        },

        {
            name: "Reputation Monitoring",
            firstLetter: "R",
            img: R4,
            content: "You may see and comprehend the truths about the power and calibre of the reputation you possess, both online and offline, thanks to our reputation measuring and monitoring solutions. Know what and who is responsible for that reputation, measure the degree to which you are linked to important issues, take precautions, assess your position in relation to rivals, and gauge how people feel about you."
        },

        {
            name: "Reputation Audit",
            firstLetter: "R",
            img: R5,
            content: "Every ORM campaign at BDM begins with a thorough evaluation of your present online reputation. This review/audit enables us to see any potential problem areas that can negatively affect how your clients regard you and your company."
        },



    ]

    return (
        <Layout>
                <div className='research-outer'>
                    <Top bgimg={Reputation_img1} />
                    <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u> Reputation Consultation Services</u>
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
                        <Project projectData={projectData} />
                    </div>

                    <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Featured Blog posts</u>
                    </div>
                    <div className='research-component'>
                        <Blogs />
                    </div>

                </div>
            </Layout>
    )
}
