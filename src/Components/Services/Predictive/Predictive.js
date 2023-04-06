import React, { useEffect } from 'react'
import "../Research/Research.css"

import Predictive_img1 from "./PredictiveImages/Predictive_img1.png"
import R1 from "./PredictiveImages/1.png"
import R2 from "./PredictiveImages/2.png"
import R3 from "./PredictiveImages/3.png"
import R4 from "./PredictiveImages/4.png"
import R5 from "./PredictiveImages/5.png"

import T1 from "./PredictiveImages/T1.png"
import T2 from "./PredictiveImages/T2.png"



import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'
import Layout from '../../Layout/Layout'
import { useStateContext } from '../../../contexts/ContextProvider'

export default function Predictive() {
    const { mode } = useStateContext()

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const detailData = [
        {
            title: "Make Smart Business Decisions",
            content1: "It is a subset of advanced analytics that is used to anticipate unknowable future occurrences. Predictive analytics solutions entail pulling data from already-existing data sources, identifying patterns, and projecting future trends and outcomes. It employs a variety of approaches, including artificial intelligence, statistical modelling, machine learning, etc., to produce these predictions. Given its emphasis on risk management and consideration of what-if scenarios, predictive analytics solutions are a trustworthy approach of predicting. Additionally, it enables businesses to develop quickly and react to market demands.  Decision-makers may gain the insights they need to anticipate changes, deal with problems head-on, and profit from emerging trends with the help of predictive analytics tools. It helps professionals in the field discover connections between unstructured and organized data, make pertinent deductions, and make appropriate plans.",
            points: ["Understanding Datasets", "Data Wrangling", "Identify Pattern & Trend", "Model Evaluation", "Deployment"]
        }
    ]

    const projectData = [
        {
            title: "Slide In",
            content: "a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network.",
        },
        {
            title: "Cosmos",
            content: "Lessentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain.",
        },
        {
            title: "DataSet CO",
            content: "Role-based data distribution and filteringmade possible by datasets. By connecting dataset rules to a user's dataset roles",
        },
    ]

    const gridData = [
        {
            name: "Understanding Datasets",
            firstLetter: "U",
            img: R1,
            content: "Role-based data distribution and filtering are made possible by datasets. By connecting dataset rules to a user's dataset roles, you may restrict the types and amounts of data that are presented for them. The collection of data that corresponds to the user's dataset roles constitutes the resultant dataset rules."
        },

        {
            name: "Data Wrangling",
            firstLetter: "D",
            img: R2,
            tool: T1,
            content: "To make complicated data sets more accessible and understandable, data wrangling is the act of cleaning up mistakes and merging different complex data sets. Large amounts of data need to be stored and organised for analysis since the quantity of data and data sources accessible today are expanding quickly."
        },

        {
            name: "Identify Pattern & Trend",
            firstLetter: "I",
            img: R3,
            content: "We will concentrate on identifying and examining data patterns and the trends that data shows. This data may be used by the company to forecast, plan, and test hypotheses and tactics."
        },

        {
            name: "Model Evaluation",
            firstLetter: "M",
            img: R4,
            content: "Model evaluation is the practise of employing several evaluation measures to comprehend the performance and strengths and weaknesses of a machine learning model. With the early stages of research, it is crucial to evaluate a model's effectiveness. Model evaluation also aids in model monitoring."
        },

        {
            name: "Deployment",
            firstLetter: "D",
            img: R5,
            tool: T2,
            content: "The term 'deployment' refers to the use of a model to make predictions using fresh data. The deployment step can range in complexity from developing a repeatable data science process to something as simple as producing a report, depending on the objectives."
        },


    ]

    return (
        <Layout>
                <div className='research-outer'>
                    <Top bgimg={Predictive_img1} />
                    <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Predictive Analysis Services</u>
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
