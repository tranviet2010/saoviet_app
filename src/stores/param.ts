import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPartnerSchool } from '../api/partner.api';

// First, create the thunk
export const fetchUserById = createAsyncThunk('users/fetchByIdStatus', async () => {
    const resProduct = await getPartnerSchool();
    return resProduct?.data
})

const initialState = {
    param: [],
}

// Then, handle actions in your reducers:
const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.fulfilled, (state: any, action) => {
            state.param = action?.payload
        })
    },
})

export default usersSlice.reducer
