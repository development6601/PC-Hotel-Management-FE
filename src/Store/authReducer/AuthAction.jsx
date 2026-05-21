import toast from 'react-hot-toast';
import axios from '../../utils/api/ApiConfigure'
import { loadData } from './AuthReducer';



export const getUser = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/auth/getAllDetail")
        dispatch(loadData(res.data.message.user));


    } catch (error) {
        console.log(error.message);

    }

}

export const userLogin = (user) =>async()=>{
    try {
        const res = await axios.post(`/api/auth/login`,user,{withCredentials:true})

        toast.success(res.data.message)
        
        

        
        
        

        
        
    } catch (error) {
        if(error.response){
            toast.error(error.response.data.message);
            
        }
        
    }
}

export const userRegister = (user) => async()=>{
    try {

        const res = await axios.post('/api/auth/register',user)
        toast.success(res.data.message)

        
        
    } catch (error) {
        if(error.response){
            toast.error(error?.response?.data.message)
        }
        else{
            console.log(error.message);
            
        }
        
    }
}