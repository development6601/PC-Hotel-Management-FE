import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    customer:[],
    myBooking:[]
}

const customerSlice = createSlice({
    name:'customer',
    initialState,
    reducers:{
        loadCustomer:(state,action)=>{
            state.customer = action.payload
        },
        loadMyBooking:(state,action)=>{
            state.myBooking = action.payload
        }
    }

})

export const {loadCustomer , loadMyBooking} = customerSlice.actions

export default customerSlice.reducer