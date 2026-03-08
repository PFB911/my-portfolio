import Project from "../models/projectModel.js";

export const addProject = async (req, res) => {
    try {
        const { title, description } = req.body;

        const newProject = new Project({
            title,
            description
        });

        await newProject.save();

        res.json({
            success: true,
            message: "Project added successfully",
            blog: newProject
        })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export const getProject = async (req, res) => {
    try {
        const projects = await Project.find();

        if (projects) {
            return res.json({
                success: true,
                projects
            })
        }
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export const deleteProject = async (req, res) => {

    try {
        const { id } = req.params;


        const projectToDelete = await Project.findByIdAndDelete(id)

        
        if (!projectToDelete) {
            return res.status(404).json({
                success: false,
                message: "Project not found"
            });
        }

        return res.json({success:true, message:"Project deleted succesfully"})

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}