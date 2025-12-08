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
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <p className="text-gray-700 mb-8">
        Feel free to reach out to me via email.
      </p>

      <a
        href="mailto:your@email.com"
        className="px-6 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition-all"
      >
        Send Email
      </a>
    </motion.section>
  );
}
