import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Blog } from "../types/types";

const CardContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Content = styled.p`
  font-size: 16px;
`;

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/blogs/${id}`);
        setBlog(response.data.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, []);

  return (
    <div>
      {blog ? (
        <CardContainer>
          <Title>{blog.title}</Title>
          <Content>{blog.content}</Content>
        </CardContainer>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleBlog;
