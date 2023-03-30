import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import "./Freshers.css";

import F1 from "./StudentImages/1.png";
import F2 from "./StudentImages/2.png";
import F3 from "./StudentImages/3.png";
import F4 from "./StudentImages/4.png";
import F5 from "./StudentImages/5.png";

import { Button } from "@chakra-ui/react";

import { useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Student({ mode }) {
  const [toggle2, setToggle2] = useState(true);
  const toggleClass = " transform translate-x-6";

  const navigate= useNavigate();

  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  

  const [filteredDta, setfilteresData] = useState(null);
  const [errorMessage, seterrorMessage] = useState("");
  const [isPending, setisPending] = useState(true);
  const [apiData, setapiData] = useState(null);
  const [search, setsearch] = useState("");
  const [dropCategory, setdropCategory] = useState(false);
  const [category, setcategory] = useState("");

  const getMyResult = async () => {
    try {
      const res = await axios.get("https://bigbros.link/api/v1/jobs/");
      console.log(res.data);
      setfilteresData(res.data);
      setapiData(res.data);
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
    switch (category) {
      case "":
        setfilteresData(apiData && apiData);
        break;
      case "Technology":
        {
          let cpyArray =
          apiData && apiData.filter((job) => job.category === "Technology");
          setfilteresData([...cpyArray]);
        }
        break;
      case "Marketing":
        {
          let cpyArray =
          apiData && apiData.filter((job) => job.category === "Marketing");
          setfilteresData([...cpyArray]);
        }
        break;
      case "HR":
        {
          let cpyArray =
          apiData && apiData.filter((job) => job.category === "HR");
          setfilteresData([...cpyArray]);
        }
        break;

      default:
        break;
    }
  }, [category, isPending]);

  useEffect(() => {
    const result = apiData && apiData.filter((itr) => {
      return itr.title.toLowerCase().match(search.toLowerCase());
    });
    apiData && setfilteresData([...result]);

    if (search.length === 0) {
      apiData && setfilteresData([...apiData]);
    }
  }, [search,isPending])

  return (
    <div className="freshers-outer">
      <div className="freshers-top">
        <div className="freshers-top-left">
          <div
            className="freshers-top-title"
            style={{ color: mode === "dark" ? "white" : "#5D5D5D" }}
          >
            <label className="md:text-5xl text-3xl" style={{ color: "#BC312E" }}> Start your career today with us </label>
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

      <div className="md:px-10">
        <div className="md:flex w-full gap-10 my-10">
          <div className="md:w-2/4 w-full">
            <img src={F2} alt="std-image" />
          </div>
          <div className="md:w-2/4 w-full">
            <div className="md:text-4xl text-2xl font-sans text-gray-200 tracking-wider my-10 uppercase">Undergraduates Opportunities</div>
            <div className="font-sans text-sm md:text-lg text-gray-500 tracking-wide">This is a dummy text, to be replaced with how wehelps recent graduates kickstart their career by joining us.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</div>
          </div>
        </div>
        <div className="md:flex w-full gap-10 my-10">
          <div className="md:w-2/4 w-full">
            <div className="md:text-4xl text-2xl font-sans text-gray-200 tracking-wider mb-10 uppercase">Advanced Degree Opportunities</div>
            <div className="font-sans md:text-lg text-sm text-gray-500 tracking-wide">Career advancement is the upward trajectory of a person's professional journey. Examples include progressing from an entry-level position to management and transitioning from one occupation to another.Professional development goals are objectives you can set for yourself to help further your career. These might include taking steps to learn relevant skills, expand your professional network, or find more satisfaction at work.</div>
          </div>
          <div className="md:w-2/4 my-5 w-full">
            <img src={F3} alt="std-image" />
          </div>
        </div>
        <div className="md:flex w-full gap-10 my-10">
          <div className="md:w-2/4 w-full">
            <img src={F4} alt="std-image" />
          </div>
          <div className="md:w-2/4 w-full">
            <div className="md:text-4xl text-2xl font-sans text-gray-200 tracking-wider mb-10 uppercase">Internships</div>
            <div className="font-sans md:text-lg text-sm text-gray-500 tracking-wide">Whether you’re graduating with an undergraduate degree, Masters degree, MBA or PhD, BDM team have positions available globally. While we have internships throughout the year, the majority of our technical internships take place in the summer and last between 12 to 16 weeks. Internships are a great way to immerse yourself in Amazon’s culture to see if we’re a good fit for you and your career goals.</div>
          </div>
        </div>
      </div>

      <div
        className="freshers-title my-5"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <u className="ff-style">Explore recent openings</u>
      </div>
      <div className="grid md:place-items-end">
        <div className="flex md:gap-10 justify-between px-10">
          <div className="flex gap-5">
            <div className="tracking-wider text-green-500">Remote Only</div>
            <div className="flex flex-col justify-center items-center ">
              <div
                className={`md:w-14 md:h-7 w-12 h-6 flex items-center ${
                  toggle2 ? "bg-gray-400" : "bg-green-500"
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
      <div className="p-4 tracking-wider font-sans text-[#BC312E]">
        Filter results accordingly to your preference and start applying now!
      </div>

      <div className="md:flex justify-between space-y-3 md:space-y-0 w-full gap-5 px-10">
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
          onChange={(e)=>setsearch(e.target.value)}
          placeholder="Search job by title"
          className="p-4 w-full md:w-3/4 text-lg border rounded-md bg-[#211F22] text-gray-500 focus:outline-0 border-gray-500"
        />
      </div>

      <div className="font-bold text-gray-400 tracking-wider font-sans px-10 mt-10 md:mt-32 mb-10">
        Explore Open Roles
      </div>

      <div className="w-full h-full grid md:grid-cols-3 gap-10 px-10">
        {filteredDta && filteredDta.map(data=>(
        <div className="border border-[#FC4A1A] p-8 bg-[#211F22]">
          <div className="font-semibold tracking-wide text-2xl text-[#FC4A1A] uppercase">
            {data.title}
          </div>
          <div className=" font-semibold my-5 tracking-wider text-gray-300">
            {data.location}
          </div>
          <div className=" tracking-wide text-gray-400 font-sans">
            {data.description}
          </div>
          <button className="mt-10 text-[#FC4A1A]">Apply</button>
        </div>
        ))}
      </div>

      <div className="freshers-title" style={{ color: "#BC312E" }}>
        WHY JOIN US
      </div>

      <div className="freshers-join">
        <div
          className="freshers-box"
          style={{
            border: mode === "dark" ? "1px solid white" : "1px solid black",
          }}
        >
          <div className="freshers-box-title">Training</div>
          <div
            className="freshers-box-content"
            style={{ color: mode === "dark" ? "#908B89" : "#5D5D5D" }}
          >
            A professional learning experience that offers meaningful, practical
            work related to a student's field of study or career interest. An
            internship gives a student the opportunity for career exploration
            and development, and to learn new skills.
          </div>
          <div
            className="freshers-learn-more"
            style={{ color: mode === "dark" ? "#908B89" : "#5D5D5D" }}
          >
            <u onClick={()=>navigate("/Freshers-Traning")}>Learn More</u>
          </div>
        </div>

        <div
          className="freshers-box"
          style={{
            border: mode === "dark" ? "1px solid white" : "1px solid black",
          }}
        >
          <div className="freshers-box-title text-center">
            Benefits & Wellness
          </div>
          <div
            className="freshers-box-content"
            style={{ color: mode === "dark" ? "#908B89" : "#5D5D5D" }}
          >
            Research studies related to wellness indicate that Americans who
            take good care of themselves and make healthy lifestyle choices are
            healthier, happier, more productive, miss less work, and have lower
            healthcare costs
          </div>
          <div
            className="freshers-learn-more"
            style={{ color: mode === "dark" ? "#908B89" : "#5D5D5D" }}
          >
            <u onClick={()=>navigate("/Students-Benifits")}>Learn More</u>
          </div>
        </div>

        <div
          className="freshers-box"
          style={{
            border: mode === "dark" ? "1px solid white" : "1px solid black",
          }}
        >
          <div className="freshers-box-title">Commitment to Diversity</div>
          <div
            className="freshers-box-content"
            style={{ color: mode === "dark" ? "#908B89" : "#5D5D5D" }}
          >
            we understand and accept that everyone is different, that we respect
            those differences, and that we're open to listen to different points
            of views and leverage them to learn from each other.
          </div>
          <div
            className="freshers-learn-more"
            style={{ color: mode === "dark" ? "#908B89" : "#5D5D5D" }}
          >
            <u onClick={()=>navigate("/Freshers-Diversity")}>Learn More</u>
          </div>
        </div>
      </div>
    </div>
  );
}
