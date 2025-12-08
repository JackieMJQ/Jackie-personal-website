import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold mb-6">About Me</h2>
      <p className="text-gray-700 leading-relaxed text-lg">
        I'm a table tennis coach and a developer who enjoys building clean,
        minimalistic, and efficient web experiences. I currently live in
        Newfoundland, Canada, and I enjoy exploring creative projects in tech.
      </p>
    </motion.section>
  );
}
