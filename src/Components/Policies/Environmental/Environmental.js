import React, {useEffect} from 'react'
import "./Environmental.css"

export default function Environmental({ mode }) {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <div className='ep-outer' style={{ backgroundColor: mode === "dark" ? "#211F22" : "white" }}>
            <div className='ep-inner'>
                <div className='ep-title'>
                    BDM Environmental Policy
                </div>
                <div className='ep-text1' style={{ color: mode === "dark" ? "white" : "black" }}>
                    Our workers firmly believe in improving the world, thus corporate social responsibility is ingrained in our DNA. By detecting, quantifying, and offsetting the environmental effect of our international activities, we are dedicated to protecting the environment and minimising the environmental impact of our commercial operations.
                </div>

                <div className='ep-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    Government environmental policies:
                </div>
                <div>
                    <ul className='ep-ul'>
                        <li className='ep-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Any measure by a government or corporation or other public or private organization regarding the effects of human activities on the environment, particularly those measures that are designed to prevent or reduce harmful effects of human activities on ecosystems.</li>
                        <li className='ep-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Environmental policies are needed because environmental values are usually not considered in organizational decision making. There are two main reasons for that omission.</li>
                        <li className='ep-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>First, environmental effects are economic externalities. Polluters do not usually bear the consequences of their actions; the negative effects most often occur elsewhere or in the future.</li>
                    </ul>
                </div>


                <div className='ep-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    History of Environment Policy:
                </div>
                <div>
                    <ul className='ep-ul'>
                        <li className='ep-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Public policies aimed at environmental protection date back to ancient times. The earliest sewers were constructed in Mohenjo-daro (Indus, or Harappan, civilization) and in Rome (ancient Roman civilization), which date back some 4,500 years and 2,700 years ago, respectively.</li>
                        <li className='ep-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Other civilizations implemented environmental laws. The city-states of ancient Greece created laws that governed forest harvesting some 2,300 years ago, and feudal European societies established hunting preserves, which limited game and timber harvesting to royalty, effectively preventing overexploitation, by 1000 CE.</li>
                    </ul>
                </div>


                <div className='ep-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E", marginTop: "3%" }}>
                    Our four commitments to environmental sustainability
                </div>

                <div className='ep-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    1. Social Sustainibilty
                </div>
                <ul className='ep-ul'>
                    <li className='ep-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Social sustainability aims to preserve social capital by investing and creating services that constitute the framework of our society. The concept accommodates a larger view of the world in relation to communities, cultures and globalisation. It means to preserve future generations and to acknowledge that what we do can have an impact on others and on the world.</li>
                </ul>

                <div className='ep-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    2. Economic Sustainibilty
                </div>
                <ul className='ep-ul'>
                    <li className='ep-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Economic sustainability aims to maintain the capital intact. If social sustainability focuses on improving social equality, economic sustainability aims to improve the standard of living. In the context of business, it refers to the efficient use of assets to maintain company profitability over time.</li>
                </ul>


                <div className='ep-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    3. Environmental Sustainabilty
                </div>
                <ul className='ep-ul'>
                    <li className='ep-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Environmental sustainability aims to improve human welfare through the protection of natural capital (e.g. land, air, water, minerals etc.). Initiatives and programs are defined environmentally sustainable when they ensure that the needs of the population are met without the risk of compromising the needs of future generations. Environmental sustainability</li>
                    <li className='ep-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>We are a part of the communities in which we operate and wherever our solutions are provided. We care about those communities, supporting them with time, products and services.</li>
                </ul>


                <div className='ep-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E", marginTop: "3%" }}>
                    Helping clients become better environmental stewards
                </div>
                <div className='ep-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    We are a part of the communities in which we operate and wherever our solutions are provided. We care about those communities, supporting them with time, products and services.Economic sustainability aims to maintain the capital intact. If social sustainability focuses on improving social equality, economic sustainability aims to improve the standard of living. In the context of business, it refers to the efficient use of assets to maintain company profitability over time.Environmental sustainability aims to improve human welfare through the protection of natural capital (e.g. land, air, water, minerals etc.). Initiatives and programs are defined environmentally sustainable when they ensure that the needs of the population are met without the risk of compromising the needs of future generations. Environmental sustainability
                </div>

                <div className='ep-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E", marginTop: "3%" }}>
                    Our teams focus on four key areas:
                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "left" }}>
                    <ol className='ep-ol' type="1">
                        <li className='ep-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Promoting conservation and source water protection through effective land management</li>
                        <li className='ep-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Using our natural resources efficiently</li>
                        <li className='ep-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Effectively preventing and managing sewage (wastewater) overflows</li>
                        <li className='ep-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Minimize discharges from our wastewater treatment plants</li>
                    </ol>
                </div>


                <div className='ep-text2' style={{ marginTop: "3%", color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    We protect and improve our environments and our water delivery for today and tomorrow. Our mindset is focused on sustainable practice and good environmental management, always looking to minimise and reduce the impact of our work, and to seek positive environmental outcomes.
                </div>

                <ul className='ep-ul' style={{ marginTop: "3%" }}>
                    <li className='ep-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>We protect the local environment where we operate, with specialists who have knowledge of not just what we could do but why it matters.</li>
                    <li className='ep-li-text2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>They ensure the good work we have already been doing in protecting our environment continues.</li>
                </ul>

                <div className='ep-text2' style={{ marginTop: "3%", color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    Any measure by a government or corporation or other public or private organization regarding the effects of human activities on the environment, particularly those measures that are designed to prevent or reduce harmful effects of human activities on ecosystems.Environmental policies are needed because environmental values are usually not considered in organizational decision making. There are two main reasons for that omission.
                </div>


                <div className='ep-text2' style={{ width: "100%", display: "flex", justifyContent: "center", color: mode === "dark" ? "white" : "black", marginTop: "5%", cursor: "pointer" }}>
                    <u color='red'>Download full environmental Policy pdf</u>
                </div>

            </div>
        </div>
    )
}
