import React, {useEffect} from 'react'
import "./Accessibility.css"

export default function Accessibility({ mode }) {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <div className='as-outer' style={{ backgroundColor: mode === "dark" ? "#211F22" : "white" }}>
            <div className="as-title">
                Accessibility Statement
            </div>
            <div className='as-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                In addition to adhering to Web Content Accessibility Guidelines (WCAG) 2.1, Level A and AA and the Americans with Disabilities Act's (ADA) criteria for effective communication, BDM is dedicated to ensuring digital accessibility.
            </div>

            <div className='as-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                In order to do this, we have teamed up with eSSENTIAL Accessibility to manage and administer our accessibility programme. Their accessibility programme regularly assesses our digital goods in accordance with industry best practises with the help of a diverse team of accessible experts, including people who use assistive technology.
            </div>

            <div className='as-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                If you come across any obstacles to accessibility on our digital properties, please let us know. WebsiteAccessibility@BDM.com is the best way to reach us.
            </div>
        </div>
    )
}



