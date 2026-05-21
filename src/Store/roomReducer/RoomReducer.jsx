import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    room:[]
}

export const room = createSlice({
    name:"room",
    initialState,
    reducers:{
        loadRoom:(state,action)=>{
            state.room = action.payload
           
        }

    }

})

export const {loadRoom} = room.actions

export default room.reducer