import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, FolderGit2 } from "lucide-react";

// Enhanced Data Structure
// Added 'tags', 'links', and 'color' to make it pop
const projects = [
  {
    title: "Personal Website",
    desc: "My digital garden. A minimalist portfolio built with React, Tailwind CSS, and Framer Motion for buttery smooth animations.",
    tags: ["React", "Tailwind", "Framer Motion"],
    links: { demo: "#", repo: "#" },
    color: "from-sky-400 to-blue-500", // Custom gradient for this project
    icon: Code2
  },
  {
    title: "AI Parser App",
    desc: "A native macOS utility that leverages OpenAI to parse and summarize complex text data into structured JSON.",
    tags: ["Swift", "OpenAI API", "CoreML"],
    links: { demo: "#", repo: "#" },
    color: "from-indigo-400 to-purple-500",
    icon: FolderGit2
  },
  // Added a dummy third one to show the grid better
  {
    title: "Table Tennis Tracker",
    desc: "A progressive web app to track match scores and visualize win-rates over time using Chart.js.",
    tags: ["Next.js", "Supabase", "Chart.js"],
    links: { demo: "#", repo: "#" },
    color: "from-orange-400 to-red-500",
    icon: Code2
  }
];

// Animation Variants for Staggered Effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden bg-sky-50 dark:bg-[#0f172a]">
      
      {/* Background Decor (Subtle Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center max-w-2xl md:mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
            Featured <span className="text-sky-600 dark:text-sky-400">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A selection of code I've written, problems I've solved, and things I've built for fun.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col bg-white dark:bg-slate-800/50 backdrop-blur-sm 
                         border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden 
                         shadow-lg hover:shadow-2xl hover:shadow-sky-500/10 dark:hover:shadow-sky-900/20 
                         transition-all duration-300"
            >
              {/* 1. Project Thumbnail Area (Abstract Gradient) */}
              {/* If you have images, replace this div with an <img /> */}
              <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-slate-900">
                {/* The Gradient Overlay */}
                <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity bg-gradient-to-br ${p.color}`} />
                
                {/* The Floating Icon/Mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`p-4 rounded-2xl bg-gradient-to-br ${p.color} shadow-lg text-white`}
                    >
                        <p.icon className="w-8 h-8" />
                    </motion.div>
                </div>
              </div>

              {/* 2. Content Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {p.title}
                    </h3>
                    
                    {/* Action Links */}
                    <div className="flex gap-3">
                        <a href={p.links.repo} className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" title="View Code">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href={p.links.demo} className="text-gray-400 hover:text-sky-500 transition-colors" title="Live Demo">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {p.desc}
                </p>

                {/* 3. Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border border-sky-100 dark:border-sky-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action at bottom */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
        >
            <a 
                href="https://github.com/yourusername" 
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors shadow-lg"
            >
                <Github className="w-5 h-5" />
                View more on GitHub
            </a>
        </motion.div>

      </div>
    </section>
  );
}