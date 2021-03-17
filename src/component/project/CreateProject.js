import React, { Component } from 'react'
import {connect} from 'react-redux'
import { creactProject } from '../../store/actions/projectActions'
import { Redirect, Link } from 'react-router-dom'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BeatLoader } from 'react-spinners'

 class CreateProject extends Component {

    state={
        title:'',
        content:'',
        
    }

    handleChange = (e) => {
       this.setState({
           [e.target.id]: e.target.value
       })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.createProject(this.state)
        this.props.history.push('/dashboard');
    }

    render() {
const { auth, authError, loading } = this.props;
if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="login">
                <form onSubmit={ this.handleSubmit} className="create">
                <Link to="/" id='close' ><AiOutlineCloseCircle/> </Link>
                <div className='form-con-create card'>
                    <h3 className="white-text">Create Project</h3>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={ this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea className='materialize-textarea' id="content" onChange={ this.handleChange} required></textarea>
                    </div>
                    
                   <div className="input-feild">
                       <button className="button-login" id='create-button'>
                       { !loading  ? 'Create ' : <BeatLoader color='white' loading={true}/> }

                       </button>
                       <div className="red-text center">
                                {authError ? <p>{authError}</p> : null }
                        </div>
                   </div>
                   </div>
                   
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError,
        loading: state.project.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(creactProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);