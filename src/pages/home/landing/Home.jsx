
import stars from '../../../assets/stars.png'
import './home.scss'
import room1 from '../../../assets/img1Room.avif'
import room2 from '../../../assets/img2Room.avif'

import { MdCallToAction, MdCellWifi, MdDinnerDining, MdFreeBreakfast } from 'react-icons/md';
import { FaBed, FaCar, FaSwimmer } from 'react-icons/fa';
import { IoFitness, IoLogoNoSmoking, IoPeople } from 'react-icons/io5';
import { GiStreetLight } from 'react-icons/gi';
import { Carousel } from 'antd';
import { useEffect } from 'react';
import { getRoom } from '../../../Store/roomReducer/roomAction';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';


const Home = () => {


  let disPatch = useDispatch()
  const rooms = useSelector((state) => state.room.room)

  const user = useSelector((state) => state?.user?.data?.user)

  useEffect(() => {
    disPatch(getRoom())
  }, [])


  const bookRoom = () => {
    if (!user) {
      toast('Login First', {
        icon: '🔐',
        style: {
          background: '#000',
          color: '#fff',
          borderRadius: '5px'
        }
      })
      return
    }
  }

  return (
    <div className="landingpage">
      <section className='section1'>
        <div className="Home-page">
          <img src={stars} alt="" />
          <h1 className='Title'>REALNET LUXURY HOTEL</h1>
          <h2 className='desc'>Located in the hearts of the city, this luxurious, modern hotel offers top-notch amenities for a perfect stay </h2>
        </div>
      </section>

      <section className='section2'>
        <div className='information'>
          <div className='images'>
            <img src={room1} alt="" />
            <img src={room2} alt="" />
          </div>
          <div className='detail'>
            <h3>Welcome TO REALNet</h3>
            <h1>Luxury hotel in the heart of the city</h1>
            <p>Realnet Luxury Hotel in the heart of the city ,offers over 500 modern,luxurious room. Enjoy premium facilities,perfect for relaxion and indulgence. Our friendly staff ensure a seamless,personalized experience, with stunning city views. Discover true luxury and hospility at Relanet</p>

            <button>Read More</button>
          </div>

        </div>
      </section>

      <section className='section3'>

        <div className='rooms'>
          <p className="smallTitle">EXQUISITE AND LUXURIOUS</p>
          <h1 className="mainTitle">Room and suite collection</h1>

          <Carousel arrows infinite >
            {rooms.map((room, index) => (
              <div key={index}>
                <div className="roomCard">
                  <div className="roomText">
                    <h1 className={`${room.status === 'available' ? "available" : "booked"}`}>{room.status.toUpperCase()}</h1>
                    <p className="price">
                      From: <span>₹{room.price}</span> /NIGHT
                    </p>

                    <h2>{room.roomType.toUpperCase()} BED ROOM</h2>
                    <p className="desc">{room.description}</p>


                    <div className="features">
                      <p> <MdCallToAction />ROOM SIZE 28m</p>
                      <p> <GiStreetLight />STREET-VIEW</p>
                      <p><FaBed />KING BED</p>
                      <p><MdFreeBreakfast /> BREAKFAST - YES</p>
                      <p><IoLogoNoSmoking /> SMOKING - NO</p>
                      <p><IoPeople /> {room.totalMember} MEMBER</p>
                    </div>

                    <div className="buttons">
                      <button className="bookBtn" onClick={bookRoom}>BOOK NOW</button>
                      <button className="viewBtn">VIEW ROOM →</button>

                    </div>
                  </div>

                  <img
                    src={`http://localhost:3000/room_img/${room.roomImage}`}
                    alt={room.roomType}
                  />
                </div>
              </div>
            ))}

          </Carousel>

        </div>


      </section>

      <section className='section4'>
        <div className='facility'>
          <p className="smallTitle">MODERN AND COMFORTABLE</p>
          <h1 className="mainTitle">Facilities and amenities</h1>

          <div className='features'>
            <div className='about-feture'>
              <MdCellWifi className='icon' />
              <div className='feture-info'>
                <h3>High Speed WIFI</h3>
                <p>Enjoy seamless, high-spped internet access thoughout the hotel</p>
              </div>
            </div>
            <div className='about-feture'>
              <FaCar className='icon' />
              <div className='feture-info'>
                <h3>Parking Space</h3>
                <p>Ample and secure parking space provider for all hotel guests.</p>
              </div>
            </div>
            <div className='about-feture'>
              <MdDinnerDining className='icon' />
              <div className='feture-info'>
                <h3>Restuarant & Bar</h3>
                <p>Savor gournmet dishes and cocktails at our elegant restuarant and bar</p>
              </div>
            </div>
            <div className='about-feture'>
              <IoPeople className='icon' />
              <div className='feture-info'>
                <h3>Spa Center</h3>
                <p>Include in a variety of relaxing and rejuvenating treatments at our spa</p>
              </div>
            </div>
            <div className='about-feture'>
              <IoFitness className='icon' />
              <div className='feture-info'>
                <h3>Fitness Center</h3>
                <p>stay active with state-of-the-art fitness equipment in our modern gym.</p>
              </div>
            </div>
            <div className='about-feture'>
              <FaSwimmer className='icon' />
              <div className='feture-info'>
                <h3>Swimming Pool</h3>
                <p>Refresh and unwind in our pristine outdoor swimming pool</p>
              </div>
            </div>



          </div>


        </div>

      </section>







    </div >
  )
}

export default Home