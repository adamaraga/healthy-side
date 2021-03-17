// import { LOADING } from '../actions/type'
import { SIGNUP_ERROR,  SIGNUP_SUCCESS, SIGNUP_LOADING} from '../types'
import {LOGIN_LOADING, LOGIN_ERROR, LOGIN_REFRESH, LOGIN_SUCCESS} from '../types'


const initState = {
    authErrorLogin:null,
    authErrorSignup: null,
    loadingSignin: false,
    loadingSignup: false,
    // success: false,
    // error: false,
    // data: ''

}


const authReducer = (state= initState, action) => {
    switch (action.type) {
        // case LOADING: 
        //     return {
        //         loading: true
        //     }
         case LOGIN_LOADING: 
        return {
            loadingSignin:true
        };
        case 'LOGIN_ERROR':
            console.log("login error")
        return {
            
            ...state,
            authErrorLogin: action.err.message,
            loadingSignin: false,
            
        }           
        case 'LOGIN_SUCCESS':
            console.log("login success")
            return {
                
                ...state,
                authErrorLogin: null,
                loadingSignin: false,
            }

        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
            
        case SIGNUP_LOADING:
            return {
                loadingSignup: true
            };
        case "SIGNUP_SUCCESS":
            console.log('signup success');
            return {
                loadingSignup: false,
                ...state,
                authErrorSignup: null,
                
            }
        case "SIGNUP_ERROR":
            console.log('signup error');
            return {
                loadingsignup: false,
                ...state,
                authErrorSignup: action.err.message,
               
            }




        // case LOGIN_LOADING: 
        // return {
        //     loading:true
        // };
        // case LOGIN_SUCCESS:
        //     return {
        //         loading: false,
        //         success: true,
        //         error: false,
        //         data: action.payload
        //     };
        // case LOGIN_ERROR:
        //     return {
        //         loading: false,
        //         success:false,
        //         error: true,
        //         data: action.payload

        //     }
        // case SIGNUP_LOADING:
        //     return {
        //         loading: true
        //     };
        // case SIGNUP_SUCCESS :
        //     return {
        //         loading: false,
        //         success: true,
        //         error: false,
        //         data: action.payload
        //     }
        // case SIGNUP_ERROR:
        //     return {
        //         loading: false,
        //         success:false,
        //         error: true,
        //         data: action.payload

        //     }
       default: 
       return state;
    }
    
}

export default authReducer;