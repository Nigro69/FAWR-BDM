import React, { useEffect } from 'react'
import "./Success.css"

import Success_img1 from "./SuccessImages/Success_img1.png"
import Success_img2 from "./SuccessImages/Success_img2.png"
import Success_img3 from "./SuccessImages/Success_img3.png"
import Layout from '../../Templates/Layout/Layout'

export default function Success() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <Layout>
            <div className='success-outer' >
                <div className='success-bgimg-outer' style={{ width: "100%" }} >
                    <img src={Success_img1} className="success-bgimg" style={{ width: "100%" }} />
                </div>
                <div className='success-text' >
                    Looking to expand your company?
                    Look to these stories
                </div>
                <div className='success-grid'>
                    <div className='success-bgimg-outer' style={{ width: "100%", diplay: "flex", justifyContent: "center" }} >
                        <img src={mode === "dark" ? Success_img2 : Success_img3} className="success-bgimg" style={{ width: "100%", cursor: "pointer" }} />
                    </div>
                    <div className='success-bgimg-outer' style={{ width: "100%", diplay: "flex", justifyContent: "center" }} >
                        <img src={mode === "dark" ? Success_img2 : Success_img3} className="success-bgimg" style={{ width: "100%", cursor: "pointer" }} />
                    </div>
                    <div className='success-bgimg-outer' style={{ width: "100%", diplay: "flex", justifyContent: "center" }} >
                        <img src={mode === "dark" ? Success_img2 : Success_img3} className="success-bgimg" style={{ width: "100%", cursor: "pointer" }} />
                    </div>
                    <div className='success-bgimg-outer' style={{ width: "100%", diplay: "flex", justifyContent: "center" }} >
                        <img src={mode === "dark" ? Success_img2 : Success_img3} className="success-bgimg" style={{ width: "100%", cursor: "pointer" }} />
                    </div>
                    <div className='success-bgimg-outer' style={{ width: "100%", diplay: "flex", justifyContent: "center" }} >
                        <img src={mode === "dark" ? Success_img2 : Success_img3} className="success-bgimg" style={{ width: "100%", cursor: "pointer" }} />
                    </div>
                    <div className='success-bgimg-outer' style={{ width: "100%", diplay: "flex", justifyContent: "center" }} >
                        <img src={mode === "dark" ? Success_img2 : Success_img3} className="success-bgimg" style={{ width: "100%", cursor: "pointer" }} />
                    </div>
                    <div className='success-bgimg-outer' style={{ width: "100%", diplay: "flex", justifyContent: "center" }} >
                        <img src={mode === "dark" ? Success_img2 : Success_img3} className="success-bgimg" style={{ width: "100%", cursor: "pointer" }} />
                    </div>
                    <div className='success-bgimg-outer' style={{ width: "100%", diplay: "flex", justifyContent: "center" }} >
                        <img src={mode === "dark" ? Success_img2 : Success_img3} className="success-bgimg" style={{ width: "100%", cursor: "pointer" }} />
                    </div>
                    <div className='success-bgimg-outer' style={{ width: "100%", diplay: "flex", justifyContent: "center" }} >
                        <img src={mode === "dark" ? Success_img2 : Success_img3} className="success-bgimg" style={{ width: "100%", cursor: "pointer" }} />
                    </div>

                </div>
            </div>
        </Layout>
    )
}
