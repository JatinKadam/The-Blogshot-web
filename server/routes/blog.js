import express from "express";
import mongoose from "mongoose";
import BlogPost from "../models/blogModel.js";
const router = express.Router();

router.get("/", async function (req, res) {
  try {
    const blogPosts = await BlogPost.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
router.post("/create", async (req, res) => {
  const blog = req.body;
  const newBlog = new BlogPost(blog);
  console.log(newBlog);
  try {
    newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.log(error);
  }
});
router.delete("/:id", async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Post With That Id");
  await BlogPost.findByIdAndRemove(_id);
  res.json({ message: "post deleted successfully " });
  console.log("deleted");
});
export default router;
