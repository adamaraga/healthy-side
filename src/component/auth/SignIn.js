import React, { Component} from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authAction'
import { Redirect, Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import IconButton from "@material-ui/core/IconButton"; 
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment"; 
import VisibilityOff from "@material-ui/icons/VisibilityOff"; 
import Input from "@material-ui/core/Input"; 

 class SignIn extends Component {
    

    state={
        email:'', 
        password:'',
        showPassword: false, 
    }

    handleClickShowPassword = () => { 
        this.setState({ ...this.state, showPassword: !this.state.showPassword }); 
      }; 
      
    handleMouseDownPassword = (event) => { 
        event.preventDefault(); 
      }; 
      
      handlePasswordChange = (prop) => (event) => { 
        this.setState({ ...this.state, [prop]: event.target.value }); 
      }; 
    

    handleChange = (e) => {
       this.setState({
           [e.target.id]: e.target.value
       })
    }

    handleSubmit = (e) => {
        e.preventDefault()
       this.props.signIn(this.state)
    }



    render() {
        const {authError, auth, loading} = this.props;
         if (auth.uid) return <Redirect to='/dashboard' />

        return (
            <div className="login">
                <form onSubmit={ this.handleSubmit} className='padding'>
                    <div className='form-con'>
                        <h3 className="grey-text text-darken-1 center">Log In</h3>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={ this.handleChange} required />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">password</label>
                            {/* <input type="password" id="password" onChange={ handlePasswordChange("password")}
                            endAdornment={ 
          <InputAdornment position="end"> 
            <IconButton 
              onClick={handleClickShowPassword} 
              onMouseDown={handleMouseDownPassword} 
            > 
              {values.showPassword ? <Visibility /> : <VisibilityOff />} 
            </IconButton> 
          </InputAdornment> 
        } 
                             required /> */}
                            
                            
                            {/* <PasswordShowHide /> */}
                        </div>
                        <div className="input-feild">
                        <button className="button-login margin">
                           { !loading  ? 'Login ' : <BeatLoader color='white' loading={true}/> }
                        </button>
                        <Link to="/signup" className='link-text'><span className='grey-text'>New User?</span>  Sign up </Link>
                        <div className="red-text center">
                                {authError ? <div className='auth-error'>{authError}</div> : null }
                        </div>
                        </div>
                   </div>
                   
                </form>
                <div className="signin-img">
                   {/* <img src={img} alt="health"/> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

        authError: state.auth.authErrorLogin,
        auth: state.firebase.auth,
        loading: state.auth.loading

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
