import { React, useEffect, useState } from 'react'
import landing from './InfluencerImages/landing.png'
import i1 from './InfluencerImages/i1.png'
import i2 from './InfluencerImages/i2.png'
import i3 from './InfluencerImages/i3.png'
import i4 from './InfluencerImages/i4.png'
import pp from './InfluencerImages/pp.png'
import './Influencer.css'
import {
  useMediaQuery, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box, Stack
} from "@chakra-ui/react";
import Layout from '../Layout/Layout'
import { useStateContext } from '../../contexts/ContextProvider'

const Influencer = () => {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const {mode}=useStateContext()
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [])
  return (
    <Layout>

    <div className='influencer-container'>
      <div className="learning-bgimg" style={{ width: "100%" }}>
   
        <div className="influencer-heading text-[#FC4A1A]">Influencer Program</div>
        <img src={landing} style={{ width: "100%" }} />
      </div>
      <div style={{ width: "90%", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          className="learning-title"
          style={{
            textAlign: "center",
            color: mode === "dark" ? "white" : "black",
            width: "100%",
          }}
        >
          <u>It began with passion.</u>
        </div>
        <div
          className="learning-grid-text"
          style={{ textAlign: "center", color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}
        >
          Your influencer journey probably got off to an intense start. You had a special passion, an obsession, and an original point of view. You discovered your community, shared your enthusiasm, and promoted fresh ideas. Everyone listened. People went after.
        </div>

        <div className='au-grid'>

          <div className='au-element'>
            <div className='au-element-title'>Bringing it home</div>
            <div className='au-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
              People listen to you because you have original thoughts, discoveries, viewpoints, lessons learned, humour, and obsessions.
            </div>

          </div>



          <div className='au-element'>
            <div className='au-element-title'>Take the wheel</div>
            <div className='au-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
              You are both a builder and a voice. BDM wants to use your knowledge to create genuine and impactful campaigns for your communities.
            </div>

          </div>



          <div className='au-element'>
            <div className='au-element-title'>Put change into action</div>
            <div className='au-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
              More than ever, the world needs individuals with powerful voices to be forces for good. We have a strong conviction in the idea of socially responsible influence.
            </div>

          </div>

        </div>

        <div
          className="learning-title"
          style={{
            textAlign: "center",
            color: mode === "dark" ? "white" : "black",
            width: "100%",
          }}
        >
          <u>Lets Begin</u>
        </div>
        <div
          className="learning-grid"
          style={{
            display: 'flex',
            flexDirection: isLargerThan1000 ? "row" : "column",
          }}
        >
          <div className="learning-grid-left">
            <div className="learning-grid-title">
              Content that fits your audience.
            </div>
            <div
              className="learning-grid-text"
              style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}
            >
              In order to present you to businesses you already adore or to brands that are a good fit with your current interests, we'll evaluate your post history and audience.
            </div>
          </div>
          <div className="learning-grid-right">
            <img src={i1} style={{ width: "100%" }} />
          </div>
        </div>
        <div
          className="learning-grid"
          style={{
            flexDirection: "row-reverse",
            display: 'flex',
            flexDirection: isLargerThan1000 ? "row" : "column-reverse",

          }}
        >
          <div className="learning-grid-right">
            <img src={i2} style={{ width: "100%" }} />
          </div>
          <div className="learning-grid-left">
            <div className="learning-grid-title">
              Pilot new products
            </div>
            <div
              className="learning-grid-text"
              style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}
            >
              We'll offer you to check out the newest items from respected businesses so you can share your honest opinion with your audience.
            </div>
          </div>

        </div>
        <div
          className="learning-grid"
          style={{
            display: 'flex',
            flexDirection: isLargerThan1000 ? "row" : "column",
          }}
        >
          <div className="learning-grid-left">
            <div className="learning-grid-title">
              Earn money doing what you love.
            </div>
            <div
              className="learning-grid-text"
              style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}
            >
              We will assist you in making connections with Fortune 500 and quickly expanding consumer businesses, regardless of whether you are a well-known blogger, YouTuber, or Instagrammer.
            </div>
          </div>
          <div className="learning-grid-right">
            <img src={i3} style={{ width: "100%" }} />
          </div>
        </div>
        <div
          className="learning-grid"
          style={{
            display: 'flex',
            flexDirection: isLargerThan1000 ? "row" : "column-reverse",
          }}
        >
          <div className="learning-grid-right">
            <img src={i4} style={{ width: "100%" }} />
          </div>
          <div className="learning-grid-left">
            <div className="learning-grid-title">
              Grow your audience
            </div>
            <div
              className="learning-grid-text"
              style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}
            >
              We're here to provide you with the tools you need to increase your impact even further through free post amplification.
            </div>
          </div>
        </div>
