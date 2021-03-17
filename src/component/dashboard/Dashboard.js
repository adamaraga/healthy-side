import ProjectList from "../project/ProjectList"
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from "redux"
import { Redirect } from 'react-router-dom'
import { ScaleLoader } from 'react-spinners'



const Dashboard = (props) => {
    

    const { projects, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />

   

     return (
        <div className="dashboard ">
            <div className="advert "> 
                <div className="advert-con">
                    <h5 className='grey lighten-1 white-text center'>ADVERT</h5>
                    <p>To advertise contact </p>
                    <p>email: aragaadam@gmail.com</p>
                    <p>number: 09094120232</p>
                </div>
                
            </div>
            {!projects? <div id='circle-loader'> <ScaleLoader loading={true} color='#4ec670' size='200' /> </div> : <ProjectList projects={projects} />}        
           
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
   return{
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    
   } 
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects', orderBy: ['createdAt', 'desc']}
    ])
)(Dashboard);