import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom'

function SignpSuccess() {
    return (
        <div className='sign-up-comp'>
            <Link to="/" id='close' ><AiOutlineCloseCircle/> </Link>
            <div className='signup-suc card'>
               
                <h2>CONGRATULATION</h2>
                <p>Sign up Successful</p>
                <Link to="/signin" className='button-login-suc' > Login</Link>
            </div>
        </div>
    )
}

export default SignpSuccess
