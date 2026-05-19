import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data:[]
}

const userSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        loadData:(state,action)=>{
            state.data = action.payload
           
        }
    }

})

export const {loadData} = userSlice.actions

export default userSlice.reducer