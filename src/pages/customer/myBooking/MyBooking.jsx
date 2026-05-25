import { useEffect, useState } from 'react'
import './myBooking.scss'

import { useDispatch, useSelector } from 'react-redux'
import { getMyBooking } from '../../../Store/customerReducer/CustomerAction'
import { Empty } from 'antd'
import toast from 'react-hot-toast'



const MyBooking = () => {

  const [status] = useState(true)

  const dispatch = useDispatch()
  const data = useSelector((state) => state?.customer?.myBooking)

  const formatDateTime = (d) => {
    return new Date(d).toLocaleString([], {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  
  
  const cancelBooking = (id)=>{
    try {
      console.log(id);
    
      toast.success('cancelled Successfully')
    } catch (error) {
      console.log(error.message);
      
    }

  }
  
  
  useEffect(() => {
    dispatch(getMyBooking()) 
  }, [])

  return (
    <div className='Booking-page'>
      <h1 className='mybooking'>My booking :-</h1>
      <div className="booking">
        {data.length > 0 ?
          <>
            {data.map((data) => {
              return (
                <div className="booking-card" key={data._id}>
                  <div className='header'>
                    <img src={`http://localhost:3000/room_img/${data?.roomId?.roomImage}`} alt="room-img" />
                  </div>
                  <div className='room-detail'>
                    <div className='room-information'>
                      <h1 className='title'>{data?.roomId?.roomType} Room</h1>
                      <h3 className='price'>Price :- ₹{data.totalAmount}</h3>
                      <div className='info'>
                        <h4 className='guest'>Guest : {data.guestCount} </h4>
                        <h4 className='room-Number'>Room Number:- {data?.roomId?.roomNumber}</h4>
                      </div>
                      <div className='date'>
                        <p className='checkIn'>Check-in-date : {formatDateTime(data?.checkInDate)}</p>
                        <p className='checkOut'>Check-out-date : {formatDateTime(data?.checkOutDate)}</p>
                      </div>
                    </div>
                    <hr className='line' />
                    <div className='btn-info'>
                      {status ? <button className='status'>{data?.bookingStatus}</button> : <button className='status'>CheckOut</button>}
                      <hr />
                      <button className={`${data.bookingStatus === 'cancelled' ? 'cancelBtn notActive' : 'cancelBtn'}`} onClick={()=>cancelBooking(data._id)}>Cancel Booking</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </>
          :
          <div className='no-data'>
            <Empty description="No rooms available for selected dates" />
          </div>}



      </div>
    </div>

  )
}

export default MyBooking