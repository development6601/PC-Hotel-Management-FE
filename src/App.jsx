import { Route, Routes } from "react-router-dom"
import { userInfo } from "./Store/authReducer/AuthAction"
import { useEffect } from "react"
import { getRoom } from "./Store/roomReducer/roomAction"
import { useDispatch } from 'react-redux'

import Aboutus from "../src/pages/home/aboutUs/Aboutus"
import Home from "../src/pages/home/landing/Home"
import Room from "../src/pages/home/room/Room"
import Dashboard from "./pages/Admin/Dashboard/Dashboard"

import Login from "../src/pages/auth/login/Login"
import Register from "../src/pages/auth/register/Register"
import Layout from "../src/utils/layout/Layout"
import ProtectedAdmin from "../src/utils/protectsFolder/protecteRouteAdmin/ProtectedAdmin"
import ContactUs from "./pages/home/contactUs/contactUs"
import ProtectedAuth from "./utils/protectsFolder/protectedAuth/protectedAuth"
import Setting from "./pages/customer/setting/Setting"
import MyBooking from "./pages/customer/myBooking/MyBooking"
import AppAdmin from "./pages/Admin/appAdmin/AppAdmin"
import UserDeatil from "./pages/Admin/user/UserDeatil"
import Booking from "./pages/Admin/booking/Booking"
import AdminLayout from "./utils/adminLayout/AdminLayout"


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRoom())
    dispatch(userInfo())
  }, [])

  return (
    <div className="app">

      {/* -----------: Outlet :--------------------------*/}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="room" element={<Room />}></Route>
          <Route path="about-us" element={<Aboutus />}></Route>
          <Route path="contact-us" element={<ContactUs />}></Route>

        </Route>
        <Route path="/login" element={<ProtectedAuth><Login /></ProtectedAuth>}></Route>
        <Route path="/register" element={<ProtectedAuth><Register /></ProtectedAuth>}></Route>

        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/my-booking" element={<MyBooking />}></Route>

        <Route path="/admin-Dashboard" element={<ProtectedAdmin><AdminLayout /></ProtectedAdmin>}
        >
          <Route index element={<Dashboard />} />
          <Route path="detail" element={<AppAdmin />} />
          <Route path="user" element={<UserDeatil />} />
          <Route path="booking" element={<Booking />} />
        </Route>
      </Routes>





    </div>
  )
}

export default App