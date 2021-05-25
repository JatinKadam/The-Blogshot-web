import * as api from "../api";

export const getBlog = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBlog();
    console.log(data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createBlog = (blog) => async (dispatch) => {
  try {
    const { data } = await api.createBlog(blog);
    console.log(data);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBlog = (id) => async (dispatch) => {
  try {
    await api.deleteBlog(id);
    console.log(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
