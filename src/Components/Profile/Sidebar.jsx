import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { TfiAlignJustify } from "react-icons/tfi";
import { BiHomeAlt2 } from "react-icons/bi";
import { RiSettings4Line } from "react-icons/ri";
import { CiSaveDown2 } from "react-icons/ci";
import { FiLogOut, FiMessageSquare } from "react-icons/fi";
import { MdOpenInBrowser,MdOutlineCloudDone } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { useStateContext } from "../../contexts/ContextProvider";
import { getRole, getToken, removeRole, removeToken } from "../../LocalStorage";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

const Sidebar = ({mode,func,tg,tgprop}) => {

  const navigate = useNavigate();

  const { guestWriter, admin, editor, manager, setauthToken,setAdmin ,setmanager,seteditor,setguestWriter} =
    useStateContext();

  const links = [
    {
        id:1,
        name: "Home",
        icon: <BiHomeAlt2 />,
      },
      {
        id:2,
        name: "Profile",
        icon: <BsPerson />,
      },
      {
        id:3,
        name: "Browse",
        icon: <MdOpenInBrowser />,
      },
    {
        id:4,
        name: "Saved",
        icon: <CiSaveDown2 />,
      },
      {
        id:5,
        name: "Applied",
        icon: <MdOutlineCloudDone />,
      },
      {
        id:6,
        name: "Messages",
        icon: <FiMessageSquare />,
      },
      {
        id:7,
        name: "Settings",
        icon: <RiSettings4Line />,
      },
  ];

  const logOut = async () => {
    try {
      const res = await signOut(auth);
      removeToken();
      removeRole();
      const yash=getToken();
      setauthToken(yash);
      const barman=getRole();
      setAdmin(false);
      setmanager(false);
      seteditor(false);
      setguestWriter(false);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogOut =()=>{
    logOut();
  }

  const activeLink =
    `flex place-items-center  bg-[#BC312E]  ${!tgprop ? "w-44 px-3 py-2 my-1" : " text-xl p-1"} text-white hover:text-white rounded-md gap-5 mx-3 text-md font-semibold `;
  const normalLink =
    `flex place-items-center rounded-md ${!tgprop ? "w-44  px-3 py-2 my-1" : "w-6 text-xl p-1"} gap-5 mx-3 text-md font-semibold hover:bg-gray-200 hover:text-gray-800 text-gray-500 `;

  const currentColor = "#BC312E";

  const [active, setactive] = useState(1);

  return (
    <div className={` ${ mode === "dark" ? "bg-[#211F22]" : "bg-white"} h-screen overflow-hidden hover:overflow-auto `}>
      <>
        <div className="grid justify-end">
            <TfiAlignJustify onClick={()=>tg(!tgprop)} className="text-[#BC312E] p-2 h-7 w-7 cursor-pointer" />
        </div>
        <div className={` ${!tgprop ? "space-y-3" : "space-y-6 mt-3"}`}>
            {links.map(link=>(
                <button
                to={`/Profile-Home/${link.name}`}
                onClick={()=>{setactive(link.id); func(link.id)}}
                key={link.id}
                className={
                    active===link.id ? activeLink : normalLink
                }
              >
                {link.icon}
                {!tgprop && <span className="capitalize">{link.name}</span>}
              </button>
            ))}
            <button onClick={handleLogOut} className={`flex capitalize place-items-center rounded-md ${!tgprop ? "w-44  px-3 py-2 my-1" : "w-6 text-xl p-1"} gap-5 mx-3 text-md font-semibold hover:bg-gray-200 hover:text-gray-800 text-gray-500 `}><FiLogOut/> {!tgprop && "Log Out"}</button>
        </div>
        {/* <div className="">
          {links.map((item) => (
            <div key={item.title}>
              <p className="text-gray-600 tracking-widest font-semibold text-md p-2 uppercase">
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={handleCloseSideBar}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : "",
                  })}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {link.icon}
                  <span className="capitalize ">{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div> */}
      </>
    </div>
  );
};

export default Sidebar;
