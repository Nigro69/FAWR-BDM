import React, { useEffect, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { FiLock, FiSearch } from "react-icons/fi";
import { GrClose, GrLocation } from "react-icons/gr";
import { useStateContext } from "../../contexts/ContextProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();
  const {
    candidateModel,setunMatched
  } = useStateContext();
  const [dropCategory, setdropCategory] = useState(false);
  const [dropLocation, setdropLocation] = useState(false);
  const [category, setcategory] = useState("");
  const [location, setlocation] = useState("");
  const [search, setsearch] = useState("");

  const [jobsData, setjobsData] = useState([]);
  const [filteredDta, setfilteresData] = useState(jobsData);
  const [errorMessage, seterrorMessage] = useState("");
  const [isPending, setisPending] = useState(true);

  const getMyResult = async () => {
    try {
      const res = await axios.get("https://bigbros.link/api/v1/jobs/");
      console.log(res.data);
      setjobsData(res.data);
      setfilteresData(res.data);
      setisPending(false);
    } catch (error) {
      console.log(error.message);
      seterrorMessage(error.message);
      setisPending(false);
    }
  };


  const checkExprienceLevel = (value) =>{
    if(value===candidateModel.experience){
      setunMatched(false);
    }
    else{
      setunMatched(true);
    }
  }

  

  useEffect(() => {
    getMyResult();
  }, []);

  const findJob = () =>{

    var desiredData=[];

    const result = jobsData && jobsData.filter((itr) => {
      return itr.title.toLowerCase().match(search.toLowerCase());
    });
    desiredData = [...result];

    if (search.length === 0) {
      desiredData = [...jobsData];
    }

    switch (category) {
      case "":
        desiredData = [...desiredData];
        break;
      case "Technology":
        {
          let cpyArray =
          desiredData && desiredData.filter((job) => job.category === "Technology");
          desiredData = [...cpyArray];
        }
        break;
      case "Marketing":
        {
          let cpyArray =
          desiredData && desiredData.filter((job) => job.category === "Marketing");
          desiredData = [...cpyArray];
        }
        break;
      case "HR":
        {
          let cpyArray =
          desiredData && desiredData.filter((job) => job.category === "HR");
          desiredData = [...cpyArray];
        }
        break;

      default:
        break;
    }
    switch (location) {
      case "":
        desiredData = [...desiredData];
        break;
      case "Banglore":
        {
          let cpyArray =
          desiredData && desiredData.filter((job) => job.location === "Banglore");
          desiredData = [...cpyArray];
        }
        break;
      case "Hyderabad":
        {
          let cpyArray =
          desiredData && desiredData.filter((job) => job.location === "Hyderabad");
          desiredData = [...cpyArray];
        }
        break;
      case "Pune":
        {
          let cpyArray =
          desiredData && desiredData.filter((job) => job.location === "Pune");
          desiredData = [...cpyArray];
        }
        break;

      default:
        break;
    }

    setfilteresData([...desiredData]);
  }

  return (
    <div className="p-4 md:mx-10 my-4">
      <div className="font-semibold text-2xl tracking-wider text-gray-400">
        Browse Jobs
      </div>
      <div className="mt-5 mb-2 rounded-md space-y-3 md:rounded-full py-6 px-10 md:flex justify-between place-items-center bg-gray-200">
        <div>
          <input
            className="px-4 w-full py-2 rounded-md bg-white border border-black text-sm"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            type="text"
            placeholder="Enter Job Role"
          />
        </div>
        <div className="relative">
          <div
            onClick={() => setdropCategory(!dropCategory)}
            className="px-4 py-2 rounded-md bg-white border border-black text-sm flex justify-between md:w-48 place-items-center"
          >
            {category ? category : "select the category"} <BsChevronDown />
          </div>
          {dropCategory && (
            <div className="absolute w-full z-10 grid grid-cols-1 divide-y rounded-md shadow-md">
              <div
                onClick={() => {
                  setcategory("");
                  setdropCategory(false);
                }}
                className="font-semibold bg-white text-sm hover:bg-gray-100 cursor-pointer px-4 py-2"
              >
                All
              </div>
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
            className="px-4 py-2 rounded-md bg-white border border-black text-sm flex justify-between md:w-48 place-items-center"
          >
            {location ? location : "select the location"} <BsChevronDown />
          </div>
          {dropLocation && (
            <div className="absolute w-full grid grid-cols-1 divide-y rounded-md shadow-md">
              <div
                onClick={() => {
                  setlocation("");
                  setdropLocation(false);
                }}
                className="font-semibold bg-white text-sm hover:bg-gray-100 cursor-pointer px-4 py-2"
              >
                All
              </div>
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
          <button onClick={findJob} className="py-2 px-4 text-white bg-[#BC312E] rounded-md grid place-items-center">
            <FiSearch />
          </button>
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="text-sm text-gray-400 font-semibold">{filteredDta.length} Jobs Found</div>
      </div>
      <div className="my-8 text-gray-400 flex justify-end">
        <div className="flex gap-2 text-sm font-semibold cursor-pointer place-items-center">
          Job Filter{" "}
          <div className="bg-gray-200 p-1 rounded-md shadow-md">
            <BiFilterAlt />
          </div>
        </div>
      </div>
      <div className="space-y-3 my-2">
        {!isPending &&
          filteredDta.map((data) => (
            <div key={data.id} className="md:px-20 space-y-2 px-6 py-6 bg-gray-200 rounded-xl ">
              <div className="md:flex justify-between place-items-center">
                <div className="md:font-semibold font-bold text-lg tracking-wider">
                  {data.title}
                </div>
                <div className="flex md:gap-5 justify-between text-sm">
                  <div className="flex gap-2 place-items-center">
                    <FiLock /> {data.type}
                  </div>
                  <div className="flex gap-2 place-items-center">
                    <GrLocation /> {data.location}
                  </div>
                </div>
              </div>
              <div className="flex md:gap-3 justify-between place-items-center text-sm">
                <div>{data.category}</div> | <div>Experience: {data.experience} Years</div>
              </div>
              <div className="md:flex space-y-2 justify-between place-items-center mt-3">
                <div className="text-sm grid md:place-items-center">
                  Posted: {data.publishedDate} days ago
                </div>
                <div className="flex gap-5 place-items-center">
                  <button className="bg-white rounded-xl text-sm text-[#BC312E] px-4 py-1 border border-[#BC312E]">
                    Save
                  </button>
                  <button  onClick={()=>checkExprienceLevel(data.experience)} className=" rounded-xl text-sm text-white bg-[#BC312E] border border-[#BC312E] px-4 py-1 ">
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
