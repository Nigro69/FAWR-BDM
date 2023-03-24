import React from "react";

const EditProfile = () => {
  return (
    <div className="p-4 mx-10 my-4">
      <div className="bg-gray-200 px-10 py-4">
        <div className="font-semibold text-lg tracking-wider mb-10">
          Personal Info
        </div>
        <div className="flex justify-between place-items-center">
          <div className="flex gap-3 place-items-center">
            <div className="text-gray-600">First Name:</div>
            <div>
              <input
                className="px-4 py-2 rounded-md border bg-gray-200 border-black text-sm"
                value="Darlene"
                type="text"
                placeholder="Enter Job Role"
              />
            </div>
          </div>
          <div className="flex gap-3 place-items-center">
            <div className="text-gray-600">Middle Name:</div>
            <div>
              <input
                className="px-4 py-2 rounded-md border bg-gray-200 border-black text-sm"
                value=""
                type="text"
                placeholder="Enter Middle name"
              />
            </div>
          </div>
          <div className="flex gap-3 place-items-center">
            <div className="text-gray-600">Last Name:</div>
            <div>
              <input
                className="px-4 py-2 rounded-md border bg-gray-200 border-black text-sm"
                value="Robertson"
                type="text"
                placeholder="Enter Job Role"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 my-10 gap-5">
          <div className="flex w-full gap-3 place-items-center">
            <div className="text-gray-600 w-1/4">Gurdian Name:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="text"
                placeholder="Enter full name"
              />
            </div>
          </div>
          <div className="flex w-full gap-3 place-items-center">
            <div className="text-gray-600 w-1/4">PAN No:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="text"
                placeholder="DJXXXXXX9R"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 my-10 gap-5">
          <div className="flex w-full gap-3 place-items-center">
            <div className="text-gray-600 w-1/4">Date of Birth:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="text"
                placeholder="30/10/2000"
              />
            </div>
          </div>
          <div className="flex w-full gap-3 place-items-center">
            <div className="text-gray-600 w-1/4">Mobile No:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="number"
                placeholder="6261XXXXX09"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 my-10 gap-5">
          <div className="flex w-full gap-3 place-items-center">
            <div className="text-gray-600 w-1/4">Email ID:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="text"
                placeholder="example@mail.com"
              />
            </div>
          </div>
          <div className="flex w-full justify-end">
            <div className="flex gap-5 place-items-center">
              <button className="bg-white rounded-xl text-sm text-[#BC312E] px-4 py-1 border border-[#BC312E]">
                Cancle
              </button>
              <button className=" rounded-xl text-sm text-white bg-[#BC312E] border border-[#BC312E] px-4 py-1 ">
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="font-semibold text-lg tracking-wider my-10">
          Educationl Qualification
        </div>
        <div className="grid grid-cols-2 my-10 gap-5">
          <div className="flex w-full gap-3 place-items-center">
            <div className="text-gray-600 w-1/4">Programe:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="text"
                placeholder="Undergraduate(UG)"
              />
            </div>
          </div>
          <div className="flex w-full gap-3 place-items-center">
            <div className="text-gray-600 w-1/4">Degree:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="text"
                placeholder="B-Tech"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 my-10 gap-5">
          <div className="flex w-full gap-3 place-items-center">
            <div className="text-gray-600 w-1/4">Stream:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="text"
                placeholder="Computer Science"
              />
            </div>
          </div>
          <div className="flex w-full gap-3 place-items-center">
            <div className="text-gray-600 w-1/4">Year of Completion:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="number"
                placeholder="6261XXXXX09"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 w-3/4 place-items-center my-10">
          <div className="text-gray-600">University:</div>
          <div className=" w-3/4">
            <input
              className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
              type="number"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex gap-5 w-3/4 place-items-center my-10">
          <div className="text-gray-600">College:</div>
          <div className=" w-3/4">
            <input
              className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
              type="number"
              placeholder=""
            />
          </div>
        </div>
        <div className="grid grid-cols-2 my-10 gap-5">
          <div className="flex w-full gap-3 place-items-center">
            <div className="text-gray-600 w-1/4">College State:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="text"
                placeholder="Enter State Name"
              />
            </div>
          </div>
          <div className="flex w-full gap-3 place-items-center">
            <div className="text-gray-600 w-1/4">College District:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="number"
                placeholder="Enter district"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 my-10 gap-5">
          <div className="flex w-full gap-3 place-items-center">
            <div className="text-gray-600 w-1/4">Semester:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="text"
                placeholder="Enter Semester"
              />
            </div>
          </div>
          <div className="flex w-full gap-3 place-items-center">
            <div className="text-gray-600 w-1/4">Marks:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="number"
                placeholder="Enter Marks"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 w-3/4 place-items-center my-10">
          <div className="text-gray-600">Marksheet:</div>
          <div className=" w-3/4">
            <input
              className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
              type="file"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <div className="font-semibold text-lg tracking-wider my-10">
            Details of 12th Qualification
          </div>
          <div className="grid grid-cols-2 my-10 gap-5">
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">Board:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="text"
                  placeholder="Enter Board"
                />
              </div>
            </div>
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">Year of Completion:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="number"
                  placeholder="2023"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5 w-3/4 place-items-center my-10">
            <div className="text-gray-600">School:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="text"
                placeholder="School name"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 my-10 gap-5">
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">School State:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="text"
                  placeholder="Enter State"
                />
              </div>
            </div>
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">School Dist:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="number"
                  placeholder="Enter State"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 my-10 gap-5">
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">Roll No:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="text"
                  placeholder="0201XXXXXXXX"
                />
              </div>
            </div>
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">Marks:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="number"
                  placeholder="Enter Marks"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5 w-3/4 place-items-center my-10">
            <div className="text-gray-600">Marksheet:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="file"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold text-lg tracking-wider my-10">
            Details of 10th Qualification
          </div>
          <div className="grid grid-cols-2 my-10 gap-5">
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">Board:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="text"
                  placeholder="Enter Board"
                />
              </div>
            </div>
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">Year of Completion:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="number"
                  placeholder="2023"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5 w-3/4 place-items-center my-10">
            <div className="text-gray-600">School:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="text"
                placeholder="School name"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 my-10 gap-5">
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">School State:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="text"
                  placeholder="Enter State"
                />
              </div>
            </div>
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">School Dist:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="number"
                  placeholder="Enter State"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 my-10 gap-5">
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">Roll No:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="text"
                  placeholder="0201XXXXXXXX"
                />
              </div>
            </div>
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">Marks:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="number"
                  placeholder="Enter Marks"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5 w-3/4 place-items-center my-10">
            <div className="text-gray-600">Marksheet:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="file"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="font-semibold text-lg tracking-wider my-10">
          Experience
        </div>
        <div className="flex gap-5 w-3/4 place-items-center my-10">
          <div className="text-gray-600">Company Name:</div>
          <div className=" w-3/4">
            <input
              className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
              type="text"
              placeholder="Enter Name"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 my-10 gap-5">
          <div className="flex w-full gap-3 place-items-center">
            <div className="text-gray-600 w-1/4">Title:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="text"
                placeholder="Senior Developer"
              />
            </div>
          </div>
          <div className="flex w-full gap-3 place-items-center">
            <div className="text-gray-600 w-1/4">Job Type:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="number"
                placeholder="Internship"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 my-10 gap-5">
          <div className="flex w-full gap-3 place-items-center">
            <div className="text-gray-600 w-1/4">Start Date:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="date"
                placeholder=""
              />
            </div>
          </div>
          <div className="flex w-full gap-3 place-items-center">
            <div className="text-gray-600 w-1/4">End Date:</div>
            <div className=" w-3/4">
              <input
                className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                type="date"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 w-3/4 place-items-center my-10">
          <div className="text-gray-600">Description:</div>
          <div className=" w-3/4">
            <textarea
              className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
              type="text"
              placeholder="Start writing..."
            />
          </div>
        </div>
        <div className="flex w-full justify-end">
          <div className="flex gap-5 place-items-center">
            <button className="bg-white rounded-xl text-sm text-[#BC312E] px-4 py-1 border border-[#BC312E]">
              Cancle
            </button>
            <button className=" rounded-xl text-sm text-white bg-[#BC312E] border border-[#BC312E] px-4 py-1 ">
              Save
            </button>
          </div>
        </div>
        <div className="font-semibold text-lg tracking-wider my-10">Skills</div>
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
        <div className="font-semibold text-lg tracking-wider my-10">
          Address
        </div>
        <div>
          <div className="font-semibold text-lg tracking-wider my-10">
            Permanent Address
          </div>
          <div className="grid grid-cols-2 my-10 gap-5">
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">Address Line 1:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="text"
                  placeholder="xyz"
                />
              </div>
            </div>
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">Address line 2:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="text"
                  placeholder="xyz"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 my-10 gap-5">
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">Pin Code:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="number"
                  placeholder="480XXX"
                />
              </div>
            </div>
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">City:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="text"
                  placeholder="Enter City"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 my-10 gap-5">
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">State:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="text"
                  placeholder="Enter State"
                />
              </div>
            </div>
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">District:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="text"
                  placeholder="Enter District"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold text-lg tracking-wider my-10">
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
              <div className="text-gray-600 w-1/4">Address Line 1:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="text"
                  placeholder="xyz"
                />
              </div>
            </div>
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">Address line 2:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="text"
                  placeholder="xyz"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 my-10 gap-5">
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">Pin Code:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="number"
                  placeholder="480XXX"
                />
              </div>
            </div>
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">City:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="text"
                  placeholder="Enter City"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 my-10 gap-5">
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">State:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="text"
                  placeholder="Enter State"
                />
              </div>
            </div>
            <div className="flex w-full gap-3 place-items-center">
              <div className="text-gray-600 w-1/4">District:</div>
              <div className=" w-3/4">
                <input
                  className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
                  type="text"
                  placeholder="Enter District"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <div className="flex gap-5 place-items-center">
            <button className="bg-white rounded-xl text-sm text-[#BC312E] px-4 py-1 border border-[#BC312E]">
              Cancle
            </button>
            <button className=" rounded-xl text-sm text-white bg-[#BC312E] border border-[#BC312E] px-4 py-1 ">
              Save
            </button>
          </div>
        </div>
        <div className="font-semibold text-lg tracking-wider my-10">
          Documents
        </div>
        <div className="flex gap-5 w-3/4 place-items-center my-10">
          <div className="text-gray-600">Passport Photo:</div>
          <div className=" w-3/4">
            <input
              className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
              type="file"
              placeholder="photo.pdf"
            />
          </div>
        </div>
        <div className="flex gap-5 w-3/4 place-items-center my-10">
          <div className="text-gray-600">Signature:</div>
          <div className=" w-3/4">
            <input
              className="px-4 py-2 rounded-md w-full border bg-gray-200 border-black text-sm"
              type="file"
              placeholder="Signature.pdf"
            />
          </div>
        </div>
        <div className="flex w-full justify-end">
          <div className="flex gap-5 place-items-center">
            <button className="bg-white rounded-xl text-sm text-[#BC312E] px-4 py-1 border border-[#BC312E]">
              Cancle
            </button>
            <button className=" rounded-xl text-sm text-white bg-[#BC312E] border border-[#BC312E] px-4 py-1 ">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
