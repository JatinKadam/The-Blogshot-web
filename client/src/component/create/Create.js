import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../../actions/blog";
import { useHistory } from "react-router-dom";
import "./create.css";
const Create = () => {
  let history = useHistory();
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    creator: "",
  });
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    setBlogData({
      title: "",
      content: "",
      creator: "",
    });
    dispatch(createBlog(blogData));
    history.push("/");
  }

  return (
    <div className="create-wrapper">
      <div className="head-text">
        <h1>Hello,</h1>
        <p>
          Throw your <span>Thoughts</span> here
        </p>
      </div>
      <div className="form-wrapper">
        <form class="form" autoComplete="off" onSubmit={handleSubmit}>
          <input
            className="title"
            name="title"
            placeholder="Title"
            value={blogData.title}
            onChange={(e) =>
              setBlogData({ ...blogData, title: e.target.value })
            }
          />
          <textarea
            className="content"
            name="content"
            type="textarea"
            placeholder="content"
            value={blogData.content}
            onChange={(e) =>
              setBlogData({ ...blogData, content: e.target.value })
            }
          />
          <input
            className="creator"
            name="creator"
            placeholder="creator"
            value={blogData.creator}
            onChange={(e) =>
              setBlogData({ ...blogData, creator: e.target.value })
            }
          />

          <button className="form-btn" type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Create;
