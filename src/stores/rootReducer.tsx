import { combineReducers } from '@reduxjs/toolkit';
// import userReducer from './user.store';
import globalReducer from './global.store';
import authSlice from './authSlice';
import usersSlice from './param'

const rootReducer = combineReducers({
    //   user: userReducer
    global: globalReducer,
    authen: authSlice,
    usersSlice: usersSlice
});

export default rootReducer;
