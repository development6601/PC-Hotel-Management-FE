import "./roomById.scss";
import { DatePicker, InputNumber, Button } from "antd";
import { useState } from "react";
import dayjs from "dayjs";

import {useSelector} from 'react-redux'
const { RangePicker } = DatePicker;

const GetRoomById = () => {

  const [dateValue, setDateValue] = useState(null);
  const [guestCount, setGuestCount] = useState(1);

  const [dates, setDates] = useState({checkInDate: "",checkOutDate: ""});

  const data = useSelector((state)=>state)
  console.log(data);
  

  const handleDateChange = (value) => {
    setDateValue(value);

    if (value) {
      setDates({
        checkInDate: value[0].format("YYYY-MM-DD"),
        checkOutDate: value[1].format("YYYY-MM-DD"),
      });
    } else {
      setDates({
        checkInDate: "",
        checkOutDate: "",
      });
    }
  };

  const bookRoomHandler = () => {
    console.log({
      checkInDate: dates.checkInDate,
      checkOutDate: dates.checkOutDate,
      guestCount,
    });
  };

  return (
    <div className="room-detail-page">
      

      <div className="room-detail-wrapper">
        <div className="booking-form-card">
          <h2>Book Your Stay</h2>
          <p>Select your date and guest count</p>

          <div className="form-group">
            <label>Check-in & Check-out Date</label>
            <RangePicker
              className="date-picker"
              value={dateValue}
              format="YYYY-MM-DD"
              onChange={handleDateChange}
              disabledDate={(current) =>
                current && current < dayjs().startOf("day")
              }
            />
          </div>

          <div className="form-group">
            <label>Guest Count</label>
            <InputNumber min={1} max={3} value={guestCount} onChange={(value) => setGuestCount(value)}
              className="guest-input"
            />
          </div>

          <div className="price-box">
            <span>Price Per Night</span>
            <h3>₹{1800}</h3>
          </div>

          <Button type="primary" className="book-btn" onClick={bookRoomHandler}> Confirm Booking </Button>
        </div>

        <div className="room-info-card">
          <div className="room-image">
            <img
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGltYWdlJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D"
              alt={"double"}
            />

            <span className={`room-status ${"Active"}`}>
              {"active"}
            </span>
          </div>

          <div className="room-content">
            <h1>{"double"} Room</h1>

            <div className="room-meta">
              <span>Room No: {"PC00121"}</span>
              <span>Guests: {85}</span>
              <span>₹{571}/night</span>
            </div>

            <p>{"asdasdasdasdasd asdasda sdasd"}</p>

            <div className="amenities">
              <h3>Amenities</h3>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetRoomById;