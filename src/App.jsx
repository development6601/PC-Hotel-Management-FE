import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Home from "./pages/landing/Home"
import { getUser } from "./Store/authReducer/AuthAction"
import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import Layout from "./utils/layout/Layout"
import Register from "./pages/register/Register"
import Dashboard from "./pages/Admin/Dashboard/Dashboard"


const App = () => {

  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(getUser())
  }, [])



  return (
    <div className="app">

      {/* -----------: Outlet :--------------------------*/}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-Dashboard" element={<Dashboard />}></Route>

      </Routes>





    </div>
  )
}

export default App