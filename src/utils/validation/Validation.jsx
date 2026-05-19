import * as Yup from 'yup'

export const ValidationSignup =  Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your Name"),
    email:Yup.string().email().required("Please Enter Your Email"),
    password:Yup.string().min(5).max(10).required("Please Enter Your Password")
})
export const ValidationSignIn =  Yup.object({
    email:Yup.string().email().required("Please Enter Your Email"),
    password:Yup.string().min(5).max(10).required("Please Enter Your Password")
})