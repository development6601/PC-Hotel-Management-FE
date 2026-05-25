import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../Store/authReducer/AuthReducer'
import roomReducer from '../Store/roomReducer/RoomReducer'
import customerReducer from '../Store/customerReducer/CustomerReducer'
import bookingReducer from '../Store/bookinReducer/BookingReducer'

const store = configureStore({
    reducer:{
        user:userReducer,
        room:roomReducer,
        customer:customerReducer,
        booking:bookingReducer
    }
})

export default store