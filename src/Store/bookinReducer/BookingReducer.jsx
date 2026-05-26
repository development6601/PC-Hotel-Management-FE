import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    booking:[],
    doneBooking:null
}

export const bookingSlice = createSlice({
    name:"booking",
    initialState,
    reducers:{
        loadBooking:(state,action)=>{
            state.booking = action.payload
        },
        conformationBooking:(state,action)=>{
            state.doneBooking = action.payload
        }
    }
})

export const {loadBooking,conformationBooking} = bookingSlice.actions
export default bookingSlice.reducer 