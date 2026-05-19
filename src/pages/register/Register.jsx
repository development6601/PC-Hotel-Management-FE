import { Link} from 'react-router-dom'
import {useFormik} from 'formik'
import { ValidationSignup } from '../../utils/validation/Validation'


const  Register = () => {

    const {values,handleSubmit ,touched, handleChange,errors ,handleBlur} = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
        },
        validationSchema:ValidationSignup,
        onSubmit:(values)=>{
            console.log(values);
        }
        
    })
    



    return (
        <div className="register">
            <div className="registerpage">
                <div className="detail">
                    <h4>Register Your Detail</h4>
                    <h1>Welcome back</h1>
                </div>
                <div className='form-page'>
                    <form onSubmit={handleSubmit}>
                        <div className='input-tag'>
                            <input type="text"
                            placeholder="Name"
                            name="name"
                            id="name"
                            onChange={handleChange}
                            value={values.name}
                            onBlur={handleBlur}
                             />
                           {errors.name && touched.name ?  <p>{errors.name}</p> : null}


                        </div>
                        <div className='input-tag'>
                            <input type="email"
                            placeholder="Email Address"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                             />
                           {errors.email && touched.email ?  <p>{errors.email}</p> : null}
                        </div>

                        <div className='input-tag'>
                            <input type="password"
                            placeholder="Password"
                            name="password"
                            autoComplete='off'
                            id="password"
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur}
                            />
                            {errors.password && touched.password ? <p>{errors.password}</p> : null}
                        </div>


                        

                        <div className='button-sign-in'>
                            <button type='submit' className="Sign-in">Sign up</button>
                        </div>
                    </form>
                </div>
                <div className='info'>
                    <p>Already have an Account? <Link to='/login' className='sign-up'>Sign In</Link></p>
                </div>
            </div>

        </div >
    )
}


export default Register