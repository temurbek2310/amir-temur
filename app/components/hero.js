import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/amir.jpg')] bg-cover bg-center opacity-30"></div>

      {/* Hero Text */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-center z-10"
      >
        Amir Temur
      </motion.h1>

      {/* Fire Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="mt-4 text-xl md:text-2xl text-red-500 z-10"
      >
        "Kuch adolatdadir!"
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 flex flex-col items-center z-10"
      >
        {/* <span className="text-sm text-gray-300">Scroll to Explore</span> */}
        {/* <div className="w-3 h-10 border-2 border-white rounded-full mt-2 flex justify-center items-start">
          <motion.div 
            animate={{ y: [0, 6, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 bg-white rounded-full"
          ></motion.div>
        </div> */}
      </motion.div>
    </div>
  );
}
