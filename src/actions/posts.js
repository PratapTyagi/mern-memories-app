import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    const action = await { type: "FETCH-ALL", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    const action = await { type: "CREATE", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    const action = await { type: "UPDATE", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    const action = await { type: "DELETE", payload: id };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    const action = await { type: "LIKE-COUNT", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
