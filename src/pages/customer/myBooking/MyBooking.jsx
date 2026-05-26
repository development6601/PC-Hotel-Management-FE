import { useEffect, useState } from "react";
import "./myBooking.scss";
import { useDispatch, useSelector } from "react-redux";
import { Empty } from "antd";
import {
  getMyBooking,
  cancelBooking,
} from "../../../Store/customerReducer/customerAction";
import {useNavigate} from 'react-router-dom'

const MyBooking = () => {
  const [status] = useState(true);

  const dispatch = useDispatch();
  const data = useSelector((state) => state?.customer?.myBooking || []);

  const [cancelBook, setCancelBook] = useState(false)

  const [bookId,setBookId] = useState(null)
  const navigate = useNavigate()

  const formatDate = (d) => {
    if (!d) return "";
    return d.split("T")[0].split("-").reverse().join("/");
  };

  const cancelBookingHandler = async (id) => {
    await dispatch(cancelBooking(id));
  };

  useEffect(() => {
    dispatch(getMyBooking());
  }, [dispatch]);

  return (
    <div className="Booking-page">
      <h1 className="mybooking">My Booking :-</h1>

      <div className="booking">
        {data.length > 0 ? (
          data.map((booking) => (
            <div className="booking-card" key={booking._id}>
              <div className="header">
                <img
                  src={`http://localhost:3000/room_img/${booking?.roomId?.roomImage}`}
                  alt="room-img"
                />
              </div>

              <div className="room-detail">
                <div className="room-information">
                  <h1 className="title">
                    {booking?.roomId?.roomType} Room
                  </h1>

                  <h3 className="price">
                    Price :- ₹{booking.totalAmount}
                  </h3>

                  <div className="info">
                    <h4>Guest : {booking.guestCount}</h4>
                    <h4>Room Number :- {booking?.roomId?.roomNumber}</h4>
                  </div>

                  <div className="date">
                    <p>Check-in-date : {formatDate(booking?.checkInDate)}</p>
                    <p>Check-out-date : {formatDate(booking?.checkOutDate)}</p>
                  </div>
                </div>

                <hr className="line" />

                <div className="btn-info">
                  {status ? (
                    <button className={`status ${booking?.bookingStatus}`}>
                      {booking?.bookingStatus}
                    </button>
                  ) : (
                    <button className="status">CheckOut</button>
                  )}

                  <button
                    disabled={booking.bookingStatus === "cancelled"}
                    className={
                      booking.bookingStatus === "cancelled"
                        ? "cancelBtn notActive"
                        : "cancelBtn"
                    }
                    onClick={() => {
                      setBookId(booking._id)
                      setCancelBook(true)
                    }}
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-data">
            <Empty description="No bookings found" />
          </div>
        )}


      </div>
      {cancelBook && (
        <div className="warning">
          <div className="card">
            <h1>Cancel-Booking</h1>
            <p>Are You sure want to cancel Booking ? </p>
            <div className="btn-info">
              <button onClick={()=>{setCancelBook(false)}}>Back</button>
              <button className="cancel-btn" onClick={()=>{
                cancelBookingHandler(bookId)
                navigate('/room')
                setCancelBook(false)
                setBookId(null)
                }}>Booking cancel</button>
            </div>
          </div>

        </div>
      )}




    </div>
  );
};

export default MyBooking;