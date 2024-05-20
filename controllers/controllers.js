const project = require('../db/collections/project');   

// Create project
const createProject = async (req, res)=>
{
    const body = req.body;
    if(body.constructor === Object && Object.keys(body).length === 0) 
    {
        return res.status(400).json({success: false, error: "You must provide project information"});
    }
    const newProject = new project(body);
    if (!newProject){
        return res.status(400).json({success: false, error: "project creation failed"});
    }
    newProject.save().then(()=>
    {
        return res.status(201).json({success: true, id: newProject._id, message: "Project created!"});
    }).catch(err =>
        {
        return res.status(400).json({success: false, error: err, message: "project not created"});
        });
};

//Get all projects
const getAllProjects = async (req, res) =>
{
    project.find().then((proj)=>
    {
        if(!proj.lenght)
        {
            return res.status(404).json({success: false, data: "No projects found."});
        }
        return res.status(200).json({success: true, data: proj});
    }).catch((err) =>
    {
        return res.status(400).json({success: false, error: err});            
    });
};


// Get projects by ID 
const getProjectById = async (req, res)=>{
    project.findById(req.params.id).then((projectData)=>{
        return res.status(200).json({success: true, data: projectData});
    }).catch((err)=>{
        return res.status(400).json({success: false, error: err});
    });
};

module.exports = 
{
    createProject,
    getAllProjects,
    getProjectById
};