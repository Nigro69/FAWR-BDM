import React, {useEffect} from 'react'
import "./Life.css"

import Life_img1 from "./LifeImages/Life_img1.png"
import R1 from "./LifeImages/1.png"
import R2 from "./LifeImages/2.png"
import R3 from "./LifeImages/3.png"
import R4 from "./LifeImages/4.png"
import R5 from "./LifeImages/5.png"

import { useMediaQuery } from '@chakra-ui/react'



export default function Life({ mode }) {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    return (
        <div className='life-outer'>
            <div className='life-bgimg' style={{ width: "100%" }}>
                <img src={Life_img1} style={{ width: "100%" }} />
            </div>

            <div className='life-grid' style={{ display: isLargerThan1000 ? "flex" : "none" }}>
                <div className='life-grid-left'>
                    <div className='life-grid-title'>
                        A unique, flexible model
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Our approach of home staffing generates individual champions and wide-ranging opportunities.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        I'll begin with your home team. On several cases, you'll collaborate with office coworkers, giving you the chance to form deep bonds with colleagues and case managers you may rely on in the future. Additionally, you'll be assigned a home office programme manager, who acts as your personal ally and works to ensure that your time at BDM supports both your professional and personal objectives.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        However, your prospects go well beyond your home office. Working on cases in teams with offices from other markets will expose you to a variety of skill sets and ways of thinking, which is crucial for your professional development. Additionally, you'll participate in a global training event every 18 to 24 months where you'll hear from our global managers and partners and exchange ideas with coworkers from 64 locations across the world.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        You'll gain comprehensive skills that will help you be ready for what comes next, wherever it may lead you, thanks to a solid support network, international experience, and opportunity to work with varied teams.
                    </div>
                </div>
                <div className='life-grid-right'>
                    <img src={R1} style={{ width: "100%" }} />
                </div>
            </div>


            <div className='life-grid' style={{ flexDirection: "row-reverse", display: isLargerThan1000 ? "flex" : "none" }}>
                <div className='life-grid-left'>
                    <div className='life-grid-title'>
                        A diverse, dynamic culture
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        We never gave up on one another.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        We live by this straightforward dictum every day. People that push, encourage, and motivate you on both a personal and professional level will be all around you.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Building outstanding teams depends on our dedication to diversity, inclusiveness, and cooperation. We choose candidates with remarkable talents, skills, and potential, then we develop a workplace culture that encourages you to bring your complete self to work.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        You'll fit in if you can push yourself to be extraordinary and encourage others to do the same.
                    </div>
                </div>
                <div className='life-grid-right'>
                    <img src={R2} style={{ width: "100%" }} />
                </div>
            </div>



            <div className='life-grid' style={{ display: isLargerThan1000 ? "flex" : "none" }}>
                <div className='life-grid-left'>
                    <div className='life-grid-title'>
                        An opportunity for impact
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Our clientele are fearless individuals who want to shape the future rather than run from it.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Working as a team with our customers to help them beat the competition and reimagine their industries, we address disruptive problems. But you won't succeed by yourself. To produce better, quicker, and longer-lasting outcomes, you'll cooperate with a network of digital innovators while working in integrated teams.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        The breadth, depth, and diversity of our cases will also hasten your professional development. As you grow, you'll be able to explore other areas of interest since you'll gain wide experience across sectors and business difficulties.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Your early work experiences will aid in navigating changing problems and preparing you for the remarkable opportunities that lie ahead.
                    </div>
                </div>
                <div className='life-grid-right'>
                    <img src={R3} style={{ width: "100%" }} />
                </div>
            </div>


            <div className='life-grid' style={{ flexDirection: "row-reverse", display: isLargerThan1000 ? "flex" : "none" }}>
                <div className='life-grid-left'>
                    <div className='life-grid-title'>
                        A global perspective
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        To ensure you have the skills necessary to thrive at BDM and beyond, we provide thorough, individualised training. Every 18 to 24 months, you'll go to a worldwide training session where you'll be trained alongside your peers by existing BDM managers and partners who are familiar with the abilities you'll need to be successful. These meetings take place all around the world, from Hong Kong to Los Angeles to Rome and elsewhere.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        You won't be sitting in lecture halls at a worldwide session; instead, you'll learn in small groups while engaging in a fun combination of presentations, activities, role-playing, and experience sharing. Participants are led by trainers from various international BDM offices while working in teams with peers from across the world. We don't hire external trainers from other businesses. In fact, formal and informal training are areas where we are regarded as industry leaders.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        We engage in thorough continuous in-office training, digital learning resources, and on-the-job training since regular ongoing training is crucial as well.
                    </div>
                </div>
                <div className='life-grid-right'>
                    <img src={R4} style={{ width: "100%" }} />
                </div>
            </div>
















            <div className='life-grid' style={{ display: isLargerThan1000 ? "none" : "flex" }}>
                <div className='life-grid-left'>
                    <div className='life-grid-title'>
                        A unique, flexible model
                    </div>
                    <div className='life-grid-right'>
                        <img src={R1} style={{ width: "90%" }} />
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Our approach of home staffing generates individual champions and wide-ranging opportunities.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        I'll begin with your home team. On several cases, you'll collaborate with office coworkers, giving you the chance to form deep bonds with colleagues and case managers you may rely on in the future. Additionally, you'll be assigned a home office programme manager, who acts as your personal ally and works to ensure that your time at BDM supports both your professional and personal objectives.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        However, your prospects go well beyond your home office. Working on cases in teams with offices from other markets will expose you to a variety of skill sets and ways of thinking, which is crucial for your professional development. Additionally, you'll participate in a global training event every 18 to 24 months where you'll hear from our global managers and partners and exchange ideas with coworkers from 64 locations across the world.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        You'll gain comprehensive skills that will help you be ready for what comes next, wherever it may lead you, thanks to a solid support network, international experience, and opportunity to work with varied teams.
                    </div>
                </div>
            </div>


            <div className='life-grid' style={{ display: isLargerThan1000 ? "none" : "flex" }}>
                <div className='life-grid-left'>
                    <div className='life-grid-title'>
                        A diverse, dynamic culture
                    </div>
                    <div className='life-grid-right'>
                        <img src={R2} style={{ width: "90%" }} />
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        We never gave up on one another.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        We live by this straightforward dictum every day. People that push, encourage, and motivate you on both a personal and professional level will be all around you.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Building outstanding teams depends on our dedication to diversity, inclusiveness, and cooperation. We choose candidates with remarkable talents, skills, and potential, then we develop a workplace culture that encourages you to bring your complete self to work.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        You'll fit in if you can push yourself to be extraordinary and encourage others to do the same.
                    </div>
                </div>
            </div>



            <div className='life-grid' style={{ display: isLargerThan1000 ? "none" : "flex" }}>
                <div className='life-grid-left'>
                    <div className='life-grid-title'>
                        An opportunity for impact
                    </div>
                    <div className='life-grid-right'>
                        <img src={R3} style={{ width: "90%" }} />
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Our clientele are fearless individuals who want to shape the future rather than run from it.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Working as a team with our customers to help them beat the competition and reimagine their industries, we address disruptive problems. But you won't succeed by yourself. To produce better, quicker, and longer-lasting outcomes, you'll cooperate with a network of digital innovators while working in integrated teams.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        The breadth, depth, and diversity of our cases will also hasten your professional development. As you grow, you'll be able to explore other areas of interest since you'll gain wide experience across sectors and business difficulties.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Your early work experiences will aid in navigating changing problems and preparing you for the remarkable opportunities that lie ahead.
                    </div>
                </div>
            </div>


            <div className='life-grid' style={{ display: isLargerThan1000 ? "none" : "flex" }}>
                <div className='life-grid-left'>
                    <div className='life-grid-title'>
                        A global perspective
                    </div>
                    <div className='life-grid-right'>
                        <img src={R4} style={{ width: "90%" }} />
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        To ensure you have the skills necessary to thrive at BDM and beyond, we provide thorough, individualised training. Every 18 to 24 months, you'll go to a worldwide training session where you'll be trained alongside your peers by existing BDM managers and partners who are familiar with the abilities you'll need to be successful. These meetings take place all around the world, from Hong Kong to Los Angeles to Rome and elsewhere.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        You won't be sitting in lecture halls at a worldwide session; instead, you'll learn in small groups while engaging in a fun combination of presentations, activities, role-playing, and experience sharing. Participants are led by trainers from various international BDM offices while working in teams with peers from across the world. We don't hire external trainers from other businesses. In fact, formal and informal training are areas where we are regarded as industry leaders.
                    </div>
                    <div className='life-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        We engage in thorough continuous in-office training, digital learning resources, and on-the-job training since regular ongoing training is crucial as well.
                    </div>
                </div>
            </div>






















            <div className='life-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u> Glimpses of life at BDM</u>
            </div>
            <div className='life-imgs' style={{ width: "100%", justifyContent: "center", display: "flex", marginTop: "5%" }}>
                <img src={R5} style={{ width: "80%" }} />
            </div>
        </div>
    )
}
