import { motion, useMotionValue, useTransform } from "framer-motion";
import { Github, Linkedin, Terminal, Move } from "lucide-react";
import { useState, useEffect } from "react";

// 一个简单的打字机效果组件，让代码看起来是在实时输入
const TypingCode = () => {
  const [text, setText] = useState("");
  const fullText = "const life = 'Ping Pong';\nwhile(alive) {\n  code();\n  play();\n}";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) i = 0; // 循环播放
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <pre className="text-[10px] leading-relaxed font-mono text-green-400">
      {text}
      <span className="animate-pulse">|</span>
    </pre>
  );
};

export default function About() {
  return (
    <section
      id="hero-about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 pt-20 gap-16 overflow-hidden
                 bg-gradient-to-b from-sky-50 via-white to-sky-50 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]"
    >
      {/* ================= 左边：文字介绍 ================= */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl text-center md:text-left z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-gray-100 tracking-tight">
          Hey, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500">Jiaqi</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
          A <span className="font-semibold text-sky-600 dark:text-sky-400">Table Tennis Coach</span> &{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">Frontend Developer</span> based in Newfoundland.
        </p>

        <p className="text-gray-500 dark:text-gray-400 text-base mb-8">
          I craft clean code and sharp spins. Whether it's the rhythm of a rally or the logic of a loop, I find joy in the flow state.
        </p>

        {/* 社交链接 */}
        <div className="flex justify-center md:justify-start gap-4">
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 
                         text-gray-700 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              <item.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
        
        <div className="mt-8 text-sm text-gray-400 flex items-center justify-center md:justify-start gap-2">
            <Move className="w-4 h-4" /> 
            <span>Try dragging the items on the right!</span>
        </div>
      </motion.div>

      {/* ================= 右边：交互式漂浮区域 ================= */}
      {/* 使用 perspective 增加 3D 深度感 */}
      <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] perspective-1000 group">
        
        {/* 背景光晕 (氛围感) */}
        <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 bg-sky-200/50 dark:bg-sky-900/30 rounded-full blur-3xl -z-10" 
        />

        {/* 1. 漂浮的代码编辑器窗口 (代表 Frontend) */}
        <motion.div
          drag
          dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }} // 限制拖拽范围
          dragElastic={0.2} // 拖拽时的弹性
          whileHover={{ scale: 1.05, cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
          animate={{ 
            y: [-10, 10, -10],
            rotate: [-2, 2, -2]
          }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-10 left-0 md:-left-10 w-48 h-36 bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden z-20"
        >
          {/* 窗口标题栏 */}
          <div className="h-6 bg-gray-800 flex items-center px-2 space-x-1.5 border-b border-gray-700">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>
          {/* 代码内容区域 */}
          <div className="p-3 font-mono">
            <div className="flex items-center gap-2 mb-2 text-gray-400 text-xs border-b border-gray-800 pb-1">
                <Terminal className="w-3 h-3" /> dev_mode.tsx
            </div>
            <TypingCode />
          </div>
        </motion.div>

        {/* 2. 漂浮的乒乓球拍 (代表 Coach) */}
        <motion.div
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          dragElastic={0.2}
          whileHover={{ scale: 1.1, rotate: 10, cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
          animate={{ 
            y: [15, -15, 15],
            rotate: [5, 15, 5]
          }}
          transition={{ 
            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-10 right-0 w-32 h-44 z-30 flex flex-col items-center"
        >
          {/* 球拍拍面 (红胶皮) */}
          <div className="w-32 h-32 bg-red-500 rounded-full shadow-xl border-4 border-[#eecfa1] relative overflow-hidden">
             {/* 胶皮光泽 */}
             <div className="absolute top-4 left-4 w-12 h-6 bg-white/20 rounded-full blur-md rotate-[-20deg]" />
             <div className="absolute bottom-4 right-4 text-[10px] font-bold text-black/20 rotate-12">BUTTERFLY</div>
          </div>
          {/* 球拍手柄 */}
          <div className="w-10 h-16 bg-[#d4a373] -mt-4 rounded-b-lg shadow-inner border-x border-b border-[#b08968] flex flex-col justify-center items-center gap-1">
             <div className="w-full h-2 bg-[#b08968]/30" />
             <div className="w-full h-2 bg-[#b08968]/30" />
          </div>
        </motion.div>

        {/* 3. 漂浮的乒乓球 (连接两者的元素) */}
        <motion.div
          drag
          dragConstraints={false} // 球可以到处乱扔
          whileHover={{ scale: 1.2, cursor: "grab" }}
          whileDrag={{ scale: 1.2, cursor: "grabbing" }}
          animate={{ 
            y: [0, -40, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40"
        >
          <div className="w-10 h-10 bg-orange-100 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.15)] flex items-center justify-center border border-orange-200">
             <div className="text-[8px] text-orange-400 font-bold">40+</div>
             {/* 高光 */}
             <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full blur-[1px]" />
          </div>
        </motion.div>

        {/* 4. 装饰性代码片段/标签 */}
        <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 right-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono text-sky-600 dark:text-sky-400 shadow-sm border border-sky-100 dark:border-sky-800 pointer-events-none"
        >
            &lt;Coach /&gt;
        </motion.div>
        
        <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            className="absolute bottom-4 left-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono text-indigo-600 dark:text-indigo-400 shadow-sm border border-indigo-100 dark:border-indigo-800 pointer-events-none"
        >
            .css-transform
        </motion.div>

      </div>
    </section>
  );
}