import { motion } from "framer-motion";
import experienceData from "../data/experience.json";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-sky-50 dark:bg-neutral-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2>Experience</h2>
        <div className="relative">
          {/* 中间竖线 */}
          <div className="absolute left-1/2 top-0 w-1 bg-sky-200 dark:bg-neutral-700 h-full transform -translate-x-1/2 rounded"></div>

          <div className="space-y-20">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex items-center w-full ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "text-left pr-10" : "text-right pl-10"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-sky-800 dark:text-sky-200">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {item.company}
                  </p>

                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>

                  <div className="mt-4 inline-block px-3 py-1 rounded-full 
                                  bg-sky-200 text-sky-700 dark:bg-sky-800 dark:text-sky-200 text-sm">
                    {item.year}
                  </div>
                </div>

                {/* 时间轴圆点 */}
                <div className="absolute left-1/2 w-5 h-5 bg-sky-400 dark:bg-sky-600 
                                rounded-full transform -translate-x-1/2 border-4 border-white dark:border-neutral-900 shadow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
