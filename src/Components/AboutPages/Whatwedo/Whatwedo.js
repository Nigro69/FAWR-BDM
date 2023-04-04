import React, { useEffect } from 'react'
import "./Whatwedo.css"

import W1 from "./WhatwedoImages/W1.png"
import Layout from '../../Templates/Layout/Layout';

export default function Whatwedo() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])


    return (
        <Layout>
            <div className='wwd-outer'>
                <div style={{ width: "100%" }}>
                    <img src={W1} style={{ width: "100%" }} />
                </div>
                <div className='wwd-text' >
                    Our clientele are driven individuals who want to shape the future rather than run from it.
                </div>
                <div className='wwd-text' >
                    Global executives from all sectors and regions turn to us for help in resolving issues that are industry-defining in corporate finance, mergers and acquisitions, information technology, marketing, operations, organization, and information technology strategy. Structure, orchestration, and sustained outcomes are made possible by our special approach to change management.
                </div>
                <div className='wwd-text' >
                    We gauge our performance based on that of our clients, who include more than 60% of the Global 500, private equity firms that account for 75% of all equity money raised globally, notable charity organizations, and cutting-edge startups.
                </div>

                <div className='wwd-title' >
                    <u>What Makes BDM Different</u>
                </div>


                <div className='wwd-element-text' style={{ textAlign: "left",   marginTop: "5%" }}>
                    A rebellious mentality <hr />
                </div>
                <div className='wwd-element-text' style={{ marginTop: "1%"  }}>
                    Our clientele are driven individuals who want to shape the future rather than run from it.
                </div>

                <div className='wwd-element-text' style={{ marginTop: "1%"  }}>
                    Global executives from all sectors and regions turn to us for help in resolving issues that are industry-defining in corporate finance, mergers and acquisitions, information technology, marketing, operations, organization, and information technology strategy. Structure, orchestration, and sustained outcomes are made possible by our special approach to change management.
                </div>

                <div className='wwd-element-text' style={{ marginTop: "1%"  }}>
                    We gauge our performance based on that of our clients, who include more than 60% of the Global 500, private equity firms that account for 75% of all equity money raised globally, notable charity organizations, and cutting-edge startups.
                </div>


                <div className='wwd-element-text' style={{ textAlign: "left",   marginTop: "5%" }}>
                    Innovative integration <hr />
                </div>
                <div className='wwd-element-text' style={{ marginTop: "1%"  }}>
                    In order to provide our clients with better, quicker, and more durable outcomes, we provide integrated solutions that combine our talents with a carefully chosen ecosystem of the world's top innovators.
                </div>


                <div className='wwd-element-text' style={{ textAlign: "left",   marginTop: "5%" }}>
                    A distinctively cooperative culture <hr />
                </div>
                <div className='wwd-element-text' style={{ marginTop: "1%"  }}>
                    Working with us feels distinct since we have unique individuals. Every client relationship benefits from the new viewpoint, shared trust, and contagious enthusiasm we provide.
                </div>
            </div>
        </Layout>
    )
}
