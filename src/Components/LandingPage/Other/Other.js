import React, { useState } from 'react'
import "./Other.css"

import o1 from "./OtherImages/1.png"
import o2 from "./OtherImages/2.png"
import o3 from "./OtherImages/3.png"
import o4 from "./OtherImages/4.png"
import o5 from "./OtherImages/5.png"

import o6 from "./OtherImages/6.png"
import o7 from "./OtherImages/7.png"
import o8 from "./OtherImages/8.png"

import Othertemplate1 from './Othertemplate/Othertemplate1/Othertemplate1'
import Othertemplate2 from './Othertemplate/Othertemplate2/Othertemplate2'

export default function Other() {

    const [isHovering1, setIsHovering1] = useState(false);

    const handleMouseOver1 = () => {
        setIsHovering1(true);
    };

    const handleMouseOut1 = () => {
        setIsHovering1(false);
    };

    const [isHovering2, setIsHovering2] = useState(false);
    const handleMouseOver2 = () => {
        setIsHovering2(true);
    };

    const handleMouseOut2 = () => {
        setIsHovering2(false);
    };

    const [isHovering3, setIsHovering3] = useState(false);
    const handleMouseOver3 = () => {
        setIsHovering3(true);
    };

    const handleMouseOut3 = () => {
        setIsHovering3(false);
    };

    const [isHovering4, setIsHovering4] = useState(false);
    const handleMouseOver4 = () => {
        setIsHovering4(true);
    };

    const handleMouseOut4 = () => {
        setIsHovering4(false);
    };
    return (
        <div className='other-outer'>
            <div className='other-grid'>
                <div className='other-grid-element' onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1}>
                    {isHovering1 ? <Othertemplate2 title={"Loyalty Program"} bgimg={o2} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor integer volutpat massa quam pretium, quis. In etiam eu, nunc, aliquet nunc eu. " /> : <Othertemplate1 title={"Loyalty Program"} bgimg={o1} />}
                </div>
                <div className='other-grid-element' onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}>
                    {isHovering2 ? <Othertemplate2 title={"Talent Management"} bgimg={o4} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor integer volutpat massa quam pretium, quis. In etiam eu, nunc, aliquet nunc eu. " /> : <Othertemplate1 title={"Talent Management"} bgimg={o3} />}
                </div>
            </div>
            <div className='other-grid'>
                <div className='other-grid-element' onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}>
                    {isHovering3 ? <Othertemplate2 title={"Artist Management"} bgimg={o6} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor integer volutpat massa quam pretium, quis. In etiam eu, nunc, aliquet nunc eu. " /> : <Othertemplate1 title={"Artist Management"} bgimg={o5} />}
                </div>

                <div className='other-grid-element' onMouseOver={handleMouseOver4} onMouseOut={handleMouseOut4}>
                    {isHovering4 ? <Othertemplate2 title={"Venue Booking"} bgimg={o8} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor integer volutpat massa quam pretium, quis. In etiam eu, nunc, aliquet nunc eu. " /> : <Othertemplate1 title={"Venue Booking"} bgimg={o7} />}
                </div>
            </div>
        </div>
    )
}
