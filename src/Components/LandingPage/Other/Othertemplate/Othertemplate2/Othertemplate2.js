import React from 'react'
import "../Othertemplate.css"

export default function Othertemplate2({ title, bgimg, content,subTitle }) {
    return (
        <div className='o-outer' style={{ backgroundImage: `url(${bgimg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',overflow:'scroll' }}>
            <div className='o-title1'>
                {title}
            </div>
            <div className='pl-4 pt-2 font-bold text-white o-subtitle'>
                {subTitle}
            </div>
            <div className='text-sm px-4 py-2 text-white font-sans o-content'>
                {content}
            </div>
            <div className='o-know-more'>
                Know More 
            </div>

        </div>
    )
}
