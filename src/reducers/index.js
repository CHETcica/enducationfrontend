import { combineReducers } from 'redux';
import photoReducer from './photoReducer';
import userReducer from './userReducer';
import courseReducer from './courseReducer'

export default combineReducers({
  photos: photoReducer,
  users: userReducer,
  courses: courseReducer,
});
