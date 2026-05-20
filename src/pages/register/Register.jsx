import { Link } from "react-router-dom"
import '../register/register.scss'

const Register = () => {


    

    return (
        <div className="register">
            <div className="left-Sidebar">
                <div className="register-info">
                    <h3 className="signUpText">SIGNUP</h3>
                    <div className="info">
                        <h1 className="createAnActText">Create an Account</h1>
                        <p className="startedText">Fill out the form to get started</p>
                    </div>
                </div>
                <div className="register-form">
                    <div className="name-field">
                        <div className="first-name">
                            <div className="first-name-field">
                                <label htmlFor="">Enter Your first name</label>
                                <input type="text" placeholder="First name *" />
                            </div>
                            <p className="error">hello</p>
                        </div>
                        <div className="last-name">
                            <div className="last-name-field">
                                <label htmlFor="">Enter your last Name</label>
                                <input type="text" placeholder="Last Name *" />
                            </div>
                            <p className="error">hello</p>


                        </div>

                    </div>
                    <div className="email-field">
                        <div className="emails">
                            <label htmlFor="">Enter Your Email</label>
                            <input type="email" placeholder="Email *" />
                        </div>
                        <p className="error">hello</p>

                    </div>
                    <div className="password-field">
                        <div className="passwords">
                            <label htmlFor="">Enter your password</label>
                            <input type="Password" placeholder="Password *" />
                        </div>
                        <p className="error">hello</p>


                    </div>
                    <div className="haveAnaccount">
                        <p className="alreadyAct">Already have an account ? <Link className="login">Login</Link></p>
                        <button className="signBtn">Sign up</button>
                    </div>
                </div>
            </div>
            <div className="right-sidebar">
                <img src="https://images.unsplash.com/photo-1549294413-26f195200c16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww" alt="" />

            </div>

        </div>
    )
}

export default Register