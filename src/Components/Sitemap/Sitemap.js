import React from 'react'
import "./Sitemap.css"

export default function Sitemap({ mode }) {

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    return (
        <div className='s-outer' style={{ backgroundColor: mode === "dark" ? "#211F22" : "white" }}>
            <div className='s-inner'>
                <div className='s-title'>
                    Sitemap
                </div>
                <div className='s-text1' style={{ color: mode === "dark" ? "white" : "black" }}>
                    <b>Solutions</b>
                </div>

                <div className='s-sol-inner'>
                    <div className='s-sol-inner-section'>
                        <div className='s-text2' style={{ color: mode === "dark" ? "white" : "black", marginBottom: "1%" }}>
                            Services
                        </div>
                        <div className='s-grid'>
                            <div>
                                <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                    Development Services
                                </div>
                                <ul className='s-ul'>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Web Development</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Blockchain Development</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Devops</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>App Development</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Cloud storage & Management</li>
                                </ul>
                            </div>

                            <div>
                                <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                    Design Services
                                </div>
                                <ul className='s-ul'>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>UI/UX Design</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Graphic Design</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Video Editing</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Animations</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Social Media Design</li>
                                </ul>
                            </div>

                            <div>
                                <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                    Consultancy Services
                                </div>
                                <ul className='s-ul'>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Management Consultant</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Operations Consultant</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Financial Advisory</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Legal Consultant</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Strategy Consultant</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className='s-sol-inner-section'>
                        <div className='s-text2' style={{ color: mode === "dark" ? "white" : "black", marginBottom: "1%" }}>
                            Products
                        </div>
                        <div className='s-grid'>
                            <div>
                                <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                    Digital Marketing
                                </div>
                                <ul className='s-ul'>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Marketing Automation</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Email Marketing</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Search Engine Marketing</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Social Media Marketing</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Mobile Marketingt</li>
                                </ul>
                            </div>

                            <div>
                                <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                    Analytics & Insights
                                </div>
                                <ul className='s-ul'>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Research Intelligence</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Predictive Analytics</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Business Intelligence</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Speech & Text Analytics</li>
                                    <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Customer Segmentation</li>
                                </ul>
                            </div>

                        </div>
                    </div>


                    <div className='s-sol-inner-section'>
                        <div className='s-text2' style={{ color: mode === "dark" ? "white" : "black", marginBottom: "1%" }}>
                            Industries
                        </div>
                        <div className='s-grid'>
                            <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Technology
                            </div>
                            <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Automation
                            </div>
                            <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Education
                            </div>
                            <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Banking & Finance
                            </div>
                            <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                E-commerce
                            </div>
                            <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Travel, Transport & Logistics
                            </div>
                            <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Insurance
                            </div>
                            <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Telecom
                            </div>
                            <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Energy & Utilities
                            </div>
                            <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Healthcare
                            </div>
                            <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Airline
                            </div>
                            <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Media & Entertainment
                            </div>
                        </div>

                    </div>
                </div>



                <div className='s-text1' style={{ marginBottom: "0%", marginTop: "5%", color: mode === "dark" ? "white" : "black" }}>
                    <b>Career</b>
                </div>
                <div className='s-sol-inner-section'>
                    <div className='s-grid'>
                        <div>
                            <ul className='s-ul'>
                                <li className='s-li-text2' style={{ marginLeft: "0%", color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Life @ Company</li>
                                <li className='s-li-text2' style={{ marginLeft: "0%", color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Student /Intern Program</li>
                                <li className='s-li-text2' style={{ marginLeft: "0%", color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Learning & Development</li>
                                <li className='s-li-text2' style={{ marginLeft: "0%", color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Diversity & Inclusion</li>
                            </ul>
                        </div>

                        <div>
                            <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Oppourtunities
                            </div>
                            <ul className='s-ul'>
                                <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Freshers</li>
                                <li className='s-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Experienced</li>
                            </ul>
                        </div>

                        <div>
                            <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Important Notices
                            </div>
                        </div>

                    </div>
                </div>







                <div className='s-text1' style={{ marginTop: "5%", color: mode === "dark" ? "white" : "black" }}>
                    <b>Explore</b>
                </div>
                <div className='s-explore'>
                    <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Blogs
                    </div>
                    <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Achievements
                    </div>
                    <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Success Stories
                    </div>
                    <div className='s-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Events
                    </div>

                </div>

                <div style={{ width: "100%", display: "flex", justifyContent: "left", marginTop: "5%" }}>
                    <div className='s-bottom-section'>
                        <div className='s-text1' style={{ color: mode === "dark" ? "white" : "black" }}>
                            <b>About Us</b>
                        </div>
                        <div className='s-text1' style={{ color: mode === "dark" ? "white" : "black" }}>
                            <b>Case study</b>
                        </div>
                        <div className='s-text1' style={{ color: mode === "dark" ? "white" : "black" }}>
                            <b>Contact us</b>
                        </div>
                    </div>
                </div>



            </div>


        </div>
    )
}
