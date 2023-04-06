import React, {useEffect,useState} from 'react'
import "./Reach.css"
import Reach_img1 from "./ReachImages/Reach_img1.png"

import { Input, Stack, Button, Textarea } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, InputLeftAddon, InputGroup
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

import { useMediaQuery } from '@chakra-ui/react'

import { NavLink as Link } from 'react-router-dom'

export default function Reach({ mode }) {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const [dropReasons, setdropReasons] = useState(false);
  const [reasons, setReasons] = useState("");

    const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
    return (
        <div className='reach-outer'>
            <div className='reach-left'>
                <img src={Reach_img1} style={{ width: "100%" }} />
            </div>
            <div className='reach-right'>
                <div className='reach-box' style={{ backgroundColor: mode === "dark" ? "#211F22" : "white" }}>
                    <Stack direction="column" spacing={10}>
                        <Input borderColor="#211F22" backgroundColor={mode === "dark" ? "#2B292C" : "#E0E0E0"}
                            _hover={{ borderColor: "#211F22" }}
                            focusBorderColor="#211F22"
                            _focus={{ borderColor: "#211F22" }}
                            _placeholder={{ marginLeft: "0%", color: mode === "dark" ? "white" : "black", fontSize: isLargerThan900 ? "1rem" : "0.8rem" }}
                            placeholder='Name' />

                        <Input borderColor="#211F22" backgroundColor={mode === "dark" ? "#2B292C" : "#E0E0E0"}
                            _hover={{ borderColor: "#211F22" }}
                            focusBorderColor="#211F22"
                            _focus={{ borderColor: "#211F22" }}
                            _placeholder={{ marginLeft: "0%", color: mode === "dark" ? "white" : "black", fontSize: isLargerThan900 ? "1rem" : "0.8rem" }}
                            placeholder='Email' />

                        <Stack direction="row" spacing={2}>
                            <Menu>
                                <MenuButton as={Button} borderColor="#211F22" backgroundColor={mode === "dark" ? "#2B292C" : "#E0E0E0"}
                                    _hover={{ borderColor: "#211F22", backgroundColor: "#2B292C", color: "white" }}
                                    rightIcon={<ChevronDownIcon color={mode === "dark" ? "white" : "black"} />} >
                                    <div className="reach-button-text" style={{ color: mode === "dark" ? "white" : "black" }}>India</div>
                                </MenuButton>
                                <MenuList borderColor="#211F22" backgroundColor={mode === "dark" ? "#2B292C" : "#E0E0E0"}>
                                    <MenuItem borderColor="#211F22" backgroundColor={mode === "dark" ? "#2B292C" : "#E0E0E0"} style={{ color: mode === "dark" ? "white" : "black" }}>India</MenuItem>
                                </MenuList>
                            </Menu>
                            <InputGroup>
                                <InputLeftAddon borderColor="#211F22" backgroundColor={mode === "dark" ? "#2B292C" : "#E0E0E0"} children='+91' color={mode === "dark" ? "white" : "black"} />
                                <Input borderColor="#211F22" backgroundColor={mode === "dark" ? "#2B292C" : "#E0E0E0"}
                                    _hover={{ borderColor: "#211F22" }}
                                    focusBorderColor="#211F22"
                                    _focus={{ borderColor: "#211F22" }}
                                    _placeholder={{ marginLeft: "0%", color: mode === "dark" ? "white" : "black", fontSize: isLargerThan900 ? "1rem" : "0.8rem" }}
                                    type='tel' />
                            </InputGroup>
                        </Stack>

                        <Input borderColor="#211F22" backgroundColor={mode === "dark" ? "#2B292C" : "#E0E0E0"}
                            _hover={{ borderColor: "#211F22" }}
                            focusBorderColor="#211F22"
                            _focus={{ borderColor: "#211F22" }}
                            _placeholder={{ marginLeft: "0%", color: mode === "dark" ? "white" : "black", fontSize: isLargerThan900 ? "1rem" : "0.8rem" }}
                            placeholder='Company Name' />


                        {/* <Menu>
                            <MenuButton as={Button} borderColor="#211F22" backgroundColor={mode === "dark" ? "#2B292C" : "#E0E0E0"}
                                _hover={{ borderColor: "#211F22", backgroundColor: "#2B292C" }}
                                padding="1%"
                                rightIcon={<ChevronDownIcon />}>
                                <div className="reach-button-text" style={{ color: mode === "dark" ? "white" : "black" }}>Reason for contacting BDM</div>

                            </MenuButton>
                            <MenuList borderColor="#211F22" backgroundColor={mode === "dark" ? "#2B292C" : "#E0E0E0"} width="fit-content">
                                <MenuItem borderColor="#211F22" backgroundColor={mode === "dark" ? "#2B292C" : "#E0E0E0"} width="fit-content">India</MenuItem>
                            </MenuList>
                        </Menu> */}

                        
                <div className="relative">
            <div
              onClick={() => setdropReasons(!dropReasons)}
              className="flex px-6 py-2 cursor-pointer text-white bg-[#2B292C] rounded-md place-items-center justify-between"
            >
              <div>{reasons==="" ? "Reason for contacting BDM" : reasons} </div>
              <div>
                <ChevronDownIcon />
              </div>
            </div>
            {dropReasons && <div className="absolute z-10 top-12 border-[#211F22] bg-[#2B292C] divide-[#211F22] w-full rounded-md grid grid-cols-1 divide-y">
              <div className="text-sm text-gray-400 py-2  px-4 border-[#211F22] rounded-t-md font-semibold">Client</div>
              <div onClick={()=>{setdropReasons(false); setReasons("Request for services")}} className="text-gray-200 text-sm p-2 border-[#211F22] cursor-pointer  hover:bg-opacity-90 text-center">Request for services</div>
              <div className="text-sm text-gray-400 py-2 px-4 border-[#211F22] rounded-t-md font-semibold">Other queries</div>
              <div onClick={()=>{setdropReasons(false); setReasons("Analyst ( Industry & Financial)")}} className="text-gray-200 text-sm p-2 border-[#211F22] cursor-pointer  hover:bg-opacity-90 text-center">Analyst ( Industry & Financial)</div>
              <div onClick={()=>{setdropReasons(false); setReasons("Global Procurement Services")}} className="text-gray-200 text-sm p-2 border-[#211F22] cursor-pointer  hover:bg-opacity-90 text-center">Global Procurement Services</div>
              <div onClick={()=>{setdropReasons(false); setReasons("Investors")}} className="text-gray-200 text-sm p-2 border-[#211F22] cursor-pointer  hover:bg-opacity-90 text-center">Investors</div>
              <div onClick={()=>{setdropReasons(false); setReasons("Job Seekers")}} className="text-gray-200 text-sm p-2 border-[#211F22] cursor-pointer  hover:bg-opacity-90 text-center">Job Seekers</div>
              <div onClick={()=>{setdropReasons(false); setReasons("Media & Journalist")}} className="text-gray-200 text-sm p-2 border-[#211F22] cursor-pointer  hover:bg-opacity-90 text-center">Media & Journalist</div>
              <div onClick={()=>{setdropReasons(false); setReasons("Partnership & Alliances")}} className="text-gray-200 text-sm p-2 border-[#211F22] cursor-pointer  hover:bg-opacity-90 text-center">Partnership & Alliances</div>
              <div onClick={()=>{setdropReasons(false); setReasons("Report a Security incident")}} className="text-gray-200 text-sm p-2 border-[#211F22] cursor-pointer  hover:bg-opacity-90 text-center">Report a Security incident</div>
            </div>}
            </div>

                        <Textarea placeholder="Message"
                            borderColor="#211F22" backgroundColor={mode === "dark" ? "#2B292C" : "#E0E0E0"}
                            _hover={{ borderColor: "#211F22" }}
                            focusBorderColor="#211F22"
                            _focus={{ borderColor: "#211F22" }}
                            _placeholder={{ marginLeft: "0%", color: mode === "dark" ? "white" : "black", fontSize: isLargerThan900 ? "1rem" : "0.8rem" }} />

                        <Checkbox size='md' colorScheme='red' color={mode === "dark" ? "white" : "black"}>
                            I have read the <Link to="/Privacy"><label style={{ color: "#BC312E", cursor: "pointer" }}>Privacy Policy</label></Link> and agree to its terms
                        </Checkbox>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Button color='white' backgroundColor="#BC312E">
                                Let’s Connect
                            </Button>
                        </div>

                    </Stack>

                </div>
            </div>
        </div>
    )
}