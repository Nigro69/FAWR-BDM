import React from 'react'
import "./About.css"

import About_img1 from "./AboutImages/About_img1.png"
import About_img2 from "./AboutImages/About_img2.png"
import About_img3 from "./AboutImages/About_img3.png"
import About_img4 from "./AboutImages/About_img4.png"

import { Button, Stack } from '@chakra-ui/react'

import { NavLink as Link } from 'react-router-dom'

export default function About() {
    return (
        <div className='about-outer'>
            <div className='about-left'>
                <div className='about-title' >
                    Delivering Digital Innovation From Startups to Enterprises
                </div>
                <div className='about-text' >
                    We are a business solution provider that has aided non-IT businesses and software product firms in enhancing operational efficiency and rapidly gaining new clients.
                </div>

                <Stack direction="row" spacing={5} alignItems="center" marginTop="5%">
                    <div><img src={About_img4} /></div>
                    <div className='about-text'>Dedicated team members</div>
                </Stack>

                <Stack direction="row" spacing={5} alignItems="center" marginTop="5%">
                    <div><img src={About_img4} /></div>
                    <div className='about-text'>Great support</div>
                </Stack>

                <Stack direction="row" spacing={5} alignItems="center" marginTop="5%">
                    <div><img src={About_img4} /></div>
                    <div className='about-text'>Customer First</div>
                </Stack>
                <Link to="/About Us">
                    <div style={{ width: "100%", marginTop: "50%" }}>
                        <Button
                            backgroundColor="#BC312E"
                            marginTop="5%"
                            color="white">
                            Contact Us
                        </Button>
                    </div>
                </Link>
            </div>
            <div className='about-right'>
                <img src={mode === "dark" ? About_img3 : About_img1} />
            </div>
        </div>
    )
}
