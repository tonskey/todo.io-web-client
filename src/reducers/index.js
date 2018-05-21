import { combineReducers } from 'redux';
import userReducer from './user';
import tasksReducer from './tasks';

const rootReducer = combineReducers({
    userState: userReducer,
    tasksState: tasksReducer,
});

export default rootReducer;
