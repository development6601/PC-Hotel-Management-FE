import toast from 'react-hot-toast';
import axios from '../../utils/api/ApiConfigure'
import { conformationBooking, loadBooking } from './BookingReducer';

export const getAllBooking = () => async(dispatch)=>{
    try {
        const res = await axios.get('/api/book/allBookings',{withCredentials:true})
        dispatch(loadBooking(res?.data))
        
    } catch (error) {
        console.log(error.message);
        
    }
}


export const bookingDetail = (id,data) => async(dispatch) =>{
  try {
    
    
    
    const res = await axios.post(`/api/book/bookRoom/${id}`,data,{withCredentials:true})
    dispatch(conformationBooking(res.data))
       
    toast.success('booking Successfully')
    return res.data.booking

  } catch (error) {
    console.log(error.message);
    toast.error(error?.response?.data.message)
    
  }
}