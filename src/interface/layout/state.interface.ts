export interface ChildState {

}

export interface State {
    global: {
        loading: boolean
        loadingData: boolean
        statusModal: boolean
        loadingedit: boolean
        activeTabs: number
    },
    usersSlice: {} | any
}