import moment from 'moment'

const ProjectSummary = ({project}) => {
    
    return (
        <div className="project card z-depth-1 project-summary ">
            <div className="card-image" >
                <img src={process.env.PUBLIC_URL + project.img } /> 
            </div>
            <div className="grey-text text-darken-3 card-content">
                <span className="card-title">{project.title} </span>
                <p>Posted by {project.authorFirstName} {project.authorLastName} </p>
                <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
                
        </div>
    )
}

export default ProjectSummary;