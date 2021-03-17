import { Link } from 'react-router-dom'
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({projects, projectImg}) => {
   
    return (
        <div className="project-list ">
            {projects && projects.map(project => {
                return (
                    <Link to={"./project/" + project.id} key={project.id}>
                    <ProjectSummary project={project} />
                    
                    </Link>
                )
            })}
            
        </div>
    )
}

export default ProjectList;