import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { getResume } from "../api/resumeApi";

const Hero = () => {

    const handleScrollToProjects = () => {
        const section = document.getElementById("projects");
        section?.scrollIntoView({ behavior: "smooth" });
    };

    const handleDownloadResume = async () => {
        try {
            const res = await getResume();
            console.log('res ======>', res);
            window.open(res.data.url, "_blank");
        } catch (error) {
            console.error("Resume fetch failed");
        }
    };

    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-6 pt-20">

            <h1 className="text-5xl font-bold">
                Hi, I'm <span className="text-blue-500">Ashim Upadhyay</span>
            </h1>

            <p className="mt-4 text-xl text-gray-400 max-w-2xl">
                Senior Backend-Focused MERN Engineer building scalable financial systems
                and high-performance applications.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6 mt-6 text-2xl text-gray-400">
                <a href="https://www.linkedin.com/in/ashim-kumar-upadhyay-429a55112/" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/upadhyayashim" target="_blank" rel="noreferrer" className="hover:text-white transition">
                    <FaGithub />
                </a>
                <a href="mailto:upadhyay.ashim@gmail.com" className="hover:text-white transition">
                    <MdEmail />
                </a>
            </div>

            <div className="mt-8 flex gap-4">
                <button
                    onClick={handleScrollToProjects}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
                >
                    View Projects
                </button>

                <button
                    onClick={handleDownloadResume}
                    className="px-6 py-3 rounded-xl border border-gray-600 hover:border-white transition"
                >
                    Download Resume
                </button>
            </div>
        </section>
    );
};

export default Hero;