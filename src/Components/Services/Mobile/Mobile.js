import React, {useEffect} from 'react'
import "../Research/Research.css"

import Mobile_img1 from "./MobileImages/Mobile_img1.png"
import R1 from "./MobileImages/1.png"
import R2 from "./MobileImages/2.png"
import R3 from "./MobileImages/3.png"
import R4 from "./MobileImages/4.png"
import R5 from "./MobileImages/5.png"
import R6 from "./MobileImages/6.png"

import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'

export default function Mobile({ mode }) {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const projectData = [
        {
            title: "FunkyMonk",
            content: "Social networking service, widely used for public communications within organizations. You can design a project around this platform where each student will have to post a question, an idea, or insight about the material covered in class.",
        },
        {
            title: "Brick-by-brick",
            content: "Social networking service, widely used for private communications within organizations. You can design a project around this platform where each student will have to post a question, an idea, or insight about the material covered in class.",
        },
        {
            title: "Social Bird",
            content: "Social networking service, widely used for private communications within organizations. You can design a project around this platform where each student will have to post a question, an idea, or insight about the material covered in class.",
        },
    ]

    const detailData = [
        {
            title: "Make your company omnipresent",
            content1: "Due to the two-way nature of mobile marketing, the speed of reactivity is at its maximum level. Mobile allows advertisers to target their viewers at any given moment and in any given location since it is always available. For companies who must be responsive to place and time, this advertising medium is perfect. Interactivity's special quality elevates the medium and allows for two-way communication. Mobile marketing has developed into an information and communication hub that offers reach, frequency, targeting, and interaction for marketers with their audience thanks to its capacity to merge content delivery and direct response. This form of advertising is anticipated to expand quickly with the aid of internet access, giving your business maximum traction on the Mobile Web. This helps to create a variety of possibilities for the marketers to receive an immediate call to action from their target market.",
            points: ["Promotional Deals", "SMS Coupons", "Text-to-Win Competitions", "Flash Sales SMS", "Loyalty Programs", "Alerts & Notifications"]
        }
    ]

    const gridData = [
        {
            name: "Promotional Deals",
            firstLetter: "P",
            img: R1,
            content: "In the modern world, SMS messages promoting sales and discounts are one of the most popular forms of marketing. These are notifications about special sales, bargains, discounts, and clearances on goods and/or services that are delivered directly to clients."
        },

        {
            name: "SMS Coupons",
            firstLetter: "S",
            img: R2,
            content: "SMS discounts are commonly distributed through the Multimedia Messaging Service, or simply 'MMS.'' These communications resemble discount and promotion messages quite a bit. They include a discount on a good or service provided by the company from which the customer signed up to receive SMS marketing messages."
        },

        {
            name: "Text-to-Win Competitions",
            firstLetter: "T",
            img: R3,
            content: "This kind of SMS marketing is often used by companies to give away gift cards, freebies, or even complementary services. This is not only one of the simplest SMS marketing techniques, but it is also regarded as one of the most enjoyable by both businesses and customers."
        },

        {
            name: "Flash Sales SMS",
            firstLetter: "F",
            img: R4,
            content: "This particular SMS marketing promotion only maintains its level of activity for a brief period of time. The majority of the time, it showcases a business's limited supply of a service or product. Because of its extreme level of urgency, the flash sale is well recognised."
        },

        {
            name: "Loyalty Programs",
            firstLetter: "L",
            img: R5,
            content: "In order to earn free goods or a variety of discounts when specific 'milestones' are completed, loyalty programmes are meant to motivate customers to make purchases or promote referrals. These are excellent for building relationships over a lengthy period of time."
        },
        {
            name: "Alerts & Notifications",
            firstLetter: "A",
            img: R6,
            content: "SMS may be used to send a wide variety of alerts and notifications. These include routine corporate updates regarding business hours, noteworthy events occurring at the organisation, new product and service introductions, replenishment alerts, discounts, routine company updates, and even emergency alerts."
        },

    ]

    return (
        <div className='research-outer'>
            <Top bgimg={Mobile_img1} />
            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Mobile Marketing Services</u>
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
