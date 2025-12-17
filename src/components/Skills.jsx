import { motion } from "framer-motion";
import { Code, Languages, GitBranch, Zap, Cpu } from "lucide-react";

// 定义技能数据结构
const skillCategories = [
  {
    category: "Frontend & Frameworks",
    icon: Code,
    color: "from-sky-500 to-blue-600",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    category: "Core Languages & Tools",
    icon: Languages,
    color: "from-purple-500 to-indigo-600",
    skills: ["Python", "Java", "C#", "PHP", "Git / GitHub", "Swift"],
  },
  {
    category: "Cross-Domain Skills",
    icon: Zap,
    color: "from-orange-500 to-red-600",
    skills: ["PostCSS", "REST APIs", "CI/CD Basics", "UX/UI Design", "Adobe Creative Suite"],
  },
];

// 动画变量
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // 小方块依次出现
    }
  }
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
};

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-24 px-6 relative overflow-hidden bg-sky-50 dark:bg-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* 标题 */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Skillstack</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              我所使用的工具、所掌握的语言，以及我从教练生涯中汲取的策略思维。
            </p>
        </motion.div>

        {/* 技能卡片网格 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {skillCategories.map((categoryData, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: catIndex * 0.2 }}
              className="p-6 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md 
                         border border-white/50 dark:border-slate-700 shadow-xl dark:shadow-slate-900/50"
            >
              {/* 卡片头部 */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-slate-700/70">
                <categoryData.icon className={`w-6 h-6 text-white p-1 rounded-md bg-gradient-to-r ${categoryData.color}`} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{categoryData.category}</h3>
              </div>

              {/* 技能标签云 */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {categoryData.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillItemVariants}
                    whileHover={{ 
                        y: -3, 
                        scale: 1.05, 
                        boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.5), 0 4px 6px -2px rgba(59, 130, 246, 0.05)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="px-4 py-2 rounded-lg text-sm font-medium cursor-grab 
                               bg-gray-100 dark:bg-slate-700/50 
                               text-gray-700 dark:text-gray-200 
                               border border-gray-200 dark:border-slate-700 
                               transition-all duration-200"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}