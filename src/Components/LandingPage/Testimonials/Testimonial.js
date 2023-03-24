import React from 'react'
import T1 from "./TestimonialsImages/1.png"
import T2 from "./TestimonialsImages/2.png"

export default function Testimonial({ mode }) {
    return (
        <div className='t-outer' style={{ width: "100%" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <img style={{ width: "80%" }} src={mode === "dark" ? T1 : T2} />
            </div>
        </div>
    )
}
