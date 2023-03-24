import React from 'react'
import "./Detals.css"

import Details_img1 from "./DetailsImages/Details_img1.png"

import { NavLink as Link } from 'react-router-dom'
import { Stack } from '@chakra-ui/react'

export default function Details({ detailData, mode }) {
    return (
        <div>
            {
                detailData.map((element, index) => {
                    return <div className='details-outer' >
                        <div className='details-left'>
                            <div className='details-title'>
                                {element.title}
                            </div>

                            <div className="details-left-text" style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ marginTop: "2%", marginBottom: "2%", color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>{element.content1}</div>
                                <div style={{ marginTop: "2%", marginBottom: "2%", color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>{element.content2}</div>
                                <div style={{ marginTop: "2%", marginBottom: "2%", color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>{element.content3}</div>
                            </div>

                        </div>
                        <div className='details-right'>
                            <div className='details-right-ul'>
                                {
                                    element.points.map((items, index) => {
                                        return <Stack direction="row" alignItems="center">
                                            <div className="details-dot" style={{ borderRadius: "100%", backgroundColor: "white" }} />
                                            <div className='details-li-text'>{items}</div>
                                        </Stack>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                })
            }
        </div>

    )
}
