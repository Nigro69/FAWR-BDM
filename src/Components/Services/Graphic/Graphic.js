import React, {useEffect} from 'react'
import "../Research/Research.css"

import Graphic_img1 from "./GraphicImages/Graphic_img1.png"
import R1 from "./GraphicImages/1.png"
import R2 from "./GraphicImages/2.png"
import R3 from "./GraphicImages/3.png"
import R4 from "./GraphicImages/4.png"
import R5 from "./GraphicImages/5.png"
import R6 from "./GraphicImages/6.png"

import T1 from "./GraphicImages/T1.png"
import T2 from "./GraphicImages/T2.png"
import T3 from "./GraphicImages/T3.png"
import T4 from "./GraphicImages/T4.png"
import T5 from "./GraphicImages/T5.png"

import A1 from "./GraphicImages/A1.png"



import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'

export default function Graphic({ mode }) {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    
const projectData = [
    {
        title: "Kameo Book cover",
        content: "Curates specially for the brand keeping in mind the traditional design as they preffered",
    },
    {
        title: "Business Branding",
        content: "helped a company create its brand identity, starting with its color palette and logo design.Creating a unique way for them to get recognized",
    },
    {
        title: "Product Packaging Design",
        content: "Packaging, which is the outerwear of a product, should also be consistent with the brand. A great product packaging design can go a long way. In fact, having this project in your portfolio could lead to more prospects",
    },
]

    const detailData = [
        {
            title: "Want to get your brand noticed?",
            content1: "In the market for creative digital services agencies, BDM offers qualified graphic design services. Outstanding and captivating graphics for brochures, banners, posters, business cards, e-books, and many more materials are part of our creative graphic design services.",
            content2: "Our graphic designs may leave a lasting impact on the minds of your prospects. Our skilled designers can create a brilliant internet presence for your company using a perfect blend of professionalism and amazing artistic talents.",
            content3: "BDM, a pioneer in the field of graphic design, produces spectacular graphics that elevate the calibre of your online company on a variety of platforms. Our designers work cleverly and imaginatively to create eye-catching graphic designs that effectively communicate your company's concepts to the public. In addition, we use several other graphic design tools, such as Adobe Creative Cloud, Corel Draw, Google Slides, and Canva.",
            points: ["Infographics", "Logo Design", "Brochures Design", "Character Design", "Illustrations", "Web Banners"]
        }
    ]

    const gridData = [
        {
            name: "Infographics",
            firstLetter: "I",
            img: R1,
            content: "A paragraph's worth of data might soon cause readers to lose interest in the context. We step in at this point. We assist you in keeping readers engaged by merging data and images to produce effective infographic material."
        },

        {
            name: "Logo Design",
            firstLetter: "L",
            img: R2,
            tool: T1,
            content: "By providing top-notch logo design services, we help companies establish strong brand identities. Get logos made at prices and quality that are appealing. With years of expertise, our logo design professionals can utilise their imagination in a flexible approach to create a logo that accurately conveys your business concept."
        },

        {
            name: "Brochures Design",
            firstLetter: "B",
            img: R3,
            tool: T2,
            content: "A sales brochure with a professional design exudes dependability and credibility. As the best flyer and brochure design firm in India, we offer eye-catching sales flyers and business brochure designs to make an impression on your target market. Our distinctive and cutting-edge bespoke brochure designs may offer you an advantage over your rivals and help you keep up with the times."
        },

        {
            name: "Character Design",
            firstLetter: "C",
            img: R4,
            tool: T3,
            content: "Character design is a crucial component of digital art, but creating a flawless visual character calls for a certain set of abilities and expertise. We must rely more on visual aspects now that online activity has skyrocketed since there is no other method to convey ideas, feelings, or anything else we wish to accomplish online."
        },

        {
            name: "Illustration",
            firstLetter: "I",
            img: R5,
            tool: T4,
            content: "Words cannot create the world that illustrations do. We provide such distinctive illustration designs and artworks for your company that speak to your audience's hearts and brains in a global language and make a lasting impact. We have a reputation for bringing your ideas to life by producing pictures you never imagined being possible."
        },
        {
            name: "Web Banners",
            firstLetter: "W",
            img: R6,
            tool: T5,
            content: "Since web banners are designed to drive traffic and raise brand recognition, you cannot disregard them in today's cutthroat marketplace. Web banners are frequently used to advertise any good or service, and our staff is aware of how to utilise them to demonstrate your online presence and create web banners that have an effect."
        },

    ]

    return (
        <div className='research-outer'>
            <Top bgimg={Graphic_img1} />
            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Graphic Design Services</u>
            </div>
            <div className='research-component'>
                <Details detailData={detailData} />
            </div>

            <div className='research-component'>
                <Grid gridData={gridData} />
            </div>

            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Awards & Recognition</u>
            </div>
            <div className='research-component'>
                <Award img={A1} i={"0"} />
            </div>

            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Our Recent Projects</u>
            </div>
            <div className='research-component'>
                <Project projectData={projectData}/>
            </div>

            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Featured Blog posts</u>
            </div>
            <div className='research-component'>
                <Blogs />
            </div>

        </div>
    )
}
