import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

interface State {
    loading: boolean
    loadingData: boolean
    statusModal: boolean
    loadingedit: boolean
    activeTabs?: string | number
    dataModal?: any
    modal?: boolean
}


const initialState: State = {
    loading: false,
    loadingData: false,
    statusModal: false,
    loadingedit: false,
    activeTabs: 1,
    dataModal: [],
    modal: false
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setGlobalState(state, action: PayloadAction<Partial<State>>) {
            Object.assign(state, action.payload)
        },
        setModalTrue(state) {
            state.statusModal = true
        },
        setModalFalse(state) {
            state.statusModal = false
            state.dataModal = []
        },
        setDataModal(state, action) {
            state.dataModal = action.payload
        },

        modalTrue(state) {
            state.modal = true
        },
        modalFalse(state) {
            state.modal = false
            state.dataModal = []
        },

    },
});

export const { setGlobalState, setModalTrue, setModalFalse, setDataModal, modalTrue, modalFalse } = globalSlice.actions;

export default globalSlice.reducer;
