import React, { useEffect } from 'react'
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
import Layout from '../../Layout/Layout'
import { useStateContext } from '../../../contexts/ContextProvider'

export default function Reach() {
    const { mode } = useStateContext()

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])


    const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
    return (
        <Layout>
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


                                <Menu>
                                    <MenuButton as={Button} borderColor="#211F22" backgroundColor={mode === "dark" ? "#2B292C" : "#E0E0E0"}
                                        _hover={{ borderColor: "#211F22", backgroundColor: "#2B292C" }}
                                        padding="1%"
                                        rightIcon={<ChevronDownIcon />}>
                                        <div className="reach-button-text" style={{ color: mode === "dark" ? "white" : "black" }}>Reason for contacting BDM</div>

                                    </MenuButton>
                                    <MenuList borderColor="#211F22" backgroundColor={mode === "dark" ? "#2B292C" : "#E0E0E0"} width="fit-content">
                                        <MenuItem borderColor="#211F22" backgroundColor={mode === "dark" ? "#2B292C" : "#E0E0E0"} width="fit-content">India</MenuItem>
                                    </MenuList>
                                </Menu>

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
            </Layout>
    )
}
