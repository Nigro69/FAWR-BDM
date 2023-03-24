import React from 'react'
import "../Othertemplate.css"

export default function Othertemplate1({ title, bgimg }) {
    return (
        <div className='o-outer' style={{ backgroundImage: `url(${bgimg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='o-title'>
                {title}
            </div>

        </div>
    )
}
