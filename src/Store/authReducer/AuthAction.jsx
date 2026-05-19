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
        const res = await axios.post(`/api/auth/login?email=${user.email}&password=${user.password}`)
        console.log(res.data);
        
        
    } catch (error) {
        console.log(error.message);
        
    }
}