import toast from 'react-hot-toast';
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
export const checkAvailableRoom = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/api/room/roomIsAvailable", data, {
      withCredentials: true,
    });

    dispatch(loadRoom(res.data.rooms));
    
      toast(res.data.message, {
        icon: "✅",
        duration:1300,
        position:"bottom-right",
        style: {
          background: "#000",
          color: "#fff",
          borderRadius: "5px",
        },
      });
      
    

    return res.data.rooms;
  } catch (error) {
    toast.error(error?.response?.data?.message || "Room not available");
  }
};