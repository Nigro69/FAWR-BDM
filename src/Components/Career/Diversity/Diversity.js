import React, {useEffect} from 'react'
import "./Diversity.css"

import Diversity_img1 from "./DiversityImages/Diversity_img1.png"
import R1 from "./DiversityImages/1.png"
import R2 from "./DiversityImages/2.png"


import { useMediaQuery } from '@chakra-ui/react'



export default function Diversity({ mode }) {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    return (
        <div className='diversity-outer'>
            <div className='diversity-bgimg' style={{ width: "100%" }}>
                <img src={Diversity_img1} style={{ width: "100%" }} />
            </div>

            <div className='diversity-title' style={{ textAlign: "center", color: mode === "dark" ? "white" : "black", width: "100%" }}>
                <u>What we believe</u>
            </div>

            <div className='diversity-grid'>
                <div className='diversity-grid-left'>
                    <div className='diversity-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Our approach of home staffing generates individual champions and wide-ranging opportunities.
                    </div>
                    <div className='diversity-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        BDM's mission is to fulfil the potential of technology and human innovation, and we are dedicated to accelerating equality for all of our stakeholders—people, clients, and communities. Our dedication and mission motivate our innovation agenda, enable us to provide 360-degree value, and guarantee that we behave responsibly as a company leader.
                    </div>
                    <div className='diversity-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        It helps us to draw in, nurture, motivate, and reward exceptional talent. Additionally, it fosters an atmosphere that encourages creativity, enables our employees to give their all, and supports a culture where everyone feels they have an equal chance to fit in and advance their careers.
                    </div>
                    <div className='diversity-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Our chair, CEO, and Board are at the very top when it comes to demonstrating this dedication. And we look to leaders at all levels to contribute to building and maintaining an inclusive culture where everyone may succeed. Gender, race, LGBTIQ+, religion, people with impairments, and intercultural diversity are some of the topics on which we concentrate.
                    </div>
                </div>
                <div className='diversity-grid-right'>
                    <img src={R1} style={{ width: "80%" }} />
                </div>
            </div>


            <div className='diversity-title' style={{ textAlign: "center", color: mode === "dark" ? "white" : "black", width: "100%" }}>
                <u>How we promote a culture of equality</u>
            </div>
            <div className='diversity-grid' >
                <div className='diversity-grid-left'>

                    <div className='diversity-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        BDM provides extensive programmes to promote the well-being of its employees, including as specialised training, networking assistance, flexible work schedules, mentorship, mental health services, equal benefits for same-sex couples where local legislation allowed, and more.
                    </div>
                    <div className='diversity-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        In order to continually improve and keep our leaders accountable, we set targets, disclose the demographics of our workforce in strategic locations, and gather data. We do this because we firmly believe in the power of trust and transparency.
                    </div>
                    <div className='diversity-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        We adhere to the principle of equal pay for equal work.
                    </div>
                    <div className='diversity-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Pay equity at BDM refers to a system where employees are paid fairly and consistently based on factors such as career level, geography, and tenure. Every year, we assess the pay equity situation. In every country where we do business, women and men are paid equally, dollar for dollar. We also have dollar-for-dollar, 100% pay equity based on race and ethnicity.
                    </div>
                </div>
                <div className='diversity-grid-right'>
                    <img src={R2} style={{ width: "100%" }} />
                </div>
            </div>





        </div>
    )
}
