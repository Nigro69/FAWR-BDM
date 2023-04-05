import React, { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FiLock } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import axios from "axios";
import './Prof.css'
import { useStateContext } from "../../contexts/ContextProvider";

const Home = ({func}) => {
  const {
    candidateModel,setunMatched
  } = useStateContext();

    const [jobsData, setjobsData] = useState([]);
  const [errorMessage, seterrorMessage] = useState("");
  const [isPending, setisPending] = useState(true);

  const getMyResult = async () => {
    try {
      const res = await axios.get("https://bigbros.link/api/v1/jobs/");
      console.log(res.data);
      setjobsData(res.data);
      setisPending(false);
    } catch (error) {
      console.log(error.message);
      seterrorMessage(error.message);
      setisPending(false);
    }
  };

  const checkExprienceLevel = (value) =>{
    if(value===candidateModel.experience){
      setunMatched(false);
    }
    else{
      setunMatched(true);
    }
  }

  useEffect(() => {
    getMyResult();
  }, []);

  return (
    <div className='p-4 mx-10 my-4'>
        <div className='rnd-shd p-6 rounded-lg'>
            <div className='flex justify-between'>
                <div className='flex place-items-center gap-5'>
                    <div><img className='object-cover rounded-full h-20 w-20' src="https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg" alt="prof_pic" /></div>
                    <div className='space-y-3'>
                        <div className='font-semibold text-2xl tracking-wider dark:text-gray-100'>{candidateModel.firstName + " " + candidateModel.middleName + " " + candidateModel.lastName }</div>
                        <div className='font-semibold text-gray-400 '>Senior Developer</div>
                    </div>
                </div>
                <div onClick={()=>func(8)} className='font-semibold text-[#BC312E] cursor-pointer'>
                    Edit profile
                </div>
            </div>
            <div className='flex justify-between py-2'>
                <div className='flex gap-5'>
                    <div className='font-semibold text-sm text-gray-400 flex gap-2 place-items-center'><AiOutlineMail/>{candidateModel.email}</div>
                    <div className='font-semibold text-sm text-gray-400 flex gap-2 place-items-center'><AiOutlinePhone/>{candidateModel.phoneNumber}</div>
                </div>
                <div className='flex place-items-center gap-2'>
                    <div className='font-semibold text-sm cursor-pointer text-blue-500'>Resume</div> | <div className='font-semibold text-sm cursor-pointer text-blue-500'>Cover Letter</div> | <div className='font-semibold text-sm cursor-pointer text-blue-500'>Preference</div> 
                </div>
            </div>
        </div>
        <div className='flex justify-between place-items-center mt-10 mb-3'>
            <div className='font-semibold text-xl tracking-wider '>Recommended Jobs</div>
            <div className='font-semibold '>see all jobs</div>
        </div>
        <div className='space-y-3'>
        {!isPending &&
          jobsData.map((data) => (
            <div key={data.id} className="px-20 py-6 rnd-shd rounded-xl ">
              <div className="flex justify-between place-items-center">
                <div className="font-semibold text-lg tracking-wider">
                  {data.title}
                </div>
                <div className="flex gap-5 text-sm">
                  <div className="flex gap-2 place-items-center">
                    <FiLock /> {data.type}
                  </div>
                  <div className="flex gap-2 place-items-center">
                    <GrLocation /> {data.location}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 place-items-center text-sm">
                <div>{data.category}</div> | <div>Experience: {data.experience} Years</div>
              </div>
              <div className="flex justify-between place-items-center mt-3">
                <div className="text-sm grid place-items-center">
                  Posted: {data.publishedDate} days ago
                </div>
                <div className="flex gap-5 place-items-center">
                  <button className="bg-white rounded-xl text-sm text-[#BC312E] px-4 py-1 border border-[#BC312E]">
                    Save
                  </button>
                  <button  onClick={()=>checkExprienceLevel(data.experience)} className=" rounded-xl text-sm text-white bg-[#BC312E] border border-[#BC312E] px-4 py-1 ">
                    View Job
                  </button>
                </div>
              </div>
            </div>
          ))}
        ;
        </div>
    </div>
  )
}

export default Home