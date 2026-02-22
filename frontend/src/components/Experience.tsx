import { useEffect, useState } from "react"
import { fetchExperiences } from "../api/experienceService";
import { Experience } from "../types/experience";

const ExperienceSection = () => {
    const [experiences, setExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        loadExperience();
    }, []);

    const loadExperience = async () => {
        try {
            const experienceResponse = await fetchExperiences();

            if (experienceResponse && experienceResponse.message === 'Success') {
                setExperiences(experienceResponse.data);
            }
        } catch (error) {
            console.log('error ======>', error);
        }
    };

    return (
        <section
            id="experience"
            className="bg-gradient-to-b from-black via-gray-950 to-black py-24 px-6"
        >
            {/* Heading */}
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold text-white">Experience</h2>
                <p className="text-gray-400 mt-4">
                    My professional journey in building scalable applications.
                </p>
            </div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto border-l border-white/10 pl-8 space-y-12">
                {experiences.map((exp) => (
                    <div key={exp._id} className="relative">
                        {/* Dot */}
                        <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-blue-600"></span>

                        {/* Card */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-white">
                                {exp.role} @ {exp.company}
                            </h3>

                            <p className="text-sm text-gray-400 mt-1">
                                {exp.startDate} - {exp.endDate}
                            </p>

                            <p className="text-gray-300 mt-4 leading-relaxed">
                                {exp.description}
                            </p>

                            {/* Tech */}
                            <div className="flex flex-wrap gap-2 mt-5">
                                {exp.techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ExperienceSection;