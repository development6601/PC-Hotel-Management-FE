import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../Store/authReducer/AuthReducer'

const store = configureStore({
    reducer:{
        user:userReducer
    }
})

export default store