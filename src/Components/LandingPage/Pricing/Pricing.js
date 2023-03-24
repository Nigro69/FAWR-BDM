import React from 'react'
import P1 from "./PricingImages/P1.png"
import P2 from "./PricingImages/P2.png"

export default function Pricing({ mode }) {
    return (
        <div className='p-outer' style={{ width: "100%" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <img style={{ width: "80%" }} src={mode === "dark" ? P1 : P2} />
            </div>
        </div>
    )
}
