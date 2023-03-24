import React from 'react'
import "../Research/Research.css"

import Customer_img1 from "./CustomerImages/Customer_img1.png"
import R1 from "./CustomerImages/1.png"
import R2 from "./CustomerImages/2.png"
import R3 from "./CustomerImages/3.png"
import R4 from "./CustomerImages/4.png"
import R5 from "./CustomerImages/5.png"
import R6 from "./CustomerImages/6.png"
import R7 from "./CustomerImages/7.png"



import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'

export default function Customer({ mode }) {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

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
            title: "Real-time & Dynamic Segments",
            content1: "Customer segmentation is a powerful tool that firms can use to more closely match their strategy and tactics with their consumers and more effectively target them. Since every client is unique and every customer journey is unique, a single strategy frequently won't be effective for everyone. Customer segmentation is the practise of grouping your consumers according to shared traits, such behaviours or demographics, to better target them with marketing messages. ",
            content2: "All organisations, regardless of size, industry, and whether they sell online or in person, may use customer segmentation. It starts with obtaining and evaluating data and concludes with taking suitable and efficient action on the information acquired. Businesses that customise their messaging and cater to certain client segments develop 10% faster than those that don't. As your organisation expands, segments may always be made more comprehensive since they pinpoint the best clients and the locations where they are easiest to reach. Differentiation based on data from customer segmentation may help teams in marketing, sales, product development, and customer support improve their workflows.",
            points: ["Demographic segmentation", "Geographic segmentation", "Psychographic segmentation", "Technographic segmentation", "Behavioral segmentation", "Needs-based segmentation", "Values-based segmentation"]
        }
    ]

    const gridData = [
        {
            name: "Demographic segmentation",
            firstLetter: "D",
            img: R1,
            content: "Basic customer identifiers, or snapshots of a consumer based on their unique, factual characteristics, are provided by demographics.  This give the widest definition possible of your target market. Occupation, age, gender, income, ethnicity, and education level are typical demographic characteristics."
        },

        {
            name: "Geographic segmentation",
            firstLetter: "G",
            img: R2,
            content: "Although geography is occasionally seen as a demographic component, because it has so many variations, specialists frequently examine it independently. The geographic area that any firm may service will be constrained, although location can frequently result in distinctive items that are not possible elsewhere. "
        },

        {
            name: "Psychographic segmentation",
            firstLetter: "P",
            img: R3,
            content: "Consumer lifestyle, beliefs, and views are taken into account by psychographics while making judgments. They are how you personalise the information you collect and relate your business to the actual members of your audience rather than just their demographics."
        },

        {
            name: "Technographic segmentation",
            firstLetter: "T",
            img: R4,
            content: "Utilizing technological segmentation enables you to target customers who use various software applications or web services in a highly individualised way. Growing markets for SaaS and online marketing analytics have emerged as more firms have shifted their activities online."
        },

        {
            name: "Behavioral segmentation",
            firstLetter: "B",
            img: R5,
            content: "Behavioral segments specify how and when customers use or learn about your product. Marketers are particularly curious on what consumers do after seeing an advertisement and how they engage with a brand. Consumer engagement rates across various marketing channels and social media interactions are among the data that show customer behaviour."
        },
        {
            name: "Needs-based segmentation",
            firstLetter: "N",
            img: R6,
            content: "Customer segments are found by a machine learning approach and logically linked to respective service models according to consumers' purchasing behaviour and overall demands as a consequence of need-based data-driven customer segmentation."
        },
        {
            name: "Values-based segmentation",
            firstLetter: "V",
            img: R7,
            content: "Value-based segmentation rates various client groups according to the amount of money they bring in and how much it costs to build and maintain connections with them. Additionally, it aids businesses in identifying the most and least profitable categories so they may modify their marketing expenditures accordingly."
        },



    ]

    return (
        <div className='research-outer'>
            <Top bgimg={Customer_img1} />
            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Customer Segmentation Services</u>
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
    )
}
