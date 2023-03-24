import React from 'react'
import "./Project.css"

import Project_img1 from "./ProjectImages/Project_img1.png"

import P1 from "./ProjectImages/P1.png"
import P2 from "./ProjectImages/P2.png"

import { Card, CardHeader, CardBody, CardFooter, Image, Button, Heading, Text, Stack, ButtonGroup, Divider } from '@chakra-ui/react'

export default function Project({ projectData }) {
    return (
        <div className='project-outer'>
            <div className='project-grid'>
                <div className='project-grid-element'>
                    <div className='project-grid-img'>
                        <img className='project-img' src={P1} />
                    </div>
                    <div className='project-grid-title'>
                        {projectData[0].title}
                    </div>
                    <div className='project-grid-text'>
                        {projectData[0].content}
                    </div>

                    <div className='project-grid-bottom'>
                        <div className='project-grid-bottom-text'>
                            UI/UX Design | Web Development | API Development
                        </div>
                    </div>
                </div>



                <div className='project-grid-element'>
                    <div className='project-grid-img'>
                        <img className='project-img' src={P2} />
                    </div>
                    <div className='project-grid-title'>
                        {projectData[1].title}
                    </div>
                    <div className='project-grid-text'>
                        {projectData[1].content}
                    </div>
                    <div className='project-grid-bottom'>
                        <div className='project-grid-bottom-text'>
                            UI/UX Design | Web Development | API Development
                        </div>
                    </div>
                </div>


                <div className='project-grid-element'>
                    <div className='project-grid-img'>
                        <img className='project-img' src={P1} />
                    </div>
                    <div className='project-grid-title'>
                        {projectData[2].title}
                    </div>
                    <div className='project-grid-text'>
                        {projectData[2].content}
                    </div>

                    <div className='project-grid-bottom'>
                        <div className='project-grid-bottom-text'>
                            UI/UX Design | Web Development | API Development
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
