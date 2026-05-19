import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Home from "./pages/Home/Home"
import { getUser } from "./Store/authReducer/AuthAction"
import { useEffect } from "react"
import {useDispatch} from 'react-redux'

const App = () => {

  const dispatch = useDispatch()
  
  
  
  useEffect(()=>{
    dispatch(getUser())
  },[])
  
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  )
}

export default App