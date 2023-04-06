import React, { useEffect } from 'react'
import "../../Industries/Industries.css"

import Education_img1 from "./EducationImages/Education_img1.png"

import Grid from '../../../Templates/Grid/Grid'

import Award from "../../../LandingPage/Awards/Award"
import Project from "../../../LandingPage/Projects/Project"
import Blogs from "../../../LandingPage/Blogs/Blog"
import Industrytop from '../../../Templates/IndustriesTemplates/IndustryTop/Industrytop'
import Challenges from '../../../Templates/IndustriesTemplates/Challenges/Challenges'

import I1 from "./EducationImages/1.png"
import I2 from "./EducationImages/2.png"
import I3 from "./EducationImages/3.png"
import I4 from "./EducationImages/4.png"
import I5 from "./EducationImages/5.png"


import Igrid from '../../../Templates/IndustriesTemplates/IndustryGrid/Igrid'
import Iservices from '../../../Templates/IndustriesTemplates/IndustryServices/Iservices.js'
import Meeting from '../../../Templates/IndustriesTemplates/Meeting/Meeting'
import Layout from '../../../Layout/Layout'
import { useStateContext } from '../../../../contexts/ContextProvider'


export default function Education() {
    const { mode } = useStateContext()

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const challengeData = [
        "Low usage & retention",
        "Standing out in highly a competitive market",
        "Resistance to change",
        "Student privacy concerns",
        "Complicated user experience (UX)",
        "Creation of personalized learning style"
    ]

    const gridData = [
        {
            name: "Digital Learning",
            img: I1,
            content: "In order to improve student outcomes, BDM offers scalable and quick technological solutions. These technologies are used to create digital courseware.",
            points: ["Design and Development of learning widgets, visual tools",
                "Build custom e-readers, video/audio players and variety of assessment widgets ",
                "Engineer content delivery platforms",
                "Enable high level of interoperability by aligning to LTI, QTI, Caliper, Scorm, xAPI, cmi5or other standards.",
                "Integrate immersive learning enabled through AR-VR and game-based learning."],
            p: "1"
        },

        {
            name: "Learning Platform",
            img: I2,
            content: "BDM offers the components needed to put together an end-to-end learning platform and alter instructional strategies to deal with the difficulties of supporting, attracting, engaging, and influencing the success of learners.",
            points: ["Build learning environments that focus on in-class, blended and hybrid learning.",
                "Build learning applications to easily upgrade, scale, integrate and monetize",
                "Transcend learning platforms to enable micro-learning and optimize flow-of-the-work learning.",
                "Integrate and build end-to-end solutions spanning across course storefront, CRM, teaching and learning, payment, assessment, and credentials."],
            p: "1"
        },

        {
            name: "Big Data for Education",
            img: I3,
            content: "The education sector is frequently described as being information poor yet data rich. BDM offers a comprehensive solution to this problem that combines all the necessary technological components, including the infrastructure, analytics modules, and visualisation components.",
            points: ["Learner user behavior tracking.",
                "Adaptive & predictive analytics for learner performance, retention, & engagement.",
                "Big data development and implementation services along with batch and real-time analytics services.",
                "Content instrumentation services that track meta data, learner activities & usage statistics."],
            p: "1"
        },

        {
            name: "AI-enabled Learning",
            img: I4,
            content: "Advanced analytics and AI may significantly improve learner engagement, identify the proper students, curate content for the curriculum, and improve teaching and learning.",
            points: ["Automated content curation to support alignment of content to curriculum.",
                "Adaptive learning engines to align learning to pace, preference and the learning models suited to a learner.",
                "Virtual tutoring and conversational EdTech solutions implemented through chatbots and voice-based solutions.",
                "Improve learner engagement by generating guided learning paths, byte sized micro-learning content and automated short answer grading solutions."],
            p: "1"
        },
        {
            name: "Digital Campus",
            img: I5,
            content: "In current digital age, the majority of students entering the learning environment are digital natives, and most teachers or other administrative personnel are fairly adept with digital platforms and technologies. Digital campus solutions must thus be process-oriented, automated, and supported by modern interfaces.",
            points: ["Institution wide integration and workflow automation",
                "Existing systems application enhancement, modernization and productization",
                "Platform for bettering prospective learner, student, and instructor experience",
                "Enriching institution wide information through data warehouse, portals and embedded analytics solutions."],
            p: "1"
        },


    ]
    return (
        <Layout>
                <div className='industries-outer'>
                    <Industrytop bgimg={Education_img1} mode={mode}
                        content="As the learning ecosystem has evolved more in the previous ten years than in the many decades before, education has grown more digital. The development of digital technology, the proliferation of mobile devices, and the construction of a solid, always-connected infrastructure are the main forces behind this transition. Additionally, today's new generation of learners has grown to anticipate personalised, interactive, and engaging learning models that enable anytime, anywhere learning. Due to the growing use of flipped classrooms as a teaching strategy throughout K–12, higher education, and professional education, many conventional publishing corporations have rebuilt themselves as digital first organisations. This change has been even more pronounced among learning solutions companies that offer professional and vocational learning programmes. Although technology has completely changed the way we teach and learn, its effects were first mostly limited to asynchronous learning models. This is altering, though, as synchronous learning models include disruptive technology to promote better learning. EdTech is prepared to improve the quality of education while implementing new learning models and delivery strategies with the use of advanced analytics, live streaming, and AR-VR." />
                    <div className='industries-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Challenges</u>
                    </div>
                    <div className='industries-component'>
                        <Challenges challengeData={challengeData} mode={mode} />
                    </div>

                    <div className='industries-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Our Offerings</u>
                    </div>
                    <div className='industries-component'>
                        <Igrid gridData={gridData} mode={mode} />
                    </div>

                    <div className='industries-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Our Services</u>
                    </div>

                    <div className='industries-component'>
                        <Iservices mode={mode} />
                    </div>

                    <div className='industries-component'>
                        <Meeting mode={mode} />
                    </div>

                    <div className='industries-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Awards & Recognition</u>
                    </div>
                    <div className='industries-component'>
                        <Award mode={mode} />
                    </div>

                    <div className='industries-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Our Recent Projects</u>
                    </div>
                    {/* <div className='industries-component'>
                <Project mode={mode} />
            </div> */}

                    <div className='industries-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Featured Blog posts</u>
                    </div>
                    <div className='industries-component'>
                        <Blogs mode={mode} />
                    </div>

                </div>
            </Layout>
    )
}
