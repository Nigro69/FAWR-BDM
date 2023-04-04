import React, { useEffect } from "react";
import i1 from "./Login/LoginImages/Login_img1.png";
import c3 from "./Login/LoginImages/z1.png";
import c4 from "./Login/LoginImages/z2.png";
import { BsChevronRight } from "react-icons/bs";
import "./Prof.css";
import Layout from "../Templates/Layout/Layout";

const LoginAdmin = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const myStyle = {
    backgroundImage: `url(${i1})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Layout>
      <div className="relative">
        <div className="absolute ff-style top-10 w-full text-center text-4xl  tracking-widest text-[#BC312E] font-sans">
          Administration Login
        </div>
        <div className="grid place-items-center" style={myStyle}>
          <div className="flex gap-40">
            <div className="h-96 w-80 p-8 transition-all ease-in-out hover:scale-105 duration-500 delay-75 rounded-lg dark:bg-[#211F22] rnd-shd">
              <img
                className="h-48 w-full object-cover"
                src={c3}
                alt="kkadsas"
              />
              <div className="font-semibold text-xl text-gray-200 tracking-widest text-center py-6 font-sans">
                HRM
              </div>
              <div className="grid place-items-center">
                <a href="https://hr-management-system-3010.firebaseapp.com/">
                  <BsChevronRight className="p-2 grid place-items-center font-bold cursor-pointer rnd-shd rounded-full bg-[#211F22] text-gray-300 h-10 w-10" />
                </a>
              </div>
            </div>
            <div className="h-96 w-80 p-8 transition-all ease-in-out hover:scale-105 duration-500 delay-75 rounded-lg dark:bg-[#211F22] rnd-shd">
              <img
                className="h-48 w-full object-cover"
                src={c4}
                alt="kkadsas"
              />
              <div className="font-semibold text-xl text-gray-200 tracking-widest text-center py-6 font-sans">
                CMS
              </div>
              <div className="grid place-items-center">
                <a href="https://content-management-system-3010.firebaseapp.com/">
                  <BsChevronRight className="p-2 grid place-items-center font-bold cursor-pointer rnd-shd rounded-full bg-[#211F22] text-gray-300 h-10 w-10" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginAdmin;
