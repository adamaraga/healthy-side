import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import { ReactReduxFirebaseProvider, isLoaded, getFirebase  } from 'react-redux-firebase'
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'
import { composeWithDevTools } from 'redux-devtools-extension';
import { ScaleLoader } from 'react-spinners'


const store = createStore(rootReducer, 
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase, fbConfig)
  )
);

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false,
}


const rrfProps = {
     firebase,
     config: rrfConfig,
     dispatch: store.dispatch,
     createFirestoreInstance, 
     
   }

 function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div id='circle-loader'> <ScaleLoader loading={true} color='#4ec670' size='200' /> </div>;
        return children
}
  

 
    ReactDOM.render(
      <Provider store={store} >
        <ReactReduxFirebaseProvider {...rrfProps}>
          <React.StrictMode>
            <AuthIsLoaded>
              <App /> 
            </AuthIsLoaded>
          </React.StrictMode>
        </ReactReduxFirebaseProvider>
      </Provider>,
      document.getElementById('root')
    );
  



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
