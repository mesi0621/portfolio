import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { InfoCard } from './InfoCard';
import type { AboutInfo } from '../types';

interface AboutSectionProps {
    about: AboutInfo;
}

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

export function AboutSection({ about }: AboutSectionProps) {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 section-dark">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-bold mb-4"
                >
                    {t('about.title')}
                </motion.h2>

                {/* Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mb-12"
                >
                    <p className="text-base text-gray-300 leading-relaxed">
                        {t('about.bio')}
                    </p>
                </motion.div>

                {/* Info Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {about.infoCards.map((card) => (
                        <motion.div key={card.id} variants={itemVariants}>
                            <InfoCard card={card} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
