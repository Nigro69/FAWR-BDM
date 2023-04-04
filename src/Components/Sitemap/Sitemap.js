import React, { useEffect } from 'react'
import "./Sitemap.css"
import Layout from '../Templates/Layout/Layout';

export default function Sitemap() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <Layout>
            <div className='s-outer' >
                <div className='s-inner'>
                    <div className='s-title'>
                        Sitemap
                    </div>
                    <div className='s-text1' >
                        <b>Solutions</b>
                    </div>

                    <div className='s-sol-inner'>
                        <div className='s-sol-inner-section'>
                            <div className='s-text2' style={{   marginBottom: "1%" }}>
                                Services
                            </div>
                            <div className='s-grid'>
                                <div>
                                    <div className='s-text2' >
                                        Development Services
                                    </div>
                                    <ul className='s-ul'>
                                        <li className='s-li-text2' >Web Development</li>
                                        <li className='s-li-text2' >Blockchain Development</li>
                                        <li className='s-li-text2' >Devops</li>
                                        <li className='s-li-text2' >App Development</li>
                                        <li className='s-li-text2' >Cloud storage & Management</li>
                                    </ul>
                                </div>

                                <div>
                                    <div className='s-text2' >
                                        Design Services
                                    </div>
                                    <ul className='s-ul'>
                                        <li className='s-li-text2' >UI/UX Design</li>
                                        <li className='s-li-text2' >Graphic Design</li>
                                        <li className='s-li-text2' >Video Editing</li>
                                        <li className='s-li-text2' >Animations</li>
                                        <li className='s-li-text2' >Social Media Design</li>
                                    </ul>
                                </div>

                                <div>
                                    <div className='s-text2' >
                                        Consultancy Services
                                    </div>
                                    <ul className='s-ul'>
                                        <li className='s-li-text2' >Management Consultant</li>
                                        <li className='s-li-text2' >Operations Consultant</li>
                                        <li className='s-li-text2' >Financial Advisory</li>
                                        <li className='s-li-text2' >Legal Consultant</li>
                                        <li className='s-li-text2' >Strategy Consultant</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className='s-sol-inner-section'>
                            <div className='s-text2' style={{   marginBottom: "1%" }}>
                                Products
                            </div>
                            <div className='s-grid'>
                                <div>
                                    <div className='s-text2' >
                                        Digital Marketing
                                    </div>
                                    <ul className='s-ul'>
                                        <li className='s-li-text2' >Marketing Automation</li>
                                        <li className='s-li-text2' >Email Marketing</li>
                                        <li className='s-li-text2' >Search Engine Marketing</li>
                                        <li className='s-li-text2' >Social Media Marketing</li>
                                        <li className='s-li-text2' >Mobile Marketingt</li>
                                    </ul>
                                </div>

                                <div>
                                    <div className='s-text2' >
                                        Analytics & Insights
                                    </div>
                                    <ul className='s-ul'>
                                        <li className='s-li-text2' >Research Intelligence</li>
                                        <li className='s-li-text2' >Predictive Analytics</li>
                                        <li className='s-li-text2' >Business Intelligence</li>
                                        <li className='s-li-text2' >Speech & Text Analytics</li>
                                        <li className='s-li-text2' >Customer Segmentation</li>
                                    </ul>
                                </div>

                            </div>
                        </div>


                        <div className='s-sol-inner-section'>
                            <div className='s-text2' style={{   marginBottom: "1%" }}>
                                Industries
                            </div>
                            <div className='s-grid'>
                                <div className='s-text2' >
                                    Technology
                                </div>
                                <div className='s-text2' >
                                    Automation
                                </div>
                                <div className='s-text2' >
                                    Education
                                </div>
                                <div className='s-text2' >
                                    Banking & Finance
                                </div>
                                <div className='s-text2' >
                                    E-commerce
                                </div>
                                <div className='s-text2' >
                                    Travel, Transport & Logistics
                                </div>
                                <div className='s-text2' >
                                    Insurance
                                </div>
                                <div className='s-text2' >
                                    Telecom
                                </div>
                                <div className='s-text2' >
                                    Energy & Utilities
                                </div>
                                <div className='s-text2' >
                                    Healthcare
                                </div>
                                <div className='s-text2' >
                                    Airline
                                </div>
                                <div className='s-text2' >
                                    Media & Entertainment
                                </div>
                            </div>

                        </div>
                    </div>



                    <div className='s-text1' style={{ marginBottom: "0%", marginTop: "5%"  }}>
                        <b>Career</b>
                    </div>
                    <div className='s-sol-inner-section'>
                        <div className='s-grid'>
                            <div>
                                <ul className='s-ul'>
                                    <li className='s-li-text2' style={{ marginLeft: "0%"  }}>Life @ Company</li>
                                    <li className='s-li-text2' style={{ marginLeft: "0%"  }}>Student /Intern Program</li>
                                    <li className='s-li-text2' style={{ marginLeft: "0%"  }}>Learning & Development</li>
                                    <li className='s-li-text2' style={{ marginLeft: "0%"  }}>Diversity & Inclusion</li>
                                </ul>
                            </div>

                            <div>
                                <div className='s-text2' >
                                    Oppourtunities
                                </div>
                                <ul className='s-ul'>
                                    <li className='s-li-text2' >Freshers</li>
                                    <li className='s-li-text2' >Experienced</li>
                                </ul>
                            </div>

                            <div>
                                <div className='s-text2' >
                                    Important Notices
                                </div>
                            </div>

                        </div>
                    </div>







                    <div className='s-text1' style={{ marginTop: "5%"  }}>
                        <b>Explore</b>
                    </div>
                    <div className='s-explore'>
                        <div className='s-text2' >
                            Blogs
                        </div>
                        <div className='s-text2' >
                            Achievements
                        </div>
                        <div className='s-text2' >
                            Success Stories
                        </div>
                        <div className='s-text2' >
                            Events
                        </div>

                    </div>

                    <div style={{ width: "100%", display: "flex", justifyContent: "left", marginTop: "5%" }}>
                        <div className='s-bottom-section'>
                            <div className='s-text1' >
                                <b>About Us</b>
                            </div>
                            <div className='s-text1' >
                                <b>Case study</b>
                            </div>
                            <div className='s-text1' >
                                <b>Contact us</b>
                            </div>
                        </div>
                    </div>



                </div>


            </div>
        </Layout>
    )
}
