import { motion } from "framer-motion";
import { Github, Linkedin, Terminal, Move, Aperture } from "lucide-react";
import { useState, useEffect } from "react";

// 打字机组件 (保持不变)
const TypingCode = () => {
  const [text, setText] = useState("");
  const fullText = "const life = 'Ping Pong';\nwhile(alive) {\n  code();\n  play();\n}";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) i = 0;
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
      {/* ================= 左边：文字介绍 (保持不变) ================= */}
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
          A <span className="font-semibold text-sky-600 dark:text-sky-400">Table Tennis Coach</span>,{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">Frontend Developer</span> &{" "}
          <span className="font-semibold text-pink-600 dark:text-pink-400">Photographer</span>.
        </p>

        <p className="text-gray-500 dark:text-gray-400 text-base mb-8">
          I craft clean code, sharp spins, and capture moments. Whether it's the rhythm of a rally, the logic of a loop, or the perfect light, I find joy in the flow state.
        </p>

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
      <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] perspective-1000 group">
        
        {/* 背景光晕 */}
        <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 bg-sky-200/50 dark:bg-sky-900/30 rounded-full blur-3xl -z-10" 
        />

        {/* 1. 代码编辑器 (Frontend) - 保持不变 */}
        <motion.div
          drag
          dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
          dragElastic={0.2}
          whileHover={{ scale: 1.05, cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
          animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
          transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute top-10 left-0 md:-left-10 w-48 h-36 bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden z-20"
        >
          <div className="h-6 bg-gray-800 flex items-center px-2 space-x-1.5 border-b border-gray-700">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>
          <div className="p-3 font-mono">
            <div className="flex items-center gap-2 mb-2 text-gray-400 text-xs border-b border-gray-800 pb-1">
                <Terminal className="w-3 h-3" /> dev_mode.tsx
            </div>
            <TypingCode />
          </div>
        </motion.div>

        {/* 2. 乒乓球拍 (Coach) - 保持不变 */}
        <motion.div
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          dragElastic={0.2}
          whileHover={{ scale: 1.1, rotate: 10, cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
          animate={{ y: [15, -15, 15], rotate: [5, 15, 5] }}
          transition={{ y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }, rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute bottom-10 right-0 w-32 h-44 z-30 flex flex-col items-center"
        >
          <div className="w-32 h-32 bg-red-500 rounded-full shadow-xl border-4 border-[#eecfa1] relative overflow-hidden">
             <div className="absolute top-4 left-4 w-12 h-6 bg-white/20 rounded-full blur-md rotate-[-20deg]" />
             <div className="absolute bottom-4 right-4 text-[10px] font-bold text-black/20 rotate-12">BUTTERFLY</div>
          </div>
          <div className="w-10 h-16 bg-[#d4a373] -mt-4 rounded-b-lg shadow-inner border-x border-b border-[#b08968] flex flex-col justify-center items-center gap-1">
             <div className="w-full h-2 bg-[#b08968]/30" />
             <div className="w-full h-2 bg-[#b08968]/30" />
          </div>
        </motion.div>

        {/* 3. 乒乓球 (连接) - 保持不变 */}
        <motion.div
          drag
          dragConstraints={false}
          whileHover={{ scale: 1.2, cursor: "grab" }}
          whileDrag={{ scale: 1.2, cursor: "grabbing" }}
          animate={{ y: [0, -40, 0], x: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40"
        >
          <div className="w-10 h-10 bg-orange-100 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.15)] flex items-center justify-center border border-orange-200">
             <div className="text-[8px] text-orange-400 font-bold">40+</div>
             <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full blur-[1px]" />
          </div>
        </motion.div>

        {/* ================= 4. 新版：实体相机 (Photographer) ================= */}
        <motion.div
          drag
          dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
          dragElastic={0.2}
          whileHover={{ scale: 1.05, rotate: -5, cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
          animate={{ y: [-8, 8, -8], rotate: [2, -2, 2] }}
          transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }, rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
          // 位置：右上方
          className="absolute top-0 right-[-1rem] md:right-[-3rem] z-35"
        >
          {/* 📷 相机整体容器 */}
          <div className="relative w-36 h-24 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-2xl shadow-2xl border border-zinc-600 flex items-center justify-center">
            
            {/* 顶部的军舰部 (Viewfinder bump) */}
            <div className="absolute -top-3 w-12 h-4 bg-zinc-700 rounded-t-lg border-t border-l border-r border-zinc-600 z-0" />
            
            {/* 快门按钮 (红色) */}
            <div className="absolute -top-2 right-4 w-4 h-2 bg-red-500 rounded-sm shadow-sm z-0 animate-pulse" />
            
            {/* 机身蒙皮质感 (左侧手柄) */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-black/20 rounded-l-2xl border-r border-white/5" />

            {/* 📷 镜头 (核心) */}
            <div className="relative w-16 h-16 rounded-full bg-black border-4 border-zinc-500 shadow-xl z-10 flex items-center justify-center overflow-hidden">
               {/* 镜头内部光泽 */}
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 z-20 pointer-events-none" />
               {/* 镜片反光 */}
               <div className="absolute top-2 right-3 w-4 h-2 bg-white/40 blur-[2px] rotate-45 z-30" />
               {/* 光圈叶片示意 */}
               <div className="w-8 h-8 rounded-full border border-white/10 bg-zinc-900 flex items-center justify-center">
                   <Aperture className="w-5 h-5 text-zinc-600" />
               </div>
            </div>

            {/* 🖥️ 右侧信息屏幕 (LCD Screen) */}
            <div className="absolute right-2 top-3 w-8 h-10 bg-black rounded border border-zinc-600 flex flex-col items-center justify-center gap-1 p-0.5 shadow-inner">
                {/* 屏幕内容 */}
                <div className="w-full h-full bg-emerald-900/20 flex flex-col items-center justify-center">
                  <span className="text-[5px] text-zinc-400 font-mono">ISO</span>
                  <span className="text-[8px] text-emerald-400 font-mono font-bold leading-none">800</span>
                  <div className="w-full h-[1px] bg-zinc-800 my-0.5" />
                  <span className="text-[5px] text-zinc-400 font-mono">F/1.8</span>
                </div>
            </div>

            {/* 🔘 底部按键 (Buttons) */}
            <div className="absolute bottom-2 right-2 flex gap-1.5">
               <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shadow-sm" />
               <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shadow-sm" />
               <div className="w-1.5 h-1.5 rounded-full bg-red-900/50 border border-red-500/50 shadow-sm" />
            </div>

            {/* 品牌 Logo 示意 */}
            <div className="absolute top-2 left-3 text-[6px] font-bold text-white/50 tracking-widest italic">
                SONY
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}