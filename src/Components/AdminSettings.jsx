import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { getRole, getToken, removeRole, removeToken } from "../LocalStorage";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { FiLogOut } from "react-icons/fi";
import { FiAlertTriangle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout/Layout"
import axios from "axios";
import { Alert, AlertIcon, Select } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
function AdminSettings() {
  const { setauthToken, setAdmin, setmanager, seteditor, setguestWriter } =
    useStateContext();

  const navigate = useNavigate();

  const [tab, settab] = useState(1);
  const [role, setrole] = useState("");
  const [confirmation, setconfirmation] = useState(false);
  const [email, setemail] = useState(null);
  const [department, setdepartment] = useState("");
  const [alert, setAlert] = useState(false);

  const logOut = async () => {
    try {
      const res = await signOut(auth);
      removeToken();
      removeRole();
      const yash = getToken();
      setauthToken(yash);
      const barman = getRole();
      setAdmin(false);
      setmanager(false);
      seteditor(false);
      setguestWriter(false);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogOut = () => {
    logOut();
  };

  const handleConfirm = ()=> {
    handleInvite();
    setconfirmation(false);
  }

  function reset() {
    setemail("");
    setrole("");
    setdepartment("");
  }

  async function handleInvite() {
    try {
      const res = await axios.post(
        "https://bdmhrmnode.bigbros.link/api/v1/team/inviteteam",
        {
          email,
          role,
          platform:department,
        }
      );
      console.log(res.data);
      setAlert(true);
      console.log(alert);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Layout>
    <div className="px-14 py-6">
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
      <div className="flex justify-between bg-[#2B292C] py-6 px-14 place-items-center rounded-md">
        <div className="flex gap-5">
          <button
            onClick={() => settab(1)}
            className={` font-semibold p-2  font-sans ${
              tab === 1
                ? "border-b-2 border-b-[#BC312E] text-gray-100"
                : "text-gray-500"
            }`}
          >
            Invite
          </button>
          <button
            onClick={() => settab(2)}
            className={` font-semibold p-2  font-sans ${
              tab === 2
                ? "border-b-2 border-b-[#BC312E] text-gray-100"
                : "text-gray-500"
            }`}
          >
            Other
          </button>
        </div>
        <div
          className="text-gray-100 font-semibold flex place-items-center gap-2 cursor-pointer hover:bg-[#BC312E] rounded-md px-4 py-2"
          onClick={handleLogOut}
        >
          <FiLogOut /> Log out
        </div>
      </div>
      <div className="bg-[#2B292C] py-6 px-16 rounded-md my-1">
        <div className="flex justify-between place-items-center">
          <div>
            <div className="text-2xl text-gray-100 font-sans tracking-wider font-semibold">
              Add People to Collaborate
            </div>
            <div className="text-sm text-gray-400 p-2">
              Give people access to this site and assign them roles.
            </div>
          </div>
          <div className="flex gap-5 place-items-center">
            <button className="text-sm font-semibold text-gray-400 px-4 py-2 rounded-xl">
              Cancel
            </button>
            <button
              onClick={() => setconfirmation(true)}
              className="text-sm font-semibold px-4 py-2 rounded-xl text-gray-100 bg-[#BC312E]"
            >
              Send Invite
            </button>
          </div>
        </div>
        <div className="my-10">
          <div className="w-full">
            <div className="text-gray-100 font-semibold font-sans">
              Email <label className="text-[#BC312E]">*</label>
            </div>
            <div className="text-sm text-gray-400 pb-2 pt-1">
              Add email of a person you want to invite for a specific role.
            </div>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              className="focus:outline-[#BC312E]  w-2/4 bg-[#211F22] text-gray-100 py-2 px-5 rounded-md"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div className="text-gray-400 font-sans tracking-wide font-semibold">
          HR Management System Roles
        </div>
        <div className="my-4  border rounded-md space-y-1 border-gray-400">
          <div className="flex rounded-t-md gap-6 place-items-center py-3 px-6 hover:bg-[#211F22]">
            <input
              type="checkbox"
              checked={role === "senior hr manager"}
              onChange={() => {
                setrole("senior hr manager");
                setdepartment("hrm");
              }}
              className="rounded-md accent-[#BC312E]"
            />
            <div>
              <div className="text-lg font-semibold text-gray-100">
                Senior HR Manager
              </div>
              <div className="text-sm text-gray-400 py-1">
                Has access to release offer letter, schedule the interview,
                finalize and onboard the candidate{" "}
              </div>
            </div>
          </div>
          <div className="flex gap-6 place-items-center py-3 px-6 hover:bg-[#211F22]">
            <input
              type="checkbox"
              checked={role === "hr manager"}
              onChange={() => {
                setrole("hr manager");
                setdepartment("hrm");
              }}
              className="rounded-md accent-[#BC312E]"
            />
            <div>
              <div className="text-lg font-semibold text-gray-100">
                HR Manager
              </div>
              <div className="text-sm text-gray-400 py-1">
                Has access to schedule or cancel the interview, take the
                interview, finalize and onboard the candidate{" "}
              </div>
            </div>
          </div>
          <div className="flex gap-6 place-items-center py-3 px-6 hover:bg-[#211F22] rounded-b-md">
            <input
              type="checkbox"
              checked={role === "assistant hr manager"}
              onChange={() => {
                setrole("assistant hr manager");
                setdepartment("hrm");
              }}
              className="rounded-md accent-[#BC312E]"
            />
            <div>
              <div className="text-lg font-semibold text-gray-100">
                Assistant HR Manager
              </div>
              <div className="text-sm text-gray-400 py-1">
                This role privilege to take the assign interview of candidates.{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-400 font-sans tracking-wide font-semibold mt-10">
          Content Management System Roles
        </div>
        <div className="my-4  border rounded-md space-y-1 border-gray-400">
          <div className="flex rounded-t-md gap-6 place-items-center py-3 px-6 hover:bg-[#211F22]">
            <input
              type="checkbox"
              checked={role === "manager"}
              onChange={() => {
                setrole("manager");
                setdepartment("cms");
              }}
              className="rounded-md accent-[#BC312E]"
            />
            <div>
              <div className="text-lg font-semibold text-gray-100">Manager</div>
              <div className="text-sm text-gray-400 py-1">
                Has access to release offer letter, schedule the interview,
                finalize and onboard the candidate{" "}
              </div>
            </div>
          </div>
          <div className="flex gap-6 place-items-center py-3 px-6 hover:bg-[#211F22]">
            <input
              type="checkbox"
              checked={role === "editor"}
              onChange={() => {
                setrole("editor");
                setdepartment("cms");
              }}
              className="rounded-md accent-[#BC312E]"
            />
            <div>
              <div className="text-lg font-semibold text-gray-100">Editor</div>
              <div className="text-sm text-gray-400 py-1">
                Has access to release offer letter, schedule the interview,
                finalize and onboard the candidate{" "}
              </div>
            </div>
          </div>
          <div className="flex gap-6 place-items-center py-3 px-6 hover:bg-[#211F22] rounded-b-md">
            <input
              type="checkbox"
              checked={role === "writer"}
              onChange={() => {
                setrole("writer");
                setdepartment("cms");
              }}
              className="rounded-md accent-[#BC312E]"
            />
            <div>
              <div className="text-lg font-semibold text-gray-100">Writer</div>
              <div className="text-sm text-gray-400 py-1">
                Has access to release offer letter, schedule the interview,
                finalize and onboard the candidate{" "}
              </div>
            </div>
          </div>
          <div className="flex gap-6 place-items-center py-3 px-6 hover:bg-[#211F22] rounded-b-md">
            <input
              type="checkbox"
              checked={role === "guest writer"}
              onChange={() => {
                setrole("guest writer");
                setdepartment("cms");
              }}
              className="rounded-md accent-[#BC312E]"
            />
            <div>
              <div className="text-lg font-semibold text-gray-100">
                Guest Writer
              </div>
              <div className="text-sm text-gray-400 py-1">
                Has access to release offer letter, schedule the interview,
                finalize and onboard the candidate{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {confirmation && (
        <div className="absolute inset-0 bg-[#2B292C]/30 z-40 backdrop-blur-sm ">
          <div className="h-screen w-full grid place-items-center">
            <div className="rounded-md p-6 bg-[#211F22] w-1/4 mx-auto my-auto">
              <div className="grid place-items-center">
                <FiAlertTriangle className="bg-[#BC312E] p-2 rounded-full h-20 w-20" />
              </div>
              <div className="text-gray-400 font-semibold text-2xl text-center">Are you sure ?</div>
              <div className="text-gray-400 text-center font-semibold p-2">
                You want to appoint <label className="font-bold text-gray-200 text-lg underline underline-offset-2"> {email}</label> to contribute as{" "}
                <label className="font-bold text-gray-200 text-lg">{role}</label>.
              </div>
              <div className="grid place-items-center my-4">
                <div className="flex place-items-center gap-6">
                <button onClick={()=>setconfirmation(false)} className="text-sm font-semibold px-4 py-2 bg-[#2B292C] rounded-md text-gray-400">Cancel</button>
                <button onClick={handleConfirm} className="text-sm font-semibold px-4 py-2 rounded-md bg-[#BC312E] text-gray-200">Confirm</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </Layout>
  );
}

export default AdminSettings;
