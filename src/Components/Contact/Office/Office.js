import React, { useEffect } from 'react'
import "./Office.css"
import Office_img1 from "../ContactImages/Office_img1.png"
import Layout from '../../Layout/Layout';
import { useStateContext } from '../../../contexts/ContextProvider';

export default function Office() {
    const { mode } = useStateContext()
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
                        <div className='office-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                            At BDM, we work seamlessly together as one firm to serve our clients wherever they need us. With 64 offices in 39 countries around the world, we make our collective knowledge, experience and global network available to our clients.
                        </div>
                        <div className='office-grid'>
                            <div className='office-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                <b>India</b>
                            </div>


                            <div className='office-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                <b>Canada</b>
                            </div>

                            <div className='office-grid-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                <b>Malaysia</b>
                            </div>

                        </div>
                    </div>
                </div>
            </Layout>
    )
}
