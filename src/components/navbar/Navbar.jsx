import { NavLink, useNavigate } from "react-router-dom"
import { SlCalender } from 'react-icons/sl'
import '../navbar/navbar.scss'
import logo from '../../assets/logo.png'
import { useEffect, useState } from "react"


const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    
    useEffect(()=>{
        user
    })

    


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={scrolled ? "navbar active" : "navbar"}>
            <div className="logo">
                <img src={logo} alt="" />
                <h1 className="realnet">REALNET</h1>
            </div>
            <div className="menuList">
                <NavLink className='menu' to='/' >HOME</NavLink>
                <NavLink className='menu' to='/room'>ROOMS</NavLink>
                <NavLink className='menu'>ABOUT US</NavLink>
                <NavLink className='menu'>CONTACT US</NavLink>
            </div>
            {user ?
                <div className="loginInfo">
                    <button className="reservation" onClick={(() => { navigate('/login') })}>LogOut</button>
                </div> :
                <div className="loginInfo">
                    <SlCalender className="calender" />
                    <button className="reservation" onClick={(() => { navigate('/login') })}>RESERVATION</button>
                </div>



            }



        </div>
    )
}

export default Navbar