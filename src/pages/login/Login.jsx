import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { ValidationSignIn } from '../../utils/validation/Validation'
import { userLogin } from '../../Store/authReducer/AuthAction'
import { useDispatch } from 'react-redux'


const Login = () => {

    const dispatch = useDispatch()


    const { values, handleSubmit, touched, handleChange, errors, handleBlur} = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: ValidationSignIn,
        onSubmit: async (values) => {

            dispatch(userLogin(values))
            console.log(values);
            
        }

    })





    return (
        <div>
            <div className="login">
                <div className="loginPage">
                    {/* <div className="detail">
                        <div>
                            <img src="https://i.pinimg.com/736x/df/60/a9/df60a968ba1f359e9c8a17c61002548d.jpg" alt="" />
                        </div>
                        <div className='img-info'>
                            <h1>Find Your Sweet Home</h1>
                            <h3>Schedule visit in just a few clicks visits in just a few Clicks</h3>
                        </div>
                    </div> */}
                    <div className='form-page'>
                        <div className='form-info'>
                            <h2>Welcome Back to RealNest</h2>
                            <p>Sign in Your Account</p>
                        </div>
                        <form onSubmit={handleSubmit}>

                            <div className='input-tag'>
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email ? <p className='err'>{errors.email}</p> : null}
                            </div>

                            <div className='input-tag'>
                                <label htmlFor="">Password</label>
                                <input type="password"
                                    placeholder="Password"
                                    name="password"
                                    autoComplete='off'
                                    id="password"
                                    onChange={handleChange}
                                    value={values.password}
                                    onBlur={handleBlur}
                                />
                                {errors.password && touched.password ? <p className='err'>{errors.password}</p> : null}
                            </div>
                            <div>
                                <p className='forgotPwd'>Forgot Password ?</p>
                            </div>




                            <div className='button-sign-in'>
                                <button type='submit' className="Sign-in" >Sign In</button>
                            </div>
                        </form>
                        <div className='info'>
                            <p>Don't Have an Account? <Link to='/register' className='sign-up'>Sign Up</Link></p>
                        </div>
                    </div>

                </div>

            </div >
        </div>
    )
}

export default Login