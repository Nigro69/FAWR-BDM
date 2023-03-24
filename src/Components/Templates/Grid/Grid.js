import React, { useState } from 'react'
import "./Grid.css"
import Grid_img1 from "./GridImages/Grid_img1.png"

import { useMediaQuery } from '@chakra-ui/react'

export default function Grid({ gridData, mode }) {
    const [count, setCount] = useState(1)
    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    return (
        <div className='grid-outer'>
            <div className='grid-structure'>

                {
                    gridData.map((element, index) => {
                        return <div className='grid-element' style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse", display: isLargerThan1000 ? "flex" : "none" }} >
                            <div className='grid-left'>
                                <div style={{ width: "100%" }}> <img className="grid-img" src={element.img} /></div>
                            </div>
                            <div className='grid-right'>
                                <div className='grid-title'>
                                    <div className='grid-title-capital'>
                                        {element.firstLetter}
                                    </div>
                                    <div className='grid-title-text'>
                                        {element.name}
                                    </div>
                                </div>
                                <div className='grid-right-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                    {element.content}
                                </div>
                                <div className='grid-right-img'>
                                    <img src={element.tool} />
                                </div>
                            </div>
                        </div>
                    })
                }



                {
                    gridData.map((element, index) => {
                        return <div className='grid-element-hidden' style={{ display: isLargerThan1000 ? "none" : "flex", flexDirection: "column" }}>
                            <div className='grid-title'>
                                <div className='grid-title'>
                                    <div className='grid-title-capital'>
                                        {element.firstLetter}
                                    </div>
                                    <div className='grid-title-text'>
                                        {element.name}
                                    </div>
                                </div>
                            </div>
                            <div className='grid-left'>
                                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}> <img className="grid-img" src={element.img} /></div>
                            </div>
                            <div className='grid-right-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                {element.content}
                            </div>
                            <div className='grid-right-img' style={{ width: "100%", display: "flex", justifyContent: "center" }} >
                                <img src={element.tool} />
                            </div>
                        </div>
                    })
                }



            </div>

        </div>
    )
}
