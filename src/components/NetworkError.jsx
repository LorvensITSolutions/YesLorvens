import React, { useState } from "react";
import { motion } from "framer-motion";

export default function NetworkError() {
  const [isHovering, setIsHovering] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="fixed inset-0 w-full h-full bg-gradient-to-br from-purple-50 via-orange-50 to-blue-50 z-[9999] flex flex-col justify-center items-center text-center px-5 overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full opacity-30 blur-3xl"
          animate={{ 
            x: [0, 150, 0], 
            y: [0, 80, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-300 to-purple-300 rounded-full opacity-30 blur-3xl"
          animate={{ 
            x: [0, -120, 0], 
            y: [0, -60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Optimized Floating Particles - Static positions */}
      <motion.div
        className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-40"
        style={{ left: '10%', top: '20%' }}
        animate={{
          y: [0, -30, 0],
          x: [0, 5, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          delay: 0,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-40"
        style={{ left: '20%', top: '40%' }}
        animate={{
          y: [0, -25, 0],
          x: [0, -8, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 0.3,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-40"
        style={{ left: '80%', top: '30%' }}
        animate={{
          y: [0, -35, 0],
          x: [0, 12, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          delay: 0.6,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-40"
        style={{ left: '90%', top: '70%' }}
        animate={{
          y: [0, -28, 0],
          x: [0, -6, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          delay: 1.2,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Enhanced Error Icon with Interactive Elements */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <motion.div
            className="relative"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            {/* Pulsing Ring */}
            <motion.div
              className="absolute inset-0 w-32 h-32 -m-6 rounded-full bg-gradient-to-r from-red-400 to-orange-400 opacity-20"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Outer Ring */}
            <motion.div
              className="absolute inset-0 w-32 h-32 -m-6 rounded-full border-4 border-red-300 opacity-30"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Main Icon Container */}
            <motion.div
              className="relative w-20 h-20 rounded-full bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center shadow-2xl"
              animate={{ 
                scale: isHovering ? 1.15 : [1, 1.08, 1],
                rotate: isHovering ? [0, -10, 10, -10, 0] : [0, 3, -3, 0],
                boxShadow: isHovering 
                  ? "0 25px 50px -12px rgba(239, 68, 68, 0.5)"
                  : "0 20px 25px -5px rgba(239, 68, 68, 0.3)"
              }}
              transition={{ duration: isHovering ? 0.5 : 2, repeat: isHovering ? 1 : Infinity }}
            >
              {/* WiFi Icon with Animation */}
              <motion.svg
                className="w-11 h-11 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={isHovering ? { scale: [1, 0.9, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
                />
              </motion.svg>

              {/* Static Spark Effects - Unrolled */}
              <motion.div
                className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                }}
                animate={{
                  x: 40,
                  y: 0,
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                }}
                animate={{
                  x: 0,
                  y: -40,
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                }}
                animate={{
                  x: -40,
                  y: 0,
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.4,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                }}
                animate={{
                  x: 0,
                  y: 40,
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.6,
                  ease: "easeOut",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Text Content */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-4"
        >
          <motion.span
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
            className="inline-block"
          >
            You're Offline
          </motion.span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-md mx-auto leading-relaxed font-medium"
        >
          <motion.span
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            We're unable to reach the internet.
          </motion.span>
          <br />
          <span className="text-base text-gray-500">Please check your connection and try again.</span>
        </motion.p>

        {/* Enhanced Interactive Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{ 
            scale: 1.08,
            y: -5,
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.reload()}
          className="relative px-10 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white font-bold rounded-2xl shadow-2xl overflow-hidden mx-auto group"
        >
          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          />

          {/* Button Content */}
          <span className="relative flex items-center gap-3 text-lg">
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </motion.svg>
            Retry Connection
          </span>

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </motion.button>

        {/* Enhanced Connection Indicator - Unrolled */}
        <motion.div 
          variants={itemVariants} 
          className="mt-10 flex items-center justify-center gap-3"
        >
          <div className="flex gap-1.5">
            <motion.div
              className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-lg"
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                delay: 0,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-lg"
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                delay: 0.2,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-lg"
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                delay: 0.4,
                ease: "easeInOut"
              }}
            />
          </div>
          <motion.span 
            className="text-base text-gray-500 font-medium"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Checking connection...
          </motion.span>
        </motion.div>

        {/* Fun Tip */}
        <motion.div
          variants={itemVariants}
          className="mt-8 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-xl border border-orange-200 shadow-lg inline-block"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-sm text-gray-600">
            💡 <span className="font-semibold">Tip:</span> Check if your WiFi is turned on
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
