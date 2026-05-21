import axios from '../../utils/api/ApiConfigure'
import { loadRoom } from './RoomReducer';

export const getRoom = () => async(dispatch)=>{
    try {
        const res = await axios.get('/api/room/getAllRoom')

        // dispatch(loadRoom(res.data.room))
        dispatch(loadRoom(res.data.room))
        
        

    } catch (error) {
        console.log(error.message);
        
    }
}