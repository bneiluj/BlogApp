import { FETCH_POSTS, FETCH_POST } from '../actions/index';

// The post is the individual post
// All is all posts
const INITIAL_STATE = {
  all: [],
  post: null
};

// By default our piece of post will be initiate to an empty object
export default function (state = INITIAL_STATE, action ) {
  switch(action.type) {
    case FETCH_POST:
      // update the existing state with the new post data
      // but keep the other data.
      return { ...state, post: action.payload.data };
    case FETCH_POSTS:
      // New object, and then take whatever is the current state and add
      // the data
      return { ...state, all: action.payload.data};
  default:
    return state;
  }
}
