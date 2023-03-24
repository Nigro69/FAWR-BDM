import React from 'react'
import "./Whatwedo.css"

import W1 from "./WhatwedoImages/W1.png"

export default function Whatwedo({ mode }) {

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });


    return (
        <div className='wwd-outer'>
            <div style={{ width: "100%" }}>
                <img src={W1} style={{ width: "100%" }} />
            </div>
            <div className='wwd-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                Our clientele are driven individuals who want to shape the future rather than run from it.
            </div>
            <div className='wwd-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                Global executives from all sectors and regions turn to us for help in resolving issues that are industry-defining in corporate finance, mergers and acquisitions, information technology, marketing, operations, organization, and information technology strategy. Structure, orchestration, and sustained outcomes are made possible by our special approach to change management.
            </div>
            <div className='wwd-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                We gauge our performance based on that of our clients, who include more than 60% of the Global 500, private equity firms that account for 75% of all equity money raised globally, notable charity organizations, and cutting-edge startups.
            </div>

            <div className='wwd-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>What Makes BDM Different</u>
            </div>


            <div className='wwd-element-text' style={{ textAlign: "left", color: mode === "dark" ? "white" : "black", marginTop: "5%" }}>
                A rebellious mentality <hr />
            </div>
            <div className='wwd-element-text' style={{ marginTop: "1%", color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                Our clientele are driven individuals who want to shape the future rather than run from it.
            </div>

            <div className='wwd-element-text' style={{ marginTop: "1%", color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                Global executives from all sectors and regions turn to us for help in resolving issues that are industry-defining in corporate finance, mergers and acquisitions, information technology, marketing, operations, organization, and information technology strategy. Structure, orchestration, and sustained outcomes are made possible by our special approach to change management.
            </div>

            <div className='wwd-element-text' style={{ marginTop: "1%", color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                We gauge our performance based on that of our clients, who include more than 60% of the Global 500, private equity firms that account for 75% of all equity money raised globally, notable charity organizations, and cutting-edge startups.
            </div>


            <div className='wwd-element-text' style={{ textAlign: "left", color: mode === "dark" ? "white" : "black", marginTop: "5%" }}>
                Innovative integration <hr />
            </div>
            <div className='wwd-element-text' style={{ marginTop: "1%", color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                In order to provide our clients with better, quicker, and more durable outcomes, we provide integrated solutions that combine our talents with a carefully chosen ecosystem of the world's top innovators.
            </div>


            <div className='wwd-element-text' style={{ textAlign: "left", color: mode === "dark" ? "white" : "black", marginTop: "5%" }}>
                A distinctively cooperative culture <hr />
            </div>
            <div className='wwd-element-text' style={{ marginTop: "1%", color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                Working with us feels distinct since we have unique individuals. Every client relationship benefits from the new viewpoint, shared trust, and contagious enthusiasm we provide.
            </div>
        </div>
    )
}
