import ContactSection from "../components/Contact";
import ExperienceSection from "../components/Experience";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <ExperienceSection />
            <ContactSection />
        </>
    );
}

export default Home;