import React from 'react'
import "./Aboutus.css"

import { NavLink as Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';

import AU1 from "./AboutusImages/AU1.png"


export default function Aboutus({ mode }) {

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    return (
        <div className='au-outer' style={{ backgroundColor: mode === "dark" ? "#211F22" : "white" }}>
            <div className='contact-bgimg-outer' style={{ width: "100%" }} >
                <img src={AU1} className="contact-bgimg" style={{ width: "100%" }} />
            </div>
            <div className='au-text' style={{ color: mode === "dark" ? "white" : "black" }}>
                We are a worldwide consulting firm that works with the most aspirational change agents to design the future. We collaborate with our clients in an effort to reinvent industries while achieving amazing outcomes that surpass the competition. To produce better, quicker, and longer-lasting results, we combine our specialised, integrated knowledge with a thriving ecosystem of digital entrepreneurs. Our dedication to providing services enables us to support groups working to address the pressing issues in education, racial fairness, social justice, economic development, and the environment.
            </div>

            <div className='au-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Our Firm</u>
            </div>

            <div className='au-grid'>
                <Link to="/What we believe">
                    <div className='au-element'>
                        <div className='au-element-title'>What we believe</div>
                        <div className='au-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                            We think those who push themselves to be great should encourage others to do the same. Furthermore, doing the right thing is never simple, but it is always worthwhile.
                        </div>
                        <BsArrowRight color="#BC312E" fontSize="2rem" />
                    </div>
                </Link>

                <Link to="/What we do">
                    <div className='au-element'>
                        <div className='au-element-title'>What we do</div>
                        <div className='au-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                            Global leaders turn to us to address issues that define their industries. Our distinct method of change management aids in structuring, coordinating, and enabling long-lasting results.
                        </div>
                        <BsArrowRight color="#BC312E" fontSize="2rem" />
                    </div>
                </Link>

                <Link to="/Media Center">
                    <div className='au-element'>
                        <div className='au-element-title'>Media Centre</div>
                        <div className='au-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                            For their distinctive insights and subject-matter expertise, our people are frequently sought out by national, regional, and business media.
                        </div>
                        <BsArrowRight color="#BC312E" fontSize="2rem" />
                    </div>
                </Link>
            </div>


           <div className='au-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Our People</u>
            </div>

            <div className='au-grid'>
                <Link to="">
                    <div className='au-element'>
                        <div className='au-element-title'>Culture of Collaboration</div>
                        <div className='au-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                            Working with us feels different, as we are frequently told. Why? a distinctively collaborative atmosphere populated by ardent individuals who are more concerned with your achievement.
                        </div>
                        <BsArrowRight color="#BC312E" fontSize="2rem" />
                    </div>
                </Link>

                <Link to="/Diversity & Inclusion">
                    <div className='au-element'>
                        <div className='au-element-title'>Diversity & Inclusion</div>
                        <div className='au-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                            By embracing diverse viewpoints and beliefs that help us see the world differently, we assist our clients in seeing the world differently.
                        </div>
                        <BsArrowRight color="#BC312E" fontSize="2rem" />
                    </div>
                </Link>

                <Link to="/Social Impact">
                    <div className='au-element'>
                        <div className='au-element-title'>Social Impact</div>
                        <div className='au-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                            Promising enterprises that require resources and strategic direction to realise their full potential are the focus of our consultancy work.
                        </div>
                        <BsArrowRight color="#BC312E" fontSize="2rem" />
                    </div>
                </Link>
            </div>


           <div className='au-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Results & Partnership</u>
            </div>

            <div className='au-grid'>
                <Link to="">
                    <div className='au-element'>
                        <div className='au-element-title'>Enduring Results</div>
                        <div className='au-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                            We collaborate with aspirational leaders that want to shape the future rather than run from it. We do great things as a team.
                        </div>
                        <BsArrowRight color="#BC312E" fontSize="2rem" />
                    </div>
                </Link>

                <Link to="/Alliance">
                    <div className='au-element'>
                        <div className='au-element-title'>BDM Alliance Ecosystem</div>
                        <div className='au-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                            For the purpose of enhancing our knowledge and achieving ground-breaking outcomes, we form alliances with top businesses and organisations from across the world.
                        </div>
                        <BsArrowRight color="#BC312E" fontSize="2rem" />
                    </div>
                </Link>

                <Link to="/Global Affiliation">
                    <div className='au-element'>
                        <div className='au-element-title'>Global Affilation</div>
                        <div className='au-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                            With companies that share our values, we have enduring relationships and connections, and our leaders are dedicated to achieving long-term success.
                        </div>
                        <BsArrowRight color="#BC312E" fontSize="2rem" />
                    </div>
                </Link>
            </div>
        </div>
    )
}
