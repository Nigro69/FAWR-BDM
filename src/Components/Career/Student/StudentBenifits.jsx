import React from "react";
import "./Student.css";

import F2 from "./StudentImages/2.png";
import h1 from "./StudentImages/h1.png";
import h2 from "./StudentImages/h2.png";
import h3 from "./StudentImages/h3.png";
import h4 from "./StudentImages/h4.png";
import h5 from "./StudentImages/h5.png";
import h6 from "./StudentImages/h6.png";
import h7 from "./StudentImages/h7.png";
import h8 from "./StudentImages/h8.png";
import h9 from "./StudentImages/h9.png";
import h10 from "./StudentImages/h1.png";
import h11 from "./StudentImages/h11.png";
import h12 from "./StudentImages/h12.png";
import Layout from "../../Templates/Layout/Layout";

const StudentBenifits = () => {
  const coldata = [
    {
      ig: h1,
      tit: "Career Acceleration",
      des: "Rocket Skill your career by building competative skills.",
    },
    {
      ig: h2,
      tit: "Leadership Development",
      des: "An industry leading award winning Training/development programe.",
    },
    {
      ig: h3,
      tit: "Full-time Potential",
      des: "You may be offered an interview for permanent position.",
    },
    {
      ig: h4,
      tit: "Senior Exposure",
      des: "Interact with learn from and present to seniors.",
    },
    {
      ig: h5,
      tit: "Internship Network",
      des: "Grow your professional and social networks both on the job and at socaial events.",
    },
    {
      ig: h6,
      tit: "Resume Builder",
      des: "Strengthen your resume and market volume.",
    },
    {
      ig: h7,
      tit: "Real Responsibility",
      des: "Making lasting impact on business critical assignments.",
    },
    {
      ig: h8,
      tit: "Market Superiority",
      des: "Experience how our stratergy accelerates noticable brand superiority.",
    },
    {
      ig: h9,
      tit: "Global Business",
      des: "Gain and rare behind the scenes insights into how global industry leader operates.",
    },
    {
      ig: h10,
      tit: "Inovation-Led",
      des: "Discover how inovation is the key to success.",
    },
    {
      ig: h11,
      tit: "Day-in the live view",
      des: "Have an inside view before you join us.",
    },
    {
      ig: h12,
      tit: "Good compensation",
      des: "Get paid while gaining all above.",
    },
  ];

  return (
    <Layout>
      <div className="p-4 md:mx-10 my-4">
        <div className="md:flex gap-20 space-y-3 md:space-y-0 w-full mt-10 mb-10">
          <div className="md:w-2/4 w-full">
            <div className="text-[#BC312E] my-5 tracking-wider text-4xl font-semibold  text-center">
              Student Benifits
            </div>
            <div className="tracking-wide  md:text-lg text-gray-400 md:px-10 text-center">
              " I have been working as an admin assistant to the General Manager
              for just over 3 years. I started as a Receptionist and was
              promoted after 6 months. I am passionate about learning new skills
              and I have completed a number of training courses. I have
              developed a strong skill set including in-depth data management
              expertise. I am eager to make full use of this in a larger working
              environment."
            </div>
          </div>
          <div className="md:w-2/4 w-full">
            <img src={F2} alt="cdsdc" />
          </div>
        </div>
        <div className="flex place-items-center mt-20 md:mt-36 mb-20">
          <hr class="h-0.5 mx-auto my-4 bg-[#FC4A1A] border-0 rounded w-96 "></hr>
          <div className="text-2xl font-semibold tracking-wider text-[#BC312E] text-center w-60 mx-8">
            WHY CHOOSE US
          </div>
          <hr class="h-0.5 mx-auto my-4 bg-[#FC4A1A] border-0 rounded w-96  "></hr>
        </div>
        <div className="tracking-wide text-lg text-gray-400 md:px-10 text-center">
          Your compensation will be reviewed annually and may consist of salary,
          discretionary compensation, and certain local allowances, where
          applicable. Compensation is determined by a number of factors,
          including the firm’s performance, divisional performance and
          individual performance. We spend a great deal of time ensuring that
          people are compensated appropriately and we aim to provide highly
          competitive pay levels over the long term.
        </div>
        <hr class="h-0.5 mx-auto my-16 bg-gray-600 border-0 rounded w-96  "></hr>

        <div className="grid md:grid-cols-2 gap-10">
          {coldata.map((data) => (
            <div
              key={data.ig}
              className="flex gap-3 w-full h-52 bg-[#211F22] rnd-shd"
            >
              <div className="w-2/4 object-cover">
                <img
                  className="h-52 w-full object-cover"
                  src={data.ig}
                  alt="cdsdc"
                />
              </div>
              <div className="w-2/4 space-y-5 py-5">
                <div className="font-semibold text-xl text-gray-200 text-center font-sans">
                  {data.tit}
                </div>
                <div className="text-gray-400 text-center text-sm md:text-md px-5">
                  {data.des}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default StudentBenifits;
