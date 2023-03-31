import React, {useEffect} from 'react'
import "../Research/Research.css"

import Management_img1 from "./ManagementImages/Management_img1.png"
import R1 from "./ManagementImages/1.png"
import R2 from "./ManagementImages/2.png"
import R3 from "./ManagementImages/3.png"
import R4 from "./ManagementImages/4.png"
import R5 from "./ManagementImages/5.png"


import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'

export default function Management({ mode }) {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const detailData = [
        {
            title: "Transform The Way You Work",
            content1: "The process of offering consulting services to businesses in order to enhance their performance or in any other manner help them achieve their organizational goals is known as management consulting. Organizations may use management consultants for a variety of purposes, such as getting outside (and ostensibly impartial) counsel and leveraging consultants' specific knowledge addressing issues that require further scrutiny.",
            content2: "The definition of management consulting, often known as business consulting, is 'advisory and/or implementation services to the (senior) management of organizations with the goal of increasing the efficacy of their business strategy, organizational performance, and operational procedures.' Because there are so many different specialties and requirements for advisers, management consulting is the most diverse subset of the consulting business, accounting for 50% to 55% of the total.",
            points: ["Strategic Planning", "Succession Planning", "Organizational Development", "Organizational Change Management", "Facilitation"]
        }
    ]

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

    const gridData = [
        {
            name: "Strategic Planning",
            firstLetter: "S",
            img: R1,
            content: "The field of strategic planning is devoted to creating a road map to direct an organization's strategic ambitions. It frequently focuses on business requirements and how well IT solutions may satisfy those requirements. In the end, strategic planning produces procedures that notably increase operational effectiveness, market responsiveness, and customer value."
        },

        {
            name: "Succession Planning",
            firstLetter: "S",
            img: R2,
            content: "In organisational development, succession planning is a continuous, forward-looking process used to lay out a particular plan of action to employ the workforce to accomplish the organization's mission, initiatives, and goals."
        },

        {
            name: "Organizational Development",
            firstLetter: "O",
            img: R3,
            content: "The process of developing internal resources (people, staff), internal methodology (strategies, business processes), and internal methodologies (business processes) to support an organization's purpose and goals is known as organisational development."
        },

        {
            name: "Organizational Change Management",
            firstLetter: "O",
            img: R4,
            content: "Organizations must accept change if they want to compete. The 'people side' of change is the main emphasis of organisational change management (OCM). Inefficient process management frequently results in poor acceptance, inefficiency, and, in the end, project failure."
        },

        {
            name: "Facilitation",
            firstLetter: "F",
            img: R5,
            content: "In business, organisational development, and consensual decision-making, the process of planning and leading a productive meeting is referred to as facilitation. Any group that is gathering for a shared objective, such as reaching a decision, resolving an issue, or just exchanging ideas and information, benefits from facilitation."
        },

    ]

    return (
        <div className='research-outer'>
            <Top bgimg={Management_img1} />
            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Management Consultant Services</u>
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
