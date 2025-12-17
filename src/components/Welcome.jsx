import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 定义 Welcome Text 的打字机动画
const textVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1 * i,
    },
  }),
};

const letterVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

const textToAnimate = "Jiaqi’s Website";

export default function Welcome() {
  const DISPLAY_DURATION = 2500; // 2.5 秒
  const EXIT_DURATION = 1; // 退场动画时长 1 秒
  
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), DISPLAY_DURATION);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center 
                     /* 浅色模式背景：使用请求的 sky-50，并增加渐变 */
                     bg-gradient-to-b from-sky-50 to-sky-100 
                     /* 深色模式背景 */
                     dark:from-slate-900 dark:to-[#0f172a] 
                     z-[9999] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_DURATION }}
        >
          
          {/* 1. 核心光晕元素 (保持科技感主题) */}
          
          {/* 光晕 1 - 左上角 (蓝色系) */}
          <motion.div
            className="absolute top-10 left-[-200px] w-52 h-24 rounded-full blur-xl opacity-70 
                       bg-sky-700/30 dark:bg-sky-500/30" /* 调整颜色和不透明度 */
            animate={{ 
                x: ["-200px", "100vw", "-200px"], 
                y: [50, -50, 50],
                opacity: [0.7, 0.9, 0.7]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* 光晕 2 - 右下角 (紫色系) */}
          <motion.div
            className="absolute bottom-10 right-[-200px] w-64 h-32 rounded-full blur-xl opacity-80 
                       bg-indigo-700/30 dark:bg-indigo-500/30" /* 调整颜色和不透明度 */
            animate={{ 
                x: ["200px", "-100vw", "200px"], 
                y: [-50, 50, -50],
                opacity: [0.8, 0.6, 0.8]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* 2. 摄影元素 - 抽象光斑/虚化效果 (增强可见性) */}
          
          {/* 📸 光斑 1 (粉/红色系 - 暖光) - 尺寸和不透明度显著增加 */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full blur-3xl 
                       opacity-70 dark:opacity-60 
                       bg-pink-700/30 dark:bg-pink-500/30" 
            animate={{ 
                scale: [0.8, 1.2, 0.8], 
                rotate: [0, 360, 0],
                x: [0, 50, 0],
                y: [0, -50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          
          {/* 📸 光斑 2 (青/蓝绿色系 - 冷光) - 尺寸和不透明度显著增加 */}
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full blur-3xl 
                       opacity-60 dark:opacity-50 
                       bg-teal-700/30 dark:bg-teal-400/30" 
            animate={{ 
                scale: [1, 0.7, 1], 
                rotate: [360, 0, 360],
                x: [0, -70, 0],
                y: [0, 70, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          
          {/* 📸 光斑 3 (扁平椭圆黄光) - 尺寸和不透明度显著增加 */}
           <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-32 rounded-full blur-3xl 
                       opacity-50 dark:opacity-40 
                       bg-yellow-600/20 dark:bg-yellow-300/15" 
            animate={{ 
                scaleX: [1, 1.5, 1], 
                scaleY: [1, 0.8, 1],
                rotate: [0, 90, 0],
                x: [0, -100, 0],
                y: [0, 100, 0]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          />


          {/* 3. 欢迎文字 (适应浅色/深色模式) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-2
                         text-gray-800 dark:text-slate-200" /* H1 颜色适应模式 */
            >
              Welcome to
            </h1>
            <motion.h2
              className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r 
                         from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400 
                         bg-clip-text text-transparent drop-shadow-xl"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {textToAnimate.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants} style={{ display: "inline-block" }}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}