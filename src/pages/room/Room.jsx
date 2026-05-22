import '../room/room.scss'
import { ArrowDownOutlined } from '@ant-design/icons'
import { MdOutlineBedroomParent } from 'react-icons/md'
import { RiSofaLine } from 'react-icons/ri'
import { TbBath } from 'react-icons/tb'
import { SlCalender } from 'react-icons/sl'
import { useSelector } from 'react-redux'

const Room = () => {



  const room = useSelector((state) => state.room.room)

  
  

  return (
    <div className="room">
      <section className='section1'>
        <div className="title">
          <p className="smallTitle">EXQUISITE AND LUXURIOUS</p>
          <h1 className="mainTitle">Room and suites</h1>
          <p><ArrowDownOutlined /></p>
        </div>

      </section>
      <section className='section2'>
        <div className='title-description'>
          <p>REALNET COLLECTION</p>
          <h1>Indulge in luxury and sophistication</h1>
        </div>
        <div className='description'>
          <p>RealNet Luxury Hotel offers over 500 spacious, modern rooms and suites designed for ultimate relaxation.Each room boasts elegant decor,luxurios amenitites, and cutting-edge facilities to ensure comfort. from deluxe rooms to grand suites,every space is thoughtfully crafted with stylish furnishings,high-spped WI-fi and premium services.Guest can unwing in plush bedding, indulge in modern bathrooms with soaking tubs,and enjoy expansive city views.Wheather for leisure or business, our rooms provide the perfect of sophistication and relaxation for an unforgettable stay.
          </p>
        </div>

      </section>
      <div className='feature'>
        <p><MdOutlineBedroomParent />Over 500 luxurious rooms & Suites</p>
        <p><RiSofaLine /> Spacious , modern ,elegant spaces</p>
        <p><TbBath />Top-notch amenities and comforts</p>
        <p><SlCalender />flexible booking for convenience</p>
      </div>

      <section className='card'>
        {room.map((data) => {
          return (
            <div className="card-detail" key={data._id}>
              <div className='img-section' >
                <img src={`http://localhost:3000/${data.roomImage}`} alt="" />

                <h3>From: <span>₹{data.price}</span>/perNight</h3>
              </div>
              <div className="room-information">
                <p className='status'>{data.status}</p>
                <h1 className='Title'>{data.roomType} Bed Room</h1>
                <p className='desc'>{data.description.slice(0,250)}
                </p>
                <div className='member-section'>
                  <h4>Member:- {data.totalMember}</h4>
                </div>
                <button>Book Room</button>
              </div>
            </div>
          )

        })}



      </section>
    </div>
  )
}

export default Room