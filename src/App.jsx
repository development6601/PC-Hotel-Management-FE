import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import { getUser } from "./Store/authReducer/AuthAction"
import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import Layout from "./utils/layout/Layout"
import Register from "./pages/register/Register"


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
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

      </Routes>





    </div>
  )
}

export default App