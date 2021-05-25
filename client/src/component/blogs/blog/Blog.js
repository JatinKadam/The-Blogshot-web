import { React } from "react";
import { useDispatch } from "react-redux";
import { deleteBlog } from "../../../actions/blog";
import DeleteIcon from "@material-ui/icons/Delete";
import "./blog.css";
const Blog = ({ blog }) => {
  const dispatch = useDispatch();

  return (
    <div className="blog-card" key={blog._id}>
      <h1 className="title-display">{blog.title}</h1>

      <p className="content-display">{blog.content}</p>
      <p className="sign">{blog.creator}</p>
      <div className="btn">
        <button onClick={() => dispatch(deleteBlog(blog._id))}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};
export default Blog;
