import express from 'express';

import { addProject, deleteProject, getProject } from '../controllers/projectController.js';

const projectRouter = express.Router();

projectRouter.post("/add", addProject);
projectRouter.get("/list", getProject);
projectRouter.delete("/delete/:id", deleteProject)

export default projectRouter;