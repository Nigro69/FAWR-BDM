import { Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Solutionoption.css"

import so1 from "./SolutionoptionImages/1.png"
import so2 from "./SolutionoptionImages/2.png"
import so3 from "./SolutionoptionImages/3.png"

import so4 from "./SolutionoptionImages/4.png"
import so5 from "./SolutionoptionImages/5.png"

import so6 from "./SolutionoptionImages/6.png"
import so7 from "./SolutionoptionImages/7.png"
import so8 from "./SolutionoptionImages/8.png"
import so9 from "./SolutionoptionImages/9.png"
import so10 from "./SolutionoptionImages/10.png"
import so11 from "./SolutionoptionImages/11.png"
import so12 from "./SolutionoptionImages/12.png"
import so13 from "./SolutionoptionImages/13.png"
import so14 from "./SolutionoptionImages/14.png"
import so15 from "./SolutionoptionImages/15.png"
import so16 from "./SolutionoptionImages/16.png"
import so17 from "./SolutionoptionImages/17.png"

import { useMediaQuery } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import { NavLink as Link } from 'react-router-dom'
import Layout from '../../../../Layout/Layout'
import { useStateContext } from '../../../../../contexts/ContextProvider'

export default function Solutionoption({ onToggle }) {
    const { mode } = useStateContext()
    const [option, setOption] = useState(0)

    const [isLargerThan850] = useMediaQuery('(min-width: 850px)')
    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    return (
        <div className='so-outer'>
            <div className='so-left'>
                <div className='so-option' onClick={(e) => { setOption(0) }} style={{ backgroundColor: option === 0 ? "#BC312E" : "#211F22" }}>
                    Services
                </div>

                <div className='so-option' onClick={(e) => { setOption(1) }} style={{ backgroundColor: option === 1 ? "#BC312E" : "#211F22" }}>
                    Products
                </div>

                <div className='so-option' onClick={(e) => { setOption(2) }} style={{ backgroundColor: option === 2 ? "#BC312E" : "#211F22" }}>
                    Industry
                </div>


                {/* style={{ display: "grid", gridTemplateColumns: isLargerThan850 ? option === 2 ? "1fr 1fr 1fr 1fr" : "1fr 1fr 1fr" : "1fr", rowGap: option === 2 ? "10%" : "1%" }} */}
            </div>
            <div className='so-right'>
                {
                    option === 0 ? <div className='so-right1'>
                        <div className="so-right-box" style={{ backgroundColor: mode === "dark" ? "#2A2A2A" : "white", border: mode === "dark" ? "none" : "1px solid black" }}>
                            <div>
                                <img src={so1} />
                            </div>
                            <div className='so-right-box-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                                Development Services
                            </div>
                            <Link to="/Web Development Services">
                                <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Web development
                                </div>
                            </Link>
                            <Link to="/Blockchain Development Services">
                                <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Blockchain development
                                </div>
                            </Link>
                            <Link to="/DevOps">
                                <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                    DevOps services
                                </div>
                            </Link>
                            <Link to="/App Development Services">
                                <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                    App development
                                </div>
                            </Link>
                            <Link to='/Cloud Storage & Management Services'>
                                <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Cloud storage & management
                                </div>
                            </Link>
                        </div>


                        <div className="so-right-box" style={{ backgroundColor: mode === "dark" ? "#2A2A2A" : "white", border: mode === "dark" ? "none" : "1px solid black" }}>
                            <div>
                                <img src={so2} />
                            </div>
                            <div className='so-right-box-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                                Design Services
                            </div>
                            <Link to="/UX / UI Design Services">
                                <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                    UX/UI Design
                                </div>
                            </Link>
                            <Link to="/Graphic Design Services">
                                <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Graphic Design
                                </div>
                            </Link>
                            <Link to='/Video Services'>
                                <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Video editing
                                </div>
                            </Link>
                            <Link to="/Animations Services">
                                <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Animations
                                </div>
                            </Link>
                            <Link to="/Social Media Marketing Services">
                                <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Social media design
                                </div>
                            </Link>
                        </div>

                        <div className="so-right-box" style={{ backgroundColor: mode === "dark" ? "#2A2A2A" : "white", border: mode === "dark" ? "none" : "1px solid black" }}>
                            <div>
                                <img src={so3} />
                            </div>
                            <div className='so-right-box-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                                Consultancy  Services
                            </div>
                            <Link to="/Management Consultant Services">
                                <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Management consultant
                                </div>
                            </Link>
                            <Link to="/Operations Consultant Services">
                                <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Operations consultant
                                </div>
                            </Link>
                            <Link to="/Financial Advisory Services">
                                <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Financial advisory
                                </div>
                            </Link>
                            <Link to="/Legal Consultant Services">
                                <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Legal Consultant
                                </div>
                            </Link>
                            <Link to="/Strategy Consultant Services">
                                <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Strategy Consultant
                                </div>
                            </Link>
                            <Link to="/Distribution Strategy Services">
                                <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Distribution Strategy
                                </div>
                            </Link>
                            <Link to="/Reputation Consultation Services">
                                <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Reputation Consultant
                                </div>
                            </Link>
                        </div>
                    </div> :
                        option === 1 ? <div className='so-right2'>
                            <div className="so-right-box" style={{ backgroundColor: mode === "dark" ? "#2A2A2A" : "white", border: mode === "dark" ? "none" : "1px solid black" }}>
                                <div>
                                    <img src={so4} />
                                </div>
                                <div className='so-right-box-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Digital Marketing
                                </div>
                                <Link to="/Marketing Automation Services">
                                    <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Marketing automation
                                    </div>
                                </Link>
                                <Link to="/Email Marketing Services">
                                    <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Email marketing
                                    </div>
                                </Link>
                                <Link to="/Search Engine Marketing Services">
                                    <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Search engine marketing
                                    </div>
                                </Link>
                                <Link to="/Social Media Marketing Services">
                                    <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Social media marketing
                                    </div>
                                </Link>
                                <Link to="/Mobile Marketing Services">
                                    <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Mobile marketing
                                    </div>
                                </Link>
                            </div>


                            <div className="so-right-box" style={{ backgroundColor: mode === "dark" ? "#2A2A2A" : "white", border: mode === "dark" ? "none" : "1px solid black" }}>
                                <div>
                                    <img src={so5} />
                                </div>
                                <div className='so-right-box-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Analytics and Insights
                                </div>

                                <Link to="/Research Intelligence Services">
                                    <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Research Intelligence
                                    </div>
                                </Link>
                                <Link to="/Predictive Analysis Services">
                                    <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Predictive Analytics
                                    </div>
                                </Link>
                                <Link to="/Business Intelligence Services">
                                    <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Business Intelligence
                                    </div>
                                </Link>
                                <Link to="/Speech & Text Analytics Services">
                                    <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Speech & text Analytics
                                    </div>
                                </Link>
                                <Link to="/Customer Segmentation Services">
                                    <div className='so-right-box-text' onClick={onToggle} style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Customer Segmentation
                                    </div>
                                </Link>
                            </div>
                        </div> : <div className='so-right3'>
                            <Link to="/Technology">
                                <div className="so-right-box1 flex justify-between p-3" onClick={onToggle} style={{ backgroundColor: mode === "dark" ? "#2A2A2A" : "white", border: mode === "dark" ? "none" : "1px solid black" }}>
                                    <div>
                                        <img className='h-10 w-10' src={so6} />
                                    </div>
                                    <div className='so-right1-box-title text-center' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Technology
                                    </div>
                                </div>
                            </Link>
                            <Link to="/Automotive">
                                <div className="so-right-box1 flex justify-between p-3" onClick={onToggle} style={{ backgroundColor: mode === "dark" ? "#2A2A2A" : "white", border: mode === "dark" ? "none" : "1px solid black" }}>
                                    <div>
                                        <img className='h-10 w-10' src={so7} />
                                    </div>
                                    <div className='so-right1-box-title  text-center' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Automotive
                                    </div>
                                </div>
                            </Link>
                            <Link to="/Education">
                                <div className="so-right-box1 flex justify-between p-3" onClick={onToggle} style={{ backgroundColor: mode === "dark" ? "#2A2A2A" : "white", border: mode === "dark" ? "none" : "1px solid black" }}>
                                    <div>
                                        <img className='h-10 w-10' src={so8} />
                                    </div>
                                    <div className='so-right1-box-title  text-center' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Education
                                    </div>
                                </div>
                            </Link>
                            <Link to="/Insurance">
                                <div className="so-right-box1 flex justify-between p-3" onClick={onToggle} style={{ backgroundColor: mode === "dark" ? "#2A2A2A" : "white", border: mode === "dark" ? "none" : "1px solid black" }}>
                                    <div>
                                        <img className='h-10 w-10' src={so9} />
                                    </div>
                                    <div className='so-right1-box-title  text-center' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Insurance
                                    </div>
                                </div>
                            </Link>
                            <Link to="/Banking & Finance">
                                <div className="so-right-box1 flex justify-between p-3" onClick={onToggle} style={{ backgroundColor: mode === "dark" ? "#2A2A2A" : "white", border: mode === "dark" ? "none" : "1px solid black" }}>
                                    <div>
                                        <img className='h-10 w-10' src={so10} />
                                    </div>
                                    <div className='so-right1-box-title  text-center' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Banking and
                                        Finance
                                    </div>
                                </div>
                            </Link>
                            <Link to="/E-Commerce">
                                <div className="so-right-box1 flex justify-between p-3" onClick={onToggle} style={{ backgroundColor: mode === "dark" ? "#2A2A2A" : "white", border: mode === "dark" ? "none" : "1px solid black" }}>
                                    <div>
                                        <img className='h-10 w-10' src={so11} />
                                    </div>
                                    <div className='so-right1-box-title  text-center' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        E-commerce
                                    </div>
                                </div>
                            </Link>
                            <Link to="/Travel,Transport & Logistics">
                                <div className="so-right-box1 flex justify-between p-3" onClick={onToggle} style={{ backgroundColor: mode === "dark" ? "#2A2A2A" : "white", border: mode === "dark" ? "none" : "1px solid black" }}>
                                    <div>
                                        <img className='h-10 w-10' src={so12} />
                                    </div>
                                    <div className='so-right1-box-title min-w-32  text-center' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Travel, Transport
                                        & Logistics
                                    </div>
                                </div>
                            </Link>
                            <Link to="/Telecom">
                                <div className="so-right-box1 flex justify-between p-3" onClick={onToggle} style={{ backgroundColor: mode === "dark" ? "#2A2A2A" : "white", border: mode === "dark" ? "none" : "1px solid black" }}>
                                    <div>
                                        <img className='h-10 w-10' src={so13} />
                                    </div>
                                    <div className='so-right1-box-title  text-center' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Telecom
                                    </div>
                                </div>
                            </Link>
                            <Link to="/Energy & Utilities">
                                <div className="so-right-box1 flex justify-between p-3" onClick={onToggle} style={{ backgroundColor: mode === "dark" ? "#2A2A2A" : "white", border: mode === "dark" ? "none" : "1px solid black" }}>
                                    <div>
                                        <img className='h-10 w-10' src={so14} />
                                    </div>
                                    <div className='so-right1-box-title  text-center' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Energy and
                                        Utilities
                                    </div>
                                </div>
                            </Link>
                            <Link to="/Healthcare">
                                <div className="so-right-box1 flex justify-between p-3" onClick={onToggle} style={{ backgroundColor: mode === "dark" ? "#2A2A2A" : "white", border: mode === "dark" ? "none" : "1px solid black" }}>
                                    <div>
                                        <img className='h-10 w-10' src={so15} />
                                    </div>
                                    <div className='so-right1-box-title  text-center' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Healthcare
                                    </div>
                                </div>
                            </Link>
                            <Link to="/Media & Entertainment">
                                <div className="so-right-box1 flex justify-between p-3" onClick={onToggle} style={{ backgroundColor: mode === "dark" ? "#2A2A2A" : "white", border: mode === "dark" ? "none" : "1px solid black" }}>
                                    <div>
                                        <img className='h-10 w-10' src={so16} />
                                    </div>
                                    <div className='so-right1-box-title  text-center' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Media and
                                        Entertainment
                                    </div>
                                </div>
                            </Link>
                            <Link to="/Airline">
                                <div className="so-right-box1 flex justify-between p-3" onClick={onToggle} style={{ backgroundColor: mode === "dark" ? "#2A2A2A" : "white", border: mode === "dark" ? "none" : "1px solid black" }}>
                                    <div>
                                        <img className='h-10 w-10' src={so17} />
                                    </div>
                                    <div className='so-right1-box-title  text-center' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Airline
                                    </div>
                                </div>
                            </Link>
                        </div>
                }


            </div>

        </div>
    )
}
