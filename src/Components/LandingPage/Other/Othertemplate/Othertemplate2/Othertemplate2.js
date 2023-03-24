import React from 'react'
import "../Othertemplate.css"

export default function Othertemplate2({ title, bgimg, content }) {
    return (
        <div className='o-outer' style={{ backgroundImage: `url(${bgimg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='o-title1'>
                {title}
            </div>
            <div className='o-content'>
                {content}
            </div>
            <div className='o-know-more'>
                Know More >
            </div>

        </div>
    )
}
