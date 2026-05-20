import '../landingPage/landingpage.css'
import stars from '../../assets/stars.png'


const LandingPage = () => {
  return (
    <div className="landingpage">
      <div className="landing-page">
        <img src={stars} alt="" />
        <h1 className='Title'>REALNET LUXURY HOTEL</h1>
        <h2 className='desc'>Located in the hearts of the city, this luxurious, modern hotel offers top-notch amenities for a perfect stay </h2>
      </div>
    </div>
  )
}

export default LandingPage