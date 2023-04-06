import { Stack } from '@chakra-ui/react'
import React from 'react'
import "./Aboutoption.css"

import { ChevronRightIcon } from '@chakra-ui/icons'

import { NavLink as Link } from 'react-router-dom'
import Layout from '../../../../Layout/Layout'
import { useStateContext } from '../../../../../contexts/ContextProvider'

export default function Aboutoption({ onClick }) {
    const { mode } = useStateContext()
    return (
        <div className='ao-outer' style={{ backgroundColor: mode === "dark" ? "#211F22" : "white" }}>
            <div className='ao-left'>
                <div className='ao-option' style={{ borderTop: mode === "dark" ? "1px solid white" : "1px solid black", borderBottom: mode === "dark" ? "1px solid white" : "1px solid black" }}>
                    <Link to="/Overview">
                        <Stack onClick={onClick} direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                            <div classname="ao-option-text" style={{ color: mode === "dark" ? "white" : "black" }}>
                                Overview
                            </div>
                            <ChevronRightIcon fontSize="20" color={mode === "dark" ? "white" : "black"} />
                        </Stack>
                    </Link>
                </div>
                <div className='ao-option' style={{ borderBottom: mode === "dark" ? "1px solid white" : "1px solid black" }}>
                    <Link to="/Leadership">
                        <Stack direction="row" onClick={onClick} display="flex" justifyContent="space-between" alignItems='center'>
                            <div classname="ao-option-text" style={{ color: mode === "dark" ? "white" : "black" }}>
                                Leadership
                            </div>
                            <ChevronRightIcon fontSize="20" color={mode === "dark" ? "white" : "black"} />
                        </Stack>
                    </Link>
                </div>
                <div className='ao-option' style={{ borderBottom: mode === "dark" ? "1px solid white" : "1px solid black" }}>
                    <Link to="/Vision, Mission & Values">
                        <Stack direction="row" onClick={onClick} display="flex" justifyContent="space-between" alignItems='center'>
                            <div classname="ao-option-text" style={{ color: mode === "dark" ? "white" : "black" }}>
                                Vision, Mission & Values
                            </div>
                            {/* <ChevronRightIcon fontSize="2rem" /> */}
                        </Stack>
                    </Link>
                </div>
                <div className='ao-option' style={{ borderBottom: mode === "dark" ? "1px solid white" : "1px solid black" }}>
                    <Link to="/Policy & Charters">
                        <Stack direction="row" onClick={onClick} display="flex" justifyContent="space-between" alignItems='center'>
                            <div classname="ao-option-text" style={{ color: mode === "dark" ? "white" : "black" }}>
                                Policies & Charters
                            </div>
                            <ChevronRightIcon fontSize="20" color={mode === "dark" ? "white" : "black"} />
                        </Stack>
                    </Link>
                </div>
                <div className='ao-option' style={{ borderBottom: mode === "dark" ? "1px solid white" : "1px solid black" }}>
                    <Link to="/Global Affiliation">
                        <Stack direction="row" onClick={onClick} display="flex" justifyContent="space-between" alignItems='center'>
                            <div classname="ao-option-text" style={{ color: mode === "dark" ? "white" : "black" }}>
                                Global Affiliation
                            </div>
                            <ChevronRightIcon fontSize="20" color={mode === "dark" ? "white" : "black"} />
                        </Stack>
                    </Link>
                </div>
                <div className='ao-option' style={{ borderBottom: mode === "dark" ? "1px solid white" : "1px solid black" }}>
                    <Link to="/About Us">
                        <Stack direction="row" onClick={onClick} display="flex" justifyContent="space-between" alignItems='center'>
                            <div classname="ao-option-text" style={{ color: mode === "dark" ? "white" : "black" }}>
                                {/* Code of Conduct */}
                                About Us
                            </div>
                            {/* <ChevronRightIcon fontSize="2rem" /> */}
                        </Stack>
                    </Link>
                </div>

            </div>
            <div className='ao-right'>
                <div className='ao-right-text1' style={{ color: mode === "dark" ? "white" : "black" }}>
                    We are committed to bringing about change for the betterment of everybody.
                </div>

                <div className='ao-right-text2' style={{ color: mode === "dark" ? "white" : "black" }}>
                    Every day, our knowledgeable, devoted staff puts our shared convictions into practise. Together, we blend creativity and accumulated wisdom to produce the remarkable.
                </div>
            </div>
        </div>
    )
}
