import fetch from 'isomorphic-fetch';

export const SET_POSTS = 'SET_POSTS';
export const FAIL_POST_LOAD = 'FAIL_POST_LOAD';

const setPosts = (data) => {
  return {
    type: SET_POSTS,
    payload: data
  };
};

const failPostLoad = (message) => {
  return {
    type: FAIL_POST_LOAD,
    payload: message
  };
};

export const refreshPosts = () => {
  return (dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      if (response.ok) {
        response
        .json()
        .then((data) => {
          dispatch(setPosts(data));
        });
      }
      else {
        dispatch(failPostLoad('Invalid response'));
      }
    })
    .catch(() => {
      dispatch(failPostLoad('Communication failure'));
    });
  };
};