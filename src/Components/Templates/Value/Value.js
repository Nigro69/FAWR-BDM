import { Stack } from '@chakra-ui/react'
import React from 'react'
import "./Value.css"
import Value_img1 from "./ValueImages/Value_img1.png"

export default function Value({ valueData, mode }) {
    return (
        <>
            {
                valueData.map((element, index) => {
                    return <div className='value-outer'>
                        <div className='value-top' >
                            <div className='value-title'>
                                {element.content}
                            </div>
                        </div>
                        <div className='value-bottom'>
                            {
                                element.points.map((item, index) => {
                                    return <div style={{ width: "100%", display: "flex", justifyContent: "left", }}>
                                        <Stack direction="row" spacing={5} displa="flex" alignItems="center" justifyContent="left"  >
                                            <div><img src={Value_img1} /></div>
                                            <div className='value-point-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                                {item}
                                            </div>
                                        </Stack>
                                    </div>
                                })
                            }

                        </div>
                    </div >
                })
            }

        </>
    )
}
