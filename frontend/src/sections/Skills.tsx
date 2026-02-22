const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TypeScript",
    "TailwindCSS",
    "REST APIs",
    "MySQL",
    "AWS Basics",
    "Git + GitHub",
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto"
        >
            {/* Heading */}
            <h2 className="text-4xl font-bold mb-10">
                My <span className="text-blue-500">Skills</span>
            </h2>

            {/* Skill Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 border border-gray-800 rounded-2xl p-5 text-center 
                           hover:border-blue-500 hover:scale-105 transition duration-300"
                    >
                        <p className="text-white font-medium">{skill}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;