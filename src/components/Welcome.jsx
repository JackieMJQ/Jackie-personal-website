import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Welcome() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1500); // 显示时长
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-sky-200 to-sky-300 z-[9999] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* 云朵 1 */}
          <motion.div
            className="absolute top-20 left-[-200px] w-48 h-20 bg-white rounded-full blur-md opacity-80"
            animate={{ x: 500 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* 云朵 2 */}
          <motion.div
            className="absolute bottom-20 right-[-200px] w-64 h-28 bg-white rounded-full blur-md opacity-70"
            animate={{ x: -600 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* 云朵 3 - 中间小云 */}
          <motion.div
            className="absolute top-1/2 left-1/4 w-40 h-16 bg-white rounded-full blur-sm opacity-60"
            animate={{ x: 150 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          {/* 欢迎文字 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-sky-800 drop-shadow-sm">
              Welcome to
            </h1>
            <h2 className="text-5xl md:text-6xl mt-2 font-extrabold bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent drop-shadow">
              Jiaqi’s Website
            </h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
