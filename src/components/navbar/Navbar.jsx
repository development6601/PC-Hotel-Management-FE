import { NavLink } from "react-router-dom"
import {SlCalender} from 'react-icons/sl'
import '../navbar/navbar.scss'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt="" />
            <h1 className="realnet">REALNET</h1>
        </div>
        <div className="menuList">
            <NavLink className='menu'>HOME</NavLink>
            <NavLink className='menu'>ROOMS</NavLink>
            <NavLink className='menu'>ABOUT US</NavLink>
            <NavLink className='menu'>CONTACT US</NavLink>
        </div>
        <div className="loginInfo">
            <SlCalender className="calender"/>
            <button className="reservation">RESERVATION</button>
        </div>
    </div>
  )
}

export default Navbar