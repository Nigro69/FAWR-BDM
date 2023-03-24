import React from 'react'
import "./Textanimation.css"

import Typewriter from "typewriter-effect"

export default function Textanimation() {

    return (
        <div className='textanimation-outer'>
            {/* <Typewriter
                onInit={(typewriter) => {
                    while (true) {
                        typewriter.typeString('UX/UI Design')
                            .pauseFor(2000)
                            .deleteAll()

                            .typeString('Web Development')
                            .pauseFor(2000)
                            .deleteAll()

                            .typeString('App Development')
                            .pauseFor(2000)
                            .deleteAll()

                            .typeString('Block Chain Development')
                            .pauseFor(2000)
                            .deleteAll()

                            .typeString('Business Intelligence')
                            .pauseFor(2000)
                            .deleteAll()

                            .typeString('Marketing Automation')
                            .pauseFor(2000)
                            .deleteAll()

                            .typeString('Social Media Marketing')
                            .pauseFor(2000)
                            .deleteAll()

                            .typeString('Distribution Strategy')
                            .pauseFor(2000)
                            .deleteAll()

                            .typeString('Video Animation')

                            .start();
                    }
                }}
            /> */}

            <Typewriter
                options={{
                    strings: ['UX/UI Design',
                        'Web Development',
                        'App Development',
                        'Block Chain Development',
                        'Business Intelligence',
                        'Marketing Automation',
                        'Social Media Marketing',
                        'Distribution Strategy',
                        'Video Animation'],
                    autoStart: true,
                    loop: true,

                }}
            />
        </div>
    )
}
