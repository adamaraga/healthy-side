import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'
// import { Profiler } from 'react'


const SignInLink = (props) => {
    
    
      
    return (
        <ul className="sign-in-link-con" >
            <li> <NavLink to='/dashboard' className='btn btn-floating' id='initials'>{props.profile.initials}</NavLink> </li>
            <li> <NavLink to='/create'  className="appbar-link" >New project</NavLink> </li>
            <li> <a onClick={props.signOut} className='login-btn'>Log out</a> </li>
            
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignInLink);