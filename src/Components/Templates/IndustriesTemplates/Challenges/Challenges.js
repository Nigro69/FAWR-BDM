import React from 'react'
import "./Challenges.css"

import Challenge_img1 from "./ChallengesImages/Challenges_img1.png"

import { background, color, useMediaQuery } from '@chakra-ui/react'

export default function Challenges({ challengeData }) {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    return (
        <div className='c-outer'>
            <div className='c-inner' style={{ display: isLargerThan600 ? "flex" : "none" }}>
                <div className='c-left'>
                    <div className='c-left-box' style={{ marginLeft: "20%", backgroundColor: mode === "dark" ? "#444444" : "#E2E2E2" }}>
                        <div className='c-box-text' >
                            {challengeData[0]}
                        </div>
                    </div>
                    <div className='c-left-box' style={{ backgroundColor: mode === "dark" ? "#444444" : "#E2E2E2" }}>
                        <div className='c-box-text' >
                            {challengeData[2]}
                        </div>
                    </div>
                    <div className='c-left-box' style={{ marginLeft: "20%", backgroundColor: mode === "dark" ? "#444444" : "#E2E2E2" }}>
                        <div className='c-box-text' >
                            {challengeData[4]}
                        </div>
                    </div>
                </div>
                <div className='c-middle'>
                    <img className="c-img" src={Challenge_img1} />
                </div>
                <div className='c-right'>
                    <div className='c-right-box' style={{ marginRight: "15%", backgroundColor: mode === "dark" ? "#444444" : "#E2E2E2" }}>
                        <div className='c-box-text' >
                            {challengeData[1]}
                        </div>
                    </div>
                    <div className='c-right-box' style={{ backgroundColor: mode === "dark" ? "#444444" : "#E2E2E2" }}>
                        <div className='c-box-text' >
                            {challengeData[3]}
                        </div>
                    </div>
                    <div className='c-right-box' style={{ marginRight: "15%", backgroundColor: mode === "dark" ? "#444444" : "#E2E2E2" }}>
                        <div className='c-box-text' >
                            {challengeData[5]}
                        </div>
                    </div>
                </div>
            </div>

            <div className='c-inner-hidden' style={{ display: isLargerThan600 ? "none" : "flex", flexDirection: "column-reverse" }}>
                <div className='c-inner-top'>
                    <div className='c-left'>
                        <div className='c-left-box' style={{ marginLeft: "15%", backgroundColor: mode === "dark" ? "#444444" : "#E2E2E2" }}>
                            <div className='c-box-text' >
                                {challengeData[0]}
                            </div>
                        </div>
                        <div className='c-left-box' style={{ backgroundColor: mode === "dark" ? "#444444" : "#E2E2E2" }}>
                            <div className='c-box-text' >
                                {challengeData[2]}
                            </div>
                        </div>
                        <div className='c-left-box' style={{ marginLeft: "15%", backgroundColor: mode === "dark" ? "#444444" : "#E2E2E2" }}>
                            <div className='c-box-text' >
                                {challengeData[4]}
                            </div>
                        </div>
                    </div>


                    <div className='c-right'>
                        <div className='c-right-box' style={{ marginRight: "20%", backgroundColor: mode === "dark" ? "#444444" : "#E2E2E2" }}>
                            <div className='c-box-text' >
                                {challengeData[1]}
                            </div>
                        </div>
                        <div className='c-right-box' style={{ backgroundColor: mode === "dark" ? "#444444" : "#E2E2E2" }}>
                            <div className='c-box-text' >
                                {challengeData[3]}
                            </div>
                        </div>
                        <div className='c-right-box' style={{ marginRight: "20%", backgroundColor: mode === "dark" ? "#444444" : "#E2E2E2" }}>
                            <div className='c-box-text' >
                                {challengeData[5]}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='c-inner-bottom'>
                    <div className='c-middle'>
                        <img className="c-img" src={Challenge_img1} />
                    </div>
                </div>
            </div>
        </div>
    )
}
