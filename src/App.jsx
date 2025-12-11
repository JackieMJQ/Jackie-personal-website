import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Welcome from './components/Welcome';

export default function App() {
  return (
    <>
      <Welcome />
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
