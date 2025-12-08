import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hello, I'm <span className="text-gray-700">Jiaqi</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto">
          A table tennis coach & frontend developer based in Newfoundland.
        </p>
      </motion.div>
    </section>
  );
}
