import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "Jackie010227@outlook.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-6 relative overflow-hidden 
                 bg-sky-50 dark:bg-[#0f172a]" // <-- **背景色已修改**
    >
      {/* Background Gradients (保持不变) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-200/20 dark:bg-sky-900/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center">
        
        {/* 1. Header with 'Available' Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-xs font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for opportunities
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">amazing together.</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-lg mx-auto leading-relaxed">
              Whether you have a question, a project idea, or just want to talk about table tennis tactics — I’m all ears.
            </p>
        </motion.div>

        {/* 2. The Interactive Contact Card */}
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="relative p-1 rounded-2xl bg-gradient-to-b from-sky-100 to-transparent dark:from-sky-900/50 dark:to-transparent"
        >
            <div className="bg-white dark:bg-[#1e293b] rounded-xl p-8 md:p-12 shadow-2xl flex flex-col items-center gap-6">
                
                {/* Email Display & Copy Button */}
                <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
                    
                    {/* The Email Box */}
                    <div className="group relative flex items-center gap-3 px-5 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 w-full md:w-auto transition-colors hover:border-sky-400 dark:hover:border-sky-500">
                        <Mail className="w-5 h-5 text-gray-400 group-hover:text-sky-500 transition-colors" />
                        <span className="text-gray-700 dark:text-gray-200 font-mono text-sm md:text-base">{email}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 w-full md:w-auto">
                        
                        {/* Copy Button */}
                        <button
                            onClick={handleCopy}
                            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95 transition-all"
                        >
                           <AnimatePresence mode="wait">
                              {copied ? (
                                <motion.span
                                    key="check"
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.5, opacity: 0 }}
                                    className="flex items-center gap-2 text-green-600 dark:text-green-400"
                                >
                                    <Check className="w-4 h-4" /> Copied
                                </motion.span>
                              ) : (
                                <motion.span
                                    key="copy"
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.5, opacity: 0 }}
                                    className="flex items-center gap-2"
                                >
                                    <Copy className="w-4 h-4" /> Copy
                                </motion.span>
                              )}
                           </AnimatePresence>
                        </button>

                        {/* Send Mail Button */}
                        <a
                            href={`mailto:${email}`}
                            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700 active:scale-95 shadow-lg shadow-sky-500/20 transition-all"
                        >
                            Send Email <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
                    <Sparkles className="w-3 h-3 text-yellow-500" />
                    <span>I typically respond within 24 hours</span>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}