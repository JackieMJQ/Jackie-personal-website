import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-24 px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2>Contact</h2>
      <p className="text-gray-700 mb-8">
        Feel free to reach out to me via email.
      </p>

      <a
        href="mailto:Jackie010227@outlook.com"
        className="btn"
      >
        Send Email
      </a>
    </motion.section>
  );
}
