import { Button } from '@chakra-ui/react'
import React, {useEffect} from 'react'
import "./Professional.css"

import P1 from "./ProfessionalImages/P1.png"



export default function Professional() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])



    return (
        <div className='pro-outer'>
            <div style={{ width: "100%" }}>
                <img src={P1} style={{ width: "100%" }} />
            </div>


            <div className='pro-title' >
                <u>We Value Your Professional Experience</u>
            </div>


            <div className='pro-text' style={{ marginTop: "2%", textAlign: "left"  }}>
                We work with a wide range of customers and sectors, so the knowledge and perspective that experienced personnel bring to the table is vital. We are able to resolve some of the toughest business issues in the world thanks to brilliant brains and varied viewpoints.
            </div>

            <div className='pro-text' style={{ marginTop: "2%", textAlign: "left"  }}>
                We aggressively seek for bright, seasoned individuals from a variety of backgrounds and sectors, including banking, law, consulting, education, the military, healthcare, and government. No one background or set of skills defines a successful BDM consultant.
            </div>

            <div className='pro-text' style={{ marginTop: "2%", textAlign: "left"  }}>
                Joining our consulting team will provide you access to the most cutting-edge companies, world-class training, and the chance to build a robust business toolset that will advance your career at BDM and beyond.
            </div>

            <div className='pro-text' style={{ marginTop: "5%", color: "#BC312E", textAlign: "left" }}>
                Application and Eligibility Information
            </div>

            <div className='pro-text' style={{ marginTop: "1%", textAlign: "left"  }}>
                The distinctive viewpoints that seasoned workers contribute are essential to any BDM office. Make careful to review the application and qualifying requirements for the office you want to join because various areas have different hiring needs.
            </div>

            <div className='pro-text' style={{ marginTop: "1%", textAlign: "left"  }}>
                Along with any criteria particular to your office, you must submit the following materials in order to apply:
            </div>

            <ul className='pro-ul'>
                <li className='pro-li' >Resume/CV (Word doc or PDF files only)</li>
                <li className='pro-li' >Educational background information</li>
                <li className='pro-li' >Work experience</li>
                <li className='pro-li' >Relevant test scores</li>

            </ul>


            <Button color="white" backgroundColor="#BC312E"
                marginTop="5%" borderRadius="0%" >Apply Now {">"}</Button>
        </div>
    )
}
