import React, {useEffect} from 'react'
import "../Research/Research.css"

import Operations_img1 from "./OperationsImages/Operations_img1.png"
import R1 from "./OperationsImages/1.png"
import R2 from "./OperationsImages/2.png"
import R3 from "./OperationsImages/3.png"
import R4 from "./OperationsImages/4.png"
import R5 from "./OperationsImages/5.png"


import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'

export default function Operations({ mode }) {

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
            title: "Converting a plan into long-term success",
            content1: "Operations consulting, often known as operations management, is characterized as advising and/or implementation services that enhance a company's internal operations and performance along the value chain. By providing guidance and aiding in the implementation of changes to target operating models, operational business processes, management systems, culture, and other value chain components, operations management consulting projects improve client operations.",
            content2: "We can assist you in creating an unrestricted, end-to-end programme to alter your operations across the whole supply chain, from the back office and research lab to the production floor. We'll make sure you put your attention where it will have the greatest impact on maximizing competitive advantage and enhancing the link between operations and strategy.",
            points: ["Sales & Marketing", "Supply Chain", "Sourcing & Procurement", "Research & Development", "Outsourcing"]
        }
    ]

    const gridData = [
        {
            name: "Sales & Marketing",
            firstLetter: "S",
            img: R1,
            content: "As a sales and marketing consultant, we assist businesses in enhancing their sales and marketing operations through process analysis, the creation of improvement plans, and the facilitation of new strategy implementation. We assist businesses in building the fundamental technological and human capacities that enable a more adaptable, data-driven marketing and sales organisation."
        },

        {
            name: "Supply Chain",
            firstLetter: "S",
            img: R2,
            content: "In order to streamline a company's supply-side operations along the whole value chain, from manufacturing to logistics and warehousing to customer delivery, supply chain management (SCM) experts work with businesses to develop these strategies. "
        },

        {
            name: "Sourcing & Procurement",
            firstLetter: "S",
            img: R3,
            content: "The operations management section of sourcing and procurement examines all procurement actions intended to identify, assess, and engage vendors for the purchase of products and services. For instance, consultants can help by reducing the price and process of procuring raw materials or product/service components."
        },

        {
            name: "Research & Development",
            firstLetter: "R",
            img: R4,
            content: "The business aspect of innovation is the focus of the service sector known as Research & Development. The bottom line of innovation expenditure is developed and improved with the help of consultants. This includes streamlining new product development procedures, enhancing portfolio complexity management, & enhancing the effectiveness of the R&D organisation."
        },

        {
            name: "Outsourcing",
            firstLetter: "O",
            img: R5,
            content: "Advisors in outsourcing deal with all client problems including contracting out duties and activities to other parties. For back-office functions including finance & accounting, HR and recruiting, legal, IT infrastructure and applications, consultants often assist clients with the design and implementation of outsourcing blueprints, and then manage the migrations."
        },

    ]

    return (
        <div className='research-outer'>
            <Top bgimg={Operations_img1} />
            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Operations Consultant Services</u>
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
