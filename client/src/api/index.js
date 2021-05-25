import axios from "axios";
const url = "http://localhost:5000/blog";

export const fetchBlog = () => axios.get(url);
export const createBlog = (newBlog) => axios.post(`${url}/create`, newBlog);
export const deleteBlog = (id) => axios.delete(`${url}/${id}`);
