import { motion } from 'framer-motion';
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { PersonalInfo } from '../types';

interface HeroSectionProps {
    personal: PersonalInfo;
    onViewProjects: () => void;
    onDownloadCV: () => void;
    onContactMe: () => void;
}

export function HeroSection({
    personal,
    onViewProjects,
    onDownloadCV,
    onContactMe,
}: HeroSectionProps) {
    const { t } = useLanguage();

    // Background images that will rotate
    const backgroundImages = [
        '/images/ecommerce.png',
        '/images/elearning.png',
        '/images/joblink.png'
    ];

    const [currentBgIndex, setCurrentBgIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 5000); // Change background every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden"
        >
            {/* Rotating Background Images */}
            <motion.div
                key={currentBgIndex}
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                style={{
                    backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0A0E14]/70 z-0"></div>

            {/* Content */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 sm:gap-10 lg:gap-12">
                    {/* Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            y: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        className="flex-shrink-0 w-full flex justify-center lg:w-auto"
                    >
                        <motion.div
                            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#10B981] shadow-2xl"
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={personal.photoUrl}
                                alt={personal.name}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Text Content */}
                    <div className="w-full lg:max-w-3xl">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-center lg:text-left space-y-4 sm:space-y-6"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="space-y-2 sm:space-y-4"
                            >
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                                    Hi, I'm
                                </h2>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
                                    {t('hero.name')}
                                </h1>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-lg sm:text-xl lg:text-2xl text-gray-100 drop-shadow-md"
                            >
                                {t('hero.title')}
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="text-base sm:text-lg text-gray-200 flex items-center justify-center lg:justify-start gap-2 drop-shadow-md"
                            >
                                <span>{t('hero.location')}</span>
                            </motion.p>

                            {/* Action Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-4"
                            >
                                <motion.button
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: 0.7
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        boxShadow: "0 0 25px rgba(16, 185, 129, 0.6)",
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onViewProjects}
                                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#10B981] hover:bg-[#059669] text-white font-medium rounded-lg transition-colors focus-visible shadow-lg"
                                >
                                    {t('hero.viewProjects')}
                                </motion.button>
                                <motion.button
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: 0.8
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onDownloadCV}
                                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-medium rounded-lg transition-colors focus-visible shadow-lg"
                                >
                                    {t('hero.downloadCV')}
                                </motion.button>
                                <motion.button
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: 0.9
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: "rgba(16, 185, 129, 0.2)",
                                        borderColor: "#10B981",
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onContactMe}
                                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#10B981] hover:bg-[#10B981]/20 backdrop-blur-sm text-white font-medium rounded-lg transition-colors focus-visible shadow-lg"
                                >
                                    {t('hero.contactMe')}
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
