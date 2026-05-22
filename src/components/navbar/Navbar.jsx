import { NavLink, useNavigate } from "react-router-dom"
import { SlCalender } from 'react-icons/sl'
import '../navbar/navbar.scss'
import logo from '../../assets/logo.png'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { userLogOut } from "../../Store/authReducer/AuthAction"

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate()

    const dispatch = useDispatch()


    const user = useSelector((state) => state?.user?.data?.user)
    const [openMenu, setOpenMenu] = useState(false);


    const logOutHandler = () => {
        dispatch(userLogOut())
        navigate('/login')
    }



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
                <NavLink className='menu' to='/about-us'>ABOUT US</NavLink>
                <NavLink className='menu'>CONTACT US</NavLink>
            </div>


            {user ?
                <div className="profile-section">
                    <img src={user?.profilePic || "https://plus.unsplash.com/premium_photo-1739786995646-480d5cfd83dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMGltYWdlfGVufDB8fDB8fHww"}
                        className="profile-img" onClick={() => setOpenMenu(!openMenu)}
                    />
                    {openMenu && (
                        <div className="dropdown-menu new-menu">
                            <p>Setting</p>
                            <p>My booking</p>
                            <p onClick={logOutHandler} className="logout">Logout</p>
                        </div>
                    )}
                </div>

                :
                <div className="loginInfo" onClick={(() => { navigate('/login') })}>
                    <SlCalender className="calender" />
                    <button className="reservation" >RESERVATION</button>
                </div>



            }





        </div>
    )
}

export default Navbar