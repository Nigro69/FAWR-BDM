import React, { useEffect, useState } from "react";

import i1 from "./Register/RegisterImages/Register_img1.png";
import "./Prof.css";
import { useNavigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import { codeData, monthsName } from "./data";
import { useStateContext } from "../../contexts/ContextProvider";
import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getRole, getToken, storeRole, storeToken } from "../../LocalStorage";
import axios from "axios";
import Layout from "../Templates/Layout/Layout";

function Register2() {
  const navigate = useNavigate();

  const {
    setauthToken,
    setAdmin,
    setmanager,
    seteditor,
    setguestWriter,
    setprofilePopup,
    setcandidateModel,
  } = useStateContext();

  const [drop, setdrop] = useState(0);
  const [intrest, setintrest] = useState(null);
  const [title, settitle] = useState(null); //
  const [number, setnumber] = useState(null);
  const [month, setmonth] = useState(null); //
  const [preferredLocation, setpreferredLocation] = useState(null);
  const [currentLocation, setcurrentLocation] = useState(null); //
  const [file, setFile] = useState(null);
  const [skills, setskills] = useState([]);
  const [locations, setlocations] = useState([]);
  const [firstName, setfirstName] = useState(""); //
  const [middleName, setmiddleName] = useState(""); //
  const [lastName, setlastName] = useState(""); //
  const [password, setpassword] = useState("");
  const [email, setemail] = useState(""); //
  const [phoneNumber, setphoneNumber] = useState(""); //
  const [errorMessage, seterrorMessage] = useState("");
  const [success, setsuccess] = useState(false);
  const [isPending, setisPending] = useState(false);
  const [emailverified, setemailverified] = useState(false);
  const [agree, setagree] = useState(false);
  const [verificationPending, setverificationPending] = useState(false);
  const [day, setday] = useState(null);
  const [year, setyear] = useState(null);
  const [pancard, setpancard] = useState("");
  const [pancardValidate, setpancardValidate] = useState(true);
  const [experience, setexperience] = useState(null);

  const pancardValidation = (text) => {
    let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

    if (regex.test(text)) {
      setpancardValidate(true);
      setpancard(text);
    } else {
      setpancardValidate(false);
    }
  };

  const addSkills = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setskills([...skills, event.target.value]);
      event.target.value = "";
    }
  };

  const deleteSkill = (index) => {
    setskills([...skills.filter((skill) => skills.indexOf(skill) !== index)]);
  };
  const addlocation = (val) => {
    setlocations([...locations, val]);
  };

  const deletelocation = (index) => {
    setlocations([
      ...locations.filter((location) => locations.indexOf(location) !== index),
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisPending(true);
    const username = firstName + " " + middleName + " " + lastName;
    signUp(email, password, username);
    setemailverified(true);
  };

  const signUp = async (email, password, username) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);
      handleRegister(res.user.uid);
      await updateProfile(auth.currentUser, { displayName: username });
      const response = await sendEmailVerification(auth.currentUser);
      console.log(response);
      storeToken(res.user.accessToken);

      setisPending(false);
      seterrorMessage("");
    } catch (error) {
      console.log(error.message);
      const message = error.message;
      setisPending(false);
      seterrorMessage(message.slice(9));
    }
  };

  async function handleRegister(id) {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/v1/profile/", {
        id: id,
        name: `${firstName} ${middleName} ${lastName}`,
        email: email,
        address: "eigqeurigurgergbuerg", //
        phonenumber: phoneNumber,
        stage: "Final",
        appled_date: "2nd March",
        job_title: title,
        age: new Date().getFullYear() - year - 1,
        origin: currentLocation,
        status: "guergurg",
        snooze: "ughuergh58ug",
        resume: "Link Here",
        expected_salary: "2000000",
        current_salary: "1000000",
        experience: experience,
        highest_qualification: "wfff",
        website: "Link here",
        linkedin: "link here",
        image: "link here",
        skills: [1],
      });
      console.log(res.data);
      setisPending(false);
    } catch (error) {
      console.log(error.message);
      seterrorMessage(error.message);
      setisPending(false);
    }
  }

  const check = async () => {
    setverificationPending(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
      verify();
    } catch (error) {
      setverificationPending(false);
    }
  };

  const verify = () => {
    console.log(auth.currentUser && auth.currentUser.emailVerified);
    if (auth.currentUser && auth.currentUser.emailVerified) {
      setsuccess(true);
      setcandidateModel({
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        email: auth.currentUser.email,
        phoneNumber: number + phoneNumber,
        image: "",
        dob: `${day}` + " " + month + " " + `${year}`,
        pancard: pancard,
        skills: skills,
        resume: file,
      });
      seterrorMessage(false);
      setAdmin(true);
      const yash = getToken();
      setauthToken(yash);
      setverificationPending(false);
      navigate("/Profile-Home");
    } else {
      setverificationPending(false);
    }
  };

  const myStyle = {
    backgroundImage: `url(${i1})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Layout>
      <div className="grid place-items-center py-16">
        {!emailverified && (
          <div
            className={`dark:bg-[#211F22] flex gap-8 rnd-shd rounded-lg w-5/6 p-7`}
          >
            <div className="w-3/4">
              <div className="p-4 text-2xl font-sans font-semibold tracking-wider text-gray-100 text-center ">
                Create a Profile with BDM Careers
              </div>
              <hr class="h-1.5 mx-auto mb-4 bg-[#BC312E] border-0 rounded w-28  "></hr>
              <div className="text-sm text-gray-400 grid place-items-center">
                <div className="flex gap-2">
                  {" "}
                  <div> Already have an account?</div>{" "}
                  <div
                    onClick={() => navigate("/Login")}
                    className="text-[#BC312E] cursor-pointer"
                  >
                    Login
                  </div>
                </div>{" "}
              </div>
              <div className="space-y-2 my-5">
                <div className="text-gray-400">
                  Area Of Interest <label className="text-red-600">*</label>
                </div>
                <div className="relative  w-1/4">
                  <div
                    onClick={() => {
                      setintrest("Sales and Marketing");
                      setdrop(0);
                    }}
                    className="text-center p-2 text-sm bg-[#211F22] cursor-pointer text-gray-400"
                  >
                    Sales and Marketing
                  </div>
                  <div
                    onClick={() => {
                      setintrest("Engineering");
                      setdrop(0);
                    }}
                    className="text-center p-2 text-sm bg-[#211F22] cursor-pointer text-gray-400"
                  >
                  Engineering
                  </div>
                  <div
                    onClick={() => {
                      setintrest("Design");
                      setdrop(0);
                    }}
                    className="text-center p-2 text-sm bg-[#211F22] cursor-pointer text-gray-400"
                  >
                    Design
                  </div>
                  {drop === 1 && (
                    <div className="absolute w-full border border-gray-400 rounded-md grid grid-cols-1 divide-y divide-gray-400">
                      <div
                        onClick={() => {
                          setintrest("IT");
                          setdrop(0);
                        }}
                        className="text-center p-2 text-sm bg-[#211F22] cursor-pointer text-gray-400"
                      >
                        IT
                      </div>
                      <div
                        onClick={() => {
                          setintrest("Engineering");
                          setdrop(0);
                        }}
                        className="text-center p-2 text-sm bg-[#211F22] cursor-pointer text-gray-400"
                      >
                        Engineering
                      </div>
                      <div
                        onClick={() => {
                          setintrest("Marketing");
                          setdrop(0);
                        }}
                        className="text-center p-2 text-sm bg-[#211F22] cursor-pointer text-gray-400"
                      >
                        Marketing
                      </div>
                      <div
                        onClick={() => {
                          setintrest("Sales");
                          setdrop(0);
                        }}
                        className="text-center p-2 text-sm bg-[#211F22] cursor-pointer text-gray-400"
                      >
                        Sales
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-2 my-5">
                <div className="text-gray-400">
                  Experiance <label className="text-red-600">*</label>
                </div>
                <input
                  type="number"
                  placeholder="years"
                  value={experience}
                  onChange={(e) => setexperience(e.target.value)}
                  className="focus:outline-0 w-3/4 text-sm bg-[#211F22] px-3 py-2 rounded-md border border-gray-400 text-gray-400"
                />
              </div>
              <div className="space-y-2 my-5">
                <div className="text-gray-400">
                  Email Address<label className="text-red-600">*</label>
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="focus:outline-0 w-3/4 text-sm bg-[#211F22] px-3 py-2 rounded-md border border-gray-400 text-gray-400"
                />
              </div>
              <div className="space-y-2 my-5">
                <div className="text-gray-400">
                  Password<label className="text-red-600">*</label>
                </div>
                <input
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  className="focus:outline-0 w-3/4 text-sm bg-[#211F22] px-3 py-2 rounded-md border border-gray-400 text-gray-400"
                />
              </div>
              <div className="space-y-2 my-5">
                <div className="text-gray-400">
                  Confirm Password<label className="text-red-600">*</label>
                </div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="focus:outline-0 w-3/4 text-sm bg-[#211F22] px-3 py-2 rounded-md border border-gray-400 text-gray-400"
                />
              </div>
              <div className="space-y-2 my-5">
                <div className="text-gray-400">
                  Title<label className="text-red-600">*</label>
                </div>
                <div className="relative  w-1/4">
                  <div
                    onClick={() => setdrop(drop === 2 ? 0 : 2)}
                    className="flex justify-between place-items-center text-sm bg-[#211F22] px-3 py-2 rounded-md border border-gray-400 text-gray-400"
                  >
                    <div>{title === null ? "Select" : title} </div>
                    <div>
                      <BsChevronDown />
                    </div>
                  </div>
                  {drop === 2 && (
                    <div className="absolute w-full border border-gray-400 rounded-md grid grid-cols-1 divide-y divide-gray-400">
                      <div
                        onClick={() => {
                          settitle("Dr.");
                          setdrop(0);
                        }}
                        className="text-center p-2 text-sm bg-[#211F22] cursor-pointer text-gray-400"
                      >
                        Dr.
                      </div>
                      <div
                        onClick={() => {
                          settitle("Mr.");
                          setdrop(0);
                        }}
                        className="text-center p-2 text-sm bg-[#211F22] cursor-pointer text-gray-400"
                      >
                        Mr.
                      </div>
                      <div
                        onClick={() => {
                          settitle("Ms.");
                          setdrop(0);
                        }}
                        className="text-center p-2 text-sm bg-[#211F22] cursor-pointer text-gray-400"
                      >
                        Ms.
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-5 w-full">
                <div className="space-y-2 my-5 w-2/4">
                  <div className="text-gray-400">
                    First Name<label className="text-red-600">*</label>
                  </div>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                    className="focus:outline-0 w-full text-sm bg-[#211F22] px-3 py-2 rounded-md border border-gray-400 text-gray-400"
                  />
                </div>
                <div className="space-y-2 my-5 w-2/4">
                  <div className="text-gray-400">Middle Name</div>
                  <input
                    type="text"
                    placeholder="Middle Name (Optional)"
                    value={middleName}
                    onChange={(e) => setmiddleName(e.target.value)}
                    className="focus:outline-0 w-full text-sm bg-[#211F22] px-3 py-2 rounded-md border border-gray-400 text-gray-400"
                  />
                </div>
              </div>
              <div className="space-y-2 my-5">
                <div className="text-gray-400">
                  Last Name<label className="text-red-600">*</label>
                </div>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                  className="focus:outline-0 w-3/4 text-sm bg-[#211F22] px-3 py-2 rounded-md border border-gray-400 text-gray-400"
                />
              </div>
              <div className="space-y-2 my-5">
                <div className="text-gray-400">
                  Contact Number<label className="text-red-600">*</label>
                </div>
                <div className="flex w-2/4">
                  <div className="relative  w-5/12">
                    <div
                      onClick={() => setdrop(drop === 3 ? 0 : 3)}
                      className="flex justify-between place-items-center text-sm bg-[#211F22] px-3 py-2 rounded-l-md border border-gray-400 text-gray-400"
                    >
                      <div>{number === null ? "Country Code" : number} </div>
                      <div>
                        <BsChevronDown />
                      </div>
                    </div>
                    {drop === 3 && (
                      <div className="absolute z-10 w-full border max-h-40 overflow-auto border-gray-400 rounded-md grid grid-cols-1 divide-y divide-gray-400">
                        {codeData &&
                          codeData.map((data) => (
                            <div
                              key={data.dial_code}
                              onClick={() => {
                                setnumber(
                                  `${data.dial_code} ${" "} ${data.name} `
                                );
                                setdrop(0);
                              }}
                              className="text-center p-2 text-sm bg-[#211F22] cursor-pointer text-gray-400"
                            >
                              {data.dial_code} {data.name}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                  <div className="w-7/12">
                    <input
                      type="number"
                      placeholder="Contact Number"
                      value={phoneNumber}
                      onChange={(e) => setphoneNumber(e.target.value)}
                      className="focus:outline-0 w-full text-sm bg-[#211F22] px-3 py-2 rounded-r-md border border-gray-400 text-gray-400"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2 my-5">
                <div className="text-gray-400">
                  Date of Birth <label className="text-red-600">*</label>
                </div>
                <div className="grid grid-cols-3 gap-5">
                  <div className="relative  w-full">
                    <div
                      onClick={() => setdrop(drop === 4 ? 0 : 4)}
                      className="flex justify-between place-items-center text-sm bg-[#211F22] px-3 py-2 rounded-md border border-gray-400 text-gray-400"
                    >
                      <div>{month === null ? "Month" : month} </div>
                      <div>
                        <BsChevronDown />
                      </div>
                    </div>
                    {drop === 4 && (
                      <div className="absolute z-10 max-h-40 overflow-auto w-full border border-gray-400 rounded-md grid grid-cols-1 divide-y divide-gray-400">
                        {monthsName.map((month) => (
                          <div
                            onClick={() => {
                              setmonth(month.name);
                              setdrop(0);
                            }}
                            className="text-center p-2 text-sm bg-[#211F22] cursor-pointer text-gray-400"
                          >
                            {month.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="number"
                      placeholder="Day"
                      value={day}
                      onChange={(e) => setday(e.target.value)}
                      className="focus:outline-0 w-full text-sm bg-[#211F22] px-3 py-2 rounded-md border border-gray-400 text-gray-400"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="number"
                      placeholder="year"
                      value={year}
                      onChange={(e) => setyear(e.target.value)}
                      className="focus:outline-0 w-full text-sm bg-[#211F22] px-3 py-2 rounded-md border border-gray-400 text-gray-400"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2 my-5">
                <div className="text-gray-400">
                  Pan Card Number<label className="text-red-600">*</label>
                  {!pancardValidate && (
                    <label className="text-red-600 text-sm italic">
                      Please enter valid pancard number
                    </label>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Pan Card Number"
                  onChange={(e) => pancardValidation(e.target.value)}
                  className={`focus:outline-0 uppercase w-3/4 text-sm bg-[#211F22] px-3 py-2 rounded-md border border-gray-400 text-gray-400 ${
                    pancardValidate
                      ? "border border-gray-400"
                      : "border-2 border-red-600"
                  }`}
                />
              </div>
              <div className="space-y-2 my-5">
                <div className="text-gray-400">
                  Skills<label className="text-red-600">*</label>
                </div>
                <input
                  type="text"
                  placeholder="Enter your skills in order of expertise (Maximum 5)"
                  className="focus:outline-0 w-3/4 text-sm bg-[#211F22] px-3 py-2 rounded-md border border-gray-400 text-gray-400"
                  onKeyUp={(event) => addSkills(event)}
                />
                <div className="w-3/4 grid grid-cols-4 gap-2">
                  {skills.map((skill, index) => (
                    <div
                      className="flex justify-between place-items-center bg-[#BC312E] rounded-md px-3 py-2"
                      key={index}
                    >
                      <p className="font-semibold tracking-wider uppercase text-sm text-white">
                        {skill}
                      </p>
                      <IoMdCloseCircle onClick={() => deleteSkill(index)} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2 my-5">
                <div className="text-gray-400">
                  Preferred Locations <label className="text-red-600">*</label>
                </div>
                <div className="relative space-y-2  w-2/4">
                  <div
                    onClick={() => setdrop(drop === 5 ? 0 : 5)}
                    className="flex justify-between place-items-center text-sm bg-[#211F22] px-3 py-2 rounded-md border border-gray-400 text-gray-400"
                  >
                    <div>
                      {preferredLocation === null
                        ? "Select your preferred location (Maximum 3)"
                        : preferredLocation}{" "}
                    </div>
                    <div>
                      <BsChevronDown />
                    </div>
                  </div>
                  {drop === 5 && (
                    <div className="absolute z-10 w-full border border-gray-400 rounded-md grid grid-cols-1 divide-y divide-gray-400">
                      <div
                        onClick={() => {
                          setpreferredLocation("Banglore");
                          setdrop(0);
                          addlocation("Banglore");
                        }}
                        className="text-center p-2 text-sm bg-[#211F22] cursor-pointer text-gray-400"
                      >
                        Banglore
                      </div>
                      <div
                        onClick={() => {
                          setpreferredLocation("Pune");
                          setdrop(0);
                          addlocation("Pune");
                        }}
                        className="text-center p-2 text-sm bg-[#211F22] cursor-pointer text-gray-400"
                      >
                        Pune
                      </div>
                      <div
                        onClick={() => {
                          setpreferredLocation("Hyderabad");
                          setdrop(0);
                          addlocation("Hyderabad");
                        }}
                        className="text-center p-2 text-sm bg-[#211F22] cursor-pointer text-gray-400"
                      >
                        Hyderabad
                      </div>
                    </div>
                  )}
                  <div className="w-full grid grid-cols-3 gap-2">
                    {locations.map((location, index) => (
                      <div
                        className="flex justify-between place-items-center bg-[#BC312E] rounded-md px-3 py-2"
                        key={index}
                      >
                        <p className=" tracking-wider uppercase text-sm text-white">
                          {location}
                        </p>
                        <IoMdCloseCircle
                          onClick={() => deletelocation(index)}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-5">
                    <div>
                      <input type="checkbox" className="rounded-md" />
                    </div>
                    <div className="text-gray-400">Anywhere in India</div>
                  </div>
                </div>
              </div>
              <div className="space-y-2 my-5">
                <div className="text-gray-400">
                  Current Location <label className="text-red-600">*</label>
                </div>
                <div className="relative  w-2/4">
                  <div
                    onClick={() => setdrop(drop === 6 ? 0 : 6)}
                    className="flex justify-between place-items-center text-sm bg-[#211F22] px-3 py-2 rounded-md border border-gray-400 text-gray-400"
                  >
                    <div>
                      {currentLocation === null ? "Select" : currentLocation}{" "}
                    </div>
                    <div>
                      <BsChevronDown />
                    </div>
                  </div>
                  {drop === 6 && (
                    <div className="absolute z-10 w-full border border-gray-400 rounded-md grid grid-cols-1 divide-y divide-gray-400">
                      <div
                        onClick={() => {
                          setcurrentLocation("India");
                          setdrop(0);
                        }}
                        className="text-center p-2 text-sm bg-[#211F22] cursor-pointer text-gray-400"
                      >
                        India
                      </div>
                      <div
                        onClick={() => {
                          setcurrentLocation("Non India");
                          setdrop(0);
                        }}
                        className="text-center p-2 text-sm bg-[#211F22] cursor-pointer text-gray-400"
                      >
                        Non India
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="my-10">
                {!file && (
                  <div class="max-w-xs my-4">
                    <label className="grid justify-center w-full h-32 px-4 transition bg-[#211F22] border-2 border-gray-400 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-500 focus:outline-none">
                      <span className="flex items-center text-gray-400 space-x-2">
                        <span className="font-medium text-gray-400">
                          + Browse Resume
                        </span>
                      </span>
                      <div className="text-xs italic text-gray-400">
                        Supported Formats: docx, doc, pdf, rtf, txt Maximum file
                        size: Less than 2 MB
                      </div>
                      <input
                        type="file"
                        onChange={(e) => {
                          setFile(URL.createObjectURL(e.target.files[0]));
                        }}
                        name="file_upload"
                        className="hidden"
                        alt="cover"
                      />
                    </label>
                  </div>
                )}
                {file && (
                  <div className="flex gap-4 place-items-center p-2">
                    <img className="h-28 w-28 object-cover" src={file} alt="" />
                    <button
                      className="px-2 py-2 rounded-full bg-[#BC312E] "
                      onClick={() => setFile()}
                    >
                      <MdDelete />
                    </button>
                  </div>
                )}
              </div>
              <div className="flex gap-4 my-10">
                <div>
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={() => setagree(!agree)}
                    className="rounded-md"
                  />
                </div>
                <div className="text-gray-400 flex gap-1">
                  I agree to BDM{" "}
                  <div className="text-[#BC312E]">
                    Privacy Notice & Terms and Conditions
                  </div>{" "}
                </div>
              </div>
              <div className="flex w-3/4 justify-between place-items-center my-5">
                <div className="text-[#BC312E]">Reset</div>
                <div className="grid place-items-center">
                  <button
                    disabled={
                      !(
                        agree &&
                        email &&
                        password &&
                        firstName &&
                        lastName &&
                        phoneNumber &&
                        pancardValidate &&
                        experience
                      )
                    }
                    onClick={handleSubmit}
                    className="text-sm text-white bg-[#BC312E] px-6 py-2 rounded-md"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/4 bg-black p-6">
              <div className="text-center font-semibold my-5 text-[#BC312E]">
                Some Instructions
              </div>
              <div className="space-y-3">
                <div className="text-sm text-white">
                  &#9675; The information provided here will be considered
                  throughout the application process.
                </div>
                <div className="text-sm text-white">
                  &#9675; A candidate who has been rejected by BDM in the past
                  three months, cannot re-apply.
                </div>
                <div className="text-sm text-white">
                  &#9675; For any queries or assistance, please write to us at
                  support@bigbrosdigitalmedia.com.
                </div>
                <div className="text-sm text-white">
                  &#9675; Please be careful while filling the profile
                  information.
                </div>
                <div className="text-sm text-white">
                  &#9675; Your resume would be considered for either our IT &
                  IT-IS Operations or for our BPS operations, basis your choice
                  of the Area of Interest specified here.
                </div>
              </div>
            </div>
          </div>
        )}
        {emailverified && (
          <div className="dark:bg-[#211F22] h-80 w-2/4 grid place-items-center space-y-3 rnd-shd rounded-md p-10">
            <div className="bg-[#BC312E] p-3 rounded-full grid place-items-center">
              <HiLockClosed className="h-10 w-10" />
            </div>
            <div className="text-center text-gray-100 text-xl font-sans tracking-wider font-semibold">
              A fresh verification link has been sent to your email address.
            </div>
            <div className="text-sm text-gray-400 text-center">
              Please check your email address and click on verification link to
              verify your account. After click on the button below to check your
              verification status.
            </div>
            <div className="w-full">
              {!verificationPending && (
                <button
                  onClick={check}
                  className="bg-[#BC312E] text-white font-semibold font-sans text-center text-sm p-3 w-full rounded-md"
                >
                  Click here after you verify
                </button>
              )}
              {verificationPending && (
                <button className="bg-[#BC312E] text-white font-semibold font-sans text-center text-sm p-3 w-full rounded-md">
                  Checking...
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Register2;
