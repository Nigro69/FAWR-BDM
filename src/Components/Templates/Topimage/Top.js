import React from 'react'
import "./Top.css"

export default function Top({ bgimg }) {
    return (
        <div className='top-outer'>
            <img src={bgimg} />
        </div>
    )
}
