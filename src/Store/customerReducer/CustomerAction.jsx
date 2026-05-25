import toast from 'react-hot-toast'
import axios from '../../utils/api/ApiConfigure'
import { loadCustomer, loadMyBooking } from './CustomerReducer'

export const getCustomerDetail = () => async (dispatch) => {
    try {

        const res = await axios.get('/api/customer/customerDetail', { withCredentials: true })

        dispatch(loadCustomer(res.data?.user))


    } catch (error) {
        console.log(error.message);


    }
}

export const upadteCustomer = (userData) => async (dispatch) => {
    try {

        const formData = new FormData();

        formData.append("fullName", userData.fullName);
        formData.append("email", userData.email);
        formData.append("phoneNumber", userData.phoneNumber);
        formData.append("gender", userData.gender);
        formData.append("address", userData.address);
        formData.append("idProofNumber", userData.idProofNumber);

        if (userData.image) {
            formData.append("image", userData.image);
        }

        // promise
        const promise = axios.put("/api/customer/updateCustomer",formData,{withCredentials: true});

        toast.promise(promise, {
            loading: "Updating...",
            success: "Updated Successfully",
            error: "Update Failed",
        });

        const res = await promise;

        dispatch(loadCustomer(res.data.user));

    } catch (error) {
        console.log(error.message);
        
    }
};

export const getAllCustomerDetail = () =>async(dispatch)=>{
try {
    
    const res = await axios.get('/api/customer/getAllCustomer',{withCredentials:true})

    dispatch(loadCustomer(res.data.customer))

} catch (error) {
    console.log(error.message);
    
    
}
}

export const getMyBooking = () => async(dispatch)=>{
    try {
        
        const res = await axios.get('/api/book/myBooking',{withCredentials:true})
                
        dispatch(loadMyBooking(res?.data?.bookings))
        

    } catch (error) {
        console.log(error.message);
        
    }
}

export const cancelBooking = (id) => async(dispatch) =>{
    try {
        
        const res = await axios.get(`/api/book/cancelBooking/${id}`,{withCredentials:true})

        dispatch(loadMyBooking(res?.data?.bookings))

    } catch (error) {
        console.log(error.message);
        
    }
}