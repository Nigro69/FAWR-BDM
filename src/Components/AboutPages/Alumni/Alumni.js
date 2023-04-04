import React from 'react'
import "./Alumni.css"

import AL1 from "./AlumniImages/AL1.png"
import AL2 from "./AlumniImages/AL2.png"
import AL3 from "./AlumniImages/AL3.png"
import AL4 from "./AlumniImages/AL4.png"
import AL5 from "./AlumniImages/AL5.png"
import AL6 from "./AlumniImages/AL6.png"
import Layout from '../../Templates/Layout/Layout'


export default function Alumni() {
    return (
        <Layout>
            <div className='al-outer'>
                <div className='mc-bgimg-outer' style={{ width: "100%" }} >
                    <img src={AL1} className="mc-bgimg" style={{ width: "100%" }} />
                </div>
            </div>
        </Layout>
    )
}
