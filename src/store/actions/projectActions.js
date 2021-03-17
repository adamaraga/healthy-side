import {LOADING} from './type'

export const Loading = () => {
    return {
        type: LOADING
    }
}


export const creactProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        dispatch(Loading())
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            img:'/pic1.jpg',
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_PROJECT',
                project
            });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
        
    }
};