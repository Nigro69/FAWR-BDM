import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import "./Freshers.css";
import f1 from "./FreshersImages/f1.png";
import f2 from "./FreshersImages/f2.png";
import f3 from "./FreshersImages/f3.png";
import f4 from "./FreshersImages/f4.png";
import f5 from "./FreshersImages/f5.png";
import f6 from "./FreshersImages/f6.png";
import f7 from "./FreshersImages/f7.png";

const Training = () => {
  const datas = [
    {
      id: 1,
      ig: f2,
      head: "Solution Architect",
      des: "Learn to design highly available system",
    },
    {
      id: 1,
      ig: f3,
      head: "Machine Learning",
      des: "Learn to design highly available system",
    },
    {
      id: 1,
      ig: f5,
      head: "Operations",
      des: "Learn to design, deploy and manage AWS cloud systems.",
    },
    {
      id: 1,
      ig: f6,
      head: "Developer",
      des: "Learn to develop applications for cloud.",
    },
    {
      id: 1,
      ig: f4,
      head: "Data and analytics",
      des: "Learn to design highly available system",
    },
    {
      id: 1,
      ig: f7,
      head: "Cloud Practitioner",
      des: "Learn to design highly available system",
    },
  ];

  const [toggle2, setToggle2] = useState(true);
  const toggleClass = " transform translate-x-6";

  return (
    <div className="p-4 md:mx-10 my-4">
      <div className="md:flex gap-20 w-full">
      <div className="md:w-2/4 w-full">
          <img src={f1} alt="" />
        </div>
        <div className="md:w-2/4 my-auto">
          <div className="font-sans ff-style text-4xl tracking-wider my-5 text-[#BC312E]">
            Training for Professionals
          </div>
          <div className="font-sans text-3xl tracking-wider text-gray-400">
            Interships in business, engineering, technology, and more.
          </div>
        </div>
      </div>
      <div className="flex place-items-center mt-36 mb-20">
        <hr class="h-0.5 mx-auto my-4 bg-[#FC4A1A] border-0 rounded w-96 "></hr>
        <div className="text-2xl font-semibold tracking-wider text-[#BC312E] text-center w-60 mx-8">
          Brief Overview
        </div>
        <hr class="h-0.5 mx-auto my-4 bg-[#FC4A1A] border-0 rounded w-96  "></hr>
      </div>
      <div className="text-gray-500 tracking-wide text-center font-sans">
        Our training prepares students to work in the real world. It aims to
        hone the practical skills of students, which will help them pursue jobs
        in the fields of their choosing unlike classroom training, where the
        focus is generally on academics. However, professional education has not
        yet evolved enough to effectively address these challenges: Lack of
        job-ready youth with updated skills Lack of trainers who can provide
        quality training An insufficient number of career service centers that
        can provide career counseling, disseminate information and guide job
        seekers. Addressing the Challenges One way to address these challenges
        is through technology. Learning platforms not only enable teachers and
        students to become more proactive but also expose students to global
        challenges and enable them to get access to education of international
        standards. They can access high-class course material and connect with
        leading experts from across the world to enhance their skills. Parents,
        too, can connect with teachers to assess their ward's performances
        without physically visiting the campus.
      </div>
      <div className="flex place-items-center mt-36 mb-20">
        <hr class="h-0.5 mx-auto my-4 bg-[#FC4A1A] border-0 rounded w-96 "></hr>
        <div className="text-2xl font-semibold tracking-wider text-[#BC312E] text-center w-60 mx-8">
          Our Products
        </div>
        <hr class="h-0.5 mx-auto my-4 bg-[#FC4A1A] border-0 rounded w-96  "></hr>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="p-4 flex justify-between w-full border rounded-md place-items-center border-gray-500">
          <div className="font-sans text-gray-500 text-lg">Select Location</div>{" "}
          <BsChevronDown className="text-gray-500"/>
        </div>
        <div className="p-4 flex justify-between w-full border rounded-md place-items-center border-gray-500">
          <div className="font-sans text-gray-500 text-lg">
            Select Department
          </div>{" "}
          <BsChevronDown className="text-gray-500"/>
        </div>
        <div className="flex gap-10 px-10 place-items-center">
          <div className="flex gap-5 place-items-center">
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
      <div className="md:px-10  my-20 grid md:grid-cols-3 place-content-center gap-20">
        {datas.map((data) => (
          <div
            key={data.id}
            className="rounded-md p-10 h-80 w-80 bg-gray-200  shadow-lg grid place-items-center"
          >
            <div>
              <img src={data.ig} alt="ic-image" />
            </div>
            <div className="font-semibold text-gray-700 tracking-wide text-lg">
              {data.head}
            </div>
            <div className="text-gray-500 tracking-wide text-center">
              {data.des}
            </div>
            <div>
              <button className="text-sm text-[#FC4A1A] border-b-2 border-b-[#FC4A1A] px-6 py-2">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;
