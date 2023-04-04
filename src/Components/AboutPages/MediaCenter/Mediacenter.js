import React, { useEffect } from 'react'
import "./Mediacenter.css"

import MC1 from "./MediacenterImages/MC1.png"
import MC2 from "./MediacenterImages/MC2.png"
import Layout from '../../Templates/Layout/Layout'

export default function Mediacenter() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const mediaData = [
        {
            title: "Media name",
            date: "23-Nov-2022",
            text1: "Lorem ipsum dolor sit amet consectetur. Sed a viverra praesent sed nulla fusce facilisis. Egestas non velit quis pellentesque quis.",
            text2: "Lorem ipsum dolor sit amet consectetur. Sed a viverra praesent sed nulla fusce facilisis. Egestas non velit quis pellentesque quis.",
        },

        {
            title: "Media name",
            date: "23-Nov-2022",
            text1: "Lorem ipsum dolor sit amet consectetur. Sed a viverra praesent sed nulla fusce facilisis. Egestas non velit quis pellentesque quis.",
            text2: "Lorem ipsum dolor sit amet consectetur. Sed a viverra praesent sed nulla fusce facilisis. Egestas non velit quis pellentesque quis.",
        },

        {
            title: "Media name",
            date: "23-Nov-2022",
            text1: "Lorem ipsum dolor sit amet consectetur. Sed a viverra praesent sed nulla fusce facilisis. Egestas non velit quis pellentesque quis.",
            text2: "Lorem ipsum dolor sit amet consectetur. Sed a viverra praesent sed nulla fusce facilisis. Egestas non velit quis pellentesque quis.",
        },
    ]
    return (
        <Layout>
            <div className='mc-outer'>
                <div className='mc-bgimg-outer' style={{ width: "100%" }} >
                    <img src={MC1} className="mc-bgimg" style={{ width: "100%" }} />
                </div>
                <div className='mc-text1' style={{ width: "80%", textAlign: "center", marginTop: "5%"  }}>
                    Our subject matter expertise, top-notch research, and business viewpoints have been highlighted in prestigious news outlets all around the world.
                </div>
                <div className='mc-title' >
                    <u>Media Contacts</u>
                </div>

                <div className='mc-grid1'>
                    <div className='mc-element1' >
                        <div className='mc-element1-top'>
                            <div className='mc-text1' style={{   width: "80%", textAlign: "center", marginTop: "5%", fontSize: "500" }}>
                                Thilak,
                            </div>
                            <div className='mc-text1' style={{   width: "80%", textAlign: "center", marginTop: "5%" }}>
                                India,
                            </div>
                        </div>

                        <div className='mc-element1-bottom'>
                            <div className='mc-text1' style={{   width: "80%", textAlign: "center", marginTop: "5%" }}>
                                pro@bigbrosdigitalmedia.com
                            </div>
                        </div>
                    </div>

                    <div className='mc-element1' >
                        <div className='mc-element1-top'>
                            <div className='mc-text1' style={{   width: "80%", textAlign: "center", marginTop: "5%", fontSize: "500" }}>
                                Charulatha,
                            </div>
                            <div className='mc-text1' style={{   width: "80%", textAlign: "center", marginTop: "5%" }}>
                                Canada,
                            </div>
                        </div>

                        <div className='mc-element1-bottom'>
                            <div className='mc-text1' style={{   width: "80%", textAlign: "center", marginTop: "5%" }}>
                                pro.ca@bigbrosdigitalmedia.com
                            </div>
                        </div>
                    </div>

                    <div className='mc-element1' >
                        <div className='mc-element1-top'>
                            <div className='mc-text1' style={{   width: "80%", textAlign: "center", marginTop: "5%", fontSize: "500" }}>
                                Sneha,
                            </div>
                            <div className='mc-text1' style={{   width: "80%", textAlign: "center", marginTop: "5%" }}>
                                Malaysia,
                            </div>
                        </div>

                        <div className='mc-element1-bottom'>
                            <div className='mc-text1' style={{   width: "80%", textAlign: "center", marginTop: "5%" }}>
                                pro.ma@bigbrosdigitalmedia.com
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='mc-title' >
                <u>Media Mentions</u>
            </div> */}

                {/* <div className='mc-grid2'>
                {
                    mediaData.map((item, index) => {
                        return <div className='mc-element2' style={{ backgroundColor: mode === "dark" ? "#211F22" : "#EFEFEF" }}>
                            <div className='mc-element2-left'>
                                <div className='mc-bgimg-outer' style={{ width: "100%", display: "flex", justifyContent: "center" }} >
                                    <img src={MC2} className="mc-bgimg" style={{ width: "90%" }} />
                                </div>
                            </div>
                            <div className='mc-element2-right'>
                                <div className='mc-element2-text1-outer'>
                                    <div className='mc-element2-text1' >{item.title}</div>
                                    <div className='mc-element2-text1' >{item.date}</div>
                                </div>
                                <div className='mc-text1' style={{ marginTop: "5%"  }}>
                                    {item.text1}
                                </div>

                                <div className='mc-text2' >
                                    {item.text2}
                                </div>
                            </div>
                        </div>
                    })
                }

            </div> */}

                {/* <div className='mc-title' >
                <u>Press Release</u>
            </div>

            <div className='mc-grid2'>
                {
                    mediaData.map((item, index) => {
                        return <div className='mc-element2' style={{ backgroundColor: mode === "dark" ? "#211F22" : "#EFEFEF" }}>
                            <div className='mc-element2-left'>
                                <div className='mc-bgimg-outer' style={{ width: "100%" }} >
                                    <img src={MC2} className="mc-bgimg" style={{ width: "90%" }} />
                                </div>
                            </div>
                            <div className='mc-element2-right'>
                                <div className='mc-element2-text1-outer'>
                                    <div className='mc-element2-text1' >{item.title}</div>
                                    <div className='mc-element2-text1' >{item.date}</div>
                                </div>
                                <div className='mc-text1' style={{ marginTop: "5%"  }}>
                                    {item.text1}
                                </div>

                                <div className='mc-text2' >
                                    {item.text2}
                                </div>
                            </div>
                        </div>
                    })
                }

            </div> */}
            </div >
        </Layout>
    )
}
