import React, { useEffect, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { FiLock, FiSearch } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import axios from "axios";

const Browse = () => {
  const [dropCategory, setdropCategory] = useState(false);
  const [dropLocation, setdropLocation] = useState(false);
  const [category, setcategory] = useState(null);
  const [location, setlocation] = useState(null);

  const [jobsData, setjobsData] = useState([]);
  const [errorMessage, seterrorMessage] = useState("");
  const [isPending, setisPending] = useState(true);

  const getMyResult = async () => {
    try {
      const res = await axios.get("http://54.237.66.114/jobs/");
      console.log(res.data);
      setjobsData(res.data);
      setisPending(false);
    } catch (error) {
      console.log(error.message);
      seterrorMessage(error.message);
      setisPending(false);
    }
  };

  useEffect(() => {
    getMyResult();
  }, []);

  return (
    <div className="p-4 mx-10 my-4">
      <div className="font-semibold text-2xl tracking-wider text-gray-700">
        Browse Jobs
      </div>
      <div className="mt-5 mb-2 rounded-full py-6 px-10 flex justify-between place-items-center bg-gray-200">
        <div>
          <input
            className="px-4 py-2 rounded-md bg-white border border-black text-sm"
            type="text"
            placeholder="Enter Job Role"
          />
        </div>
        <div className="relative">
          <div
            onClick={() => setdropCategory(!dropCategory)}
            className="px-4 py-2 rounded-md bg-white border border-black text-sm flex justify-between w-48 place-items-center"
          >
            {category ? category : "select the category"} <BsChevronDown />
          </div>
          {dropCategory && (
            <div className="absolute w-full grid grid-cols-1 divide-y rounded-md shadow-md">
              <div
                onClick={() => {
                  setcategory("Technology");
                  setdropCategory(false);
                }}
                className="font-semibold bg-white text-sm hover:bg-gray-100 cursor-pointer px-4 py-2"
              >
                Technology
              </div>
              <div
                onClick={() => {
                  setcategory("Marketing");
                  setdropCategory(false);
                }}
                className="font-semibold bg-white text-sm hover:bg-gray-100 cursor-pointer px-4 py-2"
              >
                Marketing
              </div>
              <div
                onClick={() => {
                  setcategory("HR");
                  setdropCategory(false);
                }}
                className="font-semibold bg-white text-sm hover:bg-gray-100 cursor-pointer px-4 py-2"
              >
                HR
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <div
            onClick={() => setdropLocation(!dropLocation)}
            className="px-4 py-2 rounded-md bg-white border border-black text-sm flex justify-between w-48 place-items-center"
          >
            {location ? location : "select the location"} <BsChevronDown />
          </div>
          {dropLocation && (
            <div className="absolute w-full grid grid-cols-1 divide-y rounded-md shadow-md">
              <div
                onClick={() => {
                  setlocation("Banglore");
                  setdropLocation(false);
                }}
                className="font-semibold bg-white text-sm hover:bg-gray-100 cursor-pointer px-4 py-2"
              >
                Banglore
              </div>
              <div
                onClick={() => {
                  setlocation("Hyderabad");
                  setdropLocation(false);
                }}
                className="font-semibold bg-white text-sm hover:bg-gray-100 cursor-pointer px-4 py-2"
              >
                Hyderabad
              </div>
              <div
                onClick={() => {
                  setlocation("Pune");
                  setdropLocation(false);
                }}
                className="font-semibold bg-white text-sm hover:bg-gray-100 cursor-pointer px-4 py-2"
              >
                Pune
              </div>
            </div>
          )}
        </div>
        <div>
          <button className="py-2 px-4 text-white bg-[#BC312E] rounded-md grid place-items-center">
            <FiSearch />
          </button>
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="text-sm font-semibold">10 Jobs Found</div>
      </div>
      <div className="my-8 flex justify-end">
        <div className="flex gap-2 text-sm font-semibold cursor-pointer place-items-center">
          Job Filter{" "}
          <div className="bg-gray-200 p-1 rounded-md shadow-md">
            <BiFilterAlt />
          </div>
        </div>
      </div>
      <div className="space-y-3 my-2">
        {!isPending &&
          jobsData.map((data) => (
            <div key={data.id} className="px-20 py-6 bg-gray-200 rounded-xl ">
              <div className="flex justify-between place-items-center">
                <div className="font-semibold text-lg tracking-wider">
                  {data.title}
                </div>
                <div className="flex gap-5 text-sm">
                  <div className="flex gap-2 place-items-center">
                    <FiLock /> {data.type}
                  </div>
                  <div className="flex gap-2 place-items-center">
                    <GrLocation /> {data.location}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 place-items-center text-sm">
                <div>{data.category}</div> | <div>Experience: {data.experience} Years</div>
              </div>
              <div className="flex justify-between place-items-center mt-3">
                <div className="text-sm grid place-items-center">
                  Posted: {data.publishedDate} days ago
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
          ))}
        ;
      </div>
    </div>
  );
};

export default Browse;