<button className="red-arrow-btn">Apply Now &gt;</button>
      </div>
      <div
          className="learning-title"
          style={{
            textAlign: "center",
            color: mode === "dark" ? "white" : "black",
            width: "100%",
          }}
        >
          <u>Frequently Asked Questions (FAQ’s)</u>
        </div>
      {mode === 'dark' ?

        <Stack direction="column" spacing={10} marginTop="2%" width={isLargerThan1000 ? "70%" : "80%"} >
          <Accordion borderRadius="0.5rem" allowMultiple>
            <AccordionItem borderRadius="0.5rem" >
              <h2>
                <AccordionButton width="100%" backgroundColor='#444444' color='white' borderRadius="0.5rem" border='none'  _hover={{ color: "#BC312E" }}>
                  <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                    What qualification do I need to join?
                  </Box>
                  <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} backgroundColor="#444444" color='white'>

                Your name, contact information, occupation, firm or academic affiliation, industry, location, and country, as well as your relationship to Big Bros Digital Media, purpose for contacting Big Bros Digital Media, areas of interest, and any other information you want to submit, may all be collected by Big Bros Digital Media. You expressly consent to Big Bros Digital Media handling your personal data in line with this Privacy Policy by using our Sites or providing us information. Your personal information may be used by Big Bros Digital Media to complete your request, send you marketing materials, handle your job application, or administer your Beyond Big Bros Digital Media membership.

              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion borderRadius="0.5rem" allowMultiple>
            <AccordionItem borderRadius="0.5rem" >
              <h2>
                <AccordionButton width="100%" backgroundColor='#444444' color='white' borderRadius="0.5rem"  _hover={{ color: "#BC312E" }}>
                  <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                    How do I get started?
                  </Box>
                  <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} backgroundColor="#444444" color='white'>

                Your name, contact information, occupation, firm or academic affiliation, industry, location, and country, as well as your relationship to Big Bros Digital Media, purpose for contacting Big Bros Digital Media, areas of interest, and any other information you want to submit, may all be collected by Big Bros Digital Media. You expressly consent to Big Bros Digital Media handling your personal data in line with this Privacy Policy by using our Sites or providing us information. Your personal information may be used by Big Bros Digital Media to complete your request, send you marketing materials, handle your job application, or administer your Beyond Big Bros Digital Media membership.

              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion borderRadius="0.5rem" allowMultiple>
            <AccordionItem borderRadius="0.5rem" >
              <h2>
                <AccordionButton width="100%" backgroundColor='#444444' color='white' borderRadius="0.5rem"  _hover={{ color: "#BC312E" }}>
                  <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                    How do I find brand partners?
                  </Box>
                  <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} backgroundColor="#444444" color='white'>

                Your name, contact information, occupation, firm or academic affiliation, industry, location, and country, as well as your relationship to Big Bros Digital Media, purpose for contacting Big Bros Digital Media, areas of interest, and any other information you want to submit, may all be collected by Big Bros Digital Media. You expressly consent to Big Bros Digital Media handling your personal data in line with this Privacy Policy by using our Sites or providing us information. Your personal information may be used by Big Bros Digital Media to complete your request, send you marketing materials, handle your job application, or administer your Beyond Big Bros Digital Media membership.

              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion borderRadius="0.5rem" allowMultiple>
            <AccordionItem borderRadius="0.5rem" >
              <h2>
                <AccordionButton width="100%" backgroundColor='#444444' color='white' borderRadius="0.5rem"  _hover={{ color: "#BC312E" }}>
                  <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                    How am I rewarded?
                  </Box>
                  <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} backgroundColor="#444444" color='white'>

                Your name, contact information, occupation, firm or academic affiliation, industry, location, and country, as well as your relationship to Big Bros Digital Media, purpose for contacting Big Bros Digital Media, areas of interest, and any other information you want to submit, may all be collected by Big Bros Digital Media. You expressly consent to Big Bros Digital Media handling your personal data in line with this Privacy Policy by using our Sites or providing us information. Your personal information may be used by Big Bros Digital Media to complete your request, send you marketing materials, handle your job application, or administer your Beyond Big Bros Digital Media membership.

              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
        :
        <Stack direction="column" spacing={10} marginTop="2%" width={isLargerThan1000 ? "70%" : "80%"} >
          <Accordion borderRadius="0.5rem" allowMultiple>
            <AccordionItem borderRadius="0.5rem" >
              <h2>
                <AccordionButton width="100%" backgroundColor='#E0E0E0' color='black' borderRadius="0.5rem"  _hover={{ color: "#BC312E" }}>
                  <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                    What qualification do I need to join?
                  </Box>
                  <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} backgroundColor="#E0E0E0" color='black'>

                Your name, contact information, occupation, firm or academic affiliation, industry, location, and country, as well as your relationship to Big Bros Digital Media, purpose for contacting Big Bros Digital Media, areas of interest, and any other information you want to submit, may all be collected by Big Bros Digital Media. You expressly consent to Big Bros Digital Media handling your personal data in line with this Privacy Policy by using our Sites or providing us information. Your personal information may be used by Big Bros Digital Media to complete your request, send you marketing materials, handle your job application, or administer your Beyond Big Bros Digital Media membership.

              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion borderRadius="0.5rem" allowMultiple>
            <AccordionItem borderRadius="0.5rem" >
              <h2>
                <AccordionButton width="100%" backgroundColor='#E0E0E0' color='black' borderRadius="0.5rem"  _hover={{ color: "#BC312E" }}>
                  <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                    How do I get started?
                  </Box>
                  <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} backgroundColor="#E0E0E0" color='black'>

                Your name, contact information, occupation, firm or academic affiliation, industry, location, and country, as well as your relationship to Big Bros Digital Media, purpose for contacting Big Bros Digital Media, areas of interest, and any other information you want to submit, may all be collected by Big Bros Digital Media. You expressly consent to Big Bros Digital Media handling your personal data in line with this Privacy Policy by using our Sites or providing us information. Your personal information may be used by Big Bros Digital Media to complete your request, send you marketing materials, handle your job application, or administer your Beyond Big Bros Digital Media membership.

              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion borderRadius="0.5rem" allowMultiple>
            <AccordionItem borderRadius="0.5rem" >
              <h2>
                <AccordionButton width="100%" backgroundColor='#E0E0E0' color='black' borderRadius="0.5rem"  _hover={{ color: "#BC312E" }}>
                  <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                    How do I find brand partners?
                  </Box>
                  <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} backgroundColor="#E0E0E0" color='black'>

                Your name, contact information, occupation, firm or academic affiliation, industry, location, and country, as well as your relationship to Big Bros Digital Media, purpose for contacting Big Bros Digital Media, areas of interest, and any other information you want to submit, may all be collected by Big Bros Digital Media. You expressly consent to Big Bros Digital Media handling your personal data in line with this Privacy Policy by using our Sites or providing us information. Your personal information may be used by Big Bros Digital Media to complete your request, send you marketing materials, handle your job application, or administer your Beyond Big Bros Digital Media membership.

              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion borderRadius="0.5rem" allowMultiple>
            <AccordionItem borderRadius="0.5rem" >
              <h2>
                <AccordionButton width="100%" backgroundColor='#E0E0E0' color='black' borderRadius="0.5rem"  _hover={{ color: "#BC312E" }}>
                  <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                    How am I rewarded?
                  </Box>
                  <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} backgroundColor="#E0E0E0" color='black'>

                Your name, contact information, occupation, firm or academic affiliation, industry, location, and country, as well as your relationship to Big Bros Digital Media, purpose for contacting Big Bros Digital Media, areas of interest, and any other information you want to submit, may all be collected by Big Bros Digital Media. You expressly consent to Big Bros Digital Media handling your personal data in line with this Privacy Policy by using our Sites or providing us information. Your personal information may be used by Big Bros Digital Media to complete your request, send you marketing materials, handle your job application, or administer your Beyond Big Bros Digital Media membership.

              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>}
    </div>
    </Layout>
  )
}

export default Influencer
