import React from 'react'
import "./Cookie.css"
import Cookie_img1 from "../PoliciesImages/Cookie_img1.png"
import Cookie_img2 from "../PoliciesImages/Cookie_img2.png"


import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Button
} from '@chakra-ui/react'


export default function Cookie({ mode }) {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    return (
        <div className='cookie-outer' style={{ backgroundColor: mode === "dark" ? "#211F22" : "white" }}>
            <div style={{ width: "100%" }}><img style={{ width: "100%" }} src={Cookie_img2} /></div>

            <div className='cookie-content'>

                <Button color="white" backgroundColor="red.500" marginBottom="2%">
                    {/* <div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}> */}
                    Manage Cookies Settings
                    {/* </div> */}
                </Button>

                <div className='cookie-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                    This Cookie Policy applies to the website(s) and mobile applications (together, the "Sites") provided by Big Bros Digital Media & Company, Inc. (“Big Bros Digital Media”, “we”, “us”). The Sites include www.bigbrosdigitalmedia.com and additional websites or mobile applications produced and managed by Big Bros Digital Media. Please note that this Cookie Policy does not apply to the Big Bros Digital Media Alumni Job Board (careercenter.  Big Bros Digital Media.com), which is provided and managed by a third party and is governed by separate policies.
                </div>
                <div className='cookie-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                    This Cookie Policy explains how and why cookies, web beacons, pixels and other similar technologies (collectively “Cookies”) may be stored on and accessed from your device when you use or visit our Sites and how you can manage your preferences. This Cookie Policy should be read together with our Privacy Policy and our Terms of Use.
                </div>
                <div className='cookie-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                     Big Bros Digital Media reserves the right, at its sole discretion, to alter and update this Cookie Policy from time to time. We therefore invite you to review the current version of the Cookie Policy each time you return to our Sites.
                </div>

                <div className='cookie-subtitle' style={{ color: mode === "dark" ? "white" : "black" }}>
                    What are Cookies?
                </div>

                <div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    "Cookies" are small text files that are stored by your browser on your computer's or other device’s hard drive. Cookies can be placed on your device directly by one of our Sites (first party Cookies) or by a third party through one of our Sites (third party Cookies).
                </div>
                <div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    Cookies can be further categorised into two types:
                </div>

                <ul className='cookie-ul'>
                    <li className='cookie-li' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        <b>Session Cookies</b> are only stored on your device during your browser session. They are deleted when you close your browser.
                    </li>
                    <li className='cookie-li' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        <b>Persistent Cookies </b>remain on your device for a set period of time even after your browser session has ended.
                    </li>
                </ul>

                <div className='cookie-subtitle' style={{ color: mode === "dark" ? "white" : "black" }}>
                    What do we use Cookies for?
                </div>

                <div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    Our Sites use different categories of Cookies for the purposes described below.
                </div>

                <div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    <b>Strictly necessary Cookies</b>
                </div>

                <div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    These Cookies are required for the operation of our Sites and use of its features. They include, for example, Cookies that enable you to log into secure areas of our Sites. They enable us to remember some of your choices to speed up navigation and provide you with a secure site experience.
                </div>
                <div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    Our Sites cannot function without such Cookies and they are therefore automatically set when you visit them.  You can set your browser to block or alert you about these Cookies, but some parts of our Sites will not work (please see “Managing Cookies” below for more information).
                </div>

                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <TableContainer marginTop="2%">
                        <Table variant='simple' >

                            <Thead>
                                <Tr>
                                    <Th>
                                        <div className='cookie-subtitle' style={{ color: mode === "dark" ? "white" : "black" }}>
                                            Company
                                        </div>
                                    </Th>
                                    <Th>
                                        <div className='cookie-subtitle' style={{ color: mode === "dark" ? "white" : "black" }}>
                                            Domain
                                        </div>
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td><div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>BigBrosDigitalMedia</div></Td>
                                    <Td><div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>www.bigbrosdigitalmedia.com</div></Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </div>



                <div className='cookie-subtitle' style={{ color: mode === "dark" ? "white" : "black" }}>
                    Functional Cookies
                </div>

                <div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    Our Sites may use functional Cookies such as Google Analytics to carry out some analytics on and enhance our Sites. These Cookies allow us to collect information such as how you use our Sites, which pages are the most visited or where people visiting our Sites are located. This enables us to determine what content is of most interest to our users and to ensure that users are finding what they are looking for easily.
                </div>

                <div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    If you are an account holder on one of our Sites, we may use Cookies to collect information about your activity on our Sites, such as which pages you viewed or which videos you watched. This helps us to understand what content is of interest to you.
                </div>

                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <TableContainer marginTop="2%">
                        <Table variant='simple' >

                            <Thead>
                                <Tr>
                                    <Th>
                                        <div className='cookie-subtitle' style={{ color: mode === "dark" ? "white" : "black" }}>
                                            Company
                                        </div>
                                    </Th>
                                    <Th>
                                        <div className='cookie-subtitle' style={{ color: mode === "dark" ? "white" : "black" }}>
                                            Domain
                                        </div>
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td><div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>BigBrosDigitalMedia</div></Td>
                                    <Td><div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>www.bigbrosdigitalmedia.com</div></Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </div>



                <div className='cookie-subtitle' style={{ color: mode === "dark" ? "white" : "black" }}>
                    Targeting Cookies
                </div>

                <div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    These Cookies record your visit to our Sites, the pages you have visited and the links you have followed. We may use this information to make our Sites more relevant to your interests.
                </div>

                <div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    We may also use Cookies to enable you to share content on networking or social media sites or for marketing and promotional purposes where you have subscribed to marketing communications from Big Bros Digital Media.
                </div>


                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <TableContainer marginTop="2%">
                        <Table variant='simple' >

                            <Thead>
                                <Tr>
                                    <Th>
                                        <div className='cookie-subtitle' style={{ color: mode === "dark" ? "white" : "black" }}>
                                            Company
                                        </div>
                                    </Th>
                                    <Th>
                                        <div className='cookie-subtitle' style={{ color: mode === "dark" ? "white" : "black" }}>
                                            Domain
                                        </div>
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td><div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>BigBrosDigitalMedia</div></Td>
                                    <Td><div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>www.bigbrosdigitalmedia.com</div></Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </div>



                <div className='cookie-subtitle' style={{ color: mode === "dark" ? "white" : "black" }}>
                    Managing Cookies
                </div>

                <div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    Strictly necessary Cookies are automatically set on your browser when you visit our Sites. These Cookies are required for our Sites to work properly and cannot be disabled using the “Manage Cookie Settings” window on our Sites.
                </div>

                <div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    You have the choice to accept all Cookies by clicking on “Accept all cookies” or  manage your Cookie preferences by clicking on “Manage cookie settings” on our cookie banner.  Please note that certain functionalities of our Sites might not work if you choose to disable other Cookies.
                </div>
                <div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    If you want to modify your Cookie settings later on, you can do so by clicking on the “Manage cookie settings” button at the top of this Policy.
                </div>

                <div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    You can also use the settings of your Internet browser to prevent your browser from accepting new Cookies (including strictly necessary Cookies), get notified when new Cookies are dropped on your browser and disable or delete Cookies altogether (including strictly necessary Cookies).  Please note that deleting existing Cookies will not prevent Cookies from being set during your next visit on our Sites.
                </div>
                <div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    You can find more information about how to manage Cookies in the “help” section of your browser.
                </div>



                <div className='cookie-subtitle' style={{ color: mode === "dark" ? "white" : "black" }}>
                    Contact
                </div>

                <div className='cookie-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    If you have any questions about this Cookie Policy, please contact DataPrivacy@nignrosdigitalmedia.com.
                </div>
            </div>
        </div>
    )
}
