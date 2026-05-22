import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Home from "./pages/landing/Home"
import { getUser, userInfo } from "./Store/authReducer/AuthAction"
import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import Layout from "./utils/layout/Layout"
import Register from "./pages/register/Register"
import Dashboard from "./pages/Admin/Dashboard/Dashboard"
import Room from "./pages/room/Room"
import { getRoom } from "./Store/roomReducer/roomAction"
import ProtectedAdmin from "./utils/protecteRouteAdmin/ProtectedAdmin"
import Aboutus from "./pages/aboutUs/Aboutus"


const App = () => {

  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(getUser())
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

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admin-Dashboard" element={
          <ProtectedAdmin>
            <Dashboard />
          </ProtectedAdmin>
        }>


        </Route>

      </Routes>





    </div>
  )
}

export default App