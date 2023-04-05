import React from 'react'
import "./Careeroption.css"

import co1 from "./CareeroptionImages/1.png"
import co2 from "./CareeroptionImages/2.png"
import co3 from "./CareeroptionImages/3.png"
import co4 from "./CareeroptionImages/4.png"

import { NavLink as Link, useNavigate } from 'react-router-dom'
import Layout from '../../../../Layout/Layout'
import { useStateContext } from '../../../../../contexts/ContextProvider'

export default function Careeroption({ onClick }) {
    const { mode } = useStateContext()
    const navigate = useNavigate();
    return (
        <Layout>
            <div className='co-outer'>
                <div className='co-left'>
                    <div className='co-left-box' onClick={onClick}>
                        <Link to="/Life@BDM">
                            <img className="co-left-img" src={co1} />
                        </Link>
                    </div>

                    <div className='co-left-box' onClick={onClick}>
                        <Link to="/Student / Intern Program">
                            <img className="co-left-img" src={co2} />
                        </Link>
                    </div>

                    <div className='co-left-box' onClick={onClick}>
                        <Link to="/Learning & Development">
                            <img className="co-left-img" src={co3} />
                        </Link>
                    </div>

                    <div className='co-left-box' onClick={onClick}>
                        <Link to="/Diversity & Inclusion">
                            <img className="co-left-img" src={co4} />
                        </Link>
                    </div>
                </div>

                <div className='co-right'>
                    <div onClick={() => navigate("/Jobs")} className='co-right-title cursor-pointer'>
                        Oppourtunities
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", width: "80%", marginTop: "5%", marginLeft: "10%" }}>
                        <ul className='co-right-ul'>
                            <Link to="/Opportunities for Freshers"><li className='co-right-li' onClick={onClick} style={{ color: mode === "dark" ? "white" : "black" }}>Fresher</li></Link>
                            <Link to="/Experienced Professional"><li className='co-right-li' onClick={onClick} style={{ color: mode === "dark" ? "white" : "black" }}>Experienced Professionals</li></Link>
                            <li className='co-right-li' style={{ color: mode === "dark" ? "white" : "black" }}>Important Notice</li>
                        </ul>
                    </div>
                </div>
            </div >
        </Layout>
    )
}
