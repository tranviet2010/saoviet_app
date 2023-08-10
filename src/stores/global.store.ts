import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

interface State {
    loading: boolean;
    loadingData: boolean;
    statusModal: boolean;
    loadingedit: boolean;
    activeTabs?: string | number
}

const initialState: State = {
    loading: false,
    loadingData: false,
    statusModal: false,
    loadingedit: false,
    activeTabs: 1
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setGlobalState(state, action: PayloadAction<Partial<State>>) {
            Object.assign(state, action.payload)
        }
    },
});

export const { setGlobalState } = globalSlice.actions;

export default globalSlice.reducer;
