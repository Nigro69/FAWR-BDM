import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import './Prof.css'

const Profile = ({func}) => {
  return (
    <div className="p-4 mx-10 my-4">
      <div className="font-semibold text-2xl mb-4 tracking-wider text-gray-200">
        Profile
      </div>
      <div className="bg-gray-200 dark:bg-[#211F22] rnd-shd p-6">
        <div className="flex justify-between">
          <div className="flex place-items-center gap-5">
            <div>
              <img
                className="object-cover rounded-full h-20 w-20 border-2 "
                src="https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg"
                alt="prof_pic"
              />
            </div>
            <div className="space-y-3">
              <div className="font-semibold text-gray-100 text-2xl tracking-wider">
                Darlene Robertson
              </div>
              <div className="font-semibold text-gray-400 ">
                Senior Developer
              </div>
            </div>
          </div>
          <div onClick={()=>func(8)} className="font-semibold text-[#BC312E] cursor-pointer">
            Edit profile
          </div>
        </div>
        <div className="flex justify-between py-2">
          <div className="flex gap-5">
            <div className="font-semibold text-sm text-gray-400 flex gap-2 place-items-center">
              <AiOutlineMail /> yashbarman3010@gmail.com
            </div>
            <div className="font-semibold text-sm text-gray-400 flex gap-2 place-items-center">
              <AiOutlinePhone />
              +91 6261630049
            </div>
          </div>
          <div className="flex place-items-center gap-2">
            <div className="font-semibold text-sm cursor-pointer text-blue-500">
              Resume
            </div>{" "}
            |{" "}
            <div className="font-semibold text-sm cursor-pointer text-blue-500">
              Cover Letter
            </div>{" "}
            |{" "}
            <div className="font-semibold text-sm cursor-pointer text-blue-500">
              Preference
            </div>
          </div>
        </div>
        <div className="w-4/5">
            <div className="font-semibold text-lg text-gray-200">Experience</div>
            <div className="flex justify-between my-3">
                <div className="flex gap-3 place-items-center">
                    <div className="bg-gray-300 h-16 w-16"></div>
                    <div className="space-y-1">
                        <div className="font-semibold text-gray-200">Senior Developer</div>
                        <div className="text-sm text-gray-200">Company Name</div>
                    </div>
                </div>
                <div className="grid place-items-center">
                    <div className="text-sm text-gray-200">July 2018 - Aug 2022</div>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="w-3/4 text-sm tracking-wide text-gray-200">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </div>
            </div>
            <div className="flex justify-between my-3">
                <div className="flex gap-3 place-items-center">
                    <div className="bg-gray-300 h-16 w-16"></div>
                    <div className="space-y-1">
                        <div className="font-semibold text-gray-200">Junior Developer</div>
                        <div className="text-sm text-gray-200">Company Name</div>
                    </div>
                </div>
                <div className="grid place-items-center text-gray-200">
                    <div className="text-sm ">Aug 2016 - June 2018</div>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="w-3/4 text-sm text-gray-200 tracking-wide">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </div>
            </div>
            <div className="font-semibold text-lg">Skills</div>
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
