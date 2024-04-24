// Blogs.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Blog } from "../types/types";
import BlogCmp from "../components/blogCmp";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/blogs");
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <h2 className="blog-title">All Blogs</h2>
      <ul>
        {blogs.map((blog: Blog) => (
          <BlogCmp key={blog.id} {...blog} blogs= {blogs} setBlogs ={setBlogs} />
        ))}
      </ul>
      <div className="blog-btn">
        <Link to="/blogs/add" className="link-button">Add new blog</Link>
      </div>
    </div>
  );
};

export default Blogs;
