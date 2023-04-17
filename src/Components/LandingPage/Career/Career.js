import React from "react";
import { useNavigate } from "react-router-dom";
import "./Career.css"

import c1 from "./CareerImages/c1.png";
import c2 from "./CareerImages/c2.png";

export default function Career({ mode }) {
    const navigate = useNavigate();
  return (
    <div className="space-y-10">
      <div className=" justify-center w-full " style={{display:'flex',alignItems:'center'}}>
        <img src={c1} className="career-img " alt="" />
        <div className="grid place-items-center" style={{width:'60%'}}>
          <div className={`ff-style font-bold text-right text-2xl md:text-4xl px-8 py-4 tracking-wider landing-career-title ${mode === "dark" ?"text-[#BC312E]":"text-black"}`}>
            Discover Careers at BDM
          </div>
          <div className={`text-right md:text-lg tracking-wide px-6 md:px-2 py-2 landing-career-text ${mode === "dark" ?"text-gray-400":"text-gray-600"}`} >
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
          <div className="grid place-items-start">
            <button onClick={()=>navigate("/Jobs")} className="font-bold rounded-lg text-white bg-[#BC312E] landing-career-text" style={{marginTop:'5%'}}>Discover Careers</button>
          </div>
        </div>
      </div>
      <div className=" justify-center md:px-10 w-full h-full" style={{display:'flex', alignItems:'center'}}>
        <div className="w-full grid justify-start  h-full" style={{justifyContent:'space-evenly'}}>
          <div className="text-gray-400 italic font-semibold px-8 landing-career-text">Convinced? Confused? Have Ideas?</div>
          <div className={ ` ff-style text-2xl md:text-4xl px-8 py-4 tracking-wider landing-career-title ${mode === "dark" ?"text-[#BC312E]":"text-black"}`}>Want to elevate your brand experience? Get in touch.</div>
          <div className="text-gray-400 italic font-semibold py-4 px-8 landing-career-text">Want to elevate your brand experience?</div>
          <div className={`md:text-lg tracking-wide px-8 landing-career-text ${mode === "dark" ?"text-gray-400":"text-gray-600"}`}>"Just bring your creative business idea or the Communication problem. Let’s solve them together."</div>
          <div className="grid place-items-center">
            <button onClick={()=>navigate("/Reach%20Us")} className="font-bold rounded-lg text-white bg-[#BC312E] landing-career-text" style={{marginTop:'5%'}}>Request a demo</button>
          </div>
        </div>
        <img src={c2} className="object-cover  w-3/4 md:h-96 md:w-2/4 mx-auto career-img" alt="" />
      </div>
    </div>
  );
}
