import { NavLink, useNavigate } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { IoClose, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDashboard, MdOutlineBookOnline, MdLogout } from "react-icons/md";
import "../navbar/navbar.scss";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "../../Store/authReducer/AuthAction";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state?.user?.data);

    const profileImage = user?.profileImg
        ? `http://localhost:3000/profile_img/${user.profileImg}`
        : "https://cdn-icons-png.flaticon.com/512/149/149071.png";

    const logOutHandler = () => {
        dispatch(userLogOut());
        navigate("/login");
        setOpenMenu(false);
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItemClick = (path) => {
        navigate(path);
        setOpenMenu(false);
    };

    return (
        <>
            <div className={scrolled ? "navbar active" : "navbar"}>
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h1 className="realnet">REALNET</h1>
                </div>

                <div className="menuList">
                    <NavLink to="/" className={({ isActive }) => isActive ? "menu activeMenu" : "menu"}>
                        HOME
                    </NavLink>
                    <NavLink to="/room" className={({ isActive }) => isActive ? "menu activeMenu" : "menu"}>
                        ROOMS
                    </NavLink>
                    <NavLink to="/about-us" className={({ isActive }) => isActive ? "menu activeMenu" : "menu"}>
                        ABOUT US
                    </NavLink>
                    <NavLink to="/contact-us" className={({ isActive }) => isActive ? "menu activeMenu" : "menu"}>
                        CONTACT US
                    </NavLink>
                </div>

                {user ? (
                    <div className="profile-section">
                        <img
                            src={profileImage}
                            className="profile-img"
                            alt="profile"
                            onClick={() => setOpenMenu(true)}
                        />
                    </div>
                ) : (
                    <div className="loginInfo" onClick={() => navigate("/login")}>
                        <SlCalender className="calender" />
                        <button className="reservation">RESERVATION</button>
                    </div>
                )}
            </div>

            {openMenu && <div className="menu-overlay" onClick={() => setOpenMenu(false)} />}

            <div className={openMenu ? "profile-drawer open" : "profile-drawer"}>
                <IoClose className="close-icon" onClick={() => setOpenMenu(false)} />

                <div className="drawer-user">
                    <img src={profileImage} alt="profile" />
                    <h3>{user?.fullName?.firstName || user?.username || "User"}</h3>
                    <p>{user?.email || "user@gmail.com"}</p>
                </div>

                <div className="drawer-links">
                    {user?.role === "Admin" ? (
                        <div className="drawer-link" onClick={() => menuItemClick("/admin-Dashboard")}>
                            <MdOutlineDashboard />
                            <span>Dashboard</span>
                        </div>
                    ) : (
                        <>
                            <div className="drawer-link" onClick={() => menuItemClick("/my-booking")}>
                                <MdOutlineBookOnline />
                                <span>My Booking</span>
                            </div>

                            <div className="drawer-link" onClick={() => menuItemClick("/setting")}>
                                <IoSettingsOutline />
                                <span>Setting</span>
                            </div>
                        </>
                    )}
                </div>

                <button className="drawer-logout" onClick={logOutHandler}>
                    <MdLogout />
                    Logout
                </button>
            </div>
        </>
    );
};

export default Navbar;