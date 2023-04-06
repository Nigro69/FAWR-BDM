import React from 'react'
import "./Challenges.css"

import Challenge_img1 from "./ChallengesImages/Challenges_img1.png"

import { background, color, useMediaQuery } from '@chakra-ui/react'

export default function Challenges({ challengeData, mode }) {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    return (
        <div className='c-outer'>
            <div className='c-inner' style={{ display: isLargerThan600 ? "flex" : "none" }}>
                <div className='c-left'>
                    <div className={`c-left-box ${mode === "dark" ? "bg-[#444444]" : "bg-[#E2E2E2]" }`} style={{ marginLeft: "20%" }}>
                        <div className='c-box-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                            {challengeData[0]}
                        </div>
                    </div>
                    <div className={`c-left-box ${mode === "dark" ? "bg-[#444444]" : "bg-[#E2E2E2]" }`} >
                        <div className='c-box-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                            {challengeData[2]}
                        </div>
                    </div>
                    <div className={`c-left-box ${mode === "dark" ? "bg-[#444444]" : "bg-[#E2E2E2]" }`} style={{ marginLeft: "20%" }}>
                        <div className='c-box-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                            {challengeData[4]}
                        </div>
                    </div>
                </div>
                <div className='c-middle'>
                    <img className="c-img" src={Challenge_img1} />
                </div>
                <div className='c-right'>
                    <div className={`c-right-box ${mode === "dark" ? "bg-[#444444]" : "bg-[#E2E2E2]" }`} style={{ marginRight: "15%" }}>
                        <div className='c-box-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                            {challengeData[1]}
                        </div>
                    </div>
                    <div className={`c-right-box ${mode === "dark" ? "bg-[#444444]" : "bg-[#E2E2E2]" }`} >
                        <div className='c-box-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                            {challengeData[3]}
                        </div>
                    </div>
                    <div className={`c-right-box ${mode === "dark" ? "bg-[#444444]" : "bg-[#E2E2E2]" }`} style={{ marginRight: "15%" }}>
                        <div className='c-box-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                            {challengeData[5]}
                        </div>
                    </div>
                </div>
            </div>

            <div className='c-inner-hidden' style={{ display: isLargerThan600 ? "none" : "flex", flexDirection: "column-reverse" }}>
                <div className='c-inner-top'>
                    <div className='c-left'>
                        <div className={`c-left-box ${mode === "dark" ? "bg-[#444444]" : "bg-[#E2E2E2]" }`} style={{ marginLeft: "15%" }}>
                            <div className='c-box-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                                {challengeData[0]}
                            </div>
                        </div>
                        <div className={`c-left-box ${mode === "dark" ? "bg-[#444444]" : "bg-[#E2E2E2]" }`} >
                            <div className='c-box-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                                {challengeData[2]}
                            </div>
                        </div>
                        <div className={`c-left-box ${mode === "dark" ? "bg-[#444444]" : "bg-[#E2E2E2]" }`} style={{ marginLeft: "15%" }}>
                            <div className='c-box-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                                {challengeData[4]}
                            </div>
                        </div>
                    </div>


                    <div className='c-right'>
                        <div className={`c-right-box ${mode === "dark" ? "bg-[#444444]" : "bg-[#E2E2E2]" }`} style={{ marginRight: "20%" }}>
                            <div className='c-box-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                                {challengeData[1]}
                            </div>
                        </div>
                        <div className={`c-right-box ${mode === "dark" ? "bg-[#444444]" : "bg-[#E2E2E2]" }`} >
                            <div className='c-box-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                                {challengeData[3]}
                            </div>
                        </div>
                        <div className={`c-right-box ${mode === "dark" ? "bg-[#444444]" : "bg-[#E2E2E2]" }`} style={{ marginRight: "20%" }}>
                            <div className='c-box-text' style={{ color: mode === "dark" ? "white" : "black" }}>
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
