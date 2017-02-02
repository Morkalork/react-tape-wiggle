import fetch from 'isomorphic-fetch';
import {showInfo, showError, hideInfo} from '../notification/actions';

export const SET_POSTS = 'SET_POSTS';

const setPosts = (data) => {
  return {
    type: SET_POSTS,
    payload: data
  };
};

export const refreshPosts = () => {
  return (dispatch) => {
    dispatch(showInfo('Loading Posts'));

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
        dispatch(showError('Invalid response'));
      }
    })
    .catch(() => {
      dispatch(showError('Communication failure'));
    });
  };
};