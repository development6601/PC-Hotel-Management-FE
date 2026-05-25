import toast from 'react-hot-toast';
import axios from '../../utils/api/ApiConfigure'
import { loadAdminData, loadAllUsers, loadData, logOutData } from './AuthReducer';


// --------------------------------- : USER : --------------------------------------

export const getUser = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/auth/getAllDetail", {
            withCredentials: true,
        });

        dispatch(loadAllUsers(res.data.message.user));

    } catch (error) {
        console.log(error.message);
    }
};

export const userLogin = (user) => async (dispatch) => {
    try {
        const res = await axios.post(`/api/auth/login`, user, { withCredentials: true })

        toast.success(res.data.message)

        dispatch(loadData(res.data.user))
        return res.data.user

    } catch (error) {
        if (error.response) {
            toast.error(error.response.data.message);
        }
    }
}

export const userRegister = (user) => async () => {
    try {
        const res = await axios.post('/api/auth/register', user)
        toast.success(res.data.message)
        return res.data.user
    } catch (error) {
        if (error.response) {
            toast.error(error?.response?.data.message)
        }
        else {
            console.log(error.message);

        }

    }
}

export const userLogOut = () => async (dispatch) => {
    try {

        await axios.post('/api/auth/logOut', {}, { withCredentials: true })
        dispatch(logOutData())
        toast.success('LogOut Successfully.')
    } catch (error) {
        console.log(error.message);

    }
}

export const userInfo = () => async (dispatch) => {

    try {

        const res = await axios.get("/api/auth/myInfo", { withCredentials: true, });

        if (res.data.user) {
            dispatch(loadData(res.data.user));
        } else {
            dispatch(logOutData());
        }

    } catch (error) {
        console.log(error.message);

    }
}


// ------------------------------:Admin:-------------------------------------------

export const getAdminDetail = ()=> async(dispatch) =>{
    try {
        
        const res = await axios.get('/api/auth/AdminDashoard',{withCredentials:true})

        dispatch(loadAdminData(res.data))

    } catch (error) {
        console.log(error.message);
        
    }
}