import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import type { ProjectCard as ProjectCardType } from '../types';

interface ProjectCardProps {
    project: ProjectCardType;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const handleLiveDemoClick = () => {
        window.open(project.liveDemoUrl, '_blank', 'noopener,noreferrer');
    };

    const handleGithubClick = () => {
        window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-[#151922] border border-[#374151] rounded-xl overflow-hidden hover:border-[#10B981]/50 transition-all"
        >
            {/* Project Image */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-[#10B981]/20 to-[#059669]/20"
            >
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80"
                    loading="lazy"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#151922] to-transparent"
                />
            </motion.div>

            {/* Project Content */}
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-lg sm:text-xl font-bold text-white"
                >
                    {project.title}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-sm"
                >
                    {project.description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xs sm:text-sm text-gray-400"
                >
                    <span className="font-semibold text-gray-300">Tech: </span>
                    {project.techStack.join(', ')}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleLiveDemoClick}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#10B981] hover:bg-[#059669] text-white text-sm font-medium rounded-lg transition-colors focus-visible"
                    >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        Live Demo
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleGithubClick}
                        className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 border border-[#374151] hover:border-[#10B981] text-white text-sm font-medium rounded-lg transition-colors focus-visible"
                    >
                        <FaGithub className="w-4 h-4" />
                        GitHub
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
}
