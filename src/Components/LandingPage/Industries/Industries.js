import React from 'react'
import "./Industries.css"

import Industries_img1 from "./IndustriesImages/Industries_img1.png"
import Industries_img2 from "./IndustriesImages/Industries_img2.png"
import Industries_img3 from "./IndustriesImages/Industries_img3.png"
import Industries_img4 from "./IndustriesImages/Industries_img4.png"
import Industries_img5 from "./IndustriesImages/Industries_img5.png"
import Industries_img6 from "./IndustriesImages/Industries_img6.png"
import Industries_img7 from "./IndustriesImages/Industries_img7.png"
import Industries_img8 from "./IndustriesImages/Industries_img8.png"

import I1 from "./IndustriesImages/1.png"
import I2 from "./IndustriesImages/2.png"
import I3 from "./IndustriesImages/3.png"
import I4 from "./IndustriesImages/4.png"
import I5 from "./IndustriesImages/5.png"
import I6 from "./IndustriesImages/6.png"
import I7 from "./IndustriesImages/7.png"
import I8 from "./IndustriesImages/8.png"

import { NavLink as Link } from 'react-router-dom'

export default function Industries() {
    return (
        <div className='industries-outer'>
            <div className='industries-grid'>
                <div className='industries-grid-element'>
                    <Link to="/Banking & Finance">
                        <img className="industries-img" src={mode === "dark" ? Industries_img1 : I1} />
                    </Link>
                </div>
                <div className='industries-grid-element'>
                    <Link to="/Education">
                        <img className="industries-img" src={mode === "dark" ? Industries_img2 : I2} />
                    </Link>
                </div>

                <div className='industries-grid-element'>
                    <Link to="/E-Commerce">
                        <img className="industries-img" src={mode === "dark" ? Industries_img3 : I3} />
                    </Link>
                </div>

                <div className='industries-grid-element'>
                    <Link to="/Insurance">
                        <img className="industries-img" src={mode === "dark" ? Industries_img4 : I4} />
                    </Link>
                </div>
            </div>

            <div className='industries-grid'>

                <div className='industries-grid-element'>
                    <Link to="/Technology">
                        <img className="industries-img" src={mode === "dark" ? Industries_img5 : I5} />
                    </Link>
                </div>


                <div className='industries-grid-element'>
                    <Link to="/Healthcare">
                        <img className="industries-img" src={mode === "dark" ? Industries_img6 : I6} />
                    </Link>
                </div>

                <div className='industries-grid-element'>
                    <Link to="/Energy & Utilities">
                        <img className="industries-img" src={mode === "dark" ? Industries_img7 : I7} />
                    </Link>
                </div>

                <div className='industries-grid-element'>
                    <Link to="/Travel,Transport & Logistics">
                        <img className="industries-img" src={mode === "dark" ? Industries_img8 : I8} />
                    </Link>
                </div>
            </div>
        </div >
    )
}
