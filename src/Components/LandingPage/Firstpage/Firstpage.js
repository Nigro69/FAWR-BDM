import React from 'react'
import "./Firstpage.css"
import Firstpage_img1 from "./FirstpageImages/Firstpage_img1.png"
import Firstpage_img2 from "./FirstpageImages/Firstpage_img2.png"
import Firstpage_img3 from "./FirstpageImages/Firstpage_img3.png"

import Textanimation from '../../TextAnimation/Textanimation'
import { Button } from '@chakra-ui/react'

export default function Firstpage({ mode }) {
    return (
        <div className='firstpage-outer'>
            <div className='firstpage-top' style={{ display: "flex", justifyContent: "left", width: "100%" }}>
                <img className="first-dots" src={Firstpage_img3} />
            </div>
            <div className='firstpage-middle'>
                <div className='firstpage-left'>
                    <div className='firstpage-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        Adding Values by
                    </div>
                    <Textanimation />
                    <div className='firstpage-text'>
                        Through the use of strong and flexible digital solutions, we transform businesses to meet the demands of the present and open up new prospects for the future.
                    </div>

                    <Button
                        backgroundColor="#BC312E"
                        marginTop="5%"
                        color="white">
                        Get Started
                    </Button>
                </div>
                <div className='firstpage-right'>
                    <img className="firstpage-bgimg" src={Firstpage_img2} />
                </div>
            </div>
            <div className='firstpage-bottom' style={{ display: "flex", justifyContent: "right", width: "100%" }}>
                <img className="first-dots" src={Firstpage_img3} />
            </div>
        </div>
    )
}
