import React, {useState} from "react";
import axios from 'axios';
import './NewProject.css'

const NewProject = ()=>{
    const [project, setProject] = useState({
        name: '',
        duration: '',
        start_date: '',
        status: '',
        coeff: ''
    })
    const baseUrl = process.env.REACT_APP_BASE_URL;

  const handleInputChange = (e, field) => {
    setProject({ ...project, [field]: e.target.value });
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const projectObject = {
        "name": project.name,
        "duration": "23:59:00",
        "start_date": project.start_date+"T00:00:00.999767-05",
        "status": "false",
        "coeff": project.coeff
    }

    //console.log(projectObject)
    
    try{
        const response = await axios.post(`${baseUrl}/project/newProject`, projectObject)
        console.log('nice')
    }catch(err){
        console.log(err)
    }

    setProject({
        name: '',
        duration: '',
        start_date: '',
        status: '',
        coeff: ''
    })
  }
    return (
        <div className="new-project-container">
            <h3>Create project</h3>
            <div className="new-project-content">
                <form className="form-project" onSubmit={handleSubmit}>
                    <div className="project-name">
                        <label>Project name</label>
                        <input type="text" className="input-case" value={project.name} onChange={(e) => handleInputChange(e, 'name')}/>
                    </div>
                    <div className="project-duration">
                        <label>Duration (in days)</label>
                        <input type="number" min="0" step="1" className="input-case" value={project.coeff} onChange={(e) => handleInputChange(e, 'coeff')}/>
                    </div>
                    <div className="project-startdate">
                        <label>Start date</label>
                        <input type="date" className="input-case" value={project.start_date} onChange={(e) => handleInputChange(e, 'start_date')}/>
                    </div>
                    <button type="submit" className="add-project">Create</button>
                </form>
            </div>
        </div>
    )
}

export default NewProject