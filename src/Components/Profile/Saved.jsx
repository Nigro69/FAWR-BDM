import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

const Saved = () => {
  return (
    <div className="p-4 md:mx-10 my-4">
      <div className="font-semibold text-2xl mb-4 tracking-wider text-gray-400">
        Saved Jobs
      </div>
      <div className="space-y-3">
        <div className="md:px-20 space-y-2 px-6 py-6 bg-gray-200 rounded-xl ">
          <div className="md:flex justify-between place-items-center">
            <div className="md:font-semibold font-bold text-lg tracking-wider">
              Full Stack Developer
            </div>
            <div className="flex md:gap-5 justify-between text-sm">
              <div className="flex gap-2 place-items-center">
                <FiLock /> Full-Time
              </div>
              <div className="flex gap-2 place-items-center">
                <GrLocation /> Banglore
              </div>
            </div>
          </div>
          <div className="flex md:gap-3 justify-between place-items-center text-sm">
            <div>Technology</div> |{" "}
            <div>Experience: Experience: 2-3 Years </div>
          </div>
          <div className="md:flex space-y-2 justify-between place-items-center mt-3">
            <div className="text-sm grid md:place-items-center">
              Posted: 2 days ago
            </div>
            <div className="flex gap-5 place-items-center">
              <button className="bg-white rounded-xl text-sm text-[#BC312E] px-4 py-1 border border-[#BC312E]">
                Save
              </button>
              <button className=" rounded-xl text-sm text-white bg-[#BC312E] border border-[#BC312E] px-4 py-1 ">
                View Job
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Saved;
