import { LOADING } from '../actions/type'

const initState = {
    projects: [
        {id: '1', img: 'pic1.jpg' },
        {id: '2', img: 'pic2.jpg' },
        {id: '3', img: 'pic3.jpg'},
        {id: '4', img: 'pic4.jpg'},
        {id: '5', img: 'pic5.jpg'},
        {id: '6', img: 'pic6.jpg'},
      ],
      loading: false,

}


const projectReducer = (state= initState, action) => {
    switch (action.type) {
        case LOADING: 
            return {
                loading: true
            };
        case 'CREATE_PROJECT':
            console.log('createed pro', action.project);
            return {
                ...state,
                authError: null,
                loading: false
            };
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return {
                ...state,
                authError: 'Unable to create project',
                loading: false
            };
        
        default:
            return state;
    }
}

export default projectReducer;