import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    booking:[]
}

export const bookingSlice = createSlice({
    name:"booking",
    initialState,
    reducers:{
        loadBooking:(state,action)=>{
            state.booking = action.payload
        }
    }
})

export const {loadBooking} = bookingSlice.actions
export default bookingSlice.reducer 