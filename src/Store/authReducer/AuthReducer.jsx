import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: null,
    users: [],
    loading: true
}

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loadData: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        loadAllUsers: (state, action) => {
            state.users = action.payload;
        },

        logOutData: (state) => {
            state.data = null;
            state.loading = false;
        },

        
    },

})

export const { loadData, logOutData, loadAllUsers} = userSlice.actions

export default userSlice.reducer