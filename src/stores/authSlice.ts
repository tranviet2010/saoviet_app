// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    dataLogin: any;
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: null,
    dataLogin: {
        access_token: "eyJ1c2VyLWlkIjo2LCJtb2JpbGUiOiIwMTIzMTIzMTIzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJsb2dpbiIsIk1vYmlsZU51bWJlciI6IjAxMjMxMjMxMjMiLCJyb2xlIjpbIlVTRVIiXSwiaXNfYWN0aXZhdGVkIjoiMSIsIm5pY2tuYW1lIjoiMDEyMzEyMzEyMyIsInR5cCI6IkJlYXJlciIsImZ1bGxuYW1lIjoiREFUIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiMDEyMzEyMzEyMyIsImV4cCI6MTY5MjA4NDM2MiwiY3VzdF9pZCI6IjYiLCJpYXQiOjE2OTIwODQxODIsImVtYWlsIjoiZGF0QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiMDEyMzEyMzEyMyIsImp0aSI6ImM4NDA5OTI0LTdkNjgtNGZkNC04ZjZlLWZlYzBiNWIzNDkxMCJ9.qsEv35S5psgLOUsSK5BHJ85Yhn8wI8h-C8G56TqIfg9skbjSPM-B8HFsqWNm1SgywGpLe346G4wFoJFOV-OPsog_JK8LSq8fj_gxNGqjjIbAo1zqAsiaN0bRR1n1oaw22rkFkFBuPSbCvcVx2oOTeKnnlrUhvFSJPYdZiUaVJTEznOSvb3wR782dqa1xb2yr8AsLN75hts81n3xkLeagkm7UZLrQ_81fPgcXxm_OTOX2k81BRqWHK04gp0AAJ7fSzvbTJqNcHaURQq7rBY7Akkbsf6_wY_XjCAtm8GmcwwGqX5xGPmb6N7WCgmy0Gk2vzl75sypBAlFs441qKttswg"
    }
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<any>) {
            state.isAuthenticated = true;
            state.token = action.payload;
            state.dataLogin = action.payload;
            localStorage.setItem('token', action?.payload?.access_token)
            localStorage.setItem('custId', action?.payload?.cust_id)
            localStorage.setItem('role', action?.payload?.role)
        },
        logout(state) {
            state.isAuthenticated = false;
            state.token = null;
        },
    },
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
