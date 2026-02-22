import { useEffect, useState } from "react";
import { Project } from "../types/project";
import { fetchProjects } from "../api/projectApi";

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = async () => {
        try {
            const projectResponse = await fetchProjects();
            if (projectResponse && projectResponse.message === 'Success') {
                setProjects(projectResponse.data);

            }
        } catch (error) {
            console.log('error=======>', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
          id="projects"
          className="scroll-mt-24 bg-gradient-to-b from-black via-gray-950 to-black py-24 px-6"
        >
          {/* Heading */}
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white">
              My Projects
            </h2>
      
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Some of the work I’ve built recently using MERN & modern tools.
            </p>
          </div>
      
          {/* Loading */}
          {loading && (
            <p className="text-center text-gray-400">
              Loading projects...
            </p>
          )}
      
          {/* Projects Grid */}
          <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg 
                hover:shadow-blue-500/20 hover:-translate-y-2 transition duration-300"
              >
                {/* Title */}
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
      
                {/* Description */}
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {project.description}
                </p>
      
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
      
                {/* Button */}
                <button
                  className="mt-8 w-full py-2 rounded-xl bg-blue-600 text-white font-medium
                  hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </section>
    );  
}

export default Projects;