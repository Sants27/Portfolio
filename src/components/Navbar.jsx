import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    
    // Fungsi untuk toggle menu mobile
    const toggleNav = () => {
        setNav(!nav);
    };

    // Fungsi untuk menutup menu ketika link diklik
    const closeNav = () => {
        setNav(false);
    };

    // Nonaktifkan scroll ketika menu mobile terbuka
    useEffect(() => {
        if (nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [nav]);

    // Variasi animasi untuk menu mobile
    const menuVariants = {
        open: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 0.3
            }
        },
        closed: {
            x: '100%',
            opacity: 0.5,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 0.3
            }
        }
    };

    // Variasi animasi untuk item menu
    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        closed: {
            opacity: 0,
            y: 20,
            transition: { 
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const itemVariant = {
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        },
        closed: {
            opacity: 0,
            y: 20,
            transition: { duration: 0.3 }
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full backdrop-blur-md z-50">
            <div className="max-w-[1300px] mx-auto flex justify-between text-purple-500 font-bold items-center px-3 xs:px-6 sm:px-8 md:px-12 h-16 sm:h-18 md:h-20">
                {/* Logo/Brand */}
                <Link to="/" className="text-base xs:text-lg sm:text-xl whitespace-nowrap">
                    Ignatius Varrel Santoso
                </Link>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex gap-6 lg:gap-12 z-10 cursor-pointer text-base lg:text-xl'>
                    <motion.li 
                        whileHover={{ scale: 1.05, color: "#D91656" }}
                        transition={{ duration: 0.2 }}
                        className="transition-colors duration-300"
                    >
                        <Link to="/" onClick={closeNav}>Home</Link>
                    </motion.li>
                    <motion.li 
                        whileHover={{ scale: 1.05, color: "#D91656" }}
                        transition={{ duration: 0.2 }}
                        className="transition-colors duration-300"
                    >
                        <Link to="/about" onClick={closeNav}>About</Link>
                    </motion.li>
                    <motion.li 
                        whileHover={{ scale: 1.05, color: "#D91656" }}
                        transition={{ duration: 0.2 }}
                        className="transition-colors duration-300"
                    >
                        <Link to="/project" onClick={closeNav}>Project</Link>
                    </motion.li>
                    <motion.li 
                        whileHover={{ scale: 1.05, color: "#D91656" }}
                        transition={{ duration: 0.2 }}
                        className="transition-colors duration-300"
                    >
                        <Link to="/contact" onClick={closeNav}>Contact</Link>
                    </motion.li>
                </ul>

                {/* Mobile Menu Toggle */}
                <motion.div 
                    onClick={toggleNav}
                    whileHover={{ scale: 1.1, color: "#D91656" }}
                    transition={{ duration: 0.2 }}
                    whileTap={{ scale: 0.9 }}
                    className='md:hidden z-50 text-purple-500 cursor-pointer p-1'
                >
                    {nav ? 
                        <AiOutlineClose size={24} className="xs:w-6 xs:h-6 sm:w-7 sm:h-7"/> : 
                        <AiOutlineMenu size={24} className="xs:w-6 xs:h-6 sm:w-7 sm:h-7"/>
                    }
                </motion.div>

                {/* Mobile Navigation */}
                <motion.div
                    initial="closed"
                    animate={nav ? "open" : "closed"}
                    variants={menuVariants}
                    className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40 flex items-center justify-center"
                >
                    <motion.ul 
                        variants={itemVariants}
                        className="font-semibold text-2xl xs:text-3xl sm:text-4xl space-y-8 text-center"
                    >
                        <motion.li 
                            variants={itemVariant}
                            whileHover={{ scale: 1.1, color: "#D91656" }}
                            className="transition-colors duration-300"
                        >
                            <Link to="/" onClick={closeNav}>Home</Link>
                        </motion.li>
                        <motion.li 
                            variants={itemVariant}
                            whileHover={{ scale: 1.1, color: "#D91656" }}
                            className="transition-colors duration-300"
                        >
                            <Link to="/about" onClick={closeNav}>About</Link>
                        </motion.li>
                        <motion.li 
                            variants={itemVariant}
                            whileHover={{ scale: 1.1, color: "#D91656" }}
                            className="transition-colors duration-300"
                        >
                            <Link to="/project" onClick={closeNav}>Project</Link>
                        </motion.li>
                        <motion.li 
                            variants={itemVariant}
                            whileHover={{ scale: 1.1, color: "#D91656" }}
                            className="transition-colors duration-300"
                        >
                            <Link to="/contact" onClick={closeNav}>Contact</Link>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </div>
        </div>
    );
};

export default Navbar;