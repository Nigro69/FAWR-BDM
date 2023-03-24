import React from 'react'
import "../Research/Research.css"

import Distribution_img1 from "./DistributionImages/Distribution_img1.png"
import R1 from "./DistributionImages/1.png"
import R2 from "./DistributionImages/2.png"
import R3 from "./DistributionImages/3.png"
import R4 from "./DistributionImages/4.png"
import R5 from "./DistributionImages/5.png"
import R6 from "./DistributionImages/6.png"



import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'

export default function Distribution({ mode }) {

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    const projectData = [
        {
            title: "Funky Monk",
            content: "Social networking service, widely used for public communications within organizations. You can design a project around this platform where each student will have to post a question, an idea, or insight about the material covered in class.",
        },
        {
            title: "Cloud Sources Pvt",
            content: "Development, succession planning , forward-looking process used to lay out a particular plan of action to employ the workforce to accomplish the organization's mission, initiatives, and goals.",
        },
        {
            title: "Social Bird",
            content: "Social networking service, widely used for private communications within organizations. You can design a project around this platform where each student will have to post a question, an idea, or insight about the material covered in class.",
        },
    ]

    const detailData = [
        {
            title: "Reaching the target market",
            content1: "A distribution strategy is a plan or strategy for making a good or service accessible to the intended market by way of its supply chain. The complete technique for making an item available is designed by the distribution strategy, commencing with consideration of the target population that will be serviced and what the firm expressed in marketing campaigns. A business can choose to either provide the product and service via its own channels or collaborate with other businesses to accomplish the same through their distribution channels.",
            content2: "Your work will receive the attention it deserves thanks to our distribution strategy services. We target your most effective channels and leverage our extensive networks to increase your reach with a personalized plan based on your particular goals, and we track and evaluate the outcomes of our work. This allows us to make data-driven decisions and continuously enhance outcomes and ROI.",
            points: ["Audience Targeting", "Media Planning", "Earned Outreach", "Paid Social", "Campaign Management", "Reporting"]
        }
    ]

    const gridData = [
        {
            name: "Audience Targeting",
            firstLetter: "A",
            img: R1,
            content: "Understanding people's identities, concerns, and ways that you may meet their needs can help you convert them successfully. You may gain the crucial insights you need to enhance every area of your marketing strategy, from messaging and distribution to resource allocation and budgeting, by identifying the groups most likely to purchase from you and creating distinctive personas."
        },

        {
            name: "Media Planning",
            firstLetter: "M",
            img: R2,
            content: "Strategic media buys ensure that your content will reach as many people as possible. Finding the correct audience, platforms, and mix, however, may be difficult if you want to maximize the effectiveness of every dollar you spend. By optimizing your distribution, boosting your effect, and enhancing the return on investment of your marketing efforts, strategic planning may help you position yourself for success right away."
        },

        {
            name: "Earned Outreach",
            firstLetter: "E",
            img: R3,
            content: "No matter how wonderful your material is, if it doesn't get to your audience, it won't be effective. One of the most effective methods to broaden your audience is through earned media. Earned media links you with the top journals, influencers, and media outlets to interact with your audience, whether your goals are to improve awareness, build thought leadership, or boost traffic and sales."
        },

        {
            name: "Paid Social",
            firstLetter: "P",
            img: R4,
            content: "You need a thorough distribution plan that targets earned, owned, and paid channels—especially social—to get the most views on your content. These platforms are one of the finest locations for companies to engage since users spend more and more time there. A focused social strategy helps you reach the right audience and initiate the relevant discussions with content on sites like Facebook, Instagram, Twitter, and LinkedIn."
        },

        {
            name: "Campaign Management",
            firstLetter: "C",
            img: R5,
            content: "The most efficient approach to reach a specific audience with a message is through a marketing campaign, but developing one may be difficult, especially if you lack the time or finances. Effective management makes every step of the process better, enabling you to develop message that is more persuasive, scale campaigns, assess effectiveness, allocate resources, get more use out of your material, and maximise your outcomes."
        },
        {
            name: "Reporting",
            firstLetter: "R",
            img: R6,
            content: "With so much data accessible, it's simple to become confused, yet performance data may be a tremendous tool for helping you manage marketing. Good reports assist you in accessing and understanding data. It is simpler to discern what is functioning and what is not working the more profound your understanding."
        },



    ]

    return (
        <div className='research-outer'>
            <Top bgimg={Distribution_img1} />
            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u> Distribution Strategy Services</u>
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
                <u> Featured Blog posts</u>
            </div>
            <div className='research-component'>
                <Blogs />
            </div>

        </div>
    )
}
