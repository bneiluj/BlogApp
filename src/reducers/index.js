import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import {reducer as formReducer } from 'redux-form';
// this syntax means grab reducer from  redux-form and change name to formReducer

const rootReducer = combineReducers({
  // state: (state = {}) => state
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
