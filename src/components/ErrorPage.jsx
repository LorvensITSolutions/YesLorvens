import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

// Optimized image with Cloudinary transformations
const questionMark="https://res.cloudinary.com/durbtkhbz/image/upload/w_500,f_auto,q_auto/v1764843910/questionmark_znc9hf.webp"

const ErrorPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
            {/* Main Content */}
            <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-4 gap-8 md:gap-4">
                {/* Left Question Mark */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0, x: -50 }}
                    animate={{ scale: 1, opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full md:w-1/2 max-w-[500px] mx-auto md:mx-0"
                >
                    <img 
                        src={questionMark} 
                        alt="Question mark" 
                        className="w-full h-auto max-h-[300px] md:max-h-[500px] opacity-80 object-contain"
                        loading="lazy"
                    />
                </motion.div>

                {/* Center Content */}
                <div className="text-center relative z-30 flex-1 mx-4">
                    {/* 404 Text */}
                    <motion.h1
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-9xl md:text-[12rem] font-black text-black mb-4 leading-none"
                        style={{ fontFamily: 'Arial Black, sans-serif' }}
                    >
                        404
                    </motion.h1>

                    {/* PAGE NOT FOUND Text */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="relative"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-black mb-2 uppercase tracking-wide">
                            PAGE NOT FOUND
                        </h2>
                        {/* Underline */}
                        <div className="w-64 md:w-96 h-1 bg-black mx-auto"></div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="text-gray-600 text-lg md:text-xl mt-8 mb-8 max-w-md mx-auto"
                    >
                        The page you're looking for doesn't exist or has been moved.
                    </motion.p>

                    {/* Home Button */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                            <Home size={24} />
                            <span>Go Back Home</span>
                        </Link>
                    </motion.div>
                </div>    
            </div>
        </div>
    );
};

export default ErrorPage;

