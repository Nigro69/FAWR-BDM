import React from "react";
import { useNavigate } from "react-router-dom";
import "./Career.css"

import c1 from "./CareerImages/c1.png";
import c2 from "./CareerImages/c2.png";

export default function Career({ mode }) {
    const navigate = useNavigate();
  return (
    <div>
      <div className="md:flex  w-full md:px-32">
        <img src={c1} className="object-cover h-64 ml-10 w-3/4 md:h-96 md:w-2/4 " alt="" />
        <div className="">
          <div className={`ff-style font-bold text-center text-2xl md:text-3xl px-8 py-4 tracking-wider ${mode === "dark" ?"text-white":"text-black"}`}>
            Discover Careers at BDM
          </div>
          <div className={`text-center md:text-lg tracking-wide px-6 md:px-2 py-2 ${mode === "dark" ?"text-gray-200":"text-gray-600"}`} >
            Our company is dedicated to providing top-quality products and
            services to our customers, and we are always looking for talented
            and motivated individuals to join our team. If you are looking for a
            challenging and rewarding career, we encourage you to consider
            joining our team. We believe that our employees are the key to our
            success, and we are committed to supporting and empowering you to
            reach your full potential. We offer ongoing training and development
            programs to help you grow and advance your career, as well as
            competitive salary and benefits packages.
          </div>
          <div className="py-10 px-4">
            <button onClick={()=>navigate("/Jobs")} className="font-bold rounded-lg text-white bg-[#BC312E] px-6 py-2">Discover Careers</button>
          </div>
        </div>
      </div>
      <div className="md:flex md:px-40 w-full">
        <img src={c2} className="object-cover h-64 w-3/4 md:h-96 md:w-2/4 mx-auto" alt="" />
        <div className="w-full">
          <div className={ ` ff-style font-bold text-center text-2xl md:text-4xl px-8 py-4 tracking-wider ${mode === "dark" ?"text-white":"text-black"}`}>Accelerate Your Business Today</div>
          <div className={`md:text-lg tracking-wide text-center p-2 ${mode === "dark" ?"text-gray-200":"text-gray-600"}`}>Helping Clients Create the Future</div>
          <div className="py-20 px-14">
            <button onClick={()=>navigate("/Reach%20Us")} className="font-bold rounded-lg text-white bg-[#BC312E] px-6 py-2">Lets Start</button>
          </div>
        </div>
      </div>
    </div>
  );
}
