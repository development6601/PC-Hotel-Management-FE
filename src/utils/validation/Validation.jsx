import * as Yup from 'yup'

export const ValidationSignup =  Yup.object({
    firstName:Yup.string().min(2).max(25).required("FirstName is required"),
    lastName:Yup.string().min(2).max(25).required("LastName is required"),
    email:Yup.string().email().required("Email is required"),
    password:Yup.string().min(5).max(10).required("Password is required")
})
export const ValidationSignIn =  Yup.object({
    email:Yup.string().email().required("Please Enter Your Email"),
    password:Yup.string().min(5).max(10).required("Please Enter Your Password")
})