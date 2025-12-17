import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Welcome from './components/Welcome';
import Skills from './components/Skills';
import Photography from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Welcome />
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Photography />
      <Contact />
      <Footer />
    </>
  );
}
