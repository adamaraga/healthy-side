import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'


function Listdrawer( props ) {
    

    const logoutDrawer = () => {
       
        return (
            <div>
                <li  className='li-list '><NavLink to='/signup'  className='appbar-drawer-link'>signup</NavLink> </li>
                <li className='li-list'> <NavLink to='/signin'  className='appbar-drawer-link'>Login</NavLink> </li>
            </div>
        )
   
    }
    const loginDrawer = () => {
        return (
            <div>
            <li className='li-list center-con'> <NavLink to='/dashboard' className='btn btn-floating ' id='initials'>{props.profile.initials}</NavLink> </li>
            <li className='li-list'> <NavLink to='/create'  className="appbar-drawer-link" >New project</NavLink> </li>
            <li className='li-list'> <a onClick={props.signOut} className='appbar-drawer-link'>Log out</a> </li>
            </div>
        )
   
    }

    const { auth } =props;
    const link = auth.uid ? loginDrawer() :  logoutDrawer();
    return (
        <div>
            {link}
        </div>
    )
}

    const mapStateToProps = (state) => {
        console.log(state)
        return {
            auth: state.firebase.auth,
            
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            signOut: () => dispatch(signOut())
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Listdrawer);
