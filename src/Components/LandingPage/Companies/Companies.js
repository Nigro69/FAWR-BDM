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

export default function Companies({ mode }) {
    const [selected, setSelected] = useState(0)

    const Data = ["BB Celebration", "BB Creative Studio", "Wed my love", "BB Influencer", "BB Corporate Connect", "BB Salon"]
    const imgs = [C8, C7, C6, C5, C4, C3]
    const titles = ["Celebration Schemes", "BB Creative Studio", "Wed my love", "BB Influencer", "BB Corporate Connect", "BB Salon"]
    const content = ["BB Celebration schemes helps you to get the best of deals and planned sets for any of your occasion be it a birthday party, anniversary, graduation party or a throw for the corporates.",
        "BB creative studio provides one solution for all the fields of expertise giving a wide range of options to choose from. They enhance your experience everyday by offering a wide range of coupons, deals and cashbacks on the leading online brands and websites. ",
        "India’s most trusted connecting  network. They  guide you in your journey to find inner peace and fulfillment. They find the best of people to get together.",
        "BB Influencer helps to  get the best of influencer on a  digital platform for entertainment, lifestyle and fashion. They bring you the latest  and trending stories in glitz, glitter  everyday.",
        "BB Corporate connect helps you to get the best of deals from planned sets of companies for any of your corporate or lifestyle choices.",
        "BB Salon partners with brands such as VLCC to give you the best  of salon solution in a smooth and hassle free manner to add up to your effortless look."]


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
                    <div className='companies-title'>
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
