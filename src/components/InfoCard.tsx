import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaReact, FaChartLine } from 'react-icons/fa';
import type { InfoCard as InfoCardType } from '../types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    FaGraduationCap,
    FaCode,
    FaReact,
    FaChartLine,
};

interface InfoCardProps {
    card: InfoCardType;
}

export function InfoCard({ card }: InfoCardProps) {
    const IconComponent = iconMap[card.icon] || FaCode;

    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="info-card glass-card p-6 hover:bg-white/15 transition-all cursor-pointer"
        >
            <div className="flex items-start space-x-4">
                <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                >
                    <div className="w-12 h-12 rounded-lg bg-[#10B981]/20 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-[#10B981]" />
                    </div>
                </motion.div>
                <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-400 mb-1">{card.title}</h3>
                    <p className="text-lg font-semibold text-white">{card.content}</p>
                </div>
            </div>
        </motion.div>
    );
}
