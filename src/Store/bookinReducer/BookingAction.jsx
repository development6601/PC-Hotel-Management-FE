import axios from '../../utils/api/ApiConfigure'
import { loadBooking } from './BookingReducer';

export const getAllBooking = () => async(dispatch)=>{
    try {
        const res = await axios.get('/api/book/allBookings',{withCredentials:true})
        dispatch(loadBooking(res?.data))
        
    } catch (error) {
        console.log(error.message);
        
    }
}