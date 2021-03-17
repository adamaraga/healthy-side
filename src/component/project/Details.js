
import moment from 'moment'

const Details = ({project}) => {

    return(
        <div>
            
                <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL + project.img } id='details-img' /> 
                    </div>
                    <div className="card-content">
                        <span className="card-title">{project.title} </span>
                        
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>
                        {moment(project.createdAt.toDate()).calendar()}
                        </div>
                    </div>
                </div>
            </div>
                
            
           
        </div>
    )
}




export default Details;