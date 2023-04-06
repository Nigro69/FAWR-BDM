import { Input, Stack, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import "./Footer.css";

import f1 from "./FooterImages/1.png";
import f2 from "./FooterImages/2.png";
import f3 from "./FooterImages/3.png";
import f4 from "./FooterImages/4.png";
import f5 from "./FooterImages/5.png";
import f6 from "./FooterImages/6.png";
import f7 from "./FooterImages/7.png";
import f8 from "./FooterImages/8.png";
import f9 from "./FooterImages/9.png";
import f10 from "./FooterImages/bbLogo.png";

import { NavLink as Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-outer">
      <div className="footer-left">
        <img src={f7} />
      </div>
      <div className="footer-middle">
        <div className="footer-box">
          <div className="footer-box-text">Join our newsletter</div>
          <div className="footer-box-input">
            <InputGroup width="100%">
              <Input
                rightIcon={<img src={f2} />}
                width="100%"
                backgroundColor="#2B2B2B"
                border="none"
                placeholder="Email Address"
                _placeholder={{ color: "white" }}
                borderRadius="1rem"
              />
              <InputRightElement curser="pointer" marginRight="2%">
                <img src={f2} style={{ curser: "pointer" }} />
              </InputRightElement>
            </InputGroup>
          </div>
          <div style={{ diplay: "flex", justifyContent: "center" }}>
            <Stack
              direction="column"
              display="flex"
              justifyContent="center"
              spacing={5}
            >
              <div className="footer-box-icons-text">Follow us on:</div>
              <Stack direction="row" spacing={5}>
                <div style={{ curser: "pointer" }}>
                  <img src={f3} />
                </div>
                <div style={{ curser: "pointer" }}>
                  <img src={f4} />
                </div>
                <div style={{ curser: "pointer" }}>
                  <img src={f5} />
                </div>
                <div style={{ curser: "pointer" }}>
                  <img src={f6} />
                </div>
              </Stack>
            </Stack>
          </div>
        </div>
        <div className="md:flex w-full justify-between place-items-center py-2 px-6">
            <img src={f10} alt="logo" className="mx-auto md:mx-0" />
            <div className="grid place-items-center ff-style text-white text-6xl">
              BDM
            </div>
          </div>
        {/* <div className="footer-content"> */}
          
          {/* <div className="footer-content-hidden"> */}
            {/* <div className="hidden">
              <ul className="footer-ul">
                <li className="footer-content-text">About</li>
                <li className="footer-content-text">Solutions</li>
                <li className="footer-content-text">Case Study</li>
                <li className="footer-content-text">Explore</li>
                <li className="footer-content-text">Career</li>
                <li className="footer-content-text">Influencer Program</li>
              </ul> */}
              {/* </div> */}
            {/* </div> */}

            {/* <div className='footer-content-2 ml-40'>
                            <div className='footer-content-text'>
                                Contact us
                            </div>
                            <Stack direction='row' spacing={2} alignItems="center" display="flex">
                                <div style={{ width: "1rem" }}><img style={{ width: "1rem" }} src={f8} /></div>
                                <div className='footer-content-text'>
                                    Support@bigbrosdigitalmedia.com
                                </div>
                            </Stack>

                            <Stack direction='column' spacing={5} marginTop="5%">
                                <div className='footer-content-text'>
                                    Ready to Talk?
                                </div>

                                <InputGroup>
                                    <Input placeholder='Talk with expert in..'
                                        backgroundColor="white" width="100%" />
                                    <InputRightElement ><img src={f9} style={{ marginRight: "1rem" }} /></InputRightElement>
                                </InputGroup>
                            </Stack>
                        </div> */}
          {/* </div> */}
          {/* <div>
                        <ul className='footer-ul'>
                            <li className='footer-content-text'>About</li>
                            <li className='footer-content-text'>Solutions</li>
                            <li className='footer-content-text'>Case Study</li>
                            <li className='footer-content-text'>Explore</li>
                            <li className='footer-content-text'>Career</li>
                            <li className='footer-content-text'>Influencer Program</li>
                        </ul>
                    </div>


                    <div className='footer-content-2'>
                        <div className='footer-content-text'>
                            Contact us
                        </div>
                        <Stack direction='row' spacing={2} alignItems="center" display="flex">
                            <div style={{ width: "1rem" }}><img style={{ width: "1rem" }} src={f8} /></div>
                            <div className='footer-content-text'>
                                company@company.in
                            </div>
                        </Stack>

                        <Stack direction='column' spacing={5} marginTop="5%">
                            <div className='footer-content-text'>
                                Ready to Talk?
                            </div>

                            <InputGroup>
                                <Input placeholder='Talk with expert in..'
                                    backgroundColor="white" width="100%" />
                                <InputRightElement ><img src={f3} /></InputRightElement>
                            </InputGroup>
                        </Stack>
                    </div> */}
        {/* </div> */}

        <div
          style={{ width: "100%", height: "0.1rem", backgroundColor: "white" }}
        />

        <div className="footer-bottom">
          <div className="footer-bottom-right">
            <Link to="/Contact Us">
              <div className="footer-content-text">Contact Us</div>
            </Link>
            <Link to="/Sustainability @ BDM">
              <div className="footer-content-text">Sustainability</div>
            </Link>
            <Link to="/Accessibility">
              <div className="footer-content-text">Accessibility</div>
            </Link>
            <Link to="/Terms and Conditions">
              <div className="footer-content-text">Terms of use</div>
            </Link>
            <Link to="/Privacy">
              <div className="footer-content-text">Privacy Policy</div>
            </Link>
            <Link to="/Cookie Policy">
              <div className="footer-content-text">Cookie Policy</div>
            </Link>
            <Link to="/Sitemap">
              <div className="footer-content-text">Sitemap</div>
            </Link>
            <Link to="/Jobs">
              <div className="footer-content-text">Careers</div>
            </Link>
            <Link to="/Influencer Program">
              <div className="footer-content-text">Influencer</div>
            </Link>
            <Link to="/Login-admin">
              <div className="footer-content-text">Login</div>
            </Link>
            <Link to="/admin-invite">
              <div className="footer-content-text">Invite</div>
            </Link>
          </div>

          <div
            style={{
              width: "100%",
              height: "0.1rem",
              backgroundColor: "white",
            }}
          />

          <div className="footer-bottom-left">
            <div className="footer-content-text">
              Copyright © 2017-23 Rutendo Company. All rights reserved
            </div>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <img src={f1} />
      </div>
    </div>
  );
}
