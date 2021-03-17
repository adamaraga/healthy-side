import {NavLink} from 'react-router-dom'

const SignOutLink = () => {
    const activeLink = {
        border : '2px solid #4ec670'
    }
    const activeLink2 = {
        display: 'none'
    }

    return (
        <ul className="sign-in-link-con" id='signed-in'>
            
            <li> <NavLink to='/signup' activeStyle={activeLink} className='appbar-link'>signup</NavLink> </li>
            <li> <NavLink to='/signin'  className='login-btn'>Login</NavLink> </li>
           
        </ul>
    )
}

export default SignOutLink;