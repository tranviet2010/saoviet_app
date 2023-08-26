import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPartnerSchool } from '../api/partner.api';
import { getParam, getProduct } from '../api/request';
import { getManageMenu } from '../api/menu.api';

// First, create the thunk
export const fetchUserById = createAsyncThunk('users/fetchUserById', async () => {
    const resProduct = await getPartnerSchool();
    const getParamAll: any = await getParam();
    const getProductAll: any = await getProduct();
    const getMenus: any = await getManageMenu({ limit: -1 });

    const groupedData = getParamAll?.data?.data?.reduce((result: any, current: any) => {
        if (!result[current.grname]) {
            result[current.grname] = [];
        }
        result[current.grname].push(current);
        return result;
    }, {});
    return {
        ...groupedData,
        product: getProductAll?.data?.data,
        school: resProduct?.data?.data,
        menu: getMenus?.data?.data
    }
})

const initialState = {
    param: [],
}

// Then, handle actions in your reducers:
const usersSlice = createSlice({
    name: 'users',
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
