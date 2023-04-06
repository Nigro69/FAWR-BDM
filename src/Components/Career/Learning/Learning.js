import React, { useEffect } from "react";
import "./Learning.css";

import Learning_img1 from "./LearningImages/Learning_img1.png";
import R1 from "./LearningImages/1.png";
import R2 from "./LearningImages/2.png";
import R3 from "./LearningImages/3.png";
import R4 from "./LearningImages/4.png";
import R5 from "./LearningImages/5.png";
import R6 from "./LearningImages/6.png";
import R7 from "./LearningImages/7.png";
import R8 from "./LearningImages/8.png";
import R9 from "./LearningImages/9.png";

import { Button, useMediaQuery } from "@chakra-ui/react";
import { NavLink as Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { useStateContext } from "../../../contexts/ContextProvider";

export default function Learning() {
  const {mode} = useStateContext();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [])
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  const learningData = [
    {
      name: "Web Development",
      content:
        "Our professionals find the best materials for your idea and apply the most up-to-date techniques to build a website that provides you with a better experience.",
      img: R4,
      link: "/Web Development Services",
    },

    {
      name: "App Development",
      content:
        "We develop a mobile app that engages your audience and expands your business online.We develop a mobile app that engages your state.",
      img: R5,
      link: "/App Development Services",
    },

    {
      name: "UX/UI Design",
      content:
        "We provide responsive and adaptive designs with consistent platform using a special combination of contemporary technology and new methodologies.",
      img: R6,
      link: "/UX / UI Design Services",
    },

    {
      name: "Animation",
      content:
        "Animation is a strong tool that may be used to define and visualise a production, marketing, or animated feature more precisely.",
      img: R7,
      link: "/Animations Services",
    },

    {
      name: "Mobile Marketing",
      content:
        "Reach your target clients if you have mobile.. Our team can bring you from one location to another using a clever, economical mobile marketing strategy.",
      img: R8,
      link: "/Mobile Marketing Services",
    },

    {
      name: "Blockchain ",
      content:
        "We provide effective Blockchain solutions that advance companies and make them stand out from the crowd.",
      img: R9,
      link: "/Blockchain Development Services",
    },
  ];

  return (
    <Layout>
      <div className="learning-outer">
        <div className="learning-bgimg" style={{ width: "100%" }}>
          <img src={Learning_img1} style={{ width: "100%" }} />
        </div>

        <div style={{ width: "90%" }}>
          <div
            className="learning-title"
            style={{
              textAlign: "center",
              color: mode === "dark" ? "white" : "black",
              width: "100%",
            }}
          >
            Smart talent development experience to success and growth
          </div>
          <div
            className="learning-grid-text"
            style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}
          >
            We appreciate your talents and who you are. The goal of your learning
            and development journey at BDM is to build you into a top talent by
            utilising our top-notch learning and development programme. With our
            cutting-edge learning solutions, you will strive for better and be
            motivated to succeed.
          </div>

          <div
            className="learning-grid-text"
            style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}
          >
            We provide our personnel with a lifelong learning and development
            curriculum built on a globally recognised competence framework.
            Through unique, intelligent talent development experiences, the
            curriculum is created to develop our people and build future leaders.
            It consists of a variety of competency-based learning and development
            initiatives, career milestone initiatives, high potential development
            initiatives, future leader succession initiatives, individual career
            consultation initiatives, coaching initiatives, and mentoring
            initiatives.
          </div>

          <div
            className="learning-grid-text"
            style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}
          >
            You may design your own learning and development experience at BDM
            based on your unique needs, preferences, and learning style. You will
            have several chances to network with top executives both inside and
            outside the BDM network throughout the world, get insight from BDM
            employees' personal narratives, and participate in talent development
            programmes designed to motivate the "next gen" of talent.
          </div>
        </div>

        <div
          className="learning-grid"
          style={{ display: isLargerThan1000 ? "flex" : "none" }}
        >
          <div className="learning-grid-left">
            <div className="learning-grid-title">
              Through innovation and technology,become a talent prepared for the
              future.
            </div>
            <div
              className="learning-grid-text"
              style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}
            >
              We live in a digital world that is continuously changing. Our
              flexible, cutting-edge, and tech-enabled learning and development
              solutions assist you in quickly acquiring hot skills, future-ready
              skills, client-centric skills, and a digital mentality. Our learning
              platform, created especially for BDM professionals, aims to support
              the growth of our employees by providing an outstanding digital
              learning environment.
            </div>
          </div>
          <div className="learning-grid-right">
            <img src={R1} style={{ width: "100%" }} />
          </div>
        </div>

        <div
          className="learning-grid"
          style={{
            flexDirection: "row-reverse",
            display: isLargerThan1000 ? "flex" : "none",
          }}
        >
          <div className="learning-grid-left">
            <div className="learning-grid-title">
              Make your professional journey a success.
            </div>
            <div
              className="learning-grid-text"
              style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}
            >
              Our career milestone programmes foster our talent's aspirations for
              leadership and provide them the skills they need now to thrive and
              lead tomorrow. Through these programmes, our talent is motivated to
              manage teams and clients with empathy and encouraged to develop new
              ways of "thinking" and "doing."
            </div>
            <div
              className="learning-grid-text"
              style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}
            >
              Your job development path benefits greatly from our coaching and
              mentoring programmes. Your future character as a leader at BDM will
              be shaped by the professional development plan that our coach and
              mentor are dedicated to helping you design with their assistance.
            </div>
          </div>
          <div className="learning-grid-right">
            <img src={R2} style={{ width: "100%" }} />
          </div>
        </div>

        <div
          className="learning-grid"
          style={{ display: isLargerThan1000 ? "flex" : "none" }}
        >
          <div className="learning-grid-left">
            <div className="learning-grid-title">
              Utilizing a machine learning curation system, learn digitally.
            </div>
            <div
              className="learning-grid-text"
              style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}
            >
              The countless educational materials that are at your fingertips will
              make you happy. A machine learning curation platform from BDM helps
              our people generate customised digital learning experiences. Your
              approach to learning will be altered, and you'll be instantaneously
              connected to other talent across the world through social
              collaboration.
            </div>
          </div>
          <div className="learning-grid-right">
            <img src={R3} style={{ width: "100%" }} />
          </div>
        </div>

        <div
          className="learning-grid"
          style={{ display: isLargerThan1000 ? "none" : "flex" }}
        >
          <div className="learning-grid-left">
            <div className="learning-grid-title">
              Through innovation and technology,become a talent prepared for the
              future.
            </div>
            <div className="learning-grid-right">
              <img src={R1} style={{ width: "90%" }} />
            </div>

            <div
              className="learning-grid-text"
              style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}
            >
              We live in a digital world that is continuously changing. Our
              flexible, cutting-edge, and tech-enabled learning and development
              solutions assist you in quickly acquiring hot skills, future-ready
              skills, client-centric skills, and a digital mentality. Our learning
              platform, created especially for BDM professionals, aims to support
              the growth of our employees by providing an outstanding digital
              learning environment.
            </div>
          </div>
        </div>

        <div
          className="learning-grid"
          style={{ display: isLargerThan1000 ? "none" : "flex" }}
        >
          <div className="learning-grid-left">
            <div className="learning-grid-title">
              Make your professional journey a success.
            </div>
            <div className="learning-grid-right">
              <img src={R2} style={{ width: "90%" }} />
            </div>
            <div
              className="learning-grid-text"
              style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}
            >
              Our career milestone programmes foster our talent's aspirations for
              leadership and provide them the skills they need now to thrive and
              lead tomorrow. Through these programmes, our talent is motivated to
              manage teams and clients with empathy and encouraged to develop new
              ways of "thinking" and "doing."
            </div>
            <div
              className="learning-grid-text"
              style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}
            >
              Your job development path benefits greatly from our coaching and
              mentoring programmes. Your future character as a leader at BDM will
              be shaped by the professional development plan that our coach and
              mentor are dedicated to helping you design with their assistance.
            </div>
          </div>
        </div>

        <div
          className="learning-grid"
          style={{ display: isLargerThan1000 ? "none" : "flex" }}
        >
          <div className="learning-grid-left">
            <div className="learning-grid-title">
              Utilizing a machine learning curation system, learn digitally.
            </div>
            <div className="learning-grid-right">
              <img src={R3} style={{ width: "90%" }} />
            </div>
            <div
              className="learning-grid-text"
              style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}
            >
              The countless educational materials that are at your fingertips will
              make you happy. A machine learning curation platform from BDM helps
              our people generate customised digital learning experiences. Your
              approach to learning will be altered, and you'll be instantaneously
              connected to other talent across the world through social
              collaboration.
            </div>
          </div>
        </div>

        <div
          className="learning-title"
          style={{ color: mode === "dark" ? "white" : "black" }}
        >
          <u>Course Offerings</u>
        </div>
        <div className="grid md:grid-cols-3 gap-10 p-10 rounded-md">
          {learningData.map((data) => (
            <div key={data.img} className="bg-[#211F22] rnd-shd space-y-3 ">
              <div>
                <img src={data.img} alt="img-this" />
              </div>
              <div className="text-gray-100 p-2 text-center text-2xl font-semibold">{data.name}</div>
              <div className="text-gray-400 text-center mb-52">{data.content}</div>
              <div className="grid place-items-center p-2">
                <Link to={data.link}>
                  <button
                    className="px-10 py-2 text-sm text-white rounded-md bg-[#BC312E]"
                  >
                    View Detail
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
                <div className='l-grid'>
                    {
                        learningData.map((item, index) => {
                            return <div className='l-grid-element'>
                                <div className='l-box'>
                                    <div style={{ width: "100%", height: "100%" }}>
                                        <img src={item.img} style={{ width: "100%", height: "object-fit", borderRadius: "1rem" }} />
                                    </div>
                                    <div className='l-box-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                                        {item.name}
                                    </div>
                                    <div className='l-box-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                        {item.content}
                                    </div>
                                    <div>
                                        <Link to={item.link}>
                                            <Button color="white" backgroundColor="#BC312E" borderRadius="0.5rem" marginTop="10%">View Detail</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
                <div style={{ marginBottom: "5rem" }}>
                    <Link to="/Solution Options">
                        <Button color="white" backgroundColor="#BC312E" borderRadius="0rem" size="lg" fontWeight="500" marginTop="10%">Explore all courses</Button>
                    </Link>
                </div>
            </div> */}
      </div>
    </Layout>
  );
}
