import "../room/room.scss";
import { ArrowDownOutlined } from "@ant-design/icons";
import { DatePicker, InputNumber, Button, Empty } from "antd";
import { MdOutlineBedroomParent } from "react-icons/md";
import { RiSofaLine } from "react-icons/ri";
import { TbBath } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useState } from "react";
import dayjs from "dayjs";
import { checkAvailableRoom } from "../../../Store/roomReducer/RoomAction";


const { RangePicker } = DatePicker;

const Room = () => {
  const dispatch = useDispatch();

  const room = useSelector((state) => state.room.room);
  const user = useSelector((state) => state?.user?.data);


  const [dateValue, setDateValue] = useState(null);
  const [guestCount, setGuestCount] = useState(1);

  const [dates, setDates] = useState({
    checkInDate: "",
    checkOutDate: "",
  });

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

  const checkAvailability = async () => {
    if (!user) {
      toast("Login First");
      return;
    }
    await dispatch(
      checkAvailableRoom({
        checkInDate: dates.checkInDate,
        checkOutDate: dates.checkOutDate,
        guestCount,
      })
    );
    setDateValue(null);
    setDates({
      checkInDate: "",
      checkOutDate: "",
    });
    setGuestCount(1);
  };

  const bookRoom = () => {
    if (!user) {
      toast("Login First", {
        icon: "🔐",
        style: {
          background: "#000",
          color: "#fff",
          borderRadius: "5px",
        },
      });
      return;
    }

  };

  return (
    <div className="room">
      <section className="section1">
        <div className="title">
          <p className="smallTitle">EXQUISITE AND LUXURIOUS</p>
          <h1 className="mainTitle">Room and suites</h1>
          <p>
            <ArrowDownOutlined />
          </p>
        </div>
      </section>

      <section className="section2">
        <div className="title-description">
          <p>REALNET COLLECTION</p>
          <h1>Indulge in luxury and sophistication</h1>
        </div>

        <div className="description">
          <p>
            Offering over 500 spacious, it's perfect for both business and leisure travelers. Enjoy premium facilities, including a apa,fitness center, and fine dinning. Our friendly, attentive staff provides personalized service, ensuring every stay is seamless and unforgettable. with stunning city views and an inviting atmosphere, realnet luxury hotel offers the ideal escape for relaxtion and indulgence,delivering an exceptional hospitality experience in every detail
          </p>
        </div>
      </section>

      <div className="feature">
        <p>
          <MdOutlineBedroomParent />
          Over 500 luxurious rooms & Suites
        </p>

        <p>
          <RiSofaLine />
          Spacious , modern ,elegant spaces
        </p>

        <p>
          <TbBath />
          Top-notch amenities and comforts
        </p>

        <p>
          <SlCalender />
          flexible booking for convenience
        </p>
      </div>

      <div className="booking-filter">
        <RangePicker
          className="date-picker"
          format="YYYY-MM-DD"
          value={dateValue}
          onChange={handleDateChange}
          disabledDate={(current) =>
            current && current < dayjs().startOf("day")
          }
        />

        <InputNumber
          min={1}
          max={10}
          value={guestCount}
          onChange={(value) => setGuestCount(value)}
          className="guest-input"
          placeholder="Guests"
        />

        <Button
          type="primary"
          className="check-btn"
          onClick={checkAvailability}
        >
          Check Availability
        </Button>
      </div>

      <section className="card">
        {room.length > 0 ? (
          room.map((data) => (
            <div className="card-detail" key={data._id}>
              <div className="img-section">
                <img
                  src={`http://localhost:3000/room_img/${data.roomImage}`}
                  alt=""
                />

                <h3>
                  From: <span>₹{data.price}</span>/perNight
                </h3>
              </div>

              <div className="room-information">
                <p className="status">{data.status}</p>

                <h1 className="Title">{data.roomType} Bed Room</h1>

                <p className="desc">{data.description.slice(0, 250)}</p>

                <div className="member-section">
                  <h4>Member:- {data.totalMember}</h4>
                </div>

                <button onClick={bookRoom}>Book Room</button>
              </div>
            </div>
          ))
        ) : (
          <Empty description="No rooms available for selected dates" />
        )}
      </section>
    </div>
  );
};

export default Room;