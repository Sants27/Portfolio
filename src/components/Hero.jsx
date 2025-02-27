import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  // Definisikan variabel hover untuk button
  const buttonHover = {
    scale: 1.1,
    backgroundColor: "#a855f7",
    color: "white",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  };

  // Definisikan variabel hover untuk icon
  const iconHover = {
    scale: 1.2,
    color: "#a855f7",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  };

  return (
    <div className="w-full px-2 sm:px-3 md:px-4 lg:px-5 pt-16 sm:pt-24 md:pt-26 flex-1 flex items-center min-h-0" id="home">
        <div className="w-[1200px] mx-auto relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 xs:gap-12 sm:gap-6 md:gap-8 lg:gap-10">
                <motion.div 
                    className="w-full md:w-3/5 text-center md:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1 
                        className="text-gray-400 text-sm xs:text-lg sm:text-xl md:text-2xl lg:text-4xl mb-1 sm:mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <TypeAnimation
                        sequence={[
                            "Frontend Engineer",
                            1000,
                            "Web Designer",
                            1000,
                            "UI/UX Designer",
                            1000
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-gray-400"
                        />
                    </motion.h1>
                    
                    <motion.h1 
                        className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        HEY, I AM
                    </motion.h1>
                    
                    <motion.h1 
                        className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 mb-2 sm:mb-3 md:mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Ignatius Varrel Santoso
                    </motion.h1>
                    
                    <motion.p 
                        className="text-gray-300 mb-3 sm:mb-4 md:mb-5 max-w-xl mx-auto md:mx-0 text-xs xs:text-sm sm:text-base lg:text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        I am a passionate Computer Science student at BINUS University, currently in the 6th semester, with a strong interest in frontend development and design.
                    </motion.p>
                
                    <motion.div 
                        className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mb-5 sm:mb-6 "
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <motion.button 
                            initial={{ backgroundColor: "transparent", color: "#a855f7", borderColor: "#a855f7" }}
                            whileHover={buttonHover}
                            className="lg:text-base px-3 sm:px-4 py-1.5 sm:py-2 border rounded-md text-xs xs:text-sm"
                        >
                            Download CV
                        </motion.button>

                        
                        <div className="flex gap-2 xs:gap-3 md:gap-4 items-center">
                            <motion.a 
                                href="#" 
                                initial={{ color: "#ffffff" }}
                                whileHover={iconHover}
                            >
                                <AiOutlineGithub className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9" />
                            </motion.a>
                            <motion.a 
                                href="#" 
                                initial={{ color: "#ffffff" }}
                                whileHover={iconHover}
                            >
                                <AiOutlineLinkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9" />
                            </motion.a>
                            <motion.a 
                                href="#" 
                                initial={{ color: "#ffffff" }}
                                whileHover={iconHover}
                            >
                                <AiOutlineInstagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9" />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="w-full md:w-2/5 flex justify-center md:justify-end"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-purple-600 rounded-full blur-md"></div>
                        <img 
                        src={profilepic}
                        alt="Profile"
                        className="w-[200px] xs:w-[220px] sm:w-[250px] md:w-[270px] lg:w-[300px] xl:w-[320px] relative z-10"
                        />
                    </div>
                </motion.div>
            </div>
            <motion.div 
                className="mt-6 sm:mt-8 md:mt-10 lg:mt-4 xl:mt-16 mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
            >
                <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-lg mb-2 sm:mb-3 text-center md:text-left">
                    My Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center md:justify-start">
                    <motion.div whileHover={{ scale: 1.1 }} className="text-[#E44D26] hover:text-orange-400 transition duration-300">
                        <DiHtml5 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-16 xl:w-16 xl:h-16" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="text-[#1572B6] hover:text-blue-400 transition duration-300">
                        <DiCss3 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-16 xl:w-16 xl:h-16" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="text-[#F7DF1E] hover:text-yellow-300 transition duration-300">
                        <DiJavascript1 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-16 xl:w-16 xl:h-16" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="text-[#61DAFB] hover:text-blue-300 transition duration-300">
                        <DiReact className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-16 xl:w-16 xl:h-16" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="text-[#68A063] hover:text-green-400 transition duration-300">
                        <DiNodejsSmall className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-16 xl:w-16 xl:h-16" />
                    </motion.div>
                </div>
            </motion.div>

            
            <div className="absolute inset-0 hidden md:block">
                <ShinyEffect left={0} top={0} size={1400} />
            </div>
        </div>
    </div>
  );
};

export default Hero;