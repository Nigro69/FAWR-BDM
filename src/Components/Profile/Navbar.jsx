import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { useStateContext } from "../../contexts/ContextProvider";

const Navbar = ({mode}) => {
  const {
    candidateModel
  } = useStateContext();
  return (
    <div className={`p-4 md:flex justify-between ${mode==="dark" ? "bg-[#211F22]" : "bg-white"}`}>
        <div>
            <div className='font-semibold text-sm'>hello</div>
            <div className='font-bold text-xl text-[#BC312E]'>{candidateModel.firstName}</div>
        </div>
        <div className="flex place-items-center gap-5">
            <input className='rounded-xl px-10 py-1 bg-gray-800 text-gray-200' placeholder='search jobs, internships...' type="text" />
            <div><IoMdNotificationsOutline/></div>
        </div>
    </div>
  )
}

export default Navbar