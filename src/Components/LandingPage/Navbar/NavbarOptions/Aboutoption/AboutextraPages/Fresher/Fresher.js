import { Button } from '@chakra-ui/react'
import React, {useEffect} from 'react'
import "./Fresher.css"

import F1 from "./FresherImages/F1.png"



export default function Fresher({ mode }) {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])


    return (
        <div className='fresher-outer'>
            <div style={{ width: "100%" }}>
                <img src={F1} style={{ width: "100%" }} />
            </div>


            <div className='fresher-text' style={{ marginTop: "5%", color: mode === "dark" ? "white" : "black" }}>
                You can realise your full potential with the help of BDM. We develop our talent and give it the tools it needs to contribute to the development of a better future. We encourage you to start the journey toward a rewarding career with us because we have exciting opportunities across a variety of industries and domains.
            </div>

            <div className='pro-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Why BDM</u>
            </div>

            <div className='fresher-grid'>
                <div className='fresher-element'>
                    <div className='fresher-element-title'>
                        Impact
                    </div>
                    <div className='fresher-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        We provide employees the chance to produce revolutionary results that benefit society as a whole and demonstrate the impossibility of nothing via the application of innovation and our contextual knowledge.
                    </div>
                </div>

                <div className='fresher-element'>
                    <div className='fresher-element-title'>
                        Development
                    </div>
                    <div className='fresher-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        By giving them chances to access and learn from the huge collective experience that exists inside TCS, we empower our colleagues to offer creative solutions. We make sure they continue to be at the forefront of innovation.
                    </div>
                </div>

                <div className='fresher-element'>
                    <div className='fresher-element-title'>
                        Support
                    </div>
                    <div className='fresher-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Regardless of age or stage of their career, our employees are encouraged in discovering and becoming the professionals they were intended to be through upskilling and reskilling as well as chances to move throughout the business.
                    </div>
                </div>

                <div className='fresher-element'>
                    <div className='fresher-element-title'>
                        Progress
                    </div>
                    <div className='fresher-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        We see our people as long-term relationships that we build together and from which we all grow. We invest in them across the duration of their career and encourage them to strive for perpetual progress.
                    </div>
                </div>
            </div>

            <Button color="white" backgroundColor="#BC312E"
                marginTop="5%" borderRadius="0%" >Explore Roles {">"}</Button>
        </div>
    )
}
