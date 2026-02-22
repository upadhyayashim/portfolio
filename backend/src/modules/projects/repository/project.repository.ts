import { ProjectDTO } from "../interfaces/project.types";
import { ProjectModel } from "../models/project.model";

export const ProjectRepository = {
  create: async (data: ProjectDTO) => {
    return ProjectModel.create(data);
  },

  findAll: async () => {
    return ProjectModel.find().sort({ createdAt: -1 });
  },

  findById: async (id: string) => {
    return ProjectModel.findById(id);
  },
};
