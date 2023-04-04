import { Stack } from '@chakra-ui/react'
import React from 'react'
import "./Aboutoption.css"

import { ChevronRightIcon } from '@chakra-ui/icons'

import { NavLink as Link } from 'react-router-dom'
import Layout from '../../../../Templates/Layout/Layout'

export default function Aboutoption({ onClick }) {
    return (
        <Layout>
            <div className='ao-outer' >
                <div className='ao-left'>
                    <div className='ao-option' >
                        <Link to="/Overview">
                            <Stack onClick={onClick} direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                                <div classname="ao-option-text" >
                                    Overview
                                </div>
                                <ChevronRightIcon fontSize="20"  />
                            </Stack>
                        </Link>
                    </div>
                    <div className='ao-option' >
                        <Link to="/Leadership">
                            <Stack direction="row" onClick={onClick} display="flex" justifyContent="space-between" alignItems='center'>
                                <div classname="ao-option-text" >
                                    Leadership
                                </div>
                                <ChevronRightIcon fontSize="20"  />
                            </Stack>
                        </Link>
                    </div>
                    <div className='ao-option' >
                        <Link to="/Vision, Mission & Values">
                            <Stack direction="row" onClick={onClick} display="flex" justifyContent="space-between" alignItems='center'>
                                <div classname="ao-option-text" >
                                    Vision, Mission & Values
                                </div>
                                {/* <ChevronRightIcon fontSize="2rem" /> */}
                            </Stack>
                        </Link>
                    </div>
                    <div className='ao-option' >
                        <Link to="/Policy & Charters">
                            <Stack direction="row" onClick={onClick} display="flex" justifyContent="space-between" alignItems='center'>
                                <div classname="ao-option-text" >
                                    Policies & Charters
                                </div>
                                <ChevronRightIcon fontSize="20"  />
                            </Stack>
                        </Link>
                    </div>
                    <div className='ao-option' >
                        <Link to="/Global Affiliation">
                            <Stack direction="row" onClick={onClick} display="flex" justifyContent="space-between" alignItems='center'>
                                <div classname="ao-option-text" >
                                    Global Affiliation
                                </div>
                                <ChevronRightIcon fontSize="20"  />
                            </Stack>
                        </Link>
                    </div>
                    <div className='ao-option' >
                        <Link to="/About Us">
                            <Stack direction="row" onClick={onClick} display="flex" justifyContent="space-between" alignItems='center'>
                                <div classname="ao-option-text" >
                                    {/* Code of Conduct */}
                                    About Us
                                </div>
                                {/* <ChevronRightIcon fontSize="2rem" /> */}
                            </Stack>
                        </Link>
                    </div>

                </div>
                <div className='ao-right'>
                    <div className='ao-right-text1' >
                        We are committed to bringing about change for the betterment of everybody.
                    </div>

                    <div className='ao-right-text2' >
                        Every day, our knowledgeable, devoted staff puts our shared convictions into practise. Together, we blend creativity and accumulated wisdom to produce the remarkable.
                    </div>
                </div>
            </div>
        </Layout>
    )
}
