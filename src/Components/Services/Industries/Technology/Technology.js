import React, { useEffect } from 'react'
import "../../Industries/Industries.css"

import Technology_img1 from "./TechnologyImages/Technology_img1.png"

import Grid from '../../../Templates/Grid/Grid'

import Award from "../../../LandingPage/Awards/Award"
import Project from "../../../LandingPage/Projects/Project"
import Blogs from "../../../LandingPage/Blogs/Blog"
import Industrytop from '../../../Templates/IndustriesTemplates/IndustryTop/Industrytop'
import Challenges from '../../../Templates/IndustriesTemplates/Challenges/Challenges'

import I1 from "./TechnologyImages/1.png"
import I2 from "./TechnologyImages/2.png"
import I3 from "./TechnologyImages/3.png"
import I4 from "./TechnologyImages/4.png"
import I5 from "./TechnologyImages/5.png"

import Igrid from '../../../Templates/IndustriesTemplates/IndustryGrid/Igrid'
import Iservices from '../../../Templates/IndustriesTemplates/IndustryServices/Iservices.js'
import Meeting from '../../../Templates/IndustriesTemplates/Meeting/Meeting'
import Layout from '../../../Templates/Layout/Layout'


export default function Technology() {

    const challengeData = [
        "Management of big data",
        "Automation and robotics",
        "Information security",
        "Skills gap",
        "Integrations and upgrades",
        "Artificial intelligence & Machine learning"
    ]

    const gridData = [
        {
            name: "Artificial Intelligence",
            img: I1,
            content: "Artificial intelligence is a developing technology that has the potential to have a big influence on how we live our daily lives. It is one of the hottest technological developments to have recently entered the commercial world. By giving organisations the benefit of AI-powered apps to automate their company operations and procedures, this technology offers up new opportunities for development and efficiency.",
            points: ["Natural language processing",
                "Digital Virtual Agents ",
                "Process Automation",
                "Image Processing and Visualization"],
            p: "1"
        },

        {
            name: "Augmented reality/ Virtual reality",
            img: I2,
            content: "The distinction between the actual world and the virtual world is becoming more hazy than ever thanks to current advancements in augmented and virtual reality. Additionally, technology is continuously redefining what is real, and it is up to today's entrepreneurs to make the most audacious ideas a reality. As a result, it is anticipated that augmented reality (AR) and virtual reality (VR) will set the bar for omnichannel branding in the present and the future.",
            points: ["Custom AR/ VR development",
                "AR/ VR Experience design",
                "Hardware-level development"],
            p: "1"
        },

        {
            name: "Blockchain",
            img: I3,
            content: "Various sectors, including real estate, financial, and supply chain management, are being transformed by blockchain. Businesses may support their application development teams by utilising BDM' blockchain development services for projects like developing mobile applications, cryptocurrency exchanges, and wallets. We provide businesses with a wide range of blockchain development solutions that let them take advantage of the decentralised network, create solutions on the blockchain, and boost the efficiency and transparency of operational procedures.",
            points: ["Smart development",
                "Mobile app integration",
                "Crypto solutions development"],
            p: "1"
        },

        {
            name: "Internet of Things (IoT)",
            img: I4,
            content: "We create adaptable software and hardware services and offer end-to-end IoT services that can function in any ecosystem. Our IoT services for industries are affordable, dependable, and incredibly easy to integrate. No matter their size, businesses use our corporate IoT to increase efficiency, get real-time data insights from connected assets, cut expenses, and spur innovation through new business models.",
            points: ["Integration & Implementation",
                "IoT Consulting",
                "Analytics & Insights"],
            p: "1"
        },

        {
            name: "Developer Engagement Platform",
            img: I5,
            content: "BDM' creative Developer Engagement Platform enables API providers a way to educate, engage, and collaborate creatively with the developer community while socialising APIs. With the aid of this solution, they are able to create a vibrant developer community that encourages growth, progress, and cooperation.",
            points: ["Intuitive API testing console for REST APIs",
                "API Key management",
                "Track API usage",
                "Easy integration with API management platform",
                "Showcase applications"],
            p: "1"
        },
    ]

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <Layout>
            <div className='industries-outer'>
                <Industrytop bgimg={Technology_img1} 
                    content="Technology companies need to be able to expand quickly and pivot even more quickly in a sector where innovation is both an opportunity and a danger. Whatever the focus or stage of your company's life cycle, our industry knowledge and cross-sector expertise can help you make the correct decisions and achieve quick, long-lasting results. We collaborate with clients in the storage, components and peripherals, IT services, as well as every other area of the IT industry. Additionally, our firm's extensive expertise in private equity and telecommunications supports our technology practise. We aid market leaders in the planning of acquisitions, the streamlining of R&D procedures, the improvement of cybersecurity, and cost-cutting measures. We teach struggling businesses how to revamp their financial structures, and we train up-and-coming competitors how to scale up their operations to handle the rising complexity that comes along with expansion. We offer a comprehensive grasp of the entire potential of cloud computing and the Internet of Things as trusted consultants to CTOs, CIOs, and financial backers." />
                <div className='industries-title' >
                    <u>Challenges</u>
                </div>
                <div className='industries-component'>
                    <Challenges challengeData={challengeData}  />
                </div>

                <div className='industries-title' >
                    <u>Our Offerings</u>
                </div>
                <div className='industries-component'>
                    <Igrid gridData={gridData}  />
                </div>

                <div className='industries-title' >
                    <u>Our Services</u>
                </div>

                <div className='industries-component'>
                    <Iservices  />
                </div>

                <div className='industries-component'>
                    <Meeting  />
                </div>

                <div className='industries-title' >
                    <u>Awards & Recognition</u>
                </div>
                <div className='industries-component'>
                    <Award  />
                </div>

                <div className='industries-title' >
                    <u>Our Recent Projects</u>
                </div>
                {/* <div className='industries-component'>
                <Project  />
            </div> */}

                <div className='industries-title' >
                    <u>Featured Blog posts</u>
                </div>
                <div className='industries-component'>
                    <Blogs  />
                </div>

            </div >
        </Layout>
    )
}
