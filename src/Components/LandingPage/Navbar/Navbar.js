import { CloseButton, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

import {
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
  HamburgerIcon,

  ChevronRightIcon,
} from "@chakra-ui/icons";

import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

import {
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

import { useMediaQuery } from "@chakra-ui/react";
import Aboutoption from "./NavbarOptions/Aboutoption/Aboutoption";
import Solutionoption from "./NavbarOptions/Solutionoption/Solutionoption";
import Exploreoption from "./NavbarOptions/Exploreoption/Exploreoption.js";
import Careeroption from "./NavbarOptions/Careeroption/Careeroption";
import f10 from "./bbLogo.png";

import { NavLink as Link, useNavigate } from "react-router-dom";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { useStateContext } from "../../../contexts/ContextProvider";
import {
  getRole,
  getToken,
  removeRole,
  removeToken,
} from "../../../LocalStorage";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { FiLogOut } from "react-icons/fi";

export default function Navbar({ mode, handleMode }) {
  const [isLargerThan850] = useMediaQuery("(min-width: 850px)");
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure();
  const [zindex, setZindex] = useState(10);
  const [menu, setMenu] = useState(false)
function closeMenu(){
  setMenu(false)
}
  const [dropland, setdropland] = useState(false);
  const [lang, setlang] = useState("");

  const navigate = useNavigate();


  const {
    authToken,
    admin,
    manager,
    editor,
    setauthToken,
    setAdmin,
    setmanager,
    seteditor,
    setguestWriter,
  } = useStateContext();

  const [selectedOption, setSelectedOption] = useState(0);

  const handleZindex = () => {
    if (zindex === 10) setZindex(11);
    else setZindex(10);
  };

  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const logOut = async () => {
    try {
      const res = await signOut(auth);
      removeToken();
      removeRole();
      const yash = getToken();
      setauthToken(yash);
      const barman = getRole();
      setAdmin(false);
      setmanager(false);
      seteditor(false);
      setguestWriter(false);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogOut = () => {
    logOut();
  };

  useEffect(() => {
    const yash = getToken();
    setauthToken(yash);
  }, [authToken, setauthToken]);

  return (
    <div
      className="navbar-outer"
      style={{ color: mode === "dark" ? "white" : "black" }}
    >
      <Slide direction="top" in={isOpen} style={{ zIndex: 10 }} transition="5s">
        <Box
          // p='20px'
          color="white"
          mt="20"
          ml="10%"
          mr="10%"
          bg={mode === "dark" ? "#211F22" : "white"}
          rounded="md"
          shadow="lg"
          p="1%"
        >
          <CloseButton
            onClick={onToggle}
            fontSize="20"
            color={mode === "dark" ? "white" : "black"}
          />
          {selectedOption === 0 ? (
            <Aboutoption onClick={onToggle} mode={mode} />
          ) : selectedOption === 1 ? (
            <Solutionoption onToggle={onToggle} mode={mode} />
          ) : selectedOption === 2 ? (
            <Exploreoption onClick={onToggle} mode={mode} />
          ) : (
            selectedOption === 5 && (
              <Careeroption onClick={onToggle} mode={mode} />
            )
          )}
        </Box>
      </Slide>
      <div className="navbar-left">
        <Link to="/">
          <div className="navbar-option">
            <Stack
              direction="row"
              spacing={5}
              alignItems="center"
              display="flex"
            >
              <div className="navbar-option-text flex gap-2">
                <img src={f10} alt="logo" />
                <div className="grid place-items-center">BDM</div>
              </div>
            </Stack>
          </div>
        </Link>
      </div>

      <div className="navbar-right">
        <div
          className="navbar-option"
          onClick={(e) => {
            onToggle();
            setSelectedOption(0);
          }}
          style={{ zindex: zindex }}
        >
          <Stack direction="row" alignItems="center" display="flex">
            <div className="navbar-option-text">About</div>
            <ChevronDownIcon fontSize="1.5rem" height="100%" />
          </Stack>
        </div>

        <div
          className="navbar-option"
          onClick={(e) => {
            onToggle();
            setSelectedOption(1);
          }}
        >
          <Stack direction="row" alignItems="center" display="flex">
            <div className="navbar-option-text">Solutions</div>
            <ChevronDownIcon fontSize="1.5rem" height="100%" />
          </Stack>
        </div>

        <div className="navbar-option">
          <Stack direction="row" alignItems="center" display="flex">
            <Link to="">
              <div className="navbar-option-text">Case study</div>
            </Link>
          </Stack>
        </div>

        <div
          className="navbar-option"
          onClick={(e) => {
            onToggle();
            setSelectedOption(2);
          }}
        >
          <Stack direction="row" alignItems="center" display="flex">
            <div className="navbar-option-text">Explore</div>
            <ChevronDownIcon fontSize="1.5rem" height="100%" />
          </Stack>
        </div>

        <div
          className="navbar-option"
          onClick={(e) => {
            onToggle();
            setSelectedOption(5);
          }}
        >
          <Stack direction="row" alignItems="center" display="flex">
            <div className="navbar-option-text">Career</div>
            <ChevronDownIcon fontSize="1.5rem" height="100%" />
          </Stack>
        </div>

        <div className="navbar-option">
          <Stack direction="row" alignItems="center" display="flex">
            <Link to="/Contact Us">
              <div className="navbar-option-text">Contact us</div>
            </Link>
          </Stack>
        </div>

        <div className="navbar-option1">
          <Stack direction="row" alignItems="center" display="flex">
            {mode === "dark" ? (
              <SunIcon fontSize="2rem" height="100%" onClick={handleMode} />
            ) : (
              <MoonIcon fontSize="2rem" height="100%" onClick={handleMode} />
            )}
          </Stack>
        </div>

        <div className="navbar-option1">
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <Stack direction="row" alignItems="center" display="flex">
                <div className="navbar-option-text ">
                  {lang === "" ? "En" : lang}
                </div>
                <ChevronDownIcon fontSize="1.5rem" height="100%" />
              </Stack>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader fontWeight="semibold">
                Popover placement
              </PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <div onClick={() => setlang("En")} style={{ color: "black" }}>
                  English
                </div>
                <div onClick={() => setlang("Hi")} style={{ color: "black" }}>
                  Hindi
                </div>
                <div onClick={() => setlang("Kr")} style={{ color: "black" }}>
                  Korean
                </div>
                <div onClick={() => setlang("Ar")} style={{ color: "black" }}>
                  Arabic
                </div>
                <div onClick={() => setlang("De")} style={{ color: "black" }}>
                  German
                </div>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>

        {authToken && !admin && (
          <div className="grid place-items-center">
            <div>
              <button
                onClick={() => navigate("/Profile-Home")}
                className="p-2 bg-[#BC312E] rounded-full grid place-items-center h-8 w-8 text-white  font-bold text-sm"
              >
                P
              </button>
            </div>
          </div>
        )}

        {authToken && admin && (
          <div className="navbar-option">
            <Stack direction="row" alignItems="center" display="flex">
              <Link to="/admin-settings">
                <div className="navbar-option-text">Settings</div>
              </Link>
              {/* <ChevronDownIcon fontSize="1.5rem" height="100%" /> */}
            </Stack>
          </div>
        )}

        {!authToken && (
          <Link to="/Login">
            <div className="navbar-option" style={{ width: "100%" }}>
              <Button
                backgroundColor="#BC312E"
                color="white"
                borderRadius="1rem"
              >
                Sign In
              </Button>
            </div>
          </Link>
        )}
      </div>
      <div
        className="navbar-hidden"
        style={{
          display: isLargerThan850 ? "none" : "flex",
          justifyContent: isLargerThan850 ? "space-between" : "space-between",

        }}
      >
        <div className="navbar-left-hidden">


          <Button width="fit-content" onClick={() => { menu == true ? setMenu(false) : setMenu(true) }} style={{ background: 'transparent' }}>
            <Stack direction="row" alignItems="center" display="flex">
              
                <HamburgerIcon fontSize="2rem" height="100%" />
              
            </Stack>
          </Button>
          <Drawer placement="left" isOpen={menu} onClose={closeMenu} size='full' >
            <DrawerOverlay />

            <DrawerContent backgroundColor={mode === "dark" ? "#211F22" : "white"}
              border={mode === "dark" ? "none" : "1px solid black"} overflow='scroll'
              color={mode === 'dark' ? 'white' : 'black'}>
              {/* <DrawerCloseButton color={mode === 'dark' ? 'white' : 'black'} marginBottom={"5%"} /> */}

              <Menu isOpen={menu}>
                <MenuList
                  backgroundColor={mode === "dark" ? "#211F22" : "white"}
                  border={mode === "dark" ? "none" : "1px solid black"}
                  width="100vw" height='100vmax'

                >
                  <CloseButton display='flex' justifyContent='end' color={mode === 'dark' ? 'white' : 'black'} fontSize="1rem" float='left' onClick={closeMenu}  width='95%'/>
                  <MenuItem backgroundColor={mode === "dark" ? "#211F22" : "white"}>
                    <Stack
                      direction="row"
                      spacing={5}
                      alignItems="center"
                      display="flex"
                    >
                      {/* <Avatar src='https://bit.ly/broken-link' /> */}
                      <Link to="/" onClick={onClose}>
                        <div className="navbar-option-text">
                          <b>BDM</b>
                        </div>
                      </Link>
                    </Stack>
                  </MenuItem>
                  <Accordion allowToggle>
                    <AccordionItem border='none'>



                      {/* <Stack direction="row" alignItems="center" display="flex"> */}
                      <AccordionButton backgroundColor={mode === "dark" ? "#211F22" : "white"} >
                        <div className="navbar-option-text">About</div>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4} backgroundColor={mode === "dark" ? "#211F22" : "white"}>

                        <Aboutoption />
                      </AccordionPanel>
                      {/* <Link to="/About Options">
                    <div className="navbar-option-text">About</div>
                  </Link>
                  <ChevronRightIcon fontSize="1.5rem" height="100%" /> */}
                      {/* </Stack> */}



                    </AccordionItem>
                    <AccordionItem border='none'>

                      <AccordionButton backgroundColor={mode === "dark" ? "#211F22" : "white"}>

                        <div className="navbar-option-text">Solutions</div>
                        <AccordionIcon />

                        {/* <Link to="/Solution Options">
                  </Link>
                  <ChevronRightIcon fontSize="1.5rem" height="100%" /> */}

                      </AccordionButton>
                      <AccordionPanel pb={4} backgroundColor={mode === "dark" ? "#211F22" : "white"}>
                        <Solutionoption />
                      </AccordionPanel>
                    </AccordionItem>

                    <MenuItem backgroundColor={mode === "dark" ? "#211F22" : "white"}>

                      <Link to="">
                        <div className="navbar-option-text">Case Study</div>
                      </Link>
                      {/* <ChevronRightIcon fontSize="1.5rem" height="100%" /> */}

                    </MenuItem>

                    <AccordionItem border='none'>

                      <AccordionButton backgroundColor={mode === "dark" ? "#211F22" : "white"}>
                        <div className="navbar-option-text">Explore</div>
                        <AccordionIcon />

                        {/* <Stack direction="row" alignItems="center" display="flex"> */}
                        {/* <Link to="/Explore Options">
                    </Link> */}
                        {/* <ChevronRightIcon fontSize="1.5rem" height="100%" /> */}
                        {/* </Stack> */}
                      </AccordionButton>
                      <AccordionPanel pb={4} backgroundColor={mode === "dark" ? "#211F22" : "white"}>

                        <Exploreoption />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem border='none'>

                      <AccordionButton backgroundColor={mode === "dark" ? "#211F22" : "white"}>

                        <div className="navbar-option-text">Career</div>
                        <AccordionIcon />
                        {/* <Link to="/Career Options">
                    </Link>
                     */}
                      </AccordionButton>
                      <AccordionPanel pb={4} backgroundColor={mode === "dark" ? "#211F22" : "white"}>
                        <Careeroption />
                      </AccordionPanel>
                    </AccordionItem>


                    <MenuItem backgroundColor={mode === "dark" ? "#211F22" : "white"}>

                      <Link to="/Contact Us">
                        <div className="navbar-option-text">Contact us</div>
                      </Link>


                    </MenuItem>

                  </Accordion>
                  <MenuItem
                    backgroundColor={mode === "dark" ? "#211F22" : "white"}
                    width="100%"
                  >
                    {/* <div className='navbar-option'> */}
                    {!authToken && (
                      <Link to="/Login">
                        <Button
                          backgroundColor="#BC312E"
                          color="white"
                          borderRadius="1rem"
                        >
                          Sign In
                        </Button>
                      </Link>
                    )}
                    {/* </div> */}
                    {authToken && manager && (
                      <div className="grid place-items-center">
                        <div>
                          <button
                            onClick={() => navigate("/Profile-Home")}
                            className="p-2 bg-[#BC312E] rounded-md grid place-items-center h-8 w-full text-white  font-bold text-sm"
                          >
                            Profile
                          </button>
                        </div>
                      </div>
                    )}
                  </MenuItem>

                </MenuList>
              </Menu>
            </DrawerContent>
          </Drawer>


        </div>

        <div className="navbar-middle-hidden">
          <Stack direction="row" spacing={2} alignItems="center" display="flex">
            {/* <Avatar src='https://bit.ly/broken-link' /> */}
            <Link to="/">
              <div className="navbar-option-text">
                <b>BDM</b>
              </div>
            </Link>
          </Stack>
        </div>

        <div className="navbar-right-hidden">
          {/* <div className='navbar-option1'> */}
          <Stack direction="row" alignItems="center" display="flex">
            {/* <div className='navbar-option-text'>
                            About
                        </div> */}
            {mode === "dark" ? (
              <SunIcon fontSize="2rem" height="100%" onClick={handleMode} />
            ) : (
              <MoonIcon fontSize="2rem" height="100%" onClick={handleMode} />
            )}
          </Stack>
          {/* </div> */}

          {/* <div className='navbar-option1'> */}
          <Stack direction="row" alignItems="center" display="flex">
            {/* <div className='navbar-option-text'>
                            EN
                        </div> */}

            <Popover placement="bottom-end">
              <PopoverTrigger>
                <Stack direction="row" alignItems="center" display="flex">
                  <div className="navbar-option-text">EN</div>
                  <ChevronDownIcon fontSize="1.5rem" height="100%" />
                </Stack>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader fontWeight="semibold">
                  Popover placement
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <div style={{ color: "black" }}>English</div>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            {/* <ChevronDownIcon fontSize="1.5rem" height="100%" /> */}
          </Stack>
          {/* </div> */}
        </div>
      </div>
    </div >
  );
}
