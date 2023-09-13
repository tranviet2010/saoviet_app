import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPartnerClass, getPartnerSchool } from '../api/partner.api';
import { getParam } from '../api/request';
import { getManageMenu } from '../api/menu.api';
import { getProduct } from '../api/product.api';
import { status } from '../components/core/variable/variable';

// First, create the thunk
export const fetchUserById = createAsyncThunk('users/fetchUserById', async () => {
    const resSchool = await getPartnerSchool({ limit: -1 })
    const resClass = await getPartnerClass({ limit: -1 })

    const getParamAll: any = await getParam()
    const getProductAll: any = await getProduct()
    const getMenus: any = await getManageMenu({ limit: -1 })
    const groupedData = getParamAll?.data?.data?.reduce((result: any, current: any) => {
        if (!result[current.grname]) {
            result[current.grname] = []
        }
        result[current.grname].push(current)
        return result;
    }, {});
    const getAllChildren = getMenus && getMenus?.data.data.map((item: any) => item.children).filter(Boolean).flat()
    return {
        ...groupedData,
        product: getProductAll?.data?.data?.map((value: any) => ({ ...value, value: value?.name })),
        school: resSchool?.data?.data?.map((value: any) => ({ ...value, value: value?.name })),
        class: resClass?.data?.data?.map((value: any) => ({ ...value, value: value?.name })),
        menu: [...getMenus?.data?.data?.map((value: any) => ({ ...value, value: value?.name })), ...getAllChildren],
        status: status
    }
})

const initialState = {
    param: [],
}

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
