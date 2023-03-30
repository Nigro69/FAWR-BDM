import React, { useState } from "react";
import { GoCheck } from "react-icons/go";
import { useStateContext } from "../../contexts/ContextProvider";
import { MdDelete, MdFilePresent } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp, IoMdCloseCircle } from "react-icons/io";

function EditCandidateProfile() {
  const [step, setstep] = useState(1);
  const [exp, setexp] = useState([1]);
  const [x, setx] = useState(1);
  const [channel, setchannel] = useState(0);
  const [file, setFile] = useState();
  const [docx, setdocx] = useState();

  const addexp = (val) => {
    setx(val);
    setexp([...exp, val]);
  };

  const deleteexp = (index) => {
    setexp([...exp.filter((ex) => exp.indexOf(ex) !== index)]);
  };

  const { candidateModel } = useStateContext();

  return (
    <div className="p-4 mx-10 my-4">
      <div className=" dark:bg-[#211F22] rnd-shd p-6 rounded-md ">
        <div className="flex justify-between place-items-center mb-5">
          <div className=" text-xl font-semibold tracking-widest text-[#BC312E] ">
            Edit Profile
          </div>
          <div className="flex gap-6 place-items-center">
            <button className="text-sm text-gray-500 font-semibold">
              Save & Close
            </button>
            {step > 1 && (
              <button
                onClick={() => setstep(step - 1)}
                className="bg-black border border-[#BC312E] text-sm text-white rounded-md px-8 py-2 font-semibold"
              >
                Previous
              </button>
            )}
            {step <= 3 && (
              <button
                onClick={() => setstep(step + 1)}
                className="bg-[#BC312E] border border-black text-sm text-white rounded-md px-8 py-2 font-semibold"
              >
                Next
              </button>
            )}
            {step === 4 && (
              <button className="bg-[#BC312E] border border-black text-sm text-white rounded-md px-8 py-2 font-semibold">
                Submit
              </button>
            )}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 p-4">
          <div
            className={`flex place-items-center bg-black gap-4  ${
              step >= 1 ? "border-2 border-[#BC312E] " : "border "
            } rounded-md px-4 py-2`}
          >
            <button
              className={`rounded-full h-7 w-7 place-items-center  ${
                step >= 1 ? "bg-[#BC312E]" : "bg-gray-500"
              } text-white p-2 flex`}
            >
              {step > 1 ? <GoCheck /> : 1}
            </button>
            <div
              className={`font-bold text-center ${
                step >= 1 ? "text-[#BC312E]" : "text-gray-500"
              }`}
            >
              Personal Details
            </div>
          </div>
          <div
            className={`flex place-items-center bg-black gap-4  ${
              step >= 2 ? "border-2 border-[#BC312E] " : "border "
            } rounded-md px-4 py-2`}
          >
            <button
              className={`rounded-full h-7 w-7 place-items-center  ${
                step >= 2 ? "bg-[#BC312E]" : "bg-gray-500"
              } text-white p-2 flex`}
            >
              {step > 2 ? <GoCheck /> : 2}
            </button>
            <div
              className={`font-bold text-center ${
                step >= 2 ? "text-[#BC312E]" : "text-gray-500"
              }`}
            >
              Qualifications
            </div>
          </div>
          <div
            className={`flex place-items-center bg-black gap-4  ${
              step >= 3 ? "border-2 border-[#BC312E] " : "border "
            } rounded-md px-4 py-2`}
          >
            <button
              className={`rounded-full h-7 w-7 place-items-center  ${
                step >= 3 ? "bg-[#BC312E]" : "bg-gray-500"
              } text-white p-2 flex`}
            >
              {step > 3 ? <GoCheck /> : 3}
            </button>
            <div
              className={`font-bold text-center ${
                step >= 3 ? "text-[#BC312E]" : "text-gray-500"
              }`}
            >
              Experience
            </div>
          </div>
          <div
            className={`flex place-items-center bg-black gap-4  ${
              step >= 4 ? "border-2 border-[#BC312E] " : "border "
            } rounded-md px-4 py-2`}
          >
            <button
              className={`rounded-full h-7 w-7 place-items-center  ${
                step >= 4 ? "bg-[#BC312E]" : "bg-gray-500"
              } text-white p-2 flex`}
            >
              {step > 4 ? <GoCheck /> : 4}
            </button>
            <div
              className={`font-bold text-center ${
                step >= 4 ? "text-[#BC312E]" : "text-gray-500"
              }`}
            >
              Documents
            </div>
          </div>
        </div>
        <hr className="h-px my-2 bg-black border-0 "></hr>
        {step === 1 && (
          <div>
            <div className="font-semibold text-lg tracking-wider mb-10">
              Personal Info
            </div>
            <div className="flex justify-between place-items-center">
              <div className="flex gap-3 place-items-center">
                <div className="text-gray-400 w-1/4">First Name:</div>
                <div>
                  <input
                    className="px-4 py-2 rounded-md border bg-[#171717] border-black text-sm text-gray-300"
                    value={candidateModel.firstName}
                    type="text"
                    placeholder="Enter Job Role"
                  />
                </div>
              </div>
              <div className="flex gap-3 place-items-center">
                <div className="text-gray-400 w-1/4">Middle Name:</div>
                <div>
                  <input
                    className="px-4 py-2 rounded-md border bg-[#171717] border-black text-sm text-gray-300"
                    value={candidateModel.middleName}
                    type="text"
                    placeholder="Enter Middle name"
                  />
                </div>
              </div>
              <div className="flex gap-3 place-items-center">
                <div className="text-gray-400 w-1/4">Last Name:</div>
                <div>
                  <input
                    className="px-4 py-2 rounded-md border bg-[#171717] border-black text-sm text-gray-300"
                    value={candidateModel.lastName}
                    type="text"
                    placeholder="Enter Job Role"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 my-10 gap-5">
              <div className="flex w-full gap-3 place-items-center">
                <div className="text-gray-400 w-1/4">Gurdian Name:</div>
                <div className=" w-3/4">
                  <input
                    className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                    type="text"
                    placeholder="Enter full name"
                  />
                </div>
              </div>
              <div className="flex w-full gap-3 place-items-center">
                <div className="text-gray-400 w-1/4">PAN No:</div>
                <div className=" w-3/4">
                  <input
                    className="px-4 py-2 rounded-md w-full border uppercase bg-[#171717] border-black text-sm text-gray-300"
                    type="text"
                    value={candidateModel.pancard}
                    placeholder="DJXXXXXX9R"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 my-10 gap-5">
              <div className="flex w-full gap-3 place-items-center">
                <div className="text-gray-400 w-1/4">Date of Birth:</div>
                <div className=" w-3/4">
                  <input
                    className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                    type="text"
                    value={candidateModel.dob}
                    placeholder="30/10/2000"
                  />
                </div>
              </div>
              <div className="flex w-full gap-3 place-items-center">
                <div className="text-gray-400 w-1/4">Mobile No:</div>
                <div className=" w-3/4">
                  <input
                    className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                    type="text"
                    value={candidateModel.phoneNumber}
                    placeholder="6261XXXXX09"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 my-10 gap-5">
              <div className="flex w-full gap-3 place-items-center">
                <div className="text-gray-400 w-1/4">Email ID:</div>
                <div className=" w-3/4">
                  <input
                    className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                    type="text"
                    value={candidateModel.email}
                    placeholder="example@mail.com"
                  />
                </div>
              </div>
            </div>
            <div className="font-semibold text-lg tracking-wider my-10 text-gray-500">
              Address
            </div>
            <div>
              <div className="font-semibold text-lg tracking-wider my-10 text-gray-500">
                Permanent Address
              </div>
              <div className="grid grid-cols-2 my-10 gap-5">
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">Address Line 1:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="text"
                      placeholder="xyz"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">Address line 2:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="text"
                      placeholder="xyz"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 my-10 gap-5">
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">Pin Code:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="number"
                      placeholder="480XXX"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">City:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="text"
                      placeholder="Enter City"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 my-10 gap-5">
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">State:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="text"
                      placeholder="Enter State"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">District:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="text"
                      placeholder="Enter District"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold text-lg tracking-wider my-10 text-gray-500">
                Correspondence Address
              </div>
              <div className="flex gap-5">
                <input type="checkbox" name="" id="" />
                <div className="font-semibold text-sm text-gray-500">
                  Same as permanent address
                </div>
              </div>
              <div className="grid grid-cols-2 my-10 gap-5">
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">Address Line 1:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="text"
                      placeholder="xyz"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">Address line 2:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="text"
                      placeholder="xyz"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 my-10 gap-5">
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">Pin Code:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="number"
                      placeholder="480XXX"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">City:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="text"
                      placeholder="Enter City"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 my-10 gap-5">
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">State:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="text"
                      placeholder="Enter State"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">District:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="text"
                      placeholder="Enter District"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end">
              <div className="flex gap-5 place-items-center">
                <button className="bg-[#171717] rounded-xl text-sm text-[#BC312E] px-4 py-1 border border-[#BC312E]">
                  Cancle
                </button>
                <button className=" rounded-xl text-sm text-white bg-[#BC312E] border border-[#BC312E] px-4 py-1 ">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <div className="font-semibold text-lg tracking-wider my-10 text-gray-500">
              Educationl Qualification
            </div>
            <div className="grid grid-cols-2 my-10 gap-5">
              <div className="flex w-full gap-3 place-items-center">
                <div className="text-gray-400 w-1/4">Programe:</div>
                <div className=" w-3/4">
                  <input
                    className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                    type="text"
                    placeholder="Undergraduate(UG)"
                  />
                </div>
              </div>
              <div className="flex w-full gap-3 place-items-center">
                <div className="text-gray-400 w-1/4">Degree:</div>
                <div className=" w-3/4">
                  <input
                    className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                    type="text"
                    placeholder="B-Tech"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 my-10 gap-5">
              <div className="flex w-full gap-3 place-items-center">
                <div className="text-gray-400 w-1/4">Stream:</div>
                <div className=" w-3/4">
                  <input
                    className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                    type="text"
                    placeholder="Computer Science"
                  />
                </div>
              </div>
              <div className="flex w-full gap-3 place-items-center">
                <div className="text-gray-400 w-1/4">Year of Completion:</div>
                <div className=" w-3/4">
                  <input
                    className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                    type="number"
                    placeholder="6261XXXXX09"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-5 w-2/4 place-items-center my-10">
              <div className="text-gray-400 w-1/4">University:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                  type="number"
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex gap-5 w-2/4 place-items-center my-10">
              <div className="text-gray-400 w-1/4">College:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                  type="number"
                  placeholder=""
                />
              </div>
            </div>
            <div className="grid grid-cols-2 my-10 gap-5">
              <div className="flex w-full gap-3 place-items-center">
                <div className="text-gray-400 w-1/4">College State:</div>
                <div className=" w-3/4">
                  <input
                    className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                    type="text"
                    placeholder="Enter State Name"
                  />
                </div>
              </div>
              <div className="flex w-full gap-3 place-items-center">
                <div className="text-gray-400 w-1/4">College District:</div>
                <div className=" w-3/4">
                  <input
                    className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                    type="number"
                    placeholder="Enter district"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 my-10 gap-5">
              <div className="flex w-full gap-3 place-items-center">
                <div className="text-gray-400 w-1/4">Semester:</div>
                <div className=" w-3/4">
                  <input
                    className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                    type="text"
                    placeholder="Enter Semester"
                  />
                </div>
              </div>
              <div className="flex w-full gap-3 place-items-center">
                <div className="text-gray-400 w-1/4">Marks:</div>
                <div className=" w-3/4">
                  <input
                    className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                    type="number"
                    placeholder="Enter Marks"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-5 w-2/4 place-items-center my-10">
              <div className="text-gray-400 w-1/4">Marksheet:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                  type="file"
                  placeholder=""
                />
              </div>
            </div>
            <div>
              <div className="font-semibold text-lg tracking-wider my-10 text-gray-500">
                Details of HSC Qualification
              </div>
              <div className="grid grid-cols-2 my-10 gap-5">
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">Board:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="text"
                      placeholder="Enter Board"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">Year of Completion:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="number"
                      placeholder="2023"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-5 w-2/4 place-items-center my-10">
                <div className="text-gray-400 w-1/4">School:</div>
                <div className=" w-3/4">
                  <input
                    className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                    type="text"
                    placeholder="School name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 my-10 gap-5">
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">School State:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="text"
                      placeholder="Enter State"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">School Dist:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="number"
                      placeholder="Enter State"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 my-10 gap-5">
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">Roll No:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="text"
                      placeholder="0201XXXXXXXX"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">Marks:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="number"
                      placeholder="Enter Marks"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-5 w-2/4 place-items-center my-10">
                <div className="text-gray-400 w-1/4">Qualifying Certificate:</div>
                <div className=" w-3/4">
                  <input
                    className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                    type="file"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold text-lg tracking-wider my-10 text-gray-500">
                Details of SSC Qualification
              </div>
              <div className="grid grid-cols-2 my-10 gap-5">
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">Board:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="text"
                      placeholder="Enter Board"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">Year of Completion:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="number"
                      placeholder="2023"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-5 w-2/4 place-items-center my-10">
                <div className="text-gray-400 w-1/4">School:</div>
                <div className=" w-3/4">
                  <input
                    className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                    type="text"
                    placeholder="School name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 my-10 gap-5">
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">School State:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="text"
                      placeholder="Enter State"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">School Dist:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="number"
                      placeholder="Enter State"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 my-10 gap-5">
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">Roll No:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="text"
                      placeholder="0201XXXXXXXX"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-3 place-items-center">
                  <div className="text-gray-400 w-1/4">Marks:</div>
                  <div className=" w-3/4">
                    <input
                      className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                      type="number"
                      placeholder="Enter Marks"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-5 w-2/4 place-items-center my-10">
                <div className="text-gray-400 w-1/4">Qualifying Certificate:</div>
                <div className=" w-3/4">
                  <input
                    className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                    type="file"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end">
              <div className="flex gap-5 place-items-center">
                <button className="bg-[#171717] rounded-xl text-sm text-[#BC312E] px-4 py-1 border border-[#BC312E]">
                  Cancle
                </button>
                <button className=" rounded-xl text-sm text-white bg-[#BC312E] border border-[#BC312E] px-4 py-1 ">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <div className=" flex justify-between place-items-center my-10 ">
              <div className="font-semibold text-lg tracking-wider text-gray-500">
                Experience
              </div>
              <div>
                <button
                  onClick={() => addexp(x + 1)}
                  className=" rounded-xl text-sm text-white bg-[#BC312E] border border-[#BC312E] px-4 py-1 "
                >
                  Add
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {exp.map((data, index) => (
                <div className="p-6 border-2 rounded-lg border-dashed border-gray-400">
                  <div className="text-gray-400 justify-between p-2 flex place-items-center">
                    <div>NO. {data}</div>
                    <div>
                      <MdDelete
                        className="cursor-pointer"
                        onClick={() => deleteexp(index)}
                      />
                    </div>
                  </div>
                  <div className="flex gap-5 w-2/4 place-items-center my-10">
                    <div className="text-gray-400 w-1/4">Company Name:</div>
                    <div className=" w-3/4">
                      <input
                        className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                        type="text"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 my-10 gap-5">
                    <div className="flex w-full gap-3 place-items-center">
                      <div className="text-gray-400 w-1/4">Title:</div>
                      <div className=" w-3/4">
                        <input
                          className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                          type="text"
                          placeholder="Senior Developer"
                        />
                      </div>
                    </div>
                    <div className="flex w-full gap-3 place-items-center">
                      <div className="text-gray-400 w-1/4">Job Type:</div>
                      <div className=" w-3/4">
                        <input
                          className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                          type="number"
                          placeholder="Internship"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 my-10 gap-5">
                    <div className="flex w-full gap-3 place-items-center">
                      <div className="text-gray-400 w-1/4">Start Date:</div>
                      <div className=" w-3/4">
                        <input
                          className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                          type="date"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="flex w-full gap-3 place-items-center">
                      <div className="text-gray-400 w-1/4">End Date:</div>
                      <div className=" w-3/4">
                        <input
                          className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                          type="date"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 w-2/4 place-items-center my-10">
                    <div className="text-gray-400 w-1/4">Description:</div>
                    <div className=" w-3/4">
                      <textarea
                        className="px-4 py-2 rounded-md w-full border bg-[#171717] border-black text-sm text-gray-300"
                        type="text"
                        placeholder="Start writing..."
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="font-semibold text-lg tracking-wider my-10 text-gray-500">
              Skills
            </div>
            <div className="grid grid-cols-10 gap-4">
              <div className="bg-gray-300 text-gray-600 px-3 py-1 text-sm font-semibold rounded-md">
                React
              </div>
              <div className="bg-gray-300 text-gray-600 px-3 py-1 text-sm font-semibold rounded-md">
                CSS
              </div>
              <div className="bg-gray-300 text-gray-600 px-3 py-1 text-sm font-semibold rounded-md">
                HTMl
              </div>
            </div>
            <div className="flex w-full justify-end">
              <div className="flex gap-5 place-items-center">
                <button className="bg-[#171717] rounded-xl text-sm text-[#BC312E] px-4 py-1 border border-[#BC312E]">
                  Cancle
                </button>
                <button className=" rounded-xl text-sm text-white bg-[#BC312E] border border-[#BC312E] px-4 py-1 ">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <div className="font-semibold text-lg tracking-wider my-10 text-gray-400">
              Documents
            </div>
            <div className="space-y-8">
              <div className="dark:bg-[#211F22] rnd-shd m-2 rounded-md">
                <div className="text-gray-200 font-semibold p-6 border-b border-b-[#BC312E]">
                  Instructions
                </div>
                <div className="text-gray-200 px-4 pt-6 flex gap-2">
                  <div className="text-gray-400 font-bold"> Note:</div> Please read the below guidelines and upload all the relevant and correct documents against each document name
                </div>
                <div className="text-gray-400 font-bold px-4 pt-5">
                  Guidelines:
                </div>
                <div className="space-y-2 p-4">
                  <div className="flex gap-4 place-items-center">
                    <div><IoMdCloseCircle className="text-gray-200"/></div>
                    <div className="text-gray-200 text-sm">To replace a document, please delete the original document and upload the new document.</div>
                  </div>
                  <div className="flex gap-4 place-items-center">
                    <div><IoMdCloseCircle className="text-gray-200"/></div>
                    <div className="text-gray-200 text-sm">Experience Letter can only be uploaded after the Application Form is submitted online.</div>
                  </div>
                  <div className="flex gap-4 place-items-center">
                    <div><IoMdCloseCircle className="text-gray-200"/></div>
                    <div className="text-gray-200 text-sm">If any document is verified by BDM then it cannot be replaced ( Not applicable for Pre Joining Documentation ).</div>
                  </div>
                </div>
              </div>
              <div className=" dark:bg-[#211F22] rnd-shd p-4 m-2 rounded-md relative">
                <div className="justify-between place-items-center flex p-4">
                  <div onClick={() => setchannel(channel === 1 ? 0 : 1)} className="grid place-items-center cursor-pointer text-gray-200 font-semibold p-2 border-b border-b-[#BC312E]">
                    Photograph
                  </div>
                  <div
                    onClick={() => setchannel(channel === 1 ? 0 : 1)}
                    className="grid place-items-center text-gray-200 font-semibold cursor-pointer"
                  >
                    {channel === 1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </div>
                </div>
                <div
                  className={`${
                    channel === 1
                      ? "opacity-100 translate-y-0 ease-in-out delay-300"
                      : "opacity-0 -translate-y-6 absolute w-full"
                  } p-4  transition-all`}
                >
                  <div className="text-gray-200 ">Photograph</div>
                  <div className="p-2 flex place-items-center gap-10">
                    <div>
                      {!file && (
                        <div className="max-w-xs my-4">
                          <label className="grid justify-center w-full h-10 px-4 transition bg-[#211F22] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-500 focus:outline-none">
                            <span className="flex items-center text-gray-400 space-x-2">
                              <span className="font-medium text-gray-400">
                                + Browse File
                              </span>
                            </span>
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
                          <img
                            className="h-28 w-28 object-cover"
                            src={file}
                            alt=""
                          />
                          <button
                            className="px-2 py-2 rounded-full bg-[#BC312E] "
                            onClick={() => setFile()}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 italic max-w-sm">
                      Upload scanned images of the following documents. Allowed
                      Format:.jpg File size must be less than 200KB Maximum
                      files upload limit: up to 1
                    </div>
                  </div>
                </div>
              </div>
              <div className=" dark:bg-[#211F22] rnd-shd p-4 m-2 rounded-md relative">
                <div className="justify-between place-items-center flex p-4">
                  <div onClick={() => setchannel(channel === 2 ? 0 : 2)} className="grid place-items-center cursor-pointer text-gray-200 font-semibold p-2 border-b border-b-[#BC312E]">
                    Identification
                  </div>
                  <div
                    onClick={() => setchannel(channel === 2 ? 0 : 2)}
                    className="grid place-items-center text-gray-200 font-semibold cursor-pointer"
                  >
                    {channel === 2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </div>
                </div>
                <div
                  className={`${
                    channel === 2
                      ? "opacity-100 translate-y-0 ease-in-out delay-300"
                      : "opacity-0 -translate-y-6 absolute w-full"
                  } p-4  transition-all`}
                >
                  <div className="text-gray-200 ">PAN Card</div>
                  <div className="p-2 flex place-items-center gap-10">
                    <div>
                      {!docx && (
                        <div className="max-w-xs my-4">
                          <label className="grid justify-center w-full h-10 px-4 transition bg-[#211F22] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-500 focus:outline-none">
                            <span className="flex items-center text-gray-400 space-x-2">
                              <span className="font-medium text-gray-400">
                                + Browse File
                              </span>
                            </span>
                            <input
                              type="file"
                              onChange={(e) => {
                                setdocx(e.target.files[0]);
                              }}
                              name="file_upload"
                              className="hidden"
                              alt="cover"
                            />
                          </label>
                        </div>
                      )}
                      {docx && (
                        <div className="flex gap-4 place-items-center p-2">
                          <div className="flex rounded-md border-l-4 p-3 border-t border-t-gray-400 border-b border-b-gray-400 border-r border-r-gray-400 border-l-green-600 bg-[#211F22] place-items-center gap-5">
                            <div className="text-gray-400"><MdFilePresent/></div>
                            <div className="text-gray-400 font-semibold text-sm font-sans">{docx.name}</div> 
                          </div>
                          <button
                            className="px-2 py-2 rounded-full bg-[#BC312E] "
                            onClick={() => setdocx()}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 italic max-w-sm">
                      Upload scanned images of the following documents. Allowed
                      Format:.jpg,.jpeg,.doc,.docx,.pdf,.png,.gif File size must
                      be less than 2MB Maximum files upload limit: up to 1
                    </div>
                  </div>
                  <hr class="h-px mx-auto my-8 bg-gray-400 border-0 rounded w-full  "></hr>
                  <div className="text-gray-200 ">ID Proof</div>
                  <div className="p-2 flex place-items-center gap-10">
                    <div>
                      {!file && (
                        <div className="max-w-xs my-4">
                          <label className="grid justify-center w-full h-10 px-4 transition bg-[#211F22] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-500 focus:outline-none">
                            <span className="flex items-center text-gray-400 space-x-2">
                              <span className="font-medium text-gray-400">
                                + Browse File
                              </span>
                            </span>
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
                          <img
                            className="h-28 w-28 object-cover"
                            src={file}
                            alt=""
                          />
                          <button
                            className="px-2 py-2 rounded-full bg-[#BC312E] "
                            onClick={() => setFile()}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 italic max-w-sm">
                      Upload scanned images of the following documents. Allowed
                      Format:.jpg,.jpeg,.doc,.docx,.pdf,.png,.gif File size must
                      be less than 2MB Maximum files upload limit: up to 5
                    </div>
                  </div>
                  <hr class="h-px mx-auto my-8 bg-gray-400 border-0 rounded w-full  "></hr>
                  <div className="text-gray-200 ">Aadhar Card</div>
                  <div className="p-2 flex place-items-center gap-10">
                    <div>
                      {!file && (
                        <div className="max-w-xs my-4">
                          <label className="grid justify-center w-full h-10 px-4 transition bg-[#211F22] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-500 focus:outline-none">
                            <span className="flex items-center text-gray-400 space-x-2">
                              <span className="font-medium text-gray-400">
                                + Browse file
                              </span>
                            </span>
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
                          <img
                            className="h-28 w-28 object-cover"
                            src={file}
                            alt=""
                          />
                          <button
                            className="px-2 py-2 rounded-full bg-[#BC312E] "
                            onClick={() => setFile()}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 italic max-w-sm">
                      Upload scanned images of the following documents. Allowed
                      Format:.jpg,.jpeg,.doc,.docx,.pdf,.png,.gif File size must
                      be less than 2MB Maximum files upload limit: up to 1
                    </div>
                  </div>
                </div>
              </div>
              <div className=" dark:bg-[#211F22] rnd-shd p-4 m-2 rounded-md relative">
                <div className="justify-between place-items-center flex p-4">
                  <div onClick={() => setchannel(channel === 3 ? 0 : 3)} className="grid cursor-pointer place-items-center text-gray-200 font-semibold p-2 border-b border-b-[#BC312E]">
                    Education
                  </div>
                  <div
                    onClick={() => setchannel(channel === 3 ? 0 : 3)}
                    className="grid place-items-center text-gray-200 font-semibold cursor-pointer"
                  >
                    {channel === 3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </div>
                </div>
                <div
                  className={`${
                    channel === 3
                      ? "opacity-100 translate-y-0 ease-in-out delay-300"
                      : "opacity-0 -translate-y-6 absolute w-full"
                  } p-4  transition-all`}
                >
                  <div className="text-gray-200 ">SSC Marksheet</div>
                  <div className="p-2 flex place-items-center gap-10">
                    <div>
                      {!file && (
                        <div className="max-w-xs my-4">
                          <label className="grid justify-center w-full h-10 px-4 transition bg-[#211F22] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-500 focus:outline-none">
                            <span className="flex items-center text-gray-400 space-x-2">
                              <span className="font-medium text-gray-400">
                                + Browse File
                              </span>
                            </span>
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
                          <img
                            className="h-28 w-28 object-cover"
                            src={file}
                            alt=""
                          />
                          <button
                            className="px-2 py-2 rounded-full bg-[#BC312E] "
                            onClick={() => setFile()}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 italic max-w-sm">
                      Upload scanned images of the following documents. Allowed
                      Format:.jpg,.jpeg,.doc,.docx,.pdf,.png,.gif File size must
                      be less than 2MB Maximum files upload limit: up to 2
                    </div>
                  </div>
                  <hr class="h-px mx-auto my-8 bg-gray-400 border-0 rounded w-full  "></hr>
                  <div className="text-gray-200 ">HSC Marksheet</div>
                  <div className="p-2 flex place-items-center gap-10">
                    <div>
                      {!file && (
                        <div className="max-w-xs my-4">
                          <label className="grid justify-center w-full h-10 px-4 transition bg-[#211F22] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-500 focus:outline-none">
                            <span className="flex items-center text-gray-400 space-x-2">
                              <span className="font-medium text-gray-400">
                                + Browse File
                              </span>
                            </span>
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
                          <img
                            className="h-28 w-28 object-cover"
                            src={file}
                            alt=""
                          />
                          <button
                            className="px-2 py-2 rounded-full bg-[#BC312E] "
                            onClick={() => setFile()}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 italic max-w-sm">
                      Upload scanned images of the following documents. Allowed
                      Format:.jpg,.jpeg,.doc,.docx,.pdf,.png,.gif File size must
                      be less than 2MB Maximum files upload limit: up to 1
                    </div>
                  </div>
                  <hr class="h-px mx-auto my-8 bg-gray-400 border-0 rounded w-full  "></hr>
                  <div className="text-gray-200 ">Diploma Marksheets</div>
                  <div className="p-2 flex place-items-center gap-10">
                    <div>
                      {!file && (
                        <div className="max-w-xs my-4">
                          <label className="grid justify-center w-full h-10 px-4 transition bg-[#211F22] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-500 focus:outline-none">
                            <span className="flex items-center text-gray-400 space-x-2">
                              <span className="font-medium text-gray-400">
                                + Browse File
                              </span>
                            </span>
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
                          <img
                            className="h-28 w-28 object-cover"
                            src={file}
                            alt=""
                          />
                          <button
                            className="px-2 py-2 rounded-full bg-[#BC312E] "
                            onClick={() => setFile()}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 italic max-w-sm">
                      Upload scanned images of the following documents. Allowed
                      Format:.jpg,.jpeg,.doc,.docx,.pdf,.png,.gif File size must
                      be less than 2MB Maximum files upload limit: up to 7
                    </div>
                  </div>
                  <hr class="h-px mx-auto my-8 bg-gray-400 border-0 rounded w-full  "></hr>
                  <div className="text-gray-200 ">Graduation Marksheets</div>
                  <div className="p-2 flex place-items-center gap-10">
                    <div>
                      {!file && (
                        <div className="max-w-xs my-4">
                          <label className="grid justify-center w-full h-10 px-4 transition bg-[#211F22] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-500 focus:outline-none">
                            <span className="flex items-center text-gray-400 space-x-2">
                              <span className="font-medium text-gray-400">
                                + Browse File
                              </span>
                            </span>
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
                          <img
                            className="h-28 w-28 object-cover"
                            src={file}
                            alt=""
                          />
                          <button
                            className="px-2 py-2 rounded-full bg-[#BC312E] "
                            onClick={() => setFile()}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 italic max-w-sm">
                      Upload scanned images of the following documents. Allowed
                      Format:.jpg,.jpeg,.doc,.docx,.pdf,.png,.gif File size must
                      be less than 2MB Maximum files upload limit: up to 9
                    </div>
                  </div>
                  <hr class="h-px mx-auto my-8 bg-gray-400 border-0 rounded w-full  "></hr>
                  <div className="text-gray-200 ">PG Marksheets</div>
                  <div className="p-2 flex place-items-center gap-10">
                    <div>
                      {!file && (
                        <div className="max-w-xs my-4">
                          <label className="grid justify-center w-full h-10 px-4 transition bg-[#211F22] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-500 focus:outline-none">
                            <span className="flex items-center text-gray-400 space-x-2">
                              <span className="font-medium text-gray-400">
                                + Browse File
                              </span>
                            </span>
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
                          <img
                            className="h-28 w-28 object-cover"
                            src={file}
                            alt=""
                          />
                          <button
                            className="px-2 py-2 rounded-full bg-[#BC312E] "
                            onClick={() => setFile()}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 italic max-w-sm">
                      Upload scanned images of the following documents. Allowed
                      Format:.jpg,.jpeg,.doc,.docx,.pdf,.png,.gif File size must
                      be less than 2MB Maximum files upload limit: up to 8
                    </div>
                  </div>
                  <hr class="h-px mx-auto my-8 bg-gray-400 border-0 rounded w-full  "></hr>
                  <div className="text-gray-200 ">Doctorate Mark Sheet</div>
                  <div className="p-2 flex place-items-center gap-10">
                    <div>
                      {!file && (
                        <div className="max-w-xs my-4">
                          <label className="grid justify-center w-full h-10 px-4 transition bg-[#211F22] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-500 focus:outline-none">
                            <span className="flex items-center text-gray-400 space-x-2">
                              <span className="font-medium text-gray-400">
                                + Browse File
                              </span>
                            </span>
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
                          <img
                            className="h-28 w-28 object-cover"
                            src={file}
                            alt=""
                          />
                          <button
                            className="px-2 py-2 rounded-full bg-[#BC312E] "
                            onClick={() => setFile()}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 italic max-w-sm">
                      Upload scanned images of the following documents. Allowed
                      Format:.jpg,.jpeg,.doc,.docx,.pdf,.png,.gif File size must
                      be less than 2MB Maximum files upload limit: up to 4
                    </div>
                  </div>
                </div>
              </div>
              <div className=" dark:bg-[#211F22] rnd-shd p-4 m-2 rounded-md relative">
                <div className="justify-between place-items-center flex p-4">
                  <div onClick={() => setchannel(channel === 4 ? 0 : 4)} className="grid cursor-pointer place-items-center text-gray-200 font-semibold p-2 border-b border-b-[#BC312E]">
                    Work Experience
                  </div>
                  <div
                    onClick={() => setchannel(channel === 4 ? 0 : 4)}
                    className="grid place-items-center text-gray-200 font-semibold cursor-pointer"
                  >
                    {channel === 4 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </div>
                </div>
                <div
                  className={`${
                    channel === 4
                      ? "opacity-100 translate-y-0 ease-in-out delay-300"
                      : "opacity-0 -translate-y-6 absolute w-full"
                  } p-4  transition-all`}
                >
                  <div className="text-gray-200 ">
                    Current Company Salary Slip
                  </div>
                  <div className="p-2 flex place-items-center gap-10">
                    <div>
                      {!file && (
                        <div className="max-w-xs my-4">
                          <label className="grid justify-center w-full h-10 px-4 transition bg-[#211F22] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-500 focus:outline-none">
                            <span className="flex items-center text-gray-400 space-x-2">
                              <span className="font-medium text-gray-400">
                                + Browse File
                              </span>
                            </span>
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
                          <img
                            className="h-28 w-28 object-cover"
                            src={file}
                            alt=""
                          />
                          <button
                            className="px-2 py-2 rounded-full bg-[#BC312E] "
                            onClick={() => setFile()}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 italic max-w-sm">
                      Upload scanned images of the following documents. Allowed
                      Format:.jpg,.jpeg,.doc,.docx,.pdf,.png,.gif File size must
                      be less than 2MB Maximum files upload limit: up to 3
                    </div>
                  </div>
                  <hr class="h-px mx-auto my-8 bg-gray-400 border-0 rounded w-full  "></hr>
                  <div className="text-gray-200 ">
                    Latest Compensation Letter
                  </div>
                  <div className="p-2 flex place-items-center gap-10">
                    <div>
                      {!file && (
                        <div className="max-w-xs my-4">
                          <label className="grid justify-center w-full h-10 px-4 transition bg-[#211F22] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-500 focus:outline-none">
                            <span className="flex items-center text-gray-400 space-x-2">
                              <span className="font-medium text-gray-400">
                                + Browse File
                              </span>
                            </span>
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
                          <img
                            className="h-28 w-28 object-cover"
                            src={file}
                            alt=""
                          />
                          <button
                            className="px-2 py-2 rounded-full bg-[#BC312E] "
                            onClick={() => setFile()}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 italic max-w-sm">
                      Upload scanned images of the following documents. Allowed
                      Format:.jpg,.jpeg,.doc,.docx,.pdf,.png,.gif File size must
                      be less than 2MB Maximum files upload limit: up to 4
                    </div>
                  </div>
                  <hr class="h-px mx-auto my-8 bg-gray-400 border-0 rounded w-full  "></hr>
                  <div className="text-gray-200 ">
                    Experience Letters or Relieving Letters
                  </div>
                  <div className="text-gray-400 text-sm p-4">
                    Fill in the application form prior to uploading Experience/Relieving letter
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditCandidateProfile;
