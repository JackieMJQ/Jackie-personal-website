import { motion } from "framer-motion";
import { Camera, Heart, Instagram, ArrowUpRight } from "lucide-react";

// 🏆 这里是你的“精选集”数据
const portfolioImages = [
  {
    id: 1,
    src: "https://scontent.cdninstagram.com/v/t51.82787-15/530858211_17888764086331295_2216509494698965274_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzY5NzE4MDY0NDY4MTgzNTE1Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4OTYwLnNkci5DMyJ9&_nc_ohc=tK2pjQlvE9kQ7kNvwG4fHf-&_nc_oc=AdnQCOEI0lbS7S4vLRQ2IZuelX-Yzx5gWd6nc2yIY5ks3OS8FnEq1NFwwO1KxszorNw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=8iIZFzTm2FgpW0c3X2kqWQ&oh=00_AfmHE2YwbJ9EnJy6NY2NsNNLgAJ_FQ0UaN2Socs66fB1Zw&oe=6947FA48", 
    caption: "Atlantic Puffin in Elliston",
    category: "Animals",
    likes: "45",
    link: "https://www.instagram.com/p/DNPBjpqNarl/?img_index=1"
  },
  {
    id: 2,
    src: "https://scontent.cdninstagram.com/v/t51.82787-15/556967575_17894583066331295_7019717466267572284_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzczMTgxMjY0NDg3NDcwNTA3Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4OTYwLnNkci5DMyJ9&_nc_ohc=fSS7nMucmRUQ7kNvwEyEZ8k&_nc_oc=AdmBTr8RFsAPAQH21mysRfM5aaRNlW90KJSstUbf0kI32q8_7Jk5imOgnNlK2Irb254&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=8iIZFzTm2FgpW0c3X2kqWQ&oh=00_Afk04bSRN50tAwTxIpfVIBi6re-ZbhxZa79VnGp_ahkY_g&oe=6947E939",
    caption: "CN Tower at Dusk",
    category: "landscape",
    likes: "89",
    link: "https://www.instagram.com/p/DPKD9aGkbD9/?img_index=1"
  },
  {
    id: 3,
    src: "https://scontent.cdninstagram.com/v/t51.75761-15/489828289_17873259414331295_3097863876542018544_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzYwODEwMjc2MDI5ODY2NTI5Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=3ljsgbdjdLkQ7kNvwFIcVZy&_nc_oc=AdntErgHlgWJkkbrXr-Two1hmVhI8S1rDjHFbZ4r42Toxi7qZNeroOpbEfC3E2N5fsQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=8iIZFzTm2FgpW0c3X2kqWQ&oh=00_Afk5JlnNJGwW9jASQps-mnB0tvs9KZdOy7FyKRFOfH85Pg&oe=69480D98",
    caption: "Sea to Sky Gondola 🚠",
    category: "Film Photography",
    likes: "210",
    link: "https://www.instagram.com/p/DISjlv-N3LO/?img_index=1"
  },
  {
    id: 4,
    src: "https://scontent.cdninstagram.com/v/t51.82787-15/568317138_17897183811331295_2473352471800595948_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=Mzc0ODY3Njg1MDIzNjEyNjE3OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4OTYwLnNkci5DMyJ9&_nc_ohc=ntdr-k0mFWMQ7kNvwFZH2o7&_nc_oc=Adl-QUOZ5NGXJPd9tT1PGe6Z6QVK-OpIAiTN4kmVSy67uPjZSQuHTp62Ua-utTsbVu4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=8iIZFzTm2FgpW0c3X2kqWQ&oh=00_AfltvYbWEzXBaG877ss_WrSpaumOERCljIRz5qGuMsbYeg&oe=6947E3FD",
    caption: "Mont-Tramblant Autumn Vibes 🍁",
    category: "Lanscape",
    likes: "156",
    link: "https://www.instagram.com/p/DQF-b8QDabG/?img_index=1"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
};

export default function Photography() {
  return (
    <section id="photography" className="py-24 px-6 bg-sky-50 dark:bg-[#0f172a] relative overflow-hidden">
      
      {/* 装饰背景 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 标题区域 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4 text-pink-600 dark:text-pink-400 font-medium">
             <Camera className="w-5 h-5" />
             <span>Through My Lens</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-6">
            Capturing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">Flow State</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            A curated selection of my shots. From the high-speed intensity of table tennis to the quiet geometry of code and architecture.
          </p>
        </motion.div>

        {/* 图片网格 */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {portfolioImages.map((img) => (
            <motion.a
              key={img.id}
              href={img.link}
              target="_blank"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative block aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              {/* 图片 */}
              <img 
                src={img.src} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* 遮罩层 (悬停显示) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                
                <span className="text-pink-400 text-xs font-bold tracking-wider uppercase mb-1">
                  {img.category}
                </span>
                <h3 className="text-white font-semibold text-lg leading-tight mb-3">
                  {img.caption}
                </h3>
                
                <div className="flex items-center justify-between text-white/80 text-sm border-t border-white/20 pt-3">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 fill-white/80" />
                    <span>{img.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white hover:text-pink-400 transition-colors">
                    View on IG <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* 底部按钮：引导去 Instagram */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
        >
            <a 
                href="https://www.instagram.com/plusevenjourney/" 
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
                <Instagram className="w-5 h-5" />
                See More on Instagram
            </a>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Follow for daily updates and stories.
            </p>
        </motion.div>

      </div>
    </section>
  );
}