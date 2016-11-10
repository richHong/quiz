import { combineReducers } from 'redux';
import quizReducer from './quizReducer';
import spinnerReducer from './spinnerReducer';

const rootReducer = combineReducers({
  quizzes: quizReducer,
  spinner: spinnerReducer
});

export default rootReducer;