import React, { useEffect } from 'react'
import "./Leadership.css"

import L1 from "./LeadershipImages/L1.png"
import L2 from "./LeadershipImages/L2.png"
// import O3 from "./LeadershipImages/O3.png"


import { Button } from '@chakra-ui/react'
import Layout from '../../Templates/Layout/Layout'

export default function Leadership() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])


    const leaderData = [
        {
            title: "Mr. bharanitharan Rajkumar",
            role: "Chief Executive Officer/Founder",
        },
        {
            title: "Ms.Prabhavati",
            role: "Chief People Officer",
        },
        {
            title: "Ms. Prasanna ",
            role: "Chief Financial Officer",
        },
    ]

    return (
        <Layout>
            <div className='l-outer' >
                <div style={{ width: "100%" }}>
                    <img src={L1} style={{ width: "100%" }} />
                </div>

                <div className='l-text' >
                    Our partners prioritise our customers while relentlessly supporting audacious ideas that enable them to accomplish the remarkable. You'll find enthusiastic, cooperative individuals who care about you and your success in every office and on every team.
                </div>

                <div className='l-title' >
                    <u>Our Leadership and People</u>
                </div>



                <div className='l-grid'>
                    {
                        leaderData.map((element, index) => {
                            return <div className='l-element'>
                                <div className='l-element-top'>
                                    <img src={L2} style={{ width: "100%" }} />
                                </div>
                                <div className='l-element-bottom'>
                                    <div className='l-element-title' >
                                        {element.title}
                                    </div>
                                    <div className='l-element-text' >
                                        {element.role}
                                    </div>
                                    <div className='l-element-text' >
                                        {element.location}
                                    </div>
                                </div>
                            </div>
                        })
                    }



                </div>

            </div>
        </Layout>
    )
}
