import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Home from "./Home";
import Browse from "./Browse";
import Applied from "./Applied";
import Saved from "./Saved";
import Profile from "./Profile";
import Settings from "./Settings";
import EditProfile from "./EditProfile";
import EditCandidateProfile from "./EditCandidateProfile";
import Layout from "../Layout/Layout";
import { useStateContext } from "../../contexts/ContextProvider";

const ProfileHome = () => {
  const {mode} = useStateContext()
  const [tab, settab] = useState(1);
  const [sidebartoggle, setsidebartoggle] = useState(false);

  const getId = (id) => {
    settab(id);
  };

  return (
    <Layout>
        <div className="flex">
          <div className={` fixed h-full ${sidebartoggle ? "w-10" : "w-52"}`}>
            <Sidebar
              tg={setsidebartoggle}
              tgprop={sidebartoggle}
              mode={mode}
              func={getId}
            />
          </div>
          <div
            className={`min-h-full  w-full ${
              sidebartoggle ? "ml-10" : "ml-52"
            } `}
          >
            <div className="sticky bg-white z-30  top-0 w-full ">
              <Navbar mode={mode} />
            </div>
            <div>
              {tab === 1 && (
                <div>
                  <Home func={getId} />
                </div>
              )}
              {tab === 2 && (
                <div>
                  <Profile func={getId} />
                </div>
              )}
              {tab === 3 && (
                <div>
                  <Browse />
                </div>
              )}
              {tab === 4 && (
                <div>
                  <Saved />
                </div>
              )}
              {tab === 5 && (
                <div>
                  <Applied />
                </div>
              )}
              {tab === 7 && (
                <div>
                  <Settings />
                </div>
              )}
              {tab === 8 && (
                <div>
                  <EditCandidateProfile />
                </div>
              )}
            </div>
          </div>
        </div>
    </Layout>
  );
};

export default ProfileHome;
