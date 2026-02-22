import { ApiError } from "../../../middlewares/error.middleware";
import { Project, ProjectDTO } from "../interfaces/project.types";
import { ProjectRepository } from "../repository/project.repository";

const projects: Project[] = [];

/**
 * @description create new Project
 */
export const createProject = async (data: ProjectDTO) => {
    try {
        const newProject = {
            title: data.title,
            description: data.description,
            techStack: data.techStack,
            githubUrl: data.githubUrl,
            liveUrl: data.liveUrl,
            featured: data.featured ?? false,
            image: data.image ?? '',
        };

        return await ProjectRepository.create(newProject);
    } catch (error) {
        throw error;
    }
};

/**
 * @description Get All Projects
 * @returns Object Project[]
 */
export const getAllProjects = async () => {
    try {
        return await ProjectRepository.findAll();
    } catch (error) {
        throw error;
    }
};

// Get single project
export const getProjectById = async (id: string) => {
    const project = await ProjectRepository.findById(id);

    if (!project) throw new ApiError(404, "Project not found");

    return project;
};
