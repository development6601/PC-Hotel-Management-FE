import { Link } from "react-router-dom";
import "./register.scss";
import { useFormik } from "formik";
import {ValidationSignup} from '../../utils/validation/Validation'

const Register = () => {

    const {values, handleChange, handleBlur, handleSubmit, touched, errors,} = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },

        validationSchema:ValidationSignup,

        onSubmit: (values) => {
            const user ={
                fullName:{
                    firstName:values.firstName,
                    lastName:values.lastName
                },
                email:values.email,
                password:values.password
            }

            console.log(user);
            
        },
    });

    return (
        <div className="register">

            {/* LEFT SIDE */}
            <div className="register__left">

                <div className="register__header">
                    <span>SIGN UP</span>
                    <h1>Create an Account</h1>
                    <p>Fill out the form to get started</p>
                </div>

                <form
                    className="register__form"
                    onSubmit={handleSubmit}
                >

                    {/* FIRST & LAST NAME */}
                    <div className="form-row">

                        <div className="form-group">
                            <label htmlFor="firstName">
                                First Name
                            </label>

                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="First name *"
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            {
                                touched.firstName && errors.firstName ? (
                                    <p className="error">
                                        {errors.firstName}
                                    </p>
                                ) : null
                            }
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">
                                Last Name
                            </label>

                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Last name *"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            {
                                touched.lastName &&
                                    errors.lastName ? (
                                    <p className="error">
                                        {errors.lastName}
                                    </p>
                                ) : null
                            }
                        </div>

                    </div>

                    {/* EMAIL */}
                    <div className="form-group">

                        <label htmlFor="email">
                            Email Address
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email *"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        {touched.email && errors.email ? (
                                <p className="error">
                                    {errors.email}
                                </p>
                            ) : null
                        }

                    </div>

                    <div className="form-group">

                        <label htmlFor="password">
                            Password
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password *"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        {touched.password && errors.password ? (
                            <p className="error">
                                    {errors.password}
                                </p>
                            ) : null
                        }

                    </div>

                    {/* BOTTOM */}
                    <div className="register__bottom">

                        <p>
                            Already have an account?{" "}

                            <Link to="/login" className="login-link">
                                Login
                            </Link>
                        </p>

                        <button type="submit">
                            Sign Up
                        </button>

                    </div>

                </form>

            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="register__right">

                <img
                    src="https://images.unsplash.com/photo-1549294413-26f195200c16?w=900&auto=format&fit=crop&q=80"
                    alt="Hotel"
                />

            </div>

        </div>
    );
};

export default Register;