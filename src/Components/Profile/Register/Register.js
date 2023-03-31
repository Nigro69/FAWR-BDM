import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../../contexts/ContextProvider";
import {
  getRole,
  getToken,
  storeRole,
  storeToken,
} from "../../../LocalStorage";
import "./Register.css";

import Register_img1 from "./RegisterImages/Register_img1.png";
import Register_img2 from "./RegisterImages/Register_img2.png";

import L1 from "./RegisterImages/1.png";
import L2 from "./RegisterImages/2.png";
import L3 from "./RegisterImages/3.png";
import L4 from "./RegisterImages/4.png";

import { NavLink as Link } from "react-router-dom";

import { Input, Button } from "@chakra-ui/react";
import { BarLoader } from "react-spinners";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { BsGoogle } from "react-icons/bs";

export default function Register() {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const {
    setauthToken,
    setAdmin,
    setmanager,
    seteditor,
    setguestWriter,
    setprofilePopup,
    setcandidateModel,
  } = useStateContext();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("admin");
  const [errorMessage, seterrorMessage] = useState("");
  const [success, setsuccess] = useState(false);
  const [isPending, setisPending] = useState(false);

  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [erroeMessage, seterroeMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setisPending(true);
    const data = { username, email, password };
    // getMyResult(username, email, password);
    signUp(email, password, username);
    setemail("");
    setpassword("");
    setusername("");
  };

  const signUp = async (email, password, username) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);
      await updateProfile(auth.currentUser, { displayName: username });
      setsuccess(true);
      storeToken(res.user.accessToken);
      storeRole(res.user.displayName);
      setcandidateModel(
        {
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          email: res.user.email,
          image: "",
        }
      )
      seterrorMessage(false);
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
          setprofilePopup(true);
          break;

        default:
          break;
      }

      navigate("/");
      setisPending(false);
      seterrorMessage("");
      setisPending(false);
    } catch (error) {
      console.log(error.message);
      const message = error.message;
      setisPending(false);
      seterrorMessage(message.slice(9));
    }
  };

  const handlegooglelogin = () => {
    googlelogIn();
    setisPending(true);
  }

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
      setcandidateModel(
        {
          firstName: res.user.displayName,
          middleName: "",
          lastName: "",
          email: res.user.email,
          image: "",
        }
      )

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
    <div className="register-outer">
      <div className="register-bgimg">
        <div className="register-box relative">
          {isPending && (
            <div className="absolute top-1 rounded-t-xl left-0">
              <BarLoader color="#BC312E" width={600} />
            </div>
          )}
          <div className="register-box-title" style={{ color: "white" }}>
            Register
          </div>

          <div className="register-row">
            <Input
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              placeHolder="First name"
              _placeholder={{ marginLeft: "5%", color: "white" }}
              borderColor="#211F22"
              borderBottomColor="white"
              borderRadius="0%"
              color="white"
              _hover={{ borderColor: "none" }}
              focusBorderColor="#211F22"
              _focus={{ borderBottomColor: "white" }}
              marginRight="2%"
            />

            <Input
              value={middleName}
              onChange={(e) => setmiddleName(e.target.value)}
              placeHolder="Middle name (Optional)"
              _placeholder={{ marginLeft: "5%", color: "white" }}
              borderColor="#211F22"
              borderBottomColor="white"
              borderRadius="0%"
              color="white"
              _hover={{ borderColor: "none" }}
              focusBorderColor="#211F22"
              _focus={{ borderBottomColor: "white" }}
              marginLeft="2%"
            />
          </div>

          <div className="register-row">
            <Input
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              placeHolder="Last name"
              _placeholder={{ marginLeft: "5%", color: "white" }}
              borderColor="#211F22"
              borderBottomColor="white"
              borderRadius="0%"
              color="white"
              _hover={{ borderColor: "none" }}
              focusBorderColor="#211F22"
              _focus={{ borderBottomColor: "white" }}
              marginRight="2%"
            />

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
              marginLeft="2%"
            />
          </div>

          <div className="register-row">
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
              marginRight="2%"
            />

            <Input
              placeHolder="Confirm Password"
              type="password"
              _placeholder={{ marginLeft: "5%", color: "white" }}
              borderColor="#211F22"
              borderBottomColor="white"
              borderRadius="0%"
              color="white"
              _hover={{ borderColor: "none" }}
              focusBorderColor="#211F22"
              _focus={{ borderBottomColor: "white" }}
              marginLeft="2%"
            />
          </div>

          <div className="register-bottom">
            <div className="register-left">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  onClick={handleSubmit}
                  disabled={isPending}
                  color="white"
                  backgroundColor="#BC312E"
                >
                  Register
                </Button>
              </div>

              <Link to="/Login">
                <div className="register-newuser">
                  Already registered?
                  <label style={{ color: "#BC312E" }}> Login</label>
                </div>
              </Link>
            </div>

            <div className="register-right">
              <div className="py-4 px-2 w-full">
                <button className="px-9 py-2 w-full rounded-md bg-[#211F22] text-gray-400 place-items-center rnd-shd flex gap-4" onClick={handlegooglelogin}><BsGoogle /> <div className="text-sm text-gray-400 font-semibold font-sans">Continue with Google</div></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
