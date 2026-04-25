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
                I'm a Senior Software Engineer with 7+ years of experience building production-grade distributed systems and fin-tech platforms. Currently at CarDekho (GirnarSoft), I architected an automated Disbursement Engine that eliminated 80% of manual payment workflows, and engineered a multi-tenant platform migration that reduced cloud infrastructure costs by 50%.
                My expertise spans the complete MERN and MEAN stack — from designing high-concurrency REST APIs and real-time bidding systems with Socket.IO and RabbitMQ, to building responsive frontends with React and Angular. I bring strong depth across PostgreSQL, MongoDB, and Redis, and have hands-on experience integrating payment gateways including Xendit and RCBC in high-stakes financial environments.
                I care deeply about clean architecture, performance at scale, and writing code that teams can maintain and build on. Outside of production systems.
            </p>

            <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                I'm currently exploring AI/LLM integration and RAG-based architectures as the next frontier of backend engineering.
            </p>
        </section>
    );
};

export default About;
