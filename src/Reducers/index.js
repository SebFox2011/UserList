import {combineReducers} from "redux";
import UsersReducer from './reducer_users';

const rootReducers = combineReducers({
    user:UsersReducer
});

export default rootReducers;