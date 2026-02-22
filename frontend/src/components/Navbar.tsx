const Navbar = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

                    {/* Logo */}
                    <h2 className="text-xl font-bold text-white">
                        Ashim<span className="text-blue-500">.dev</span>
                    </h2>

                    {/* Links */}
                    <div className="hidden md:flex gap-6 text-gray-300 font-medium">
                        <a href="#about" className="hover:text-white transition">
                            About
                        </a>
                        <a href="#skills" className="hover:text-white transition">
                            Skills
                        </a>
                        <a href="#projects" className="hover:text-white transition">
                            Projects
                        </a>
                        <a href="#experience" className="hover:text-white transition">
                            Experience
                        </a>
                        <a href="#contact" className="hover:text-white transition">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;