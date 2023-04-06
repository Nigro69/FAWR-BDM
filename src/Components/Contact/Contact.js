import React, { useEffect } from 'react'
import Contact_img1 from "./ContactImages/Contact_img1.png"
import Contact_img2 from "./ContactImages/Contact_img2.png"
import Contact_img3 from "./ContactImages/Contact_img3.png"

import "./Contact.css"
import { NavLink as Link } from 'react-router-dom'

import { BsArrowRight } from 'react-icons/bs';
import { Stack } from '@chakra-ui/react';

import Fb_icon from "./ContactImages/Fb_icon.png"
import Insta_icon from "./ContactImages/Insta_icon.png"
import Linkdin_icon from "./ContactImages/Linkdin_icon.png"
import Twitter_icon from "./ContactImages/Twitter_icon.png"
import Layout from '../Layout/Layout'
import { useStateContext } from '../../contexts/ContextProvider'


export default function Contact() {
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
                <div className='contact-outer' style={{ backgroundColor: mode === "dark" ? "#211F22" : "white" }}>
                    <div className='contact-bgimg-outer' style={{ width: "100%" }} >
                        <img src={mode === "dark" ? Contact_img2 : Contact_img3} className="contact-bgimg" style={{ width: "100%" }} />
                    </div>
                    <div className='contact-inner'>
                        <div className='contact-inner-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                            Looking for a neighbourhood office? We have 63 in total. Would you like to work here? View examples of careers at BDM or keep up with us on social media. Do you want to collaborate with us? Discover our consulting offerings and domain knowledge. Need another thing? To contact us in additional ways, see the list below.
                        </div>
                        <div className='contact-grid'>

                            <div className='contact-grid-element'>
                                <div className='contact-grid-element-inner' style={{ backgroundColor: mode === "dark" ? "#29262B" : "#EFEFEF" }}>
                                    <div className='contatct-grid-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Headquaters
                                    </div>
                                    <div className='contact-grid-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                        BigBrosDigitalMedia<br />
                                        {/* 123 ABC Street,<br />
                                City, State 123456<br /> */}
                                        India
                                        {/* Phone: +91-1234567890 <br />
                                Fax: +91-1234567890 */}
                                    </div>
                                </div>
                            </div>

                            <div className='contact-grid-element'>
                                <div className='contact-grid-element-inner' style={{ backgroundColor: mode === "dark" ? "#29262B" : "#EFEFEF" }}>
                                    <div className='contatct-grid-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        New Business
                                    </div>
                                    <div className='contact-grid-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                        Do you want to hire us? In order to handle our customers' most challenging, all-encompassing management concerns, our devoted case teams often work closely with them over a lengthy period of time.
                                    </div>
                                    <Link to="/Reach Us">
                                        <div className='contact-link'>
                                            <Stack direction="row" spacing={1} width="100%" display="flex" alignItems="center">
                                                <div style={{ color: "#BC312E", width: "fit-content" }}> Tell Us Your Interests</div>
                                                <BsArrowRight />
                                            </Stack>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className='contact-grid-element'>
                                <div className='contact-grid-element-inner' style={{ backgroundColor: mode === "dark" ? "#29262B" : "#EFEFEF" }}>
                                    <div className='contatct-grid-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Social Media
                                    </div>
                                    <div className='contact-grid-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                        Join us on social media to explore how our distinctive strategy enables customers to accomplish the extraordinary, hear about our most recent insights, and gain a glimpse of our culture.
                                    </div>

                                    {/* <div className='contact-link'> */}
                                    <Stack direction="row" spacing={2} width="80%" display="flex" alignItems="center" justifyContent="center">
                                        <Link to=""> <img className='contact-icon' src={Fb_icon} /></Link>
                                        <Link to="">  <img className='contact-icon' src={Insta_icon} /></Link>
                                        <Link to="">  <img className='contact-icon' src={Linkdin_icon} /></Link>
                                        <Link to="">   <img className='contact-icon' src={Twitter_icon} /></Link>
                                    </Stack>
                                    {/* </div> */}

                                </div>
                            </div>

                            <div className='contact-grid-element'>
                                <div className='contact-grid-element-inner' style={{ backgroundColor: mode === "dark" ? "#29262B" : "#EFEFEF" }}>
                                    <div className='contatct-grid-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        International Presence
                                    </div>
                                    <div className='contact-grid-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                        Canada<br />
                                        Malaysia
                                    </div>
                                </div>
                            </div>

                            <div className='contact-grid-element'>
                                <div className='contact-grid-element-inner' style={{ backgroundColor: mode === "dark" ? "#29262B" : "#EFEFEF" }}>
                                    <div className='contatct-grid-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Global Careers
                                    </div>
                                    <div className='contact-grid-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                        Make a decisive move forward.<br />
                                        recruiting@bigbrosdigitalmedia.com
                                    </div>

                                    <Link to="/Career Options">
                                        <div className='contact-link'>
                                            <Stack direction="row" spacing={1} width="100%" display="flex" alignItems="center">
                                                <div style={{ color: "#BC312E", width: "fit-content" }}> Visit our career site</div>
                                                <BsArrowRight />
                                            </Stack>
                                        </div>
                                    </Link>

                                </div>
                            </div>

                            {/* <div className='contact-grid-element'>
                        <div className='contact-grid-element-inner' style={{ backgroundColor: mode === "dark" ? "#29262B" : "#EFEFEF" }}>
                            <div className='contatct-grid-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                                Alumni Relations
                            </div>
                            <div className='contact-grid-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Reach us or check out the resources we provide.<br />
                                recruiting@bigbrosdigitalmedia.com
                            </div>

                            <Link to="/Alumni Relations">
                                <div className='contact-link'>
                                    <Stack direction="row" spacing={1} width="100%" display="flex" alignItems="center">
                                        <div style={{ color: "#BC312E", width: "fit-content" }}> Visit our alumni site</div>
                                        <BsArrowRight />
                                    </Stack>
                                </div>
                            </Link>

                        </div>
                    </div> */}

                            <div className='contact-grid-element'>
                                <div className='contact-grid-element-inner' style={{ backgroundColor: mode === "dark" ? "#29262B" : "#EFEFEF" }}>
                                    <div className='contatct-grid-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Website
                                    </div>
                                    <div className='contact-grid-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                        Concerns or remarks regarding bigbrosdigitalmedia.com?
                                    </div>

                                    <Link to="">
                                        <div className='contact-link'>
                                            <Stack direction="row" spacing={1} width="100%" display="flex" alignItems="center">
                                                <div style={{ color: "#BC312E", width: "fit-content" }}> Email us</div>
                                                <BsArrowRight />
                                            </Stack>
                                        </div>
                                    </Link>

                                </div>
                            </div>

                            <div className='contact-grid-element'>
                                <div className='contact-grid-element-inner' style={{ backgroundColor: mode === "dark" ? "#29262B" : "#EFEFEF" }}>
                                    <div className='contatct-grid-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        Vendor Inquiries
                                    </div>
                                    <div className='contact-grid-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                        Contact the BDM office in your area if you want to sell BDM a good or service.
                                    </div>

                                    <Link to="/Our Offices">
                                        <div className='contact-link'>
                                            <Stack direction="row" spacing={1} width="100%" display="flex" alignItems="center">
                                                <div style={{ color: "#BC312E", width: "fit-content" }}>Our offices</div>
                                                <BsArrowRight />
                                            </Stack>
                                        </div>
                                    </Link>

                        </div>
                    </div>
                    <div className='contact-grid-element'>
                        <div className='contact-grid-element-inner' style={{ backgroundColor: mode === "dark" ? "#29262B" : "#EFEFEF" }}>
                            <div className='contatct-grid-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                                Talk with Us
                            </div>
                            <div className='contact-grid-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Get personalised access to solutions for your Business. Raise a query at Support@bigbrosdigitalmedia.com
                            </div>

                            <Link to="">
                                <div className='contact-link'>
                                    <Stack direction="row" spacing={1} width="100%" display="flex" alignItems="center">
                                        <div style={{ color: "#BC312E", width: "fit-content" }}> Email us</div>
                                        <BsArrowRight />
                                    </Stack>
                                </div>
                            </Link>

                        </div>
                    </div>

                        </div >
                    </div >
                </div >
            </Layout>
    )
}
