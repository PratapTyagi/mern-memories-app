import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    const action = await { type: "FETCH-ALL", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    const action = await { type: "CREATE", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    const action = await { type: "UPDATE", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
