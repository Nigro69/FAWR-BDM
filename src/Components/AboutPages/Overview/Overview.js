import React, { useEffect } from 'react'
import "./Overview.css"

import O1 from "./OverviewImages/O1.png"
import O2 from "./OverviewImages/O2.png"
import O3 from "./OverviewImages/O3.png"

import Iservices from '../../Templates/IndustriesTemplates/IndustryServices/Iservices'

import { Button } from '@chakra-ui/react'
import Layout from '../../Layout/Layout'
import { useStateContext } from '../../../contexts/ContextProvider'

export default function Overview() {
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
                <div className='ov-outer' style={{ backgroundColor: mode === "dark" ? "#211F22" : "white" }}>
                    <div style={{ width: "100%" }}>
                        <img src={O1} style={{ width: "100%" }} />
                    </div>
                    <div className='ov-inner'>
                        <div className='ov-grid'>
                            <div className='ov-grid-left'>
                                <div className='ov-grid-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Greater futures are created via innovation and collective wisdom
                                </div>
                                <div className='ov-grid-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                    BigBrosDigitalMedia is a provider of IT services, business solutions, and consultancy that has partnered with many of the biggest corporations in the world. We think that innovation and general knowledge can change everyone's futures for the better.
                                </div>
                            </div>
                            <div className='ov-grid-right'>
                                <img src={O2} style={{ width: "100%" }} />
                            </div>
                        </div>
                    </div>

                    <div className='ov-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Building on belief</u>
                    </div>
                    <Iservices />

                    <Button marginTop="10%" color="white" backgroundColor="#BC312E" borderRadius="0%">
                        Download Corporate Profile
                    </Button>

                    <div className='ov-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Contributing to Innovation</u>
                    </div>

                    <div className='ov-grid2'>
                        <div className='ov-element'>
                            <div className='ov-element-left'>
                                <img src={O3} />
                            </div>
                            <div className='ov-element-right'>
                                <div className='ov-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                    Delivering higher-quality products more effectively and affordably
                                </div>
                            </div>
                        </div>

                        <div className='ov-element'>
                            <div className='ov-element-left'>
                                <img src={O3} />
                            </div>
                            <div className='ov-element-right'>
                                <div className='ov-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                    A consistent emphasis on meeting client demands is ensured through testing novel ways to services & goods.
                                </div>
                            </div>
                        </div>

                        <div className='ov-element'>
                            <div className='ov-element-left'>
                                <img src={O3} />
                            </div>
                            <div className='ov-element-right'>
                                <div className='ov-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                    Employees with greater degrees of creativity and lateral thinking prefer an innovative working style.
                                </div>
                            </div>
                        </div>

                        <div className='ov-element'>
                            <div className='ov-element-left'>
                                <img src={O3} />
                            </div>
                            <div className='ov-element-right'>
                                <div className='ov-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                    Processes of innovation have a substantial positive impact on a company's social growth.
                                </div>
                            </div>
                        </div>

                        <div className='ov-element'>
                            <div className='ov-element-left'>
                                <img src={O3} />
                            </div>
                            <div className='ov-element-right'>
                                <div className='ov-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                    People shouldn't solely consider innovation during retreats and seminars.
                                </div>
                            </div>
                        </div>

                        <div className='ov-element'>
                            <div className='ov-element-left'>
                                <img src={O3} />
                            </div>
                            <div className='ov-element-right'>
                                <div className='ov-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                    Innovation in the workplace needs to be strategic and should be ingrained in the business.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
    )
}
