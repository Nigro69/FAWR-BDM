import React, { useState } from "react";
import { FiLock } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const Applied = () => {
  const [tab, settab] = useState(1);

  return (
    <div className="p-4 md:mx-10 my-4">
      <div className="font-semibold text-2xl tracking-wider text-gray-400">
        Applications
      </div>
      <div className="flex gap-3 my-5">
        <button
          onClick={() => settab(1)}
          className={`font-bold text-sm p-2 ${
            tab === 1
              ? "border-b-2 border-b-[#BC312E] text-[#BC312E]"
              : "text-gray-400"
          }`}
        >
          Ongoing
        </button>
        <button
          onClick={() => settab(2)}
          className={`font-bold text-sm p-2 ${
            tab === 2 ? "border-b-2 border-b-[#BC312E] text-[#BC312E]" : "text-gray-400"
          }`}
        >
          Archived
        </button>
      </div>
      {tab === 1 && (
        <div>
          <div className="my-3 px-6 md:px-16 py-6 bg-gray-200 rounded-xl">
            <div className="md:flex justify-between place-items-center">
              <div className="font-semibold text-lg tracking-wider flex gap-3 place-items-center">
                Full Stack Developer{" "}
                <div className="text-xs text-gray-500">(CID: 123456)</div>
              </div>
              <div className="flex gap-5 text-sm">
                <div className="flex gap-2 place-items-center">
                  <FiLock /> Full-Time
                </div>
                <div className="flex gap-2 place-items-center">
                  <GrLocation /> Bangolre
                </div>
              </div>
            </div>
            <div className="flex gap-3 place-items-center text-sm">
              <div>Technology</div> | <div>Experience: 2-3 Years</div>
            </div>
            <div className="flex justify-between place-items-center my-3">
              <div className="text-sm">Applied 2 Days Ago</div>
              <button className=" rounded-xl text-sm text-[#BC312E] px-4 py-1 border border-[#BC312E]">
                View Info
              </button>
            </div>
            <div className="md:max-w-xl md:mx-auto my-8 md:border-b-2 pb-4">
              <div className="flex pb-3">
                <div className="flex-1"></div>

                <div className="flex-1">
                  <div className="w-5 h-5 md:w-10 md:h-10 bg-[#BC312E] mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-white text-center w-full">
                      <i className="w-full grid place-items-center fill-current white">
                        <FaCheck />
                      </i>
                    </span>
                  </div>
                </div>

                <div className="w-1/6 align-center items-center align-middle content-center flex">
                  <div className="w-full bg-gray-400 rounded items-center align-middle align-center flex-1">
                    <div className="bg-[#BC312E] text-xs leading-none py-1 text-center text-gray-600 rounded  w-full"></div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="w-5 h-5 md:w-10 md:h-10 bg-[#BC312E] mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-white text-center w-full">
                      <i className="w-full grid place-items-center fill-current white">
                        <FaCheck />
                      </i>
                    </span>
                  </div>
                </div>

                <div className="w-1/6 align-center items-center align-middle content-center flex">
                  <div className="w-full bg-gray-400 rounded items-center align-middle align-center flex-1">
                    <div className="bg-[#BC312E] text-xs leading-none py-1 text-center text-gray-600 rounded w-1/5"></div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="w-5 h-5 md:w-10 md:h-10 bg-white border-2 border-gray-400 mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-gray-600 text-center w-full p-1">3</span>
                  </div>
                </div>

                <div className="w-1/6 align-center items-center align-middle content-center flex">
                  <div className="w-full bg-gray-400 rounded items-center align-middle align-center flex-1">
                    <div className="bg-[#BC312E] text-xs leading-none py-1 text-center text-gray-600 rounded w-0"></div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="w-5 h-5 md:w-10 md:h-10 bg-white border-2 border-gray-400 mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-gray-600 text-center w-full p-1">4</span>
                  </div>
                </div>
                <div className="w-1/6 align-center items-center align-middle content-center flex">
                  <div className="w-full bg-gray-400 rounded items-center align-middle align-center flex-1">
                    <div className="bg-[#BC312E] text-xs leading-none py-1 text-center text-gray-600 rounded w-0"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-5 h-5 md:w-10 md:h-10 bg-white border-2 border-gray-400 mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-gray-600 text-center w-full p-1">5</span>
                  </div>
                </div>
                <div className="w-1/6 align-center items-center align-middle content-center flex">
                  <div className="w-full bg-gray-400 rounded items-center align-middle align-center flex-1">
                    <div className="bg-[#BC312E] text-xs leading-none py-1 text-center text-gray-600 rounded w-0"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-5 h-5 md:w-10 md:h-10 bg-white border-2 border-gray-400 mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-gray-600 text-center w-full p-1">6</span>
                  </div>
                </div>

                <div className="flex-1"></div>
              </div>

              <div className="flex w-full text-xs justify-between">
                <div className="w-1/6">Application</div>

                <div className="w-1/6">Screening Calls</div>

                <div className="w-1/6 text-center">Assesments</div>

                <div className="w-1/6 text-center">Interview</div>

                <div className="w-1/6 text-end">Offer</div>

                <div className="w-1/6 text-end">Hired</div>
              </div>
            </div>
            <div className="flex gap-5 place-items-center justify-end">
              <button className="bg-white rounded-xl text-sm text-[#BC312E] px-4 py-1 border border-[#BC312E]">
                View application details
              </button>
              <button className=" rounded-xl text-sm text-white bg-[#BC312E] border border-[#BC312E] px-4 py-1 ">
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Applied;
