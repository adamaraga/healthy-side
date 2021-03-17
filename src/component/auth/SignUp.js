import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import {signUp} from '../../store/actions/authAction'
import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { AiOutlineCloseCircle } from 'react-icons/ai';


 class SignUp extends Component {

    state={
        firstName: '',
        email:'',
        // username: '',
        // role_id: '',
        lastName:'',
        password:'',
    }

    handleChange = (e) => {
       this.setState({
           [e.target.id]: e.target.value
       })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state);
        
    }

    render() {
        const { auth, authError, loading } = this.props;
             
         if (auth.uid) return  <Redirect to='/congrats' />

        return (
            <div className="login">
                <form onSubmit={ this.handleSubmit} >
                <Link to="/" id='close' ><AiOutlineCloseCircle/> </Link>
                    <div className="form-con card">
                        <h3 className="white-text center" id='signup-header'>Sign Up</h3>
                        <div className="input-field">
                            <label htmlFor="email" className=''>Email</label>
                            <input type="email" id="email"  name='email'  value={this.state.email} onChange={ this.handleChange} required/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name='firstName' value={this.state.firstName} onChange={ this.handleChange} required />
                        </div>

                       
                        <div className="input-field">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName"  name='lastName'  value={this.state.lastName} onChange={ this.handleChange} required />
                        </div>

                        {/* <div className="input-field">
                            <label htmlFor="role_id">Role</label>
                            <input type="number" id="role_id"  name='role_id'  value={this.state.role_id} onChange={ this.handleChange} required />
                        </div> */}

                        <div className="input-field">
                            <label htmlFor="password">password</label>
                            <input type="password" id="password"  name='password'  value={this.state.password} onChange={ this.handleChange} required />
                        </div>
                       
                        
                      
                        <div className="input-feild">
                        <button className="button-login" >
                            { !loading  ? 'sign up' : <BeatLoader color='white' loading={true}/> }
                        </button>
                        <div className="red-text center">
                         {authError ? <div className='auth-error'>{authError}</div> : null }
                        </div>
                        </div>
                        <span className='white-text'>Already sign up?</span>
                        <Link to="/signin" className='link-text'>  Login in </Link>
                   </div>
                </form>
                {/* <div className="login-img">
                  
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authErrorSignup,
        loading: state.auth.loadingSignup
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newuser) => dispatch(signUp(newuser)),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);