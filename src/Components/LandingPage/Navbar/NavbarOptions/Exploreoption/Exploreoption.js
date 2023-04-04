import { Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Exploreoption.css"

import { ChevronRightIcon } from '@chakra-ui/icons'

import { NavLink as Link } from 'react-router-dom'
import Layout from '../../../../Layout/Layout'
import { useStateContext } from '../../../../../contexts/ContextProvider'

export default function Exploreoption({ onClick, mode }) {

    const [selectedOption, setSelectedOption] = useState(0)

    return (
        <div className='eo-outer' style={{ backgroundColor: mode === "dark" ? "#211F22" : "white" }}>
            <div className='eo-left'>
                <div className='eo-option' style={{ borderBottom: mode === "dark" ? "1px solid white" : "1px solid black", borderTop: mode === "dark" ? "1px solid white" : "1px solid black" }} onClick={(e) => setSelectedOption(0)}>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <div classname="eo-option-text" style={{ color: mode === "dark" ? "white" : "black" }}>
                            Blogs
                        </div>
                        <ChevronRightIcon fontSize="20" color={mode === "dark" ? "white" : "black"} />
                    </Stack>
                </div>
                <div className='eo-option' style={{ borderBottom: mode === "dark" ? "1px solid white" : "1px solid black" }} onClick={onClick} >
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <div classname="eo-option-text" style={{ color: mode === "dark" ? "white" : "black" }}>
                            Achievements
                        </div>
                        {/* <ChevronRightIcon fontSize="20" color={mode === "dark" ? "white" : "black"}  /> */}
                    </Stack>
                </div>
                <div className='eo-option' style={{ borderBottom: mode === "dark" ? "1px solid white" : "1px solid black" }} onClick={onClick}>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <Link to="/Success Stories">
                            <div classname="eo-option-text" style={{ color: mode === "dark" ? "white" : "black" }}>
                                Success Stories
                            </div>
                        </Link>
                        {/* <ChevronRightIcon fontSize="20" color={mode === "dark" ? "white" : "black"}  /> */}
                    </Stack>
                </div>
                <div className='eo-option' style={{ borderBottom: mode === "dark" ? "1px solid white" : "1px solid black" }} onClick={(e) => setSelectedOption(1)} >
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <div classname="eo-option-text" style={{ color: mode === "dark" ? "white" : "black" }}>
                            Events
                        </div>
                        <ChevronRightIcon fontSize="20" color={mode === "dark" ? "white" : "black"} />
                    </Stack>
                </div>
                <div className='eo-option' style={{ borderBottom: mode === "dark" ? "1px solid white" : "1px solid black" }} onClick={onClick}>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <div classname="eo-option-text" style={{ color: mode === "dark" ? "white" : "black" }}>
                            Reports
                        </div>
                        {/* <ChevronRightIcon fontSize="20" color={mode === "dark" ? "white" : "black"}  /> */}
                    </Stack>
                </div>
                <div className='eo-option' style={{ borderBottom: mode === "dark" ? "1px solid white" : "1px solid black" }} onClick={(e) => setSelectedOption(2)}>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <div classname="eo-option-text" style={{ color: mode === "dark" ? "white" : "black" }}>
                            Webinars
                        </div>
                        <ChevronRightIcon fontSize="20" color={mode === "dark" ? "white" : "black"} />
                    </Stack>
                </div>

            </div>
            <div className='eo-right'>
                {
                    selectedOption === 0 ? <>
                        <div className='eo-right-text1' style={{ borderBottom: mode === "dark" ? "2px solid white" : "2px solid black", width: "80%", color: mode === "dark" ? "white" : "black" }}>
                            Topics
                        </div>

                        <div className="eo-right-grid">
                            <Link to="/Research Intelligence Services">
                                <div className='eo-right-text2' style={{ color: mode === "dark" ? "white" : "black" }} onClick={onClick}>
                                    Digital Research
                                </div>
                            </Link>

                            <Link to="/Research Intelligence Services">
                                {/* <div className='eo-right-text2'>
                                Digital Research
                            </div> */}
                            </Link>

                            <Link to="/DevOps">
                                <div className='eo-right-text2' style={{ color: mode === "dark" ? "white" : "black" }} onClick={onClick}>
                                    DevOps
                                </div>
                            </Link>

                            <Link to="/DevOps">
                                {/* <div className='eo-right-text2'>
                                DevOps
                            </div> */}
                            </Link>

                            <Link to="">
                                <div className='eo-right-text2' style={{ color: mode === "dark" ? "white" : "black" }} onClick={onClick}>
                                    Sales Intelligence
                                </div>
                            </Link>

                            <Link to="">
                                {/* <div className='eo-right-text2'>
                                Sales Intelligence
                            </div> */}
                            </Link>

                            <Link to="/Legal Consultant Services">
                                <div className='eo-right-text2' style={{ color: mode === "dark" ? "white" : "black" }} onClick={onClick}>
                                    Legal Consultant
                                </div>
                            </Link>

                            <Link to="/Legal Consultant Services">
                                {/* <div className='eo-right-text2'>
                                Legal Consultant
                            </div> */}
                            </Link>

                            <Link to="/Marketing Automation Services">
                                <div className='eo-right-text2' style={{ color: mode === "dark" ? "white" : "black" }} onClick={onClick}>
                                    Marketing Automation
                                </div>
                            </Link>

                            <Link to="/Marketing Automation Services">
                                {/* <div className='eo-right-text2'>
                                Marketing Automation
                            </div> */}
                            </Link>
                        </div>


                    </> : selectedOption === 1 ? <>
                        <div className='eo-right-text1' style={{ borderBottom: mode === "dark" ? "2px solid white" : "2px solid black", width: "80%", color: mode === "dark" ? "white" : "black" }}>
                            Upcoming
                        </div>

                        <div className="eo-right-grid1">
                            <div className='eo-right-box'>
                                <div className='eo-right-box-top'></div>
                                <div className='eo-right-box-text1' style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Lorem ipsum dolor sit amet consectetur.
                                </div>
                                <div className='eo-right-box-text2' style={{ color: mode === "dark" ? "white" : "black" }}>
                                    1 Nov 2022
                                </div>
                                <div className='eo-right-box-text2' style={{ color: mode === "dark" ? "white" : "black" }}>
                                    City
                                </div>


                                <div className='eo-right-box-text3' style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Register {">"}
                                </div>
                            </div>

                            <div className='eo-right-box'>
                                <div className='eo-right-box-top'></div>
                                <div className='eo-right-box-text1' style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Lorem ipsum dolor sit amet consectetur.
                                </div>
                                <div className='eo-right-box-text2' style={{ color: mode === "dark" ? "white" : "black" }}>
                                    1 Nov 2022
                                </div>
                                <div className='eo-right-box-text2' style={{ color: mode === "dark" ? "white" : "black" }}>
                                    City
                                </div>


                                <div className='eo-right-box-text3' style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Register {">"}
                                </div>
                            </div>


                        </div>
                    </> : <>
                        <div className='eo-right-text1' style={{ borderBottom: mode === "dark" ? "2px solid white" : "2px solid black", width: "80%", color: mode === "dark" ? "white" : "black" }}>
                            Upcoming
                        </div>

                        <div className="eo-right-grid1">
                            <div className='eo-right-box'>
                                <div className='eo-right-box-top'></div>
                                <div className='eo-right-box-text1' style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Lorem ipsum dolor sit amet consectetur.
                                </div>
                                <div className='eo-right-box-text2' style={{ color: mode === "dark" ? "white" : "black" }}>
                                    1 Nov 2022
                                </div>



                                <div className='eo-right-box-text3' style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Register {">"}
                                </div>
                            </div>

                            <div className='eo-right-box'>
                                <div className='eo-right-box-top'></div>
                                <div className='eo-right-box-text1' style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Lorem ipsum dolor sit amet consectetur.
                                </div>
                                <div className='eo-right-box-text2' style={{ color: mode === "dark" ? "white" : "black" }}>
                                    1 Nov 2022
                                </div>



                                <div className='eo-right-box-text3' style={{ color: mode === "dark" ? "white" : "black" }}>
                                    Register {">"}
                                </div>
                            </div>


                        </div>
                    </>
                }

            </div>
        </div>
    )
}
