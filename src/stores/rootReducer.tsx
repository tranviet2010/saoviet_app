import { combineReducers } from '@reduxjs/toolkit';
// import userReducer from './user.store';
import globalReducer from './global.store';
import authSlice from './authSlice';


const rootReducer = combineReducers({
    //   user: userReducer
    global: globalReducer,
    authen: authSlice
});

export default rootReducer;
