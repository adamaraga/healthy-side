import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authAction'
import { Redirect, Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import React from 'react'
import { useState } from 'react'
import IconButton from "@material-ui/core/IconButton"; 
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Visibility from "@material-ui/icons/Visibility"; 
 
import VisibilityOff from "@material-ui/icons/VisibilityOff"; 

  

const SignIn1 = (props) => {
    const [signin, setSignin] = useState({
        email:'', 
        password:''
        });

    const [values, setValues] = useState({
        password: "", 
    showPassword: false, 
    })

    const {authError, auth, loading} = props;
         if (auth.uid) return <Redirect to='/dashboard' />

    const handleChange = (event) => {
            setSignin({
                 [event.target.id]: event.target.value 
            });
          
     };

    const handleClickShowPassword = () => { 
        setValues({ ...values, showPassword: !values.showPassword }); 
      }; 
      
      const handleMouseDownPassword = (event) => { 
        event.preventDefault(); 
      }; 
      
      const handlePasswordChange = (prop) => (event) => { 
        setValues({ ...values, [prop]: event.target.value }); 
        setSignin({
           ...signin, [event.target.id]: event.target.value
        });
        
      }; 

    

   const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signin)
       props.signIn(signin)
    }

    return (
       <div className="login">
                <form onSubmit={ handleSubmit } className='padding'>
                <Link to="/" id='close' ><AiOutlineCloseCircle/> </Link>
                    <div className='form-con card'>
                        <h3 className="white-text text-darken-1 center">Log In</h3>
                        <div className="input-field">
                            <label htmlFor="email" >Enter your Email</label>
                            <input type="email" id="email" name='email' value={signin.email} onChange={ handleChange}  required />
                        </div>
                        <div className="input-field">
                        <label htmlFor="password"> Enter your Password  </label> 
                            <input  type={values.showPassword ? "text" : "password"} name='password'  id="password" onChange={ handlePasswordChange("password")} value={values.password}  required />
                            <IconButton 
                            onClick={handleClickShowPassword} 
                            onMouseDown={handleMouseDownPassword}
                            id='visibility' > 
                                {values.showPassword ? <Visibility className='white-text' /> : <VisibilityOff className='white-text'/>} 
                            </IconButton> 
    
                            
                            
                        </div>
                        <div className="input-feild">
                        <button className="button-login margin">
                           { !loading  ? 'Login ' : <BeatLoader color='white' loading={true}/> }
                        </button>
                        <span className='white-text'>New User?</span>
                        <Link to="/signup" className='link-text'>  Sign up </Link>
                        <div className="red-text center">
                                {authError ? <div className='auth-error'>{authError}</div> : null }
                        </div>
                        </div>
                   </div>
                   
                </form>
                {/* <div className="signin-img">
                  
                </div> */}
            </div>
    )
}

const mapStateToProps = (state) => ({
    authError: state.auth.authErrorLogin,
    auth: state.firebase.auth,
    loading: state.auth.loadingSignin

})

const mapDispatchToProps =(dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn1)
