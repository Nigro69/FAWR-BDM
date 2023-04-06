import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import { Alert, AlertIcon, Select } from "@chakra-ui/react";
import axios from "axios";
import { CloseIcon } from "@chakra-ui/icons";

function InviteAdmin({ mode }) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [platform, setPlatform] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  async function handleInvite() {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/team/inviteteam",
        {
          email,
          role,
          platform,
        }
      );
      console.log(res.data);
      setAlert(true);
    } catch (error) {
      console.log(error.message);
    }
  }
  function reset() {
    setEmail("");
    setRole("");
    setPlatform("");
  }

  return (
    <Layout>
      <div className="h-screen relative">
        <div className="absolute top-[20%] left-[30%] flex flex-col space-y-4 bg-gray-200 dark:bg-[#211F22] rnd-shd p-6 rounded-lg w-[500px]">
          <div className="flex w-full gap-3 place-items-center">
            <div className="text-gray-400 w-1/4">Email ID:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                type="text"
                value={email}
                placeholder="example@mail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <Select
            onChange={(e) => setRole(e.target.value)}
            placeholder="Select role"
          >
            <option
              className={`${
                mode === "dark"
                  ? "!bg-[#171717] !text-white"
                  : "!bg-white !text-black"
              }`}
              value="seniorhrmanager"
            >
              Senior HR Manager
            </option>
            <option
              className={`${
                mode === "dark"
                  ? "!bg-[#171717] !text-white"
                  : "!bg-white !text-black"
              }`}
              value="hrmanager"
            >
              HR Manager
            </option>
            <option
              className={`${
                mode === "dark"
                  ? "!bg-[#171717] !text-white"
                  : "!bg-white !text-black"
              }`}
              value="hr"
            >
              HR
            </option>
          </Select>
          <Select
            onChange={(e) => setPlatform(e.target.value)}
            placeholder="Select platform"
          >
            <option
              className={`${
                mode === "dark"
                  ? "!bg-[#171717] !text-white"
                  : "!bg-white !text-black"
              }`}
              value="hrm"
            >
              HRM
            </option>
            <option
              className={`${
                mode === "dark"
                  ? "!bg-[#171717] !text-white"
                  : "!bg-white !text-black"
              }`}
              value="cms"
            >
              CMS
            </option>
            <option
              className={`${
                mode === "dark"
                  ? "!bg-[#171717] !text-white"
                  : "!bg-white !text-black"
              }`}
              value="bcs"
            >
              BCS
            </option>
            <option
              className={`${
                mode === "dark"
                  ? "!bg-[#171717] !text-white"
                  : "!bg-white !text-black"
              }`}
              value="bdm"
            >
              BDM
            </option>
          </Select>
          <div>
            <button
              onClick={handleInvite}
              className=" rounded-xl text-sm text-white bg-[#BC312E] border border-[#BC312E] px-4 py-1 "
            >
              Invite
            </button>
          </div>
        </div>

        {alert && (
          <Alert className="absolute top-0 text-black flex items-center justify-between" status="success">
            <div className="flex items-center">
              <AlertIcon />
              Invite sent succesfully to {email}
            </div>
            <button onClick={() => {setAlert(false); reset();}}>
              <CloseIcon />
            </button>
          </Alert>
        )}
      </div>
    </Layout>
  );
}

export default InviteAdmin;
