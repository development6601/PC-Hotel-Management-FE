import toast from 'react-hot-toast'
import axios from '../../utils/api/ApiConfigure'
import { loadCustomer, loadMyBooking } from './CustomerReducer'
import { loadData } from '../authReducer/AuthReducer'

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

        formData.append("phoneNumber", userData.phoneNumber || "");

        if(userData.gender){
            formData.append("gender",userData.gender || "")
        }
        formData.append("address", userData.address || "");
        formData.append("idProofNumber", userData.idProofNumber || "");

        if (userData.image) {
            formData.append("image", userData.image);
        }

        const promise = axios.put("/api/customer/updateCustomer", formData, {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        toast.promise(promise, {
            loading: "Updating...",
            success: "validate Successfully",
            error: "Update Failed",
        });

        const res = await promise;

        dispatch(loadCustomer(res.data.user));
        dispatch(loadData(res.data.user));

        return res.data.user;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Update failed");
        return null;
    }
};


export const getAllCustomerDetail = () => async (dispatch) => {
    try {

        const res = await axios.get('/api/customer/getAllCustomer', { withCredentials: true })

        dispatch(loadCustomer(res.data.customer))

    } catch (error) {
        console.log(error.message);


    }
}

export const getMyBooking = () => async (dispatch) => {
    try {

        const res = await axios.get('/api/book/myBooking', { withCredentials: true })

        dispatch(loadMyBooking(res?.data?.bookings))


    } catch (error) {
        console.log(error.message);

    }
}

export const cancelBooking = (id) => async (dispatch) => {
  try {
    const res = await axios.patch(`/api/book/cancelBooking/${id}`, {},{
      withCredentials: true,
    });

    
    dispatch(loadMyBooking(res.data.bookings));

    toast.success("Booking cancelled successfully");
  } catch (error) {
    toast.error(error?.response?.data?.message || "Cancel booking failed");
  }
};