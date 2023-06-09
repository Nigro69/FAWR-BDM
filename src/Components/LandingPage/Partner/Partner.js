import React from 'react'
import "./Partner.css"

import x1 from "./PartnerImages/1.png"
import x2 from "./PartnerImages/2.png"
import x3 from "./PartnerImages/3.png"
import x4 from "./PartnerImages/4.png"
import x5 from "./PartnerImages/5.png"

import x6 from "./PartnerImages/6.png"
import x7 from "./PartnerImages/7.png"
import x8 from "./PartnerImages/8.png"
import x9 from "./PartnerImages/9.png"
import x10 from "./PartnerImages/10.png"

import x11 from "./PartnerImages/11.png"
import x12 from "./PartnerImages/12.png"
import x13 from "./PartnerImages/13.png"
import x14 from "./PartnerImages/14.png"
import x15 from "./PartnerImages/15.png"

import x16 from "./PartnerImages/16.png"
import x17 from "./PartnerImages/17.png"
import x18 from "./PartnerImages/18.png"
import x19 from "./PartnerImages/19.png"
import x20 from "./PartnerImages/20.png"
import x21 from "./PartnerImages/SAP_logo.png"
import x22 from "./PartnerImages/fig.png"
import x25 from "./PartnerImages/fig2.png"
import x26 from "./PartnerImages/fig3.png"
import x23 from "./PartnerImages/inv.png"
import x24 from "./PartnerImages/mar.png"
import x27 from './PartnerImages/wix.png'
import x28 from './PartnerImages/woo.png'
import x29 from './PartnerImages/wordpress.png'
import x30 from './PartnerImages/Hostinger.png'
import x31 from './PartnerImages/bluehost.png'
import x32 from './PartnerImages/godaddy.png'
import x33 from './PartnerImages/MailChimp.png'
import x34 from './PartnerImages/sendgrid.png'

export default function Partner({ mode }) {
    return (
        <div className='partner-outer'>
            <div className='partner-grid' >
                <div className='partner-grid-element' >
                    <img src={x1} />
                </div>

                <div className='partner-grid-element' >
                    <img src={x2} />
                </div>

                <div className='partner-grid-element' >
                    <img src={x3} />
                </div>

                <div className='partner-grid-element' >
                    <img src={x4} />
                </div>

                <div className='partner-grid-element' >
                    <img src={x5} />
                </div>
            </div>

            <div className='partner-grid'>
                <div className='partner-grid-element' >
                    <img src={x6} />
                </div>

                <div className='partner-grid-element' >
                    <img src={x7} />
                </div>

                <div className='partner-grid-element' >
                    <img src={x8} />
                </div>

                <div className='partner-grid-element' >
                    <img className="grayscale" src={x24} />
                </div>

                <div className='partner-grid-element' >
                    <img className="grayscale" src={x30} />
                </div>
            </div>

            <div className='partner-grid'>
                <div className='partner-grid-element' >
                    <img src={x11} />
                </div>

                <div className='partner-grid-element' >
                    <img className='grayscale' src={x28} />
                </div>

                <div className='partner-grid-element' >
                    <img src={x13} />
                </div>

                <div className='partner-grid-element' >
                    <img src={x14} />
                </div>

                <div className='partner-grid-element' >
                    <img src={x15} />
                </div>
            </div>

            <div className='partner-grid'>
                <div className='partner-grid-element' >
                    <img src={x29} />
                </div>

                <div className='partner-grid-element' >
                    <img className="grayscale" src={x23} />
                </div>

                <div className='partner-grid-element' >
                    <img src={x18} />
                </div>

                <div className='partner-grid-element' >
                    <img src={x19} />
                </div>

                <div className='partner-grid-element' >
                    <img className="grayscale" src={x26} />
                </div>
            </div>
            <div className='partner-grid'>
                <div className='partner-grid-element' >
                    <img src={x27} />
                </div>

                <div className='partner-grid-element' >
                    <img className="grayscale" src={x31} />
                </div>

                <div className='partner-grid-element' >
                    <img className="grayscale" src={x32} />
                </div>

                <div className='partner-grid-element' >
                    <img className="grayscale" src={x33} />
                </div>

                <div className='partner-grid-element' >
                    <img className="grayscale" src={x34} />
                </div>
            </div>
        </div>
    )
}
