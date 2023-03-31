import { CloseButton, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./Navbar.css";

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
import f10 from "./bbLogo.png"

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
  const { isOpen, onToggle } = useDisclosure();
  const [zindex, setZindex] = useState(10);

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
    {yash && setAdmin(true)}
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
              {/* <Avatar src='https://bit.ly/broken-link' /> */}
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
            {/* <ChevronDownIcon fontSize="1.5rem" height="100%" /> */}
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
            {/* <ChevronDownIcon fontSize="1.5rem" height="100%" /> */}
          </Stack>
        </div>

        <div className="navbar-option1">
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
        </div>

        <div className="navbar-option1">
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <Stack direction="row" alignItems="center" display="flex">
                <div className="navbar-option-text ">
                  {lang === "" ? "En" : lang}
                </div>
                {/* <div className="relative">
                  {dropland && <div className="absolute grid grid-cols-1 divide-y rounded-md shadow-md">
                    <div onClick={()=>{setlang("En"); setdropland(false);}} className="px-4 py-1 text-sm hover:bg-gray100">English</div>
                    <div  onClick={()=>{setlang("En"); setdropland(false);}} className="px-4 py-1 text-sm hover:bg-gray100">English</div>
                    <div  onClick={()=>{setlang("En"); setdropland(false);}} className="px-4 py-1 text-sm hover:bg-gray100">English</div>
                  </div>}
                </div> */}
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

        {authToken && admin && (
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

        {authToken && manager && (
          <div className="grid place-items-center">
            <a href="https://hr-management-system-3010.firebaseapp.com/">
              <button className="px-6  py-2 h-8 w-36 font-semibold text-sm text-white rounded-md bg-[#BC312E] ">
                Goto Console
              </button>
            </a>
          </div>
        )}

        {authToken && editor && (
          <div className="grid place-items-center">
            <a href="https://content-management-system-3010.firebaseapp.com/">
              <button className="px-6 py-2 h-8 w-36 font-semibold  text-sm text-white rounded-md bg-[#BC312E] ">
                Goto Console
              </button>
            </a>
          </div>
        )}

        {authToken && (editor || manager) && (
          <div className="grid place-items-center my-3">
            <button
              className="p-1 text-white font-semibold text-lg"
              onClick={handleLogOut}
            >
              <FiLogOut />
            </button>
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
      <div className='navbar-hidden' style={{ display: isLargerThan850 ? "none" : "flex", justifyContent: isLargerThan850 ? "space-between" : "space-between" }}>

                <div className='navbar-left-hidden'>
                    <Menu>
                        <MenuButton
                            width="fit-content">
                            <Stack direction="row" alignItems="center" display="flex" >

                                <HamburgerIcon fontSize="2rem" height="100%" />
                            </Stack>
                        </MenuButton>
                        <MenuList backgroundColor={mode === "dark" ? "#211F22" : "white"} border={mode === "dark" ? "none" : "1px solid black"} width="100%">
                            <MenuItem backgroundColor={mode === "dark" ? "#211F22" : "white"}>
                                <Stack direction="row" spacing={5} alignItems="center" display="flex">
                                    {/* <Avatar src='https://bit.ly/broken-link' /> */}
                                    <Link to="/">
                                        <div className='navbar-option-text'>
                                            <b>BDM</b>
                                        </div>
                                    </Link>
                                </Stack></MenuItem>

                            <MenuItem backgroundColor={mode === "dark" ? "#211F22" : "white"} >
                                <Stack direction="row" alignItems="center" display="flex" >
                                    <Link to="/About Options">
                                        <div className='navbar-option-text'>
                                            About
                                        </div>
                                    </Link>
                                    <ChevronRightIcon fontSize="1.5rem" height="100%" />
                                </Stack>
                            </MenuItem>

                            <MenuItem backgroundColor={mode === "dark" ? "#211F22" : "white"} >
                                <Stack direction="row" alignItems="center" display="flex" >
                                    <Link to="/Solution Options">
                                        <div className='navbar-option-text'>
                                            Solutions
                                        </div>
                                    </Link>
                                    <ChevronRightIcon fontSize="1.5rem" height="100%" />
                                </Stack>
                            </MenuItem>

                            <MenuItem backgroundColor={mode === "dark" ? "#211F22" : "white"}>
                                <Stack direction="row" alignItems="center" display="flex" >
                                    <Link to="">
                                        <div className='navbar-option-text'>
                                            Case Study
                                        </div>
                                    </Link>
                                    <ChevronRightIcon fontSize="1.5rem" height="100%" />
                                </Stack>
                            </MenuItem>

                            <MenuItem backgroundColor={mode === "dark" ? "#211F22" : "white"} >
                                <Stack direction="row" alignItems="center" display="flex" >
                                    <Link to="/Explore Options">
                                        <div className='navbar-option-text'>
                                            Explore
                                        </div>
                                    </Link>
                                    <ChevronRightIcon fontSize="1.5rem" height="100%" />
                                </Stack>
                            </MenuItem>

                            <MenuItem backgroundColor={mode === "dark" ? "#211F22" : "white"} >
                                <Stack direction="row" alignItems="center" display="flex" >
                                    <Link to="/Career Options">
                                        <div className='navbar-option-text'>
                                            Career
                                        </div>
                                    </Link>
                                    <ChevronRightIcon fontSize="1.5rem" height="100%" />
                                </Stack>
                            </MenuItem>
                            <MenuItem backgroundColor={mode === "dark" ? "#211F22" : "white"}>
                                <Stack direction="row" alignItems="center" display="flex" >
                                    <Link to="/Contact Us">
                                        <div className='navbar-option-text'>
                                            Contact us
                                        </div>
                                    </Link>
                                    <ChevronRightIcon fontSize="1.5rem" height="100%" />
                                </Stack>
                            </MenuItem>

                            <MenuItem backgroundColor={mode === "dark" ? "#211F22" : "white"} width="100%">
                                {/* <div className='navbar-option'> */}
                                <Link to="/Login">
                                    <Button backgroundColor="#BC312E" color="white" borderRadius="1rem">Sign In</Button>
                                </Link>
                                {/* </div> */}
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>

                <div className='navbar-middle-hidden'>
                    <Stack direction="row" spacing={2} alignItems="center" display="flex">
                        {/* <Avatar src='https://bit.ly/broken-link' /> */}
                        <Link to="/">
                            <div className='navbar-option-text'>
                                <b>BDM</b>
                            </div>
                        </Link>
                    </Stack>
                </div>

                <div className='navbar-right-hidden'>
                    {/* <div className='navbar-option1'> */}
                    <Stack direction="row" alignItems="center" display="flex" >
                        {/* <div className='navbar-option-text'>
                            About
                        </div> */}
                        {
                            mode === "dark" ? <SunIcon fontSize="2rem" height="100%" onClick={handleMode} /> : <MoonIcon fontSize="2rem" height="100%" onClick={handleMode} />
                        }

                    </Stack>
                    {/* </div> */}




                    {/* <div className='navbar-option1'> */}
                    <Stack direction="row" alignItems="center" display="flex" >
                        {/* <div className='navbar-option-text'>
                            EN
                        </div> */}

                        <Popover placement='bottom-end'>
                            <PopoverTrigger>
                                <Stack direction="row" alignItems="center" display="flex" >
                                    <div className='navbar-option-text'>
                                        EN
                                    </div>
                                    <ChevronDownIcon fontSize="1.5rem" height="100%" />
                                </Stack>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
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
    </div>
  );
}
