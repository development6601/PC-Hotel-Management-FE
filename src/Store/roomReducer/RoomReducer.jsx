import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    room:[],
    roomById:null
}

export const room = createSlice({
    name:"room",
    initialState,
    reducers:{
        loadRoom:(state,action)=>{
            state.room = action.payload
        },
        loadRoomById:(state,action) =>{
            state.roomById = action.payload
        }

    }

})

export const {loadRoom , loadRoomById} = room.actions

export default room.reducer