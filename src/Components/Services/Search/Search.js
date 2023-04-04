import React, { useEffect } from 'react'
import "../Research/Research.css"

import Search_img1 from "./SearchImages/Search_img1.png"
import R1 from "./SearchImages/1.png"
import R2 from "./SearchImages/2.png"
import R3 from "./SearchImages/3.png"
import R4 from "./SearchImages/4.png"
import R5 from "./SearchImages/5.png"


import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'
import Layout from '../../Templates/Layout/Layout'

export default function Search() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])


    const projectData = [
        {
            title: "Seo Garage",
            content: "helping search engines understand and present content. Your site may be smaller or larger than our example site and offer vastly different content.",
        },
        {
            title: "Marketer magic",
            content: "helping search engines understand and present content. Your site may be smaller or larger than our example site and offer vastly different content.",
        },
        {
            title: "Magic Searcch",
            content: "helping search engines understand and present content. Your site may be smaller or larger than our example site and offer vastly different content.",
        },
    ]

    const detailData = [
        {
            title: "SEO Strategies to Bring Social Traffic",
            content1: "Utilizing the power of internet search engines to improve a company's online visibility is referred to as search engine marketing. It includes using sponsored sources to drive the most traffic possible to your website. SEM is a powerful marketing method that can be used to quickly, easily, and affordably increase the amount of visitors to your website. If the company is not receiving enough traffic naturally with the use of traditional SEO strategies alone, this is the ideal solution. SEM combines paid advertising methods with search engine optimization tactics to deliver quick and efficient results for the company.",
            content2: "In order to achieve ROI within an ideal time frame, we adopt a flexible strategy to keep up with the search engines' ever-changing algorithms. Our goal is to use search engines to provide you the targeted visitors you need to increase sales and brand value.",
            points: ["Keyword Research", "SMS Coupons", "Campaign Management", "Analysis", "Reporting"]
        }
    ]

    const gridData = [
        {
            name: "Keyword Research",
            firstLetter: "K",
            img: R1,
            content: "The appropriate selection of keywords determines the volume of visitors you can send to your website, making them the cornerstone of search engine marketing. To assist you choose the best keywords to invest in for a profitable sponsored campaign, we offer a team of knowledgeable specialists at your disposal."
        },

        {
            name: "Market Analysis",
            firstLetter: "M",
            img: R2,
            content: "A vital component of SEM services is market analysis, which gives you access to the best keywords for boosting your company's position. We do a thorough study of the keywords that your rivals are using and work with you to place bids on those that will outperform them."
        },

        {
            name: "Campaign Management",
            firstLetter: "C",
            img: R3,
            content: "A SEM campaign's success depends on selecting the ideal mix of advertising and managing it throughout its life cycle. Our experienced SEM specialists monitor the campaign's effectiveness and make any necessary tweaks to it to guarantee that your company receives the best possible return on investment."
        },

        {
            name: "Analysis",
            firstLetter: "A",
            img: R4,
            content: "To ensure that a SEM campaign is producing the desired outcomes, analysis is crucial. Strategic marketing strategy use in-depth analytics. Aspects including keyword searches, user search history, geographic regions, and device usage are studied using analytics."
        },

        {
            name: "Reporting",
            firstLetter: "R",
            img: R5,
            content: "In order to achieve high visibility for the client organisation, the role of a search engine marketing company goes beyond developing and administering paid advertising campaigns. Delivering quantifiable outcomes that the client may monitor at any moment is another duty of this department. To assist you in evaluating the success of your sponsored campaign, we offer sophisticated reporting tools."
        },

    ]

    return (
        <Layout>
            <div className='research-outer'>
                <Top bgimg={Search_img1} />
                <div className='reserach-title' >
                    <u>Search Engine Marketing Services</u>
                </div>
                <div className='research-component'>
                    <Details detailData={detailData} />
                </div>

                <div className='research-component'>
                    <Grid gridData={gridData} />
                </div>

                <div className='reserach-title' >
                    <u> Awards & Recognition</u>
                </div>
                <div className='research-component'>
                    <Award i={"0"} />
                </div>

                <div className='reserach-title' >
                    <u> Our Recent Projects</u>
                </div>
                <div className='research-component'>
                    <Project projectData={projectData} />
                </div>

                <div className='reserach-title' >
                    <u> Featured Blog posts</u>
                </div>
                <div className='research-component'>
                    <Blogs />
                </div>

            </div>
        </Layout>
    )
}
