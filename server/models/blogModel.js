import mongoose from "mongoose";
const blogSchema = mongoose.Schema({
  title: String,
  content: String,
  creator: String,
});

const BlogPost = mongoose.model("BlogPost", blogSchema);

export default BlogPost;
