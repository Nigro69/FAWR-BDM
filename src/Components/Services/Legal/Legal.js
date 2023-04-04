import React, { useEffect } from 'react'
import "../Research/Research.css"

import Legal_img1 from "./LegalImages/Legal_img1.png"
import R1 from "./LegalImages/1.png"
import R2 from "./LegalImages/2.png"
import R3 from "./LegalImages/3.png"
import R4 from "./LegalImages/4.png"
import R5 from "./LegalImages/5.png"


import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'
import Layout from '../../Templates/Layout/Layout'

export default function Legal() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const detailData = [
        {
            title: "Reduce legal spend",
            content1: "In a multidisciplinary setting, BDM collaborates with businesses, governmental agencies, development partners, and other groups to assist them handle their legal difficulties.",
            content2: "Additionally, we work together with law firms to advance their innovation agendas. Our diverse talent pool, resources, and infrastructure allow us to provide innovative legal solutions that are tailored to the specific business and industry demands of our customers. To produce new goods and services in response to client needs and as a method of strengthening their competitive advantages, we have a dual working environment made up of a team of internal consultants and an external network of consultants.",
            points: ["Contracts", "Business Organisations", "Real states", "Taxes and Licenses", "Intellectual property"]
        }
    ]

    const projectData = [
        {
            title: "Rera Property",
            content: "Helping Real Estate Regulatory Authority, maintain for transparency in the real estate industry.",
        },
        {
            title: "Homecap",
            content: "To streamline the demands assisting with any other intellectual property-related difficulties as well as the trademark registration done completely. ",
        },
        {
            title: "Houseloan",
            content: "Adhering to all local legal requirements, avoiding needless risks, and assisting them in effectively achieving their stated financial goals.",
        },
    ]

    const gridData = [
        {
            name: "Contracts",
            firstLetter: "C",
            img: R1,
            content: "Our experts can assist you with the contractual requirements of your company, create the standard form agreements you may need with clients, customers, and suppliers, and assist you in responding to agreements that other parties will want you to sign."
        },

        {
            name: "Business Organisations",
            firstLetter: "B",
            img: R2,
            content: "Access to legal counsel is crucial for every company, but it is more crucial for businesses whose worldwide development frequently involves a variety of legal challenges. Our lawyers can assist you in choosing the right documents to legally establish your company and in completing the required paperwork."
        },

        {
            name: "Real states",
            firstLetter: "R",
            img: R3,
            content: "Our team of real estate attorneys can assist you with resolving commercial and residential real estate concerns if you're thinking about purchasing or selling real estate for your company. Our network can help you with zoning concerns, leasing retail space, commencing construction and development projects, purchasing or selling commercial buildings, and other commercial property transactions."
        },

        {
            name: "Taxes and Licenses",
            firstLetter: "T",
            img: R4,
            content: "With regard to the tax repercussions of the commercial transactions your company will do, our tax lawyers can help. Our legal network's main goal is to make sure that our customers' businesses function smoothly by adhering to all local legal requirements, avoiding needless risks, and assisting them in effectively achieving their stated financial goals."
        },

        {
            name: "Intellectual property",
            firstLetter: "I",
            img: R5,
            content: "Many business owners rely heavily on intellectual property, hence many attorneys are employed to help with business-related issues. However, our one-stop shop allows us to streamline your demands. We can assist you with any other intellectual property-related difficulties as well as the trademark registration of your goods and services as well as copyright protection."
        },

    ]

    return (
        <Layout>
            <div className='research-outer'>
                <Top bgimg={Legal_img1} />
                <div className='reserach-title' >
                    <u>Legal Consultant Services</u>
                </div>
                <div className='research-component'>
                    <Details detailData={detailData} />
                </div>

                <div className='research-component'>
                    <Grid gridData={gridData} />
                </div>

                <div className='reserach-title' >
                    <u>Awards & Recognition</u>
                </div>
                <div className='research-component'>
                    <Award i={"0"} />
                </div>

                <div className='reserach-title' >
                    <u>Our Recent Projects</u>
                </div>
                <div className='research-component'>
                    <Project projectData={projectData} />
                </div>

                <div className='reserach-title' >
                    <u>Featured Blog posts</u>
                </div>
                <div className='research-component'>
                    <Blogs />
                </div>

            </div>
        </Layout>
    )
}
