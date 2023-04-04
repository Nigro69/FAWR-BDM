import React from 'react'
import "./Industrytop.css"


export default function Industrytop({ bgimg, content }) {
    return (
        <div className='it-outer'>
            <div style={{ width: "100%" }} className="it-bgimg">
                <img src={bgimg} style={{ width: "100%" }} />
            </div>
            <div className='it-text' >
                {content}
            </div>
        </div>
    )
}
