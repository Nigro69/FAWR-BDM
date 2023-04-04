import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import "./Freshers.css";

import F1 from "./FreshersImages/1.png";
import F2 from "./FreshersImages/2.png";
import F3 from "./FreshersImages/3.png";
import F4 from "./FreshersImages/4.png";
import F5 from "./FreshersImages/5.png";

import { Button } from "@chakra-ui/react";

import { useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../../Templates/Layout/Layout";
import { useStateContext } from "../../../contexts/ContextProvider";

export default function Freshers() {
  const [toggle2, setToggle2] = useState(true);
  const [dropCategory, setdropCategory] = useState(false);
  const [category, setcategory] = useState("");
  const toggleClass = " transform translate-x-6";

  const navigate = useNavigate();

  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  const [filteredDta, setfilteresData] = useState(null);
  const [errorMessage, seterrorMessage] = useState("");
  const [isPending, setisPending] = useState(true);
  const [apiData, setapiData] = useState(null);
  const [search, setsearch] = useState("");
  const [worktype, setworktype] = useState("");
  const [dropworktype, setdropworktype] = useState(false);
  const {
    candidateModel,setunMatched
  } = useStateContext();

  const checkExprienceLevel = (value) =>{
    if(value===candidateModel.experience){
      setunMatched(false);
    }
    else{
      setunMatched(true);
    }
  }

  const getMyResult = async () => {
    try {
      const res = await axios.get("https://bigbros.link/api/v1/jobs/");
      console.log(res.data);
      let array= res.data
      let resArray=[];
      { array.map((itr)=>(
        (itr.experience == 0  &&  resArray.push(itr))
      ))}
      setfilteresData(resArray);
      setapiData(resArray);
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

  useEffect(() => {

    var desiredData = [];

    switch (worktype) {
      case "":
        desiredData = [...desiredData]
        break;
      case "Full-Time":
        {
          let cpyArray =
            desiredData && desiredData.filter((job) => job.type === "Full-Time");
          desiredData = [...cpyArray]
        }
        break;
      case "Internship":
        {
          let cpyArray =
            desiredData && desiredData.filter((job) => job.type === "InternShip");
          desiredData = [...cpyArray]
        }
        break;
      case "Part-Time":
        {
          let cpyArray =
            desiredData && desiredData.filter((job) => job.type === "Part-Time");
          desiredData = [...cpyArray]
        }
        break;


      default:
        break;
    }
    switch (category) {
      case "":
        desiredData = [...desiredData]
        break;
      case "Technology":
        {
          let cpyArray =
            desiredData && desiredData.filter((job) => job.category === "Technology");
          desiredData = [...cpyArray]
        }
        break;
      case "Marketing":
        {
          let cpyArray =
            desiredData && desiredData.filter((job) => job.category === "Marketing");
          desiredData = [...cpyArray]
        }
        break;
      case "HR":
        {
          let cpyArray =
            desiredData && desiredData.filter((job) => job.category === "HR");
          desiredData = [...cpyArray]
        }
        break;

      default:
        break;
    }
    setfilteresData([...desiredData]);
  }, [category, worktype, isPending]);

  useEffect(() => {
    const result =
      apiData &&
      apiData.filter((itr) => {
        return itr.title.toLowerCase().match(search.toLowerCase());
      });
    apiData && setfilteresData([...result]);

    if (search.length === 0) {
      apiData && setfilteresData([...apiData]);
    }
  }, [search, isPending]);

  return (
    <Layout>
      <div className="freshers-outer">
        <div className="freshers-top">
          <div className="freshers-top-left">
            <div
              className="freshers-top-title"
               
            >
              One Step Closer To Your{" "}
              <label style={{ color: "#BC312E" }}> New Job </label>
              Check Open roles for
              <label style={{ color: "#BC312E" }}> FRESHER’S</label>
              <br />
              <div
                style={{
                  marginTop: "5%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                <Button
                  className="font-sans"
                  color="white"
                  backgroundColor="#BC312E"
                >
                  Check open roles
                </Button>
              </div>
            </div>
          </div>
          <div className="freshers-top-right">
            <img src={F1} style={{ width: "100%" }} />
          </div>
        </div>

        <div
          className="freshers-title py-10 md:py-0"
          
        >
          <u className="ff-style ">Explore recent openings</u>
        </div>
        <div className="grid md:place-items-end">
          <div className="flex justify-between md:px-10 md:gap-10 px-10">
            <div className="flex gap-5">
              <div className="tracking-wider text-green-500">Remote Only</div>
              <div className="flex flex-col justify-center items-center ">
                <div
                  className={`md:w-14 md:h-7 w-12 h-6 flex items-center ${toggle2 ? "bg-gray-400" : "bg-green-500"
                    } rounded-full p-0.5 cursor-pointer`}
                  onClick={() => {
                    setToggle2(!toggle2);
                  }}
                >
                  <div
                    className={
                      `${toggle2
                        ? "border-2 border-gray-400"
                        : "border-2 border-green-500"
                      } bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out` +
                      (toggle2 ? null : toggleClass)
                    }
                  ></div>
                </div>
              </div>
            </div>
            <div className="tracking-wider text-red-500">Clear</div>
          </div>
        </div>
        <div className="p-4 text:sm md:text:md tracking-wider font-sans text-[#BC312E]">
          Filter results accordingly to your preference and start applying now!
        </div>

        <div className="md:flex justify-between w-full space-y-3 md:space-y-0 gap-5 px-10">
          <div className="relative w-2/4">
            <div
              onClick={() => setdropworktype(!dropworktype)}
              className="p-4 flex justify-between w-full  border rounded-md place-items-center border-gray-500"
            >
              <div className="font-sans text-gray-500 text-lg">
                {worktype ? worktype : "select the Work Type"}{" "}
              </div>{" "}
              <BsChevronDown className="text-gray-500" />
            </div>
            {dropworktype && (
              <div className="absolute w-full grid grid-cols-1 divide-y rounded-md shadow-md">
                <div
                  onClick={() => {
                    setworktype("");
                    setdropworktype(false);
                  }}
                  className="font-semibold bg-white text-sm hover:bg-gray-100 cursor-pointer px-4 py-2"
                >
                  All
                </div>
                <div
                  onClick={() => {
                    setworktype("Internship");
                    setdropworktype(false);
                  }}
                  className="font-semibold bg-white text-sm hover:bg-gray-100 cursor-pointer px-4 py-2"
                >
                  Internship
                </div>
                <div
                  onClick={() => {
                    setworktype("Full-Time");
                    setdropworktype(false);
                  }}
                  className="font-semibold bg-white text-sm hover:bg-gray-100 cursor-pointer px-4 py-2"
                >
                  Full-Time
                </div>
                <div
                  onClick={() => {
                    setworktype("Part-time");
                    setdropworktype(false);
                  }}
                  className="font-semibold bg-white text-sm hover:bg-gray-100 cursor-pointer px-4 py-2"
                >
                  Part-time
                </div>
              </div>
            )}
          </div>
          <div className="relative w-2/4">
            <div
              onClick={() => setdropCategory(!dropCategory)}
              className="p-4 flex justify-between w-full  border rounded-md place-items-center border-gray-500"
            >
              <div className="font-sans text-gray-500 text-lg">
                {category ? category : "select the category"}{" "}
              </div>{" "}
              <BsChevronDown className="text-gray-500" />
            </div>
            {dropCategory && (
              <div className="absolute w-full grid grid-cols-1 divide-y rounded-md shadow-md">
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
        </div>

        <div className="w-full px-10 py-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            placeholder="Search job by title"
            className="p-4 w-full md:w-3/4 text-lg border rounded-md bg-[#211F22] text-gray-500 focus:outline-0 border-gray-500"
          />
        </div>

        <div className="font-bold text-gray-500 tracking-wider font-sans px-10 my-10  md:mt-32 md:mb-10">
          Explore Open Roles
        </div>

        <div className="w-full h-full md:grid grid-cols-3 space-y-4 md:space-y-0 gap-10 px-10">
          {filteredDta &&
            filteredDta.map((data) => (
              <div>
              <div className="border border-[#FC4A1A] p-8 bg-gray-100">
                <div className="font-semibold tracking-wide text-2xl text-[#FC4A1A] uppercase">
                  {data.title}
                </div>
                <div className=" font-semibold my-5 tracking-wider text-gray-700">
                  {data.location}
                </div>
                <div className=" tracking-wide text-gray-600 font-sans">
                  {data.description}
                </div>
                <button className="mt-10 text-[#FC4A1A]">Apply</button>
              </div>
              <div className=" tracking-wide text-gray-600 font-sans">
                {data.description}
              </div>
              <button onClick={()=>checkExprienceLevel(data.experience)} className="mt-10 text-[#FC4A1A]">Apply</button>
            </div>
          ))}
      </div>

        <div className="freshers-title" style={{ color: "#BC312E" }}>
          WHY JOIN US
        </div>

        <div className="freshers-join">
          <div
            className="freshers-box"
             
          >
            <div className="freshers-box-title">Training</div>
            <div
              className="freshers-box-content"
               
            >
              A professional learning experience that offers meaningful, practical
              work related to a student's field of study or career interest. An
              internship gives a student the opportunity for career exploration
              and development, and to learn new skills.
            </div>
            <div
              className="freshers-learn-more"
               
            >
              <u onClick={() => navigate("/Freshers-Training")}>Learn More</u>
            </div>
          </div>

          <div
            className="freshers-box"
             
          >
            <div className="freshers-box-title">
              Benefits, Wellness & Compensation
            </div>
            <div
              className="freshers-box-content"
               
            >
              Research studies related to wellness indicate that Americans who
              take good care of themselves and make healthy lifestyle choices are
              healthier, happier, more productive, miss less work, and have lower
              healthcare costs
            </div>
            <div
              className="freshers-learn-more"
               
            >
              <u onClick={() => navigate("/Freshers-Benifits")}>Learn More</u>
            </div>
          </div>

          <div
            className="freshers-box"
             
          >
            <div className="freshers-box-title">Commitment to Diversity</div>
            <div
              className="freshers-box-content"
               
            >
              we understand and accept that everyone is different, that we respect
              those differences, and that we're open to listen to different points
              of views and leverage them to learn from each other.
            </div>
            <div
              className="freshers-learn-more"
               
            >
              <u onClick={() => navigate("/Freshers-Diversity")}>Learn More</u>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
