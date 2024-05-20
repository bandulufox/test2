const express = require('express');
const router = express();

const projectController = require('../controllers/controllers');

router.use(express.json());

// CREATE Projects
router.post('/project', projectController.createProject);

// GET ALL PROJECTS
router.get('/project', projectController.getAllProjects);

// GET BY ID PROJECTS 
router.get('/project/:id', projectController.getProjectById);


module.exports = router;