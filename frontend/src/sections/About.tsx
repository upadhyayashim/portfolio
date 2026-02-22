const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto"
        >
            <h2 className="text-4xl font-bold mb-6">
                About <span className="text-blue-500">Me</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
                I’m Ashim Upadhyay, a MERN Stack Developer with 7+ years of experience
                building scalable web applications.
                I love working on backend APIs, frontend UI performance, and writing clean
                maintainable code following SOLID principles.
            </p>

            <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                Currently, I’m building a full-stack portfolio project with React,
                Node.js, Express, MongoDB, and TailwindCSS 🚀
            </p>
        </section>
    );
};

export default About;
