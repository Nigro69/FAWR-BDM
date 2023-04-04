import { Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Exploreoption.css"

import { ChevronRightIcon } from '@chakra-ui/icons'

import { NavLink as Link } from 'react-router-dom'
import Layout from '../../../../Templates/Layout/Layout'

export default function Exploreoption({ onClick }) {

    const [selectedOption, setSelectedOption] = useState(0)

    return (
        <Layout>
            <div className='eo-outer' >
                <div className='eo-left'>
                    <div className='eo-option'  onClick={(e) => setSelectedOption(0)}>
                        <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                            <div classname="eo-option-text" >
                                Blogs
                            </div>
                            <ChevronRightIcon fontSize="20"  />
                        </Stack>
                    </div>
                    <div className='eo-option'  onClick={onClick} >
                        <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                            <div classname="eo-option-text" >
                                Achievements
                            </div>
                            {/* <ChevronRightIcon fontSize="20"   /> */}
                        </Stack>
                    </div>
                    <div className='eo-option'  onClick={onClick}>
                        <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                            <Link to="/Success Stories">
                                <div classname="eo-option-text" >
                                    Success Stories
                                </div>
                            </Link>
                            {/* <ChevronRightIcon fontSize="20"   /> */}
                        </Stack>
                    </div>
                    <div className='eo-option'  onClick={(e) => setSelectedOption(1)} >
                        <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                            <div classname="eo-option-text" >
                                Events
                            </div>
                            <ChevronRightIcon fontSize="20"  />
                        </Stack>
                    </div>
                    <div className='eo-option'  onClick={onClick}>
                        <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                            <div classname="eo-option-text" >
                                Reports
                            </div>
                            {/* <ChevronRightIcon fontSize="20"   /> */}
                        </Stack>
                    </div>
                    <div className='eo-option'  onClick={(e) => setSelectedOption(2)}>
                        <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                            <div classname="eo-option-text" >
                                Webinars
                            </div>
                            <ChevronRightIcon fontSize="20"  />
                        </Stack>
                    </div>

                </div>
                <div className='eo-right'>
                    {
                        selectedOption === 0 ? <>
                            <div className='eo-right-text1' style={{   width: "80%"  }}>
                                Topics
                            </div>

                            <div className="eo-right-grid">
                                <Link to="/Research Intelligence Services">
                                    <div className='eo-right-text2'  onClick={onClick}>
                                        Digital Research
                                    </div>
                                </Link>

                                <Link to="/Research Intelligence Services">
                                    {/* <div className='eo-right-text2'>
                                Digital Research
                            </div> */}
                                </Link>

                                <Link to="/DevOps">
                                    <div className='eo-right-text2'  onClick={onClick}>
                                        DevOps
                                    </div>
                                </Link>

                                <Link to="/DevOps">
                                    {/* <div className='eo-right-text2'>
                                DevOps
                            </div> */}
                                </Link>

                                <Link to="">
                                    <div className='eo-right-text2'  onClick={onClick}>
                                        Sales Intelligence
                                    </div>
                                </Link>

                                <Link to="">
                                    {/* <div className='eo-right-text2'>
                                Sales Intelligence
                            </div> */}
                                </Link>

                                <Link to="/Legal Consultant Services">
                                    <div className='eo-right-text2'  onClick={onClick}>
                                        Legal Consultant
                                    </div>
                                </Link>

                                <Link to="/Legal Consultant Services">
                                    {/* <div className='eo-right-text2'>
                                Legal Consultant
                            </div> */}
                                </Link>

                                <Link to="/Marketing Automation Services">
                                    <div className='eo-right-text2'  onClick={onClick}>
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
                            <div className='eo-right-text1' style={{   width: "80%"  }}>
                                Upcoming
                            </div>

                            <div className="eo-right-grid1">
                                <div className='eo-right-box'>
                                    <div className='eo-right-box-top'></div>
                                    <div className='eo-right-box-text1' >
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                    <div className='eo-right-box-text2' >
                                        1 Nov 2022
                                    </div>
                                    <div className='eo-right-box-text2' >
                                        City
                                    </div>


                                    <div className='eo-right-box-text3' >
                                        Register {">"}
                                    </div>
                                </div>

                                <div className='eo-right-box'>
                                    <div className='eo-right-box-top'></div>
                                    <div className='eo-right-box-text1' >
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                    <div className='eo-right-box-text2' >
                                        1 Nov 2022
                                    </div>
                                    <div className='eo-right-box-text2' >
                                        City
                                    </div>


                                    <div className='eo-right-box-text3' >
                                        Register {">"}
                                    </div>
                                </div>


                            </div>
                        </> : <>
                            <div className='eo-right-text1' style={{   width: "80%"  }}>
                                Upcoming
                            </div>

                            <div className="eo-right-grid1">
                                <div className='eo-right-box'>
                                    <div className='eo-right-box-top'></div>
                                    <div className='eo-right-box-text1' >
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                    <div className='eo-right-box-text2' >
                                        1 Nov 2022
                                    </div>



                                    <div className='eo-right-box-text3' >
                                        Register {">"}
                                    </div>
                                </div>

                                <div className='eo-right-box'>
                                    <div className='eo-right-box-top'></div>
                                    <div className='eo-right-box-text1' >
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                    <div className='eo-right-box-text2' >
                                        1 Nov 2022
                                    </div>



                                    <div className='eo-right-box-text3' >
                                        Register {">"}
                                    </div>
                                </div>


                            </div>
                        </>
                    }

                </div>
            </div>
        </Layout>
    )
}
