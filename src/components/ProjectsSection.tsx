import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import type { ProjectsInfo } from '../types';

interface ProjectsSectionProps {
    projects: ProjectsInfo;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 section-darker">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-bold mb-12"
                >
                    Experience
                </motion.h2>

                {/* Accomplishments List */}
                <div className="max-w-2xl">
                    <motion.ul
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {projects.accomplishments.map((accomplishment, index) => (
                            <motion.li
                                key={index}
                                variants={itemVariants}
                                whileHover={{ x: 10 }}
                                className="flex items-start gap-3"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <FaCheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                                </motion.div>
                                <span className="text-base text-gray-300">{accomplishment}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </section>
    );
}
