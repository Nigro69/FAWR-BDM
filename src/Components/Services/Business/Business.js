import React, { useEffect } from 'react'
import "../Research/Research.css"

import Business_img1 from "./BusinessImages/Business_img1.png"
import R1 from "./BusinessImages/1.png"
import R2 from "./BusinessImages/2.png"
import R3 from "./BusinessImages/3.png"
import R4 from "./BusinessImages/4.png"
import R5 from "./BusinessImages/5.png"


import T1 from "./BusinessImages/T1.png"
import T2 from "./BusinessImages/T2.png"
import T3 from "./BusinessImages/T3.png"

import A1 from "./BusinessImages/A1.png"

import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'
import Layout from '../../Layout/Layout'
import { useStateContext } from '../../../contexts/ContextProvider'

export default function Business() {
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
            title: "Making Analytics Results Digestible",
            content1: "Business intelligence is a collection of procedures and tools for transforming unprocessed data into information that can be used to make smart business choices. It is an all-encompassing word that integrates data mining, data tools, business analytics, data visualization, infrastructure, and best practices to provide easily digestible data summaries and support a company in making more data-driven choices. Enterprises may create new business capabilities and uncover sales and marketing potential with the help of BI. By quickly adjusting to shifting market conditions, BI is utilized to promote change within a company and assist reduce its inefficiencies. Data-driven Decision Support Systems, or DSS, are the main component of business intelligence systems.",
            content2: "The techniques and structures for gathering, storing, analyzing, and displaying data from business operations are covered by BI. Through the integration of all this data, BI systems enable businesses to gain a thorough understanding of their operations and assist in making better and more informed decisions.",
            points: ["ETL\\ELT processes", "Data reporting and visualization", "Data quality management", "Data warehouse", "OLAP cubes"]
        }
    ]

    const gridData = [
        {
            name: "ETL\\E LT processes",
            firstLetter: "E",
            img: R1,
            tool: T1,
            content: "It is a method of data integration that transfers unprocessed data from a source server to a destination server's data system before processing the data for later applications. Obtaining data from various data sources, converting it, and then loading it into a storage location."
        },

        {
            name: "Data reporting and visualization",
            firstLetter: "D",
            img: R2,
            content: "Visual communication and the visual presentation of data go hand in hand with data storytelling. We create slick statistical graphs, charts, information graphics, and more for businesses that need to convey complicated data to a specific audience in a simple and understandable manner."
        },

        {
            name: "Data quality management",
            firstLetter: "D",
            img: R3,
            content: "A context-specific strategy for enhancing the suitability of data used for analysis and decision-making is provided by data quality management. Utilizing a variety of techniques and technologies on progressively greater and more intricate data sets, the objective is to derive insights about the state of that data."
        },

        {
            name: "Data warehouse",
            firstLetter: "D",
            img: R4,
            tool: T2,
            content: "The capabilities of your data and your business are maximised by a system made with the help of data warehouse architecture and design services. By deploying an Enterprise Data Warehouse 'as a service' that quickly adapts to the most recent technological advancements, we assist organisations in generating a greater ROI through improved business intelligence and data quality."
        },

        {
            name: "OLAP cubes",
            firstLetter: "O",
            img: R5,
            tool: T3,
            content: "Cubes are used in OLAP to show data from many categories. An OLAP cube includes three dimensions to display an additional category, unlike a typical graph which only has two axes. For forecasting, budgeting, and financial planning, businesses employ this data representation."
        },


    ]

    return (
        <Layout>
                <div className='research-outer'>
                    <Top bgimg={Business_img1} />
                    <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Business Intelligence Services</u>
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
                        <Award img={A1} i={"1"} />
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
