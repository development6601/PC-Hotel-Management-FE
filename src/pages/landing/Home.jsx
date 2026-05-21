
import stars from '../../assets/stars.png'
import './home.scss'
import room1 from '../../assets/img1Room.avif'
import room2 from '../../assets/img2Room.avif'

import { MdCallToAction, MdFreeBreakfast } from 'react-icons/md';
import { FaBed } from 'react-icons/fa';
import { IoLogoNoSmoking, IoPeople } from 'react-icons/io5';
import { GiStreetLight } from 'react-icons/gi';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Home = () => {

  const room = [
    {
      "roomNumber": "PC00012",
      "roomType": "double",
      "roomImage": "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
      "price": 2100,
      "description": " inchees It offers a space-saving footprint for guest rooms, youth bedrooms, or compact primary suites. Standard dimensions generally require a minimum room size of about feet",
      "status": "available",
      "totalMember": "4",
    },
    {
      "roomNumber": "PC00011",
      "roomType": "double",
      "roomImage": "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
      "price": 1850,
      "description": "A double bed is a standard mattress size designed to sleep two adults or one person who likes a lot of space",
      "status": "available",
      "totalMember": "4",
    }
  ]



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
        <div className='title'>
          <h3>EXQUISTE AND LUXURIOUS</h3>
          <h1>Room and suite collection</h1>
        </div>

        <Carousel arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
          {room.map((data,idx) => {
            return (
              <div className='card-Detail'>
                <div className='card'>

                  <div className='left-desc' key={idx}>
                    <h3>From: <span>₹{data.price}</span></h3>
                    <h1>{data.roomType} Room</h1>
                    <p className='desc'>{data.description}</p>
                    <div className='info'>
                      <div className='personal-info'>
                        <p><MdCallToAction />ROOM SIZE 28m</p>
                        <p><FaBed />1 KING BED</p>
                        <p><IoPeople />{data.totalMember} ADULTS</p>
                      </div>
                      <div className='warning'>
                        <p><GiStreetLight />STREET VIEW</p>
                        <p><IoLogoNoSmoking />NO-SMOKING</p>
                        <p><MdFreeBreakfast />BREAKFAST -YES</p>
                      </div>


                    </div>
                    <div className='btn-info'>
                      <button className='book-now'>BOOK NOW</button>
                      <button className='view-room'>VIEW ROOM</button>

                    </div>

                  </div>
                  <div className='roomImage'>
                    <img src={data.roomImage} alt="" />

                  </div>


                </div>

              </div>
            )
          })}




        </Carousel>


      </section>
    </div>
  )
}

export default Home