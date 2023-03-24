import React, { useState } from 'react'
import "./Igrid.css"
import Igrid_img1 from "./IgridImages/Igrid_img1.png"

import { useMediaQuery } from '@chakra-ui/react'

export default function Grid({ gridData, mode }) {
    const [count, setCount] = useState(1)
    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    return (
        <div className='igrid-outer'>
            <div className='igrid-structure'>
                {
                    gridData.map((element, index) => {
                        return <div className='igrid-element' style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse", display: isLargerThan1000 ? "flex" : "none" }} >
                            <div className='igrid-left'>
                                <div style={{ width: "100%" }}> <img className="igrid-img" src={element.img} /></div>
                            </div>
                            <div className='igrid-right'>
                                <div className='igrid-title'>
                                    <div className='igrid-title-text'>
                                        {element.name}
                                    </div>
                                </div>
                                <div className='igrid-right-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                    {element.content}
                                </div>
                                {element.p === "1" ?
                                    <>
                                        {
                                            element.points.map((point, index) => {
                                                return <div className='igrid-points'>
                                                    <div className='igrid-right-img'>
                                                        <img src={Igrid_img1} className="igrid-arrow" />
                                                    </div>
                                                    <div className='igrid-point-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                                                        {point}
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </> : <></>
                                }

                            </div>
                        </div>
                    })
                }



                {
                    gridData.map((element, index) => {
                        return <div className='igrid-element-hidden' style={{ display: isLargerThan1000 ? "none" : "flex", flexDirection: "column", marginTop: "5%" }}>
                            <div className='igrid-title'>
                                <div className='igrid-title'>
                                    <div className='igrid-title-text'>
                                        {element.name}
                                    </div>
                                </div>
                            </div>
                            <div className='igrid-left'>
                                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}> <img className="igrid-img" src={element.img} /></div>
                            </div>
                            <div className='igrid-right-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                {element.content}
                            </div>
                            {element.p === "1" ?
                                <>
                                    {
                                        element.points.map((point, index) => {
                                            return <div className='igrid-points'>
                                                <div className='igrid-right-img'>
                                                    <img src={Igrid_img1} className="igrid-arrow" />
                                                </div>
                                                <div className='igrid-point-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                                                    {point}
                                                </div>
                                            </div>
                                        })
                                    }
                                </> : <></>
                            }
                        </div>
                    })
                }



            </div>

        </div>
    )
}
