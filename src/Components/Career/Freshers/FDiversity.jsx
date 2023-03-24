import React from "react";
import "./Freshers.css";

import f8 from "./FreshersImages/f8.png";
import f9 from "./FreshersImages/f9.png";
import f10 from "./FreshersImages/f10.png";
import f11 from "./FreshersImages/f11.png";
import f12 from "./FreshersImages/f12.png";

const FDiversity = () => {
  return (
    <div className="p-4 mx-10 my-4">
      <div className="flex gap-20 w-full my-10">
        <div className="w-2/4 my-auto">
          <div className="ff-style text-4xl font-semibold tracking-wide mb-10 uppercase">
            our <div className="text-[#BC312E]">commitment to diversity</div>
          </div>
          <div className="tracking-wide text-lg text-gray-600">
            At the crux of our efforts is a focus on cultivating and sustaining
            a diverse work environment and workforce, which is critical to
            meeting the unique needs of our diverse client base and the
            communities in which we operate. We are committed to making progress
            toward <label className="text-[#BC312E]"> racial equity</label>,
            advancing <label className="text-[#BC312E]"> gender equality</label>
            , and increasing representation at every level of our firm.
          </div>
        </div>
        <div className="w-2/4">
          <img src={f8} alt="ic-img" />
        </div>
      </div>
      <div className="my-32 text-xl text-[#FC4A1A] italic px-20 tracking-wide">
        Our people are our greatest asset – we say it often and with good
        reason. It is only with the determination and dedication of our people
        that we can serve our clients, generate long-term value for our
        shareholders and contribute to the broader public.
      </div>

      <div className="flex place-items-center gap-10 w-full">
        <div className="font-semibold text-[#BC312E] text-2xl tracking-wide w-1/6">Read About</div>
        <hr class="h-0.5 mx-auto my-4 bg-[#FC4A1A] border-0 rounded w-5/6  "></hr>
      </div>

      <div className="grid grid-cols-4 my-8 gap-5">
        <div className="relative"><img src={f9} alt="ic-img" /><div className="absolute bottom-10 w-3/4 h-20  rounded-lg bg-black grid place-items-center text-center left-10 bg-opacity-80 text-xl font-sans text-[#BC312E]">Fostering Inclusion & Inclusion networks</div></div>
        <div className="relative"><img src={f10} alt="ic-img" /><div className="absolute bottom-10 w-3/4 h-20  rounded-lg bg-black grid place-items-center text-center left-10 bg-opacity-80 text-xl font-sans text-[#BC312E]">Diversity Award</div></div>
        <div className="relative"><img src={f11} alt="ic-img" /><div className="absolute bottom-10 w-3/4 h-20  rounded-lg bg-black grid place-items-center text-center left-10 bg-opacity-80 text-xl font-sans text-[#BC312E]">Gender Pay Gap Report</div></div>
        <div className="relative"><img src={f12} alt="ic-img" /><div className="absolute bottom-10 w-3/4 h-20  rounded-lg bg-black grid place-items-center text-center left-10 bg-opacity-80 text-xl font-sans text-[#BC312E]">Board Diversity Initiative</div></div>
      </div>
    </div>
  );
};

export default FDiversity;
