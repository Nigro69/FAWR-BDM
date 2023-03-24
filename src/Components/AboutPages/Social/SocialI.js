import React from 'react'
import "./SocialI.css"

import S1 from "./SocialIImages/S1.png"

export default function SocialI({ mode }) {

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });


    return (
        <div className='social-outer'>
            <div style={{ width: "100%" }}>
                <img src={S1} style={{ width: "100%" }} />
            </div>
            <div className='social-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                We collaborate with companies that have created and scaled change models that are shown to be effective, but who frequently lack access to the kind of strategic advising that BDM can offer to enable them to realise their full potential.
            </div>

            <div className='social-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                Using the Alliance to End Plastic Waste to eliminate plastics from the environment
            </div>

            <div className='social-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                BDM backed the creation of the Alliance to End Plastic Waste, a grouping of more than 40 international businesses involved in the plastics supply chain that have committed $1.5 billion over five years to reducing environmental plastic waste.
            </div>

            <div className='social-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Our Focus Areas</u>
            </div>
            <div className='social-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                BDM's skill, experience, and insight are made available to groups confronting today's pressing issues in education, racial and social equality, economic growth, and the environment through our pro bono work. We have structured ourselves around four main areas to address these problems.
            </div>
            <div className='social-grid'>
                <div className='social-element'>
                    <div className='social-element-title'>
                        Economic Development
                    </div>
                    <div className='social-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Our work in economic development makes use of the power of markets and business enterprise models to boost the growth of income, generate employment, and enhance the standard of living for the world's underprivileged.
                    </div>
                </div>

                <div className='social-element'>
                    <div className='social-element-title'>
                        Environment
                    </div>
                    <div className='social-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        In order to incorporate sustainability and lessen environmental effect, we collaborate with business customers and environmental NGOs to support their conservation efforts.
                    </div>
                </div>

                <div className='social-element'>
                    <div className='social-element-title'>
                        Education
                    </div>
                    <div className='social-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        We collaborate with cutting-edge educational NGOs and school systems to improve the chances for underprivileged youth to lead lives full with options.
                    </div>
                </div>

                <div className='social-element'>
                    <div className='social-element-title'>
                        Racial & Social Equity
                    </div>
                    <div className='social-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Our dedication to promote social justice and racial equality in our communities has just been reaffirmed.
                    </div>
                </div>
            </div>
        </div>
    )
}
