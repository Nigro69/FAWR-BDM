import React, { useState } from "react";

const Settings = () => {

  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const toggleClass = " transform translate-x-6";

  return (
    <div className="p-4 md:mx-10 my-4">
      <div className="font-semibold text-2xl my-2 tracking-wider text-gray-400">
        Settings
      </div>
      <div className="text-sm font-semibold text-gray-500 m-1">General</div>
      <div className="bg-gray-200 rounded-xl py-10 px-10 md:px-20 space-y-10">
        <div className="grid space-y-2 md:grid-cols-2">
          <div className="flex gap-3 place-items-center">
            <div className="text-gray-600">Name:</div>
            <div>
              <input
                className="px-4 py-2 rounded-md bg-white border border-black text-sm"
                value="Darlene Robertson"
                type="text"
                placeholder="Enter Job Role"
              />
            </div>
          </div>
          <div className="flex gap-3 place-items-center">
            <div className="text-gray-600">Email:</div>
            <div>
              <input
                className="px-4 py-2 rounded-md bg-white border border-black text-sm"
                value="darleneroberson@gmail.com"
                type="email"
                placeholder="Enter Job Role"
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="flex gap-3 place-items-center">
            <div className="text-gray-600">Mobile No:</div>
            <div>
              <input
                className="px-4 py-2 rounded-md bg-white border border-black text-sm"
                value="6261630049"
                type="number"
                placeholder="Enter Job Role"
              />
            </div>
          </div>
          <div className="flex gap-5 place-items-center justify-end">
            <button className="bg-white rounded-xl text-sm text-[#BC312E] px-4 py-1 border border-[#BC312E]">
              Cancel
            </button>
            <button className=" rounded-xl text-sm text-white bg-[#BC312E] border border-[#BC312E] px-4 py-1 ">
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="text-sm font-semibold text-gray-500 mt-5 mb-1">
        Password
      </div>
      <div className="bg-gray-200 rounded-xl py-10 px-10 md:px-20 space-y-10">
        <div className="grid md:grid-cols-2">
          <div className="md:flex gap-3 place-items-center">
            <div className="text-gray-600">Current Password:</div>
            <div>
              <input
                className="px-4 py-2 rounded-md bg-white border border-black text-sm"
                type="password"
                placeholder=""
              />
            </div>
          </div>
          <div className="md:flex gap-3 place-items-center">
            <div className="text-gray-600">New Password:</div>
            <div>
              <input
                className="px-4 py-2 rounded-md bg-white border border-black text-sm"
                type="password"
                placeholder="Must be atleast 8 characters"
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="md:flex gap-3 place-items-center">
            <div className="text-gray-600">Confirm new password:</div>
            <div>
              <input
                className="px-4 py-2 rounded-md bg-white border border-black text-sm"
                type="password"
                placeholder="Must be atleast 8 characters"
              />
            </div>
          </div>
          <div className="flex gap-5 my-3 place-items-center justify-end">
            <button className="bg-white rounded-xl text-sm text-[#BC312E] px-4 py-1 border border-[#BC312E]">
              Cancel
            </button>
            <button className=" rounded-xl text-sm text-white bg-[#BC312E] border border-[#BC312E] px-4 py-1 ">
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="text-sm font-semibold text-gray-500 mt-5 mb-1">
        Notification
      </div>
      <div className="bg-gray-200 rounded-xl py-10 md:px-20 px-10 space-y-10">
        <div className="w-3/4 space-y-1">
          <div className="flex justify-between">
            <div>Job alerts and Reminders</div>
            <div className="flex flex-col justify-center items-center ">
              <div
                className={`md:w-14 md:h-7 w-12 h-6 flex items-center ${
                  toggle ? "bg-gray-400" : "bg-[#BC312E]"
                } rounded-full p-0.5 cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <div
                  className={
                    `${
                      toggle
                        ? "border-2 border-gray-400"
                        : "border-2 border-red-500"
                    } bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out` +
                    (toggle ? null : toggleClass)
                  }
                ></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>Job Recomendation</div>
            <div className="flex flex-col justify-center items-center ">
              <div
                className={`md:w-14 md:h-7 w-12 h-6 flex items-center ${
                  toggle2 ? "bg-gray-400" : "bg-[#BC312E]"
                } rounded-full p-0.5 cursor-pointer`}
                onClick={() => {
                  setToggle2(!toggle2);
                }}
              >
                <div
                  className={
                    `${
                      toggle2
                        ? "border-2 border-gray-400"
                        : "border-2 border-red-500"
                    } bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out` +
                    (toggle2 ? null : toggleClass)
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
