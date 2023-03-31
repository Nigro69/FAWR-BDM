import React, {useEffect} from 'react'
import "../Research/Research.css"

import Email_img1 from "./EmailImages/Email_img1.png"
import R1 from "./EmailImages/1.png"
import R2 from "./EmailImages/2.png"
import R3 from "./EmailImages/3.png"
import R4 from "./EmailImages/4.png"
import R5 from "./EmailImages/5.png"
import R6 from "./EmailImages/6.png"


import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'

export default function Email({ mode }) {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const projectData = [
        {
            title: "Fashion Co",
            content: "Sending weekly emails for a fashion company with their curated branding and projecting.",
        },
        {
            title: "Business Solutions",
            content: "Curating special business emailers for a brand to help their sales grow.",
        },
        {
            title: "Newlife Letters",
            content: "Creating newsletter with our talented content writing team helping the business grow.",
        },
    ]

    const detailData = [
        {
            title: "Reach Your Target Audience Directly",
            content1: "Email marketing is one of the most popular and successful marketing techniques available when you want to expand your brand or sell your products. The use of email in marketing campaigns to advertise a company's goods and services and to reward repeat business from clients. Customers on your email list may be informed about new goods, deals, and other services through email marketing. Educating your audience about the benefits of your brand or maintaining their interest in between transactions may also be a more subtle way to market. It may potentially fall somewhere in the middle. To obtain the most return on investment from your marketing programme, BDM can help you design, develop, and optimise your email marketing. Email marketing may help you establish a connection with your audience and increase traffic to your blog, social media accounts, and other websites you want people to visit. To ensure that consumers are only receiving the content they wish to view, you may even segment your emails and target users based on demographics.",
            points: ["Email Automation", "Custom Template Design", "Promotional email", "Email Newsletter", "Tracking & Analytics", "ESP Migration"]
        }
    ]

    const gridData = [
        {
            name: "Email  Automation",
            firstLetter: "E",
            img: R1,
            content: "Businesses with an online presence might profit greatly from automating communication with highly tailored emails that match unique client profiles. We assist you in building up automations for intricate client journeys and help you connect with consumers effectively by reaching out to them at various points during their travels."
        },

        {
            name: "Custom Template Design",
            firstLetter: "C",
            img: R2,
            content: "Email templates with custom coding aid in developing a distinctive brand identity. We are able to provide you with a gorgeous hand-coded responsive email template that adheres to your brand rules."
        },

        {
            name: "Promotional Email",
            firstLetter: "P",
            img: R3,
            content: "A promotional email is a marketing message that often provides incentives to increase a company's sales and income. This type of email marketing's main objective is to persuade clients to buy something. They are often used to keep people informed and may tease new goods and services."
        },

        {
            name: "Email Newsletter",
            firstLetter: "E",
            img: R4,
            content: "Email newsletters are quite popular, and they frequently feature new goods and services. They might also consist of articles, blogs, and client testimonials. Normally, there will be a call to action to encourage the reader to take action, such as reading a recent blog post or investigating a recent product."
        },

        {
            name: "Tracking & Analytics",
            firstLetter: "T",
            img: R5,
            content: "Some email marketing initiatives are launched by email firms without any thought given to results. We at BDM work hard to give you the finest email marketing solution possible. Our email marketing specialists evaluate your email newsletter designs using A/B testing tools to find problems and monitor the success of your campaigns."
        },
        {
            name: "ESP Migration",
            firstLetter: "E",
            img: R6,
            content: "We collaborate with some of the top ESPs in the market and evaluate each platform to provide the best advice for your individual requirements. Platforms for email marketing can range from simple, entry-level software to powerful ESPs. Our company evaluates each platform to provide you a few choices that are suitable for your needs."
        },

    ]

    const valueData = [
        {
            content: "One of the leading email marketing firm, BDM provides the best email marketing service at competitive prices.",
            points: ["Full-Service Email Marketing Campaign", "Tailored List Segmentation", "Multivariate and A/B Campaign Testing",
                "Detailed Email Marketing Reports", "Integrated Digital Marketing Services", "Experienced Email Marketing Specialists"]
        }
    ]
    return (
        <div className='research-outer'>
            <Top bgimg={Email_img1} />
            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Email Marketing Services</u>
            </div>
            <div className='research-component'>
                <Details detailData={detailData} />
            </div>

            <div className='research-component'>
                <Grid gridData={gridData} />
            </div>

            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Why to choose us for Email Marketing</u>
            </div>
            <div className='research-component'>
                <Value valueData={valueData} />
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
    )
}
