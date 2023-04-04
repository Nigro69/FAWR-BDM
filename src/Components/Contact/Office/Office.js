import React, { useEffect } from 'react'
import "./Office.css"
import Office_img1 from "../ContactImages/Office_img1.png"
import Layout from '../../Templates/Layout/Layout';

export default function Office() {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <Layout>
            <div className='office-outer'>
                <div style={{ width: "100%" }}>
                    <img src={Office_img1} style={{ width: "100%" }} />
                </div>
                <div className='office-inner'>
                    <div className='office-text' >
                        At BDM, we work seamlessly together as one firm to serve our clients wherever they need us. With 64 offices in 39 countries around the world, we make our collective knowledge, experience and global network available to our clients.
                    </div>
                    <div className='office-grid'>
                        <div className='office-grid-text' >
                            <b>India</b>
                        </div>


                        <div className='office-grid-text' >
                            <b>Canada</b>
                        </div>

                        <div className='office-grid-text' >
                            <b>Malaysia</b>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}
