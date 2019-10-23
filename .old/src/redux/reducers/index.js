import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import batteriesReducer from './batteriesReducer'

const rootReducer = combineReducers({
  batteries: batteriesReducer,

});

export default rootReducer;
