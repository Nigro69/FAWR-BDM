import { Button } from '@chakra-ui/react'
import React from 'react'
import "./Meeting.css"

import { NavLink as Link } from 'react-router-dom'

export default function Meeting({ mode }) {
    return (
        <div className='m-outer'>
            <div className='m-inner' style={{ backgroundColor: mode === "dark" ? "#444444" : "#E2E2E2" }}>
                <div className='m-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                    Book a meeting with our experts today.
                </div>
                <div className='m-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    Request a personal demonstration of how you can analyze consumer behavior trends and the evolving Technology landscape.
                </div>
                <Link to="/Reach Us">
                    <div>
                        <Button color="white" backgroundColor="#BC312E" borderRadius="1rem">
                            Requet a Demo
                        </Button>
                    </div>
                </Link>
            </div>
        </div>
    )
}
