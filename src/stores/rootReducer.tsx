import { combineReducers } from '@reduxjs/toolkit';
// import userReducer from './user.store';
import globalReducer from './global.store';


const rootReducer = combineReducers({
    //   user: userReducer
    global: globalReducer,
});

export default rootReducer;
