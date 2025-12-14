import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import experienceData from "../data/experience.json";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
        {/* Background Gradients (Matching Hero Theme) */}
        <div className="absolute inset-0 bg-sky-50 dark:bg-[#0f172a] -z-20" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-200/30 dark:bg-sky-900/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Journey</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From the table tennis court to the code editor, here is where I've been.
            </p>
        </motion.div>

        <div className="relative">
          {/* ================= The Timeline Line ================= */}
          {/* Desktop Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-200 via-sky-400 to-sky-200 dark:from-slate-800 dark:via-sky-700 dark:to-slate-800 transform -translate-x-1/2 rounded-full"></div>
          
          {/* Mobile Left Line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-200 via-sky-400 to-sky-200 dark:from-slate-800 dark:via-sky-700 dark:to-slate-800 rounded-full"></div>

          <div className="space-y-12 md:space-y-20">
            {experienceData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual cards to keep code clean
function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row items-center w-full ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* 1. Empty Space for the opposite side (Desktop only) */}
      <div className="hidden md:block w-1/2" />

      {/* 2. The Timeline Node (The Dot/Icon) */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 z-10">
         <motion.div 
            whileHover={{ scale: 1.2 }}
            className="w-4 h-4 rounded-full bg-sky-500 border-4 border-white dark:border-slate-900 shadow-lg shadow-sky-500/50"
         />
      </div>

      {/* 3. The Content Card */}
      <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
        <motion.div
            whileHover={{ y: -5 }}
            className="relative p-6 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md 
                       border border-white/50 dark:border-slate-700 shadow-xl dark:shadow-slate-900/50
                       hover:shadow-2xl hover:shadow-sky-200/50 dark:hover:shadow-sky-900/30 transition-all duration-300"
        >
            {/* Decoration: Tiny corner accent */}
            <div className={`absolute top-0 w-20 h-1 rounded-t-full bg-gradient-to-r from-sky-400 to-blue-500 ${isEven ? "right-6" : "left-6"}`} />

            {/* Header: Title & Date */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <h3 className="text-xl font-bold text-gray-800 dark:text-sky-100 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-sky-500" />
                    {item.title}
                </h3>
                <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    <Calendar className="w-3 h-3" />
                    {item.year}
                </span>
            </div>

            {/* Subheader: Company & Location */}
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span className="font-semibold text-gray-700 dark:text-gray-300">{item.company}</span>
                {/* Optional: Add location if your JSON has it, or reuse company */}
                {/* <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> NL, Canada</span> */}
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-slate-300 leading-relaxed text-sm">
                {item.description}
            </p>

            {/* Optional: Tech Stack Tags (If you add a 'skills' array to your JSON) */}
            {item.skills && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-slate-700/50">
                    {item.skills.map(skill => (
                        <span key={skill} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded-md text-gray-600 dark:text-gray-300">
                            {skill}
                        </span>
                    ))}
                </div>
            )}
        </motion.div>
      </div>
    </motion.div>
  );
}