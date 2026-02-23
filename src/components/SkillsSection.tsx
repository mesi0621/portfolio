import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ProjectCard } from './ProjectCard';
import type { SkillsInfo } from '../types';

interface SkillsSectionProps {
    skills: SkillsInfo;
}

const skillCategories = [
    {
        title: 'Frontend',
        skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    },
    {
        title: 'Tools',
        skills: ['Git & GitHub', 'Postman', 'VS Code', 'Vercel'],
    },
    {
        title: 'Computer Science',
        skills: ['Data Structures', 'Algorithms'],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export function SkillsSection({ skills }: SkillsSectionProps) {
    const { t } = useLanguage();

    return (
        <>
            {/* My Skills Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 section-darker">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl font-bold mb-12"
                    >
                        My Skills
                    </motion.h2>

                    {/* Skills Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="skills-grid"
                    >
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="skill-category"
                            >
                                <h3>{category.title}</h3>
                                <ul>
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.li
                                            key={skill}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                                        >
                                            {skill}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 section-dark">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl font-bold mb-12"
                    >
                        Projects
                    </motion.h2>

                    {/* Project Cards Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {skills.projectShowcases.map((project, index) => (
                            <motion.div key={project.id} variants={itemVariants}>
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
