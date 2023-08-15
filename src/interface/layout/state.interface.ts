export interface ChildState {

}

interface dataLogin {
    access_token: string
}

export interface State {
    global: {
        loading: Boolean
        loadingData: Boolean
        statusModal: Boolean
        loadingedit: Boolean
        activeTabs: number
    },
    authen: {
        isAuthenticated: Boolean
        token: string
        dataLogin: dataLogin
    },

    usersSlice: {} | any
}