import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, ArrowUp } from "lucide-react";

// 定义当前年份
const currentYear = new Date().getFullYear();

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 bg-white/50 dark:bg-[#1e293b]/50 backdrop-blur-sm border-t border-gray-100 dark:border-slate-700/70">
      
      {/* 底部光晕装饰 (模拟悬浮) */}
      <div className="absolute top-0 left-1/2 w-48 h-1 bg-sky-300/50 dark:bg-sky-700/50 rounded-full blur-sm transform -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Slogan & Logo */}
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
        >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center justify-center gap-2">
                Jiaqi Mu
            </h3>
            <p className="mt-2 text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">
                Crafted with Code and Strategy.
            </p>
        </motion.div>

        {/* 导航与社交链接 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 border-y border-gray-200 dark:border-slate-700 py-6">
          
          {/* 社交链接 */}
          <div className="flex gap-4">
            <a href="https://github.com/yourgithub" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="text-gray-500 hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:Jackie010227@outlook.com" className="text-gray-500 hover:text-sky-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* 版权和技术致谢 */}
        <div className="text-xs text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row justify-center items-center gap-x-4 gap-y-2">
          <span>&copy; {currentYear} Jiaqi Mu. All rights reserved.</span>
          <span className="flex items-center gap-1 font-mono">
            <Code className="w-3 h-3" />
            Built with React, Tailwind, and Framer Motion.
          </span>
        </div>
      </div>
      
      {/* Scroll to Top 按钮 */}
      <motion.button
        onClick={handleScrollToTop}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        whileHover={{ rotate: 360 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        viewport={{ once: true }}
        className="absolute bottom-6 right-6 p-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white shadow-lg shadow-sky-500/30 transition-colors z-20"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}