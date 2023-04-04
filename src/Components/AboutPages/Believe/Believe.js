import React, { useEffect } from 'react'
import "./Believe.css"

import B1 from "./BelieveImages/B1.png"
import Layout from '../../Templates/Layout/Layout';

export default function Believe() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])


    return (
        <Layout>
            <div className='b-outer'>
                <div style={{ width: "100%" }}>
                    <img src={B1} style={{ width: "100%" }} />
                </div>
                <div className='b-text' >
                    We believe that the future is defined by courageous actions. because having the adaptability to change demands leadership ambition. Furthermore, doing the right thing is never simple, but it is always worthwhile.
                </div>

                <div className='b-title' >
                    <u>Our Mission</u>
                </div>
                <div className='b-text' >
                    Our goal is to assist our clients in producing high levels of value so that, collectively, we may raise the bar for excellence in each of our different fields.
                </div>


                <div className='b-grid'>
                    <div className='b-element'>
                        <div className='b-element-title'>
                            Passion & Commitment
                        </div>
                        <div className='b-element-text' >
                            We are committed to upholding the highest levels of professionalism and ethics in all we do and are passionate about delivering outcomes that are in line with the success of our clients.
                        </div>
                    </div>

                    <div className='b-element'>
                        <div className='b-element-title'>
                            Honesty & Openness
                        </div>
                        <div className='b-element-text' >
                            We are very intellectually honest and have the courage to speak plainly and honestly. We continue to be open to the idea that our existing assumptions could be incorrect.
                        </div>
                    </div>

                    <div className='b-element'>
                        <div className='b-element-title'>
                            Practical
                        </div>
                        <div className='b-element-text' >
                            We blend daring thinking with a pragmatic strategy that is concerned with finishing the task at hand, putting choices into practise, and producing results.
                        </div>
                    </div>

                    <div className='b-element'>
                        <div className='b-element-title'>
                            One Team
                        </div>
                        <div className='b-element-text' >
                            To focus our combined efforts on accomplishing the extraordinary, we collaborate as a single, international team with both one another and our clients.
                        </div>
                    </div>
                </div>

                <div className='b-title' >
                    <u>Passion for Results</u>
                </div>

                <div className='b-element-text' style={{ textAlign: "left",   marginTop: "5%" }}>
                    No reports, just results <hr />
                </div>
                <div className='b-element-text' style={{ marginTop: "1%"  }}>
                    We founded our company on the idea that customers should receive outcomes from their advisors, not only reports. By creating specialised techniques that helped customers outperform their rivals, we violated the rules. We're still working with forward-thinking clients that want to define the future rather than run from it.
                </div>


                <div className='b-element-text' style={{ textAlign: "left",   marginTop: "5%" }}>
                    Putting our words into action <hr />
                </div>
                <div className='b-element-text' style={{ marginTop: "1%"  }}>
                    With our clients, we have a variety of "tied economics" agreements that allow us to better match financial incentives with client outcomes. These agreements make our pledges more than just promises since our employees are enthusiastic about providing our clients with measurable outcomes. Only when our clients thrive do we succeed.
                </div>
            </div>
        </Layout>
    )
}
