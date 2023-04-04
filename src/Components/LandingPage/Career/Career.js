import React from "react";
import { useNavigate } from "react-router-dom";
import "./Career.css"

import c1 from "./CareerImages/c1.png";
import c2 from "./CareerImages/c2.png";

export default function Career() {
    const navigate = useNavigate();
  return (
    <div className="space-y-10">
      <div className="md:flex justify-center w-full ">
        <img src={c1} className=" " alt="" />
        <div className="grid place-items-center">
          <div className={`ff-style font-bold text-center text-2xl md:text-4xl px-8 py-4 tracking-wider ${mode === "dark" ?"text-[#BC312E]":"text-black"}`}>
            Discover Careers at BDM
          </div>
          <div className={`text-center md:text-lg tracking-wide px-6 md:px-2 py-2 ${mode === "dark" ?"text-gray-400":"text-gray-600"}`} >
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
          <div className="py-10 px-4 grid place-items-start">
            <button onClick={()=>navigate("/Jobs")} className="font-bold rounded-lg text-white bg-[#BC312E] px-6 py-2">Discover Careers</button>
          </div>
        </div>
      </div>
      <div className="md:flex justify-center md:px-10 w-full h-full">
        <div className="w-full grid justify-start mt-10 h-full">
          <div className="text-gray-400 italic font-semibold px-8">Convinced? Confused? Have Ideas?</div>
          <div className={ ` ff-style text-2xl md:text-4xl px-8 py-4 tracking-wider ${mode === "dark" ?"text-[#BC312E]":"text-black"}`}>Want to elevate your brand experience? Get in touch.</div>
          <div className="text-gray-400 italic font-semibold py-4 px-8">Want to elevate your brand experience?</div>
          <div className={`md:text-lg tracking-wide px-8 ${mode === "dark" ?"text-gray-400":"text-gray-600"}`}>"Just bring your creative business idea or the Communication problem. Let’s solve them together."</div>
          <div className="py-10 px-14 grid place-items-center">
            <button onClick={()=>navigate("/Reach%20Us")} className="font-bold rounded-lg text-white bg-[#BC312E] px-6 py-2">Request a demo</button>
          </div>
        </div>
        <img src={c2} className="object-cover h-64 w-3/4 md:h-96 md:w-2/4 mx-auto" alt="" />
      </div>
    </div>
  );
}
