import React, { useEffect } from 'react'
import "./Accessibility.css"
import Layout from '../Templates/Layout/Layout';

export default function Accessibility() {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <Layout>
            <div className='as-outer' >
                <div className="as-title">
                    Accessibility Statement
                </div>
                <div className='as-content' >
                    In addition to adhering to Web Content Accessibility Guidelines (WCAG) 2.1, Level A and AA and the Americans with Disabilities Act's (ADA) criteria for effective communication, BDM is dedicated to ensuring digital accessibility.
                </div>

                <div className='as-content' >
                    In order to do this, we have teamed up with eSSENTIAL Accessibility to manage and administer our accessibility programme. Their accessibility programme regularly assesses our digital goods in accordance with industry best practises with the help of a diverse team of accessible experts, including people who use assistive technology.
                </div>

                <div className='as-content' >
                    If you come across any obstacles to accessibility on our digital properties, please let us know. WebsiteAccessibility@BDM.com is the best way to reach us.
                </div>
            </div>
        </Layout>
    )
}



