import toast from 'react-hot-toast';
import axios from '../../utils/api/ApiConfigure'
import { currentUser, loadData, logOutData } from './AuthReducer';



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
            
        return res.data.user
        

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

        return res.data.user

        
        
    } catch (error) {
        if(error.response){
            toast.error(error?.response?.data.message)
        }
        else{
            console.log(error.message);
            
        }
        
    }
}

export const userLogOut = () => async(dispatch)=>{
    try {
        
        await axios.post('/api/auth/logOut',{},{withCredentials:true})
        dispatch(logOutData())
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        toast.success('LogOut Successfully.')




    } catch (error) {
        console.log(error.message);
        
    }
}

export const userInfo = () => async(dispatch) =>{

    try {
        
        const res = await axios.get('/api/auth/myInfo',{withCredentials:true})
        
        dispatch(currentUser(res.data))

    } catch (error) {
        console.log(error.message);
        
    }
}