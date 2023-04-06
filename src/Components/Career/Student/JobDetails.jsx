import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import './JobDetails.css'
const JobDetails = ({ mode }) => {
    const { id } = useParams();
    console.log(id)

    const [isPending, setisPending] = useState(true);

    const [errorMessage, seterrorMessage] = useState("");
    const [apiData, setapiData] = useState([]);
    const getMyResult = async () => {
        try {
            const res = await axios.get(`https://bigbros.link/api/v1/job/${id}`);
            console.log(res.data);
            setapiData(res.data);
            setisPending(false);
        } catch (error) {
            console.log(error.message);
            seterrorMessage(error.message);
            setisPending(false);
        }
    };
    useEffect(() => {
        getMyResult();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);


    const data = apiData
    return (
        <div className='jobdetails-container'
            style={{ color: mode === "dark" ? "white" : "#5D5D5D" }}>

            <h2 className=" jobdetails-heading">{data['title']} Job Details</h2>
            <div className="font-semibold my-5 tracking-wider"><span className='jobdetails-subtitle'>Job Title:</span><br /> {data['title']}</div>
            <div className="font-semibold my-5 tracking-wider "><span className='jobdetails-subtitle'>Category:</span><br /> {data['category']}</div>
            <div className="font-semibold my-5 tracking-wider "><span className='jobdetails-subtitle'>Location:</span><br /> {data['location']}</div>
            <div className="font-semibold my-5 tracking-wider "><span className='jobdetails-subtitle'>Job Description:</span><br /> {data['description']}</div>
            <div className="font-semibold my-5 tracking-wider "><span className='jobdetails-subtitle'>Experience:</span><br /> {data['experience']}+ Years</div>
            <button className="mt-10 text-[#FC4A1A] text-xl">Apply</button>


        </div >
    )
}

export default JobDetails
