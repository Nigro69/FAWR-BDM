import React, { useEffect } from 'react'
import "./Vission.css"

import V1 from "./VissionImages/V1.png"
import Layout from '../../Layout/Layout';
import { useStateContext } from '../../../contexts/ContextProvider';

export default function Vission() {
    const { mode } = useStateContext()

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <Layout>
                <div className='v-outer' style={{ backgroundColor: mode === "dark" ? "#211F22" : "white" }}>
                    <div style={{ width: "100%" }}>
                        <img src={V1} style={{ width: "100%" }} />
                    </div>

                    <div className='v-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Our Mission</u>
                    </div>
                    <div className='v-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        To provide small-to-medium sized enterprises with a technical environment that adds value and encourages innovation.
                    </div>

                    <div className='v-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Our Vision</u>
                    </div>
                    <div className='v-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        To establish a long-lasting collaboration that will focus on targeted improvement projects and foster a culture of successful technology-based solutions and lucrative possibilities.
                    </div>

                    <div className='v-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Our Values</u>
                    </div>
                    <div className='v-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Any genuine and fruitful collaboration, in our opinion, must be guided by its shared principles, which must be reaffirmed at every level and in every interaction. Because of this, our ideals are a fundamental component of our platform and guide us in all aspects of business.
                    </div>

                    <div className='v-grid'>
                        <div className='v-element'>
                            <div className='v-element-title'>
                                Integrity
                            </div>
                            <div className='v-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                In every aspect of our job, we are dedicated to being sincere, honest, and fair.
                            </div>
                        </div>

                        <div className='v-element'>
                            <div className='v-element-title'>
                                Innovation
                            </div>
                            <div className='v-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Using original thought, questioning the existing quo, and making improvements.
                            </div>
                        </div>

                        <div className='v-element'>
                            <div className='v-element-title' >
                                Community
                            </div>
                            <div className='v-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Fostering a pleasant workplace and assisting moral activities.
                            </div>
                        </div>

                        <div className='v-element'>
                            <div className='v-element-title'>
                                Success
                            </div>
                            <div className='v-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Our workforce has been trained to be knowledgeable and responsive.
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
    )
}
