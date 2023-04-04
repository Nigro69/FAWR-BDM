import React, { useEffect } from 'react'
import "../Research/Research.css"

import Speech_img1 from "./SpeechImages/Speech_img1.png"
import R1 from "./SpeechImages/1.png"
import R2 from "./SpeechImages/2.png"
import R3 from "./SpeechImages/3.png"
import R4 from "./SpeechImages/4.png"
import R5 from "./SpeechImages/5.png"
import R6 from "./SpeechImages/6.png"



import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'
import Layout from '../../Layout/Layout'
import { useStateContext } from '../../../contexts/ContextProvider'

export default function Speech() {
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
            title: "Maya Fm",
            content: "A radio integrated platform helping users Utilize artificial intelligence (AI) to extract conversational intent. ",
        },
        {
            title: "Robomania",
            content: "Sentiment analysis involves classifying and interpreting words and phrases used during a conversation according to the customer's sentiment (positive, negative, and neutral).",
        },
        {
            title: "Media School",
            content: "Obtain a complete picture of each encounter. Discover critical information by replaying and listening to conversations.",
        },
    ]

    const detailData = [
        {
            title: "Speech & Text Analytics Services",
            content1: "Natural language processing (NLP) is a set of characteristics used in speech and text analytics to give an automated analysis of an interaction's content and to shed light on customer-agent interactions. The transcription of voice conversations, customer sentiment analysis, and subject spotting are all examples of speech and text analytics, which are used to provide meaning to otherwise unstructured data. The major use cases for this data include agent performance enhancement (e.g., lowering AHT, raising FCR, increasing sales conversion, etc.), compliance, customer happiness (e.g., NPS), and customer business intelligence. Through sentiment analysis and subject trends, speech and text analytics helps you to obtain insights from customer-agent discussions. The purpose of these insights is to better understand and serve consumers and staff by highlighting areas that need improvement, acknowledgment, and concern. In order to give comprehensive insight into customer-agent dialogues, speech and text analytics features automate voice and text analytics capabilities across 100% of encounters.",
            points: ["Voice transcription", "Phrase recognition", "Interaction discovery", "Conversational intelligence", "Sentiment ", "Intent miner"]
        }
    ]

    const gridData = [
        {
            name: "Voice transcription",
            firstLetter: "V",
            img: R1,
            content: "An analysis of the dialogue between the customer and internal participants may be gained via listening to a voice transcript, which is a written record of the words uttered during a voice interaction. When voice transcription is enabled during an interaction involving audio input, the audio streams to a transcription server, which converts the audio to text."
        },

        {
            name: "Phrase recognition",
            firstLetter: "P",
            img: R2,
            content: "Establish guidelines based on words or phrases to comprehend and recognise your most important encounters. Based on insights, optimise your operations, campaigns, and customer service."
        },

        {
            name: "Interaction discovery",
            firstLetter: "I",
            img: R3,
            content: "Obtain a complete picture of each encounter. Discover critical information by replaying and listening to conversations. These insights may include underlying problems, customer sentiment ratings, agent performance, and more."
        },

        {
            name: "Conversational intelligence",
            firstLetter: "C",
            img: R4,
            content: "By agent, queue, and flow, see and comprehend client themes and sentiment patterns. To get simple-to-use, useful insights, search and filter data based on selected criteria."
        },

        {
            name: "Sentiment analysis",
            firstLetter: "S",
            img: R5,
            content: "Sentiment analysis involves classifying and interpreting words and phrases used during a conversation according to the customer's sentiment (positive, negative, and neutral). Users may learn a great deal about the customer's experience and utilise this knowledge to enhance service delivery by capturing the mood of the customer's words."
        },
        {
            name: "Intent miner",
            firstLetter: "I",
            img: R6,
            content: "Utilize artificial intelligence (AI) to extract conversational intent. Learn about the concerns and goals of your consumers. Utilize this knowledge to find chances for automation using chatbots and voicebots."
        },



    ]

    return (
        <Layout>
                <div className='research-outer'>
                    <Top bgimg={Speech_img1} />
                    <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Speech & Text Analytics Services</u>
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
            </Layout>
    )
}
