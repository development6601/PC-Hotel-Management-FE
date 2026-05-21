import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../Store/authReducer/AuthReducer'
import roomReducer from '../Store/roomReducer/RoomReducer'

const store = configureStore({
    reducer:{
        user:userReducer,
        room:roomReducer
    }
})

export default store