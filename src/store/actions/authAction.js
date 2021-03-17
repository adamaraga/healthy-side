import {LOADING} from './type';
import axios from 'axios';
import {SIGNUP_LOADING, SIGNUP_ERROR, SIGNUP_SUCCESS} from '../types'
import {LOGIN_LOADING, LOGIN_ERROR,  LOGIN_SUCCESS} from '../types'

export const Loading = () => {
    return {
        type: LOADING
    }
}


export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {

        // dispatch({
        //     type: LOGIN_LOADING
        // })

        // axios.post('http://192.168.43.8:5000/api/user/login', credentials).then((resp) => {
        //     dispatch({
        //         type: LOGIN_SUCCESS,
        //         payload: resp
        //     })
        // }).catch((err) => {
        //     dispatch({
        //         type: LOGIN_ERROR,
        //         payload: err
        //     })
        // })


        dispatch({
            type: LOGIN_LOADING
        })

        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: "LOGIN_SUCCESS"});
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
}



export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: "SIGNOUT_SUCCESS"});
        });
    }
}

export const signUp = ( newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore})  => {
        
        // dispatch ({
        //     type: SIGNUP_LOADING
        // })
        // axios.post('http://192.168.43.8:5000/api/user/signup', newUser).then((resp)=> {
        //     dispatch({
        //         type: SIGNUP_SUCCESS,
        //         payload: resp
        //     })
        // }).catch((err) => {
        //     dispatch({
        //         type: SIGNUP_ERROR,
        //         payload: err
        //     })
        // })


        dispatch ({
            type: SIGNUP_LOADING
        })
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            firebase.auth().signOut().then(() => {
                dispatch({ type: "SIGNOUT_SUCCESS"});
            });
            dispatch({type: 'SIGNUP_SUCCESS' });
            
        }).catch( err => {
            dispatch({
                type: 'SIGNUP_ERROR', err
            })
        })



    }
}