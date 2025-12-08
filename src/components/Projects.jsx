import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Website",
    desc: "A minimalist React + Tailwind personal website.",
  },
  {
    title: "AI Parser",
    desc: "A Swift-based AI parser that extracts info using OpenAI APIs.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md cursor-pointer 
                       transition-all"
          >
            <h3 className="text-xl font-medium mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
