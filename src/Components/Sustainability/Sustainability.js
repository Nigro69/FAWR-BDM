import React, { useEffect, useState } from 'react'
import "./Sustainability.css"

import Sustainability_img1 from "./SustainabilityImages/Sustainability_img1.png"
import S1 from "./SustainabilityImages/1.png"
import S2 from "./SustainabilityImages/2.png"
import S3 from "./SustainabilityImages/3.png"
import S4 from "./SustainabilityImages/4.png"
import S5 from "./SustainabilityImages/5.png"

import { NavLink as Link } from 'react-router-dom'

import { useMediaQuery } from '@chakra-ui/react'


export default function Sustainability({ mode }) {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

    const [selected, setSelected] = useState(0);

    const susData = [
        {
            name: "Workforce",
            text1: "Our team is made up of really brilliant people that are passionate about giving their all in whatever they do. We also view future employees as a crucial stakeholder who would support our existing workers. Our capacity to provide our clients with high-quality services depends on both our existing workforce and future talent.",
            text2: "We regularly engage with our staff via town hall events, global intranets, email newsletters, and other formal and informal gatherings. We also ask for their opinion through local, regional, and worldwide surveys. Through campus encounters, job placement discussions, internships, and seminars, we collect feedback from potential recruits."
        },

        {
            name: "Clients",
            text1: "The reason we are here is because of our customers. To assist them in making strategic decisions, we work directly with them.",
            text2: "Through methods including client meetings, site visits, online and in- person events, requests for proposals (RFPs), and Net Promoter Score surveys, we grow our awareness of the values and objectives of our clients. Regarding BDM policies, we make an effort to maintain open lines of contact with all of our previous, current, and potential clients."
        },

        {
            name: "Suppliers",
            text1: "Our suppliers provide us with the items and services we need to accomplish our goals.",
            text2: "The expectations we have for our suppliers, including their ESG efforts are communicated in our supplier code of conduct. Through formal meetings and surveys, we communicate with our suppliers on a regular basis to understand the effects of our policies and their goals."
        },

        {
            name: "Ecosystem Partner",
            text1: "To deliver projects to our clients, we collaborate closely with a network of professionals and partner businesses outside of our organisation.",
            text2: "Through formal meetings and one-on-one conversations, we interact with these ecosystem partners."
        },

        {
            name: "Communities",
            text1: "Through our business choices, volunteer work, and fundraising Initiatives, our organisation supports communities all around the world.",
            text2: "Our involvement with more than 160 nonprofit organisations worldwide, which are positioned closer to our communities and their needs, has moulded our knowledge of our communities. We work with these NGOs by offering them expert services, hosting meetings and events, going to their locations, and doing surveys. Through press releases, social media, and media interaction, we also reach a wider audience."
        },

        {
            name: "Leadership",
            text1: "The leadership of our company determines the firm's strategic goals and advocates the partnership's",
            text2: "Through frequent updates, partner meetings, and a particular survey as part of our materiality review, the leadership team offers advice on our ESG commitments."
        },

        {
            name: "Civil Society",
            text1: "We understand that, beyond our local communities, we have a duty to behave morally as global corporate citizens.",
            text2: "To make sure that our policies take into account the interests of civil society, we employ internationally acknowledged ESG standards (EcoVadis, UN Global Compact, and the WEF stakeholder capitalism metrics) as our guidance."
        },

        {
            name: "Planet",
            text1: "Our company's strategy is centred on sustainability, and a sustainable future is essential to our operations.",
            text2: "We endeavour daily to lessen our environmental effect and examine how our activities may affect biodiversity, global warming, and deforestation in the long run."
        },


    ]
    return (
        <div className='sus-outer'>
            <div style={{ width: "100%" }}>
                <img src={Sustainability_img1} style={{ width: "100%" }} />
            </div>

            <div className='sus-title' style={{ color: mode === "dark" ? "white" : "black" }}><u>Materiality Assessment</u></div>

            <div className='sus-section1'>
                <div className='sus-section1-left'>
                    <div className='sus-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        We go through a detailed process to determine the subjects that are most relevant to BDM's ESG disclosures, and we do this every year. We narrowed down the areas that are pertinent to BDM as a professional services company using feedback from our stakeholders and benchmarking against other businesses in our industry.
                    </div>
                    <div className='sus-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Off that shortlist, topics were prioritized by senior leadership and ESG experts within the company based on impact on our business and impact on our stakeholders.
                    </div>
                </div>

                <div className='sus-section1-right'>
                    <img src={S1} style={{ width: "100%" }} />
                </div>
            </div>

            <div className='sus-title' style={{ color: mode === "dark" ? "white" : "black" }}><u>Our Stakeholder</u></div>
            <div className='sus-content' style={{ textAlign: "center", color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                Since we think that even the most difficult sustainability problems cannot be resolved by one party acting alone, we work closely with all of our stakeholders. We communicate often with the following internal and external stakeholder groups, all of which were chosen based on how much influence our firm has over them as well as how much influence they have over us.
            </div>

            <div className='sus-section2'>
                {
                    <>
                        <div className='sus-section2-left'>
                            {
                                selected === 0 ? <div className='sus-section2-left-title'>{susData[0].name}</div> : <div className='sus-section2-left-title' style={{ color: "#C0C0C0" }} onClick={(e) => setSelected(0)}>{susData[0].name}</div>
                            }
                            {
                                selected === 1 ? <div className='sus-section2-left-title'>{susData[1].name}</div> : <div className='sus-section2-left-title' style={{ color: "#C0C0C0" }} onClick={(e) => setSelected(1)}>{susData[1].name}</div>
                            }
                            {
                                selected === 2 ? <div className='sus-section2-left-title'>{susData[2].name}</div> : <div className='sus-section2-left-title' style={{ color: "#C0C0C0" }} onClick={(e) => setSelected(2)}>{susData[2].name}</div>
                            }
                            {
                                selected === 3 ? <div className='sus-section2-left-title'>{susData[3].name}</div> : <div className='sus-section2-left-title' style={{ color: "#C0C0C0" }} onClick={(e) => setSelected(3)}>{susData[3].name}</div>
                            }
                            {
                                selected === 4 ? <div className='sus-section2-left-title'>{susData[4].name}</div> : <div className='sus-section2-left-title' style={{ color: "#C0C0C0" }} onClick={(e) => setSelected(4)}>{susData[4].name}</div>
                            }
                            {
                                selected === 5 ? <div className='sus-section2-left-title'>{susData[5].name}</div> : <div className='sus-section2-left-title' style={{ color: "#C0C0C0" }} onClick={(e) => setSelected(5)}>{susData[5].name}</div>
                            }
                            {
                                selected === 6 ? <div className='sus-section2-left-title'>{susData[6].name}</div> : <div className='sus-section2-left-title' style={{ color: "#C0C0C0" }} onClick={(e) => setSelected(6)}>{susData[6].name}</div>
                            }
                            {
                                selected === 7 ? <div className='sus-section2-left-title'>{susData[7].name}</div> : <div className='sus-section2-left-title' style={{ color: "#C0C0C0" }} onClick={(e) => setSelected(7)}>{susData[7].name}</div>
                            }


                        </div>
                        <div className='sus-section2-right'>
                            <div className='sus-content'>
                                {susData[selected].text1}
                            </div>
                            <div className='sus-content' style={{ color: "#8E8E8E" }}>
                                {susData[selected].text2}
                            </div>
                        </div>
                    </>

                }
            </div>

            <div className='sus-title' style={{ marginTop: "5%", color: mode === "dark" ? "white" : "black" }}><u>Sustainability at BDM</u></div>
            <div className='sus-grid'>
                <div className='sus-grid-element'>
                    <div className='sus-element-left'>
                        <div className='sus-element-title'>
                            <u>Our Planet</u>
                        </div>

                        <div className='sus-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>BDM is net-negative carbon beginning with our 2021 carbon footprint, offsetting more than 100% of Scope 1, 2, and 3 emissions with programmes that remove carbon from the atmosphere. The company intends to maintain net-negative status moving ahead.</div>
                        <div className='sus-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>We signed the Business Ambition for 1.5⁰C commitment letter in 2020, committing to achieve 100% net-zero carbon across all of our operations by 2030.</div>
                        <div className='sus-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>Our local office green teams are made up of employees who are passionate about reducing our environmental impact and who champion local sustainability initiatives. They help us to further minimize waste and conserve energy around the globe.</div>
                    </div>
                    <div className='sus-element-right'><img src={S2} /></div>
                </div>

                <div className='sus-grid-element' style={{ flexDirection: isLargerThan800 ? "row-reverse" : "column" }}>
                    <div className='sus-element-left'>
                        <div className='sus-element-title'>
                            <u>Our People</u>
                        </div>

                        <div className='sus-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>In order to build the amazing teams necessary to provide ground-breaking results for our customers, diversity of experience, background, strengths, and viewpoint is crucial. We're still learning more about these problems, particularly how important it is to deal with unconscious prejudice.</div>
                        <div className='sus-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>We actively contribute to the larger conversation on diversity and inclusion in addition to our internal initiatives; we have written extensively on the subject, including a number of pieces on gender parity.</div>
                    </div>
                    <div className='sus-element-right'><img src={S3} /></div>
                </div>

                <div className='sus-grid-element'>
                    <div className='sus-element-left'>
                        <div className='sus-element-title'>
                            <u>Business Impact</u>
                        </div>

                        <div className='sus-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>By improving our governance and risk management policies and processes, increasing our professional development and ethical standards training programmes, and sourcing and procurement in a sustainable way, BDM consistently aspires to do business in a sustainable and responsible manner.</div>
                    </div>
                    <div className='sus-element-right'><img src={S4} /></div>
                </div>
            </div>


            <div className='sus-title' style={{ marginTop: "5%", color: mode === "dark" ? "white" : "black" }}><u>Additional Material</u></div>
            <div style={{ width: "90%" }}>
                <Link to="/Environmental Policy">
                    <img src={S5} style={{ width: "100%", marginTop: "5%", marginBottom: "10%" }} />
                </Link>
            </div>
        </div>
    )
}
