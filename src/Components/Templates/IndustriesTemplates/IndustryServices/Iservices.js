import React from 'react'
import "./Iservices.css"

import IS1 from "./IservicesImages/1.png"
import IS2 from "./IservicesImages/2.png"
import IS3 from "./IservicesImages/3.png"
import IS4 from "./IservicesImages/4.png"
import IS5 from "./IservicesImages/5.png"
import IS6 from "./IservicesImages/6.png"
import IS7 from "./IservicesImages/7.png"
import IS8 from "./IservicesImages/8.png"

import { NavLink as Link } from 'react-router-dom'

export default function Iservices() {
    const serviceImgs = [IS1, IS2, IS3, IS4, IS5, IS6, IS7, IS8]
    const serviceLinks = ["/App Development Services",
        "/Cloud Storage & Management Services",
        "/DevOps",
        "/UX / UI Design Services",
        "/Management Consultant Services",
        "/Marketing Automation Services",
        "/Research Intelligence Services",
        "/Customer Segmentation Services"]
    return (
        <div className='is-outer'>
            <div className='is-grid'>
                {
                    serviceImgs.map((element, index) => {
                        return <div className='is-element-outer'>
                            <Link to={serviceLinks[index]}>
                                <div className='is-grid-element'>
                                    <img src={element} className="is-grid-img" />
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
