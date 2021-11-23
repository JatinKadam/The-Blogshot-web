import React from "react";
import Blog from "./blog/Blog";
import { useSelector } from "react-redux";
import "./blogs.css";

const Blogs = () => {
  const blogs = useSelector((state) => state.blogs);
  console.log("updated");
  return !blogs.length ? (
    <h1 style={{ textAlign: "center" }}>are we on the moon?</h1>
  ) : (
    <>
      <div className="blog-wrapper">
        {blogs.map((blog) => (
          <Blog blog={blog} />
        ))}
      </div>
    </>
  );
};
export default Blogs;
