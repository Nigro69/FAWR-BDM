import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import './JobDetails.css'
const JobDetails = ({mode}) => {
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
    }, []);


    const data = apiData
    return (
        <div className='jobdetails-container'
        style={{ color: mode === "dark" ? "white" : "#5D5D5D" }}>

<h2 className=" jobdetails-heading">{data['title']} Job Details</h2>
            <div className="font-semibold my-5 tracking-wider">Job Title: {data['title']}</div>
            <div className="font-semibold my-5 tracking-wider ">Category: {data['category']}</div>
            <div className="font-semibold my-5 tracking-wider ">Location: {data['location']}</div>
            <div className="font-semibold my-5 tracking-wider ">Job Description: {data['description']}</div>
            <div className="font-semibold my-5 tracking-wider ">Experience: {data['experience']}+ Years</div>
            <button className="mt-10 text-[#FC4A1A]">Apply</button>


        </div >
    )
}

export default JobDetails
