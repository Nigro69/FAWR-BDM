import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Companies.css"

import C1 from "./CompaniesImages/1.png"
import C2 from "./CompaniesImages/2.png"



import C3 from "./CompaniesImages/3.png"
import C4 from "./CompaniesImages/4.png"
import C5 from "./CompaniesImages/5.png"
import C6 from "./CompaniesImages/6.png"
import C7 from "./CompaniesImages/7.png"
import C8 from "./CompaniesImages/8.png"

import { useMediaQuery } from '@chakra-ui/react'

export default function Companies() {
    const [selected, setSelected] = useState(0)

    const Data = ["BB Celebration", "BB Creative Studio", "Wed my love", "BB Corporate Connect", "BB Salon", "Im Beside you"]
    const imgs = [C8, C7, C6, C4, C3, C5]
    const titles = ["Big Bros Celebration", "Big Bros Creative Studio", "Wed my love", "Big Bros Corporate Connect", "Beauti & Bright Salon", "Im Beside you"]
    const content = ["Adding Magical Touch to your Celebrations on birthdays, anniversaries,product launches  get to gather, friends reunion,Logistics, Hospitality, valedictory moments",
        "BCS connects businesses with freelancers, independent professionals and agencies around the globe offering digital services in 500+ categories",
        "WedMylove is an India's most loved  Wedding Planning Website and app where you can find the best wedding ideas and all in one place vendors, venues, photograhers, Makeupartists, Party throwers artists, with prices and reviews.",
        "Accelerate Business Connections at Executive Level meetings, product launch. To reach  and know your customers Get support from peers and global leaders. Plan your business at the level you expect to reach.",
        "Salon App will allow you to find the nearest Salons, view the stylists, prices , services provided and make reservations on the app.",
        "Whether you're feeling anxious, lonely, overwhelmed, or just burned out, Im Beside You will meet you where you're at. Best partner App for Singles. This is not just another online flirt app - Im Beside You is about true friend. We are the Distance frnd app for singles that are looking moral support."]


    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    return (
        <div className='companies-outer' style={{ color: mode === "dark" ? "#C6C6C6" : "#7A7A7A", }}>
            {/* backgroundColor: mode === "dark" ? "transparent" : "#E0E0E0", marginBottom: "10%"  */}
            <div className='companies-names'>
                {
                    Data.map((name, index) => {
                        return <div className='companies-name' onClick={(e) => setSelected(index)} style={{ color: selected === index ? "red" : "#7E7E7E", }}>
                            {/* borderBottom: selected === index ? "1px solid red" : "none" */}
                            {name}
                        </div>
                    })
                }
            </div>

            <div className='companies-content'>
                <div className='companies-left'>
                    <div className='companies-title ff-style'>
                        {titles[selected]}
                    </div>
                    <div className='companies-left-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7A7A7A" }}>
                        {content[selected]}
                    </div>
                </div>
                <div className='companies-right'  >
                    <img src={imgs[selected]} />
                </div>
            </div>

            {/* <div className='companies-bottom'>

                <div style={{ width: isLargerThan1000 ? "30%" : "100%", display: "flex", justifyContent: "center" }}>
                    <Button color="white" marginTop={isLargerThan1000 ? "2%" : "5%"}
                        backgroundColor="#BC312E">Try Now {">"}</Button>
                </div>

            </div> */}
        </div>
    )
}
