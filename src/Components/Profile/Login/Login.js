import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getRole,
  getToken,
  storeRole,
  storeToken,
} from "../../../LocalStorage";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import Login_img1 from "./LoginImages/Login_img1.png";
import Login_img2 from "./LoginImages/Login_img2.png";

import L1 from "./LoginImages/1.png";
import L2 from "./LoginImages/2.png";
import L3 from "./LoginImages/3.png";
import L4 from "./LoginImages/4.png";

import { NavLink as Link } from "react-router-dom";

import { Input, Button } from "@chakra-ui/react";
import { BarLoader } from "react-spinners";
import { BsGoogle } from "react-icons/bs";

export default function Login() {
  const {
    authToken,
    setauthToken,
    setAdmin,
    setmanager,
    seteditor,
    setguestWriter,
    setcandidateModel,
  } = useStateContext();
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isPending, setisPending] = useState(false);
  const [erroeMessage, seterroeMessage] = useState(null);
  const [forgetPassword, setforgetPassword] = useState(false);
  const [resetEmail, setresetEmail] = useState("");
  const [resetMessage, setresetMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setisPending(true);
    logIn(email, password);
    setemail("");
    setpassword("");
  };

  const logIn = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
      storeToken(res.user.accessToken);
      storeRole(res.user.displayName);
      seterroeMessage(null);
      const yash = getToken();
      setauthToken(yash);
      const barman = getRole();

      switch (barman) {
        case "admin":
          setAdmin(true);
          break;
        case "manager":
          setmanager(true);
          break;
        case "editor":
          seteditor(true);
          break;
        case "writer":
          setguestWriter(true);
          break;

        default:
          break;
      }

      navigate("/");
      setisPending(false);
    } catch (error) {
      console.log(error);
      setisPending(false);
      const message = error.message;
      seterroeMessage(message.slice(9));
    }
  };

  useEffect(() => {
    const yash = getToken();
    setauthToken(yash);
    const barman = getRole();
    switch (barman) {
      case "admin":
        setAdmin(true);
        break;
      case "manager":
        setmanager(true);
        break;
      case "editor":
        seteditor(true);
        break;
      case "writer":
        setguestWriter(true);
        break;

      default:
        break;
    }
  }, [authToken, setauthToken]);

  const resetPassword = async () => {
    try {
      const res = await sendPasswordResetEmail(auth, resetEmail);
      setresetMessage(true);
      setresetEmail("");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlegooglelogin = () => {
    googlelogIn();
    setisPending(true);
  };

  const googlelogIn = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res.user);
      storeToken(res.user.accessToken);
      storeRole("admin");
      seterroeMessage(false);
      const yash = getToken();
      setauthToken(yash);
      setAdmin(true);
      setcandidateModel({
        firstName: res.user.displayName,
        middleName: "",
        lastName: "",
        email: res.user.email,
        image: "",
      });

      navigate("/");
      setisPending(false);
    } catch (error) {
      console.log(error);
      seterroeMessage(true);
      setisPending(false);
    }
  };
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="login-outer ">
      <div className="login-bgimg relative ">
        {!forgetPassword && (
          <div className="absolute md:right-20 top-24 px-10 md:px-4  md:w-1/4">
            {erroeMessage && (
              <div className="p-4 my-2 border border-red-300 rounded-md bg-[#FF3131] text-sm bg-opacity-40 text-white">
                {erroeMessage}
              </div>
            )}
            <div className="space-y-4 w-full relative rounded-lg border border-gray-400 bg-opacity-80 bg-[#211F22] py-4 px-7">
              {isPending && (
                <div className="absolute top-1 rounded-t-xl left-0">
                  <BarLoader color="#BC312E" width={296} />
                </div>
              )}
              <div className="login-box-title" style={{ color: "white" }}>
                Login
              </div>

              <Input
                placeHolder="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                _placeholder={{ marginLeft: "5%", color: "white" }}
                borderColor="#211F22"
                borderBottomColor="white"
                borderRadius="0%"
                color="white"
                _hover={{ borderColor: "none" }}
                focusBorderColor="#211F22"
                _focus={{ borderBottomColor: "white" }}
              />

              <Input
                placeHolder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                _placeholder={{ marginLeft: "5%", color: "white" }}
                borderColor="#211F22"
                borderBottomColor="white"
                borderRadius="0%"
                color="white"
                _hover={{ borderColor: "none" }}
                focusBorderColor="#211F22"
                _focus={{ borderBottomColor: "white" }}
              />
              <div
                onClick={() => setforgetPassword(true)}
                className="login-forget cursor-pointer"
              >
                Forgot Password
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  disabled={isPending}
                  onClick={handleSubmit}
                  color="white"
                  backgroundColor="#BC312E"
                >
                  Login
                </Button>
              </div>

              {/* <div className="py-4 w-full">
            <button className="px-7 py-2 w-full rounded-md bg-[#211F22] text-gray-400 place-items-center rnd-shd flex gap-4" onClick={handlegooglelogin}><BsGoogle /> <div className="text-sm text-gray-400 font-semibold font-sans">Continue with Google</div></button>
          </div> */}

              <div className="login-newuser" style={{ width: "100%" }}>
                <Link to="/register-candidate">
                  <label style={{ width: "100%", cursor: "pointer" }}>
                    New User?{" "}
                    <label style={{ color: "#BC312E", cursor: "pointer" }}>
                      {" "}
                      Register
                    </label>
                  </label>
                </Link>
              </div>
            </div>
          </div>
        )}
        {forgetPassword && (
          <div className="absolute md:right-20 top-24 px-10 md:px-4  md:w-1/4">
            {resetMessage && (
              <div className="p-4 my-2 border border-green-300 rounded-md bg-green-600 text-sm bg-opacity-40 text-white">
                A password reset link has been send to your email address.
              </div>
            )}
            <div className="space-y-4 w-full rounded-lg border border-gray-400 bg-opacity-80 bg-[#211F22] py-4 px-7">
              <div className="login-box-title" style={{ color: "white" }}>
                Reset Password
              </div>
              <Input
                placeHolder="Enter your Email"
                value={resetEmail}
                onChange={(e) => setresetEmail(e.target.value)}
                _placeholder={{ marginLeft: "5%", color: "white" }}
                borderColor="#211F22"
                borderBottomColor="white"
                borderRadius="0%"
                color="white"
                _hover={{ borderColor: "none" }}
                focusBorderColor="#211F22"
                _focus={{ borderBottomColor: "white" }}
              />
              <div>
                <button
                  onClick={resetPassword}
                  className="font-semibold mt-5 text-sm text-white bg-[#BC312E] rounded-md px-6 py-2 w-full text-center"
                >
                  Reset Password
                </button>
              </div>
              <div
                className="p-4 text-white font-bold text-sm text-right cursor-pointer"
                onClick={() => {setforgetPassword(false); setresetMessage(false); seterroeMessage(null);}}
              >
                Login
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
