import React from 'react'
import "./Award.css"

import Award_img1 from "./AwardImages/Award_img1.png"
import A1 from "./AwardImages/A1.png"

export default function Award({ img, i }) {
    return (
        <div className='award-outer'>
            <img src={i === "1" ? img : A1} />
            {/* <div className='award-grid'>
                <div className='award-grid-element'>
                    <img className="award-img" src={Award_img1} />
                </div>

                <div className='award-grid-element'>
                    <img className="award-img" src={Award_img1} />
                </div>

                <div className='award-grid-element'>
                    <img className="award-img" src={Award_img1} />
                </div>

                <div className='award-grid-element'>
                    <img className="award-img" src={Award_img1} />
                </div>
            </div> */}
        </div>
    )
}
