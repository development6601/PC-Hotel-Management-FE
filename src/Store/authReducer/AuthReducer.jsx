import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: null,
    users: [],
    Admin:[],
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
        loadAdminData:(state,action)=>{
            state.Admin = action.payload
        }
    },

})

export const { loadData, logOutData, loadAllUsers , loadAdminData} = userSlice.actions

export default userSlice.reducer