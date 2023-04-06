import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.css";

import Blog_img1 from "./BlogImages/Blog_img1.png";

import B1 from "./BlogImages/B1.png";
import B2 from "./BlogImages/B2.png";
import B3 from "./BlogImages/B3.png";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Heading,
  Text,
  Stack,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";

export default function Blog() {
  const [blogsData, setblogsData] = useState([]);
  const [errorMessage, seterrorMessage] = useState("");
  const [isPending, setisPending] = useState(true);

  const getMyResult = async () => {
    try {
      const res = await axios.get("https://cms.bigbros.link/api/v2/blogs/");
      console.log(res.data);
      setblogsData(res.data);
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

  return (
    <div>
      <div className="blog-outer">
        <div className="blog-grid">
          {!isPending &&
            blogsData.map((data) => (
              <div className="blog-grid-element">
                <div className="blog-grid-img">
                  <img className="blog-img" src={data.image} />
                </div>
                <div className="blog-grid-date">Date: { data.created && data.created.slice(0,10)}</div>
                <div className="blog-grid-title">{data.title}</div>
                <div className="text-gray-400 text-center text-sm tracking-wider">{data.description && data.description.slice(0,300)}... <label className="text-blue-500 cursor-pointer">Read more.</label></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
