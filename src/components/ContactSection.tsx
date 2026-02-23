import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { validateContactForm } from '../utils/validation';
import type { ContactInfo, ContactFormData } from '../types';

interface ContactSectionProps {
    contact: ContactInfo;
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

export function ContactSection({ contact }: ContactSectionProps) {
    const { t } = useLanguage();
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        const validationErrors = validateContactForm(data);

        if (Object.keys(validationErrors).length > 0) {
            setSubmitStatus('error');
            return;
        }

        try {
            // Create mailto link with form data
            const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
            const body = encodeURIComponent(
                `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
            );
            const mailtoLink = `mailto:${contact.email}?subject=${subject}&body=${body}`;

            // Open email client
            window.location.href = mailtoLink;

            setSubmitStatus('success');
            reset();
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch (error) {
            console.error('Failed to send message:', error);
            setSubmitStatus('error');
        }
    };

    const handleEmailClick = () => {
        window.location.href = `mailto:${contact.email}`;
    };

    const handleLinkedInClick = () => {
        window.open(contact.linkedinUrl, '_blank', 'noopener,noreferrer');
    };

    const handleGithubClick = () => {
        window.open(contact.githubUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 section-dark">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-bold mb-12"
                >
                    Contact Me
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Email */}
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, x: 10 }}
                            onClick={handleEmailClick}
                            className="flex items-center gap-4 w-full text-left hover:text-[#10B981] transition-colors group"
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className="w-12 h-12 rounded-lg bg-[#151922] border border-[#374151] flex items-center justify-center group-hover:border-[#10B981] transition-colors"
                            >
                                <FaEnvelope className="w-5 h-5 text-[#10B981]" />
                            </motion.div>
                            <span className="text-gray-300">{contact.email}</span>
                        </motion.button>

                        {/* Phone */}
                        {contact.phone && (
                            <motion.a
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, x: 10 }}
                                href={`tel:${contact.phone}`}
                                className="flex items-center gap-4 w-full text-left hover:text-[#10B981] transition-colors group"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-12 h-12 rounded-lg bg-[#151922] border border-[#374151] flex items-center justify-center group-hover:border-[#10B981] transition-colors"
                                >
                                    <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </motion.div>
                                <span className="text-gray-300">{contact.phone}</span>
                            </motion.a>
                        )}

                        {/* LinkedIn */}
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, x: 10 }}
                            onClick={handleLinkedInClick}
                            className="flex items-center gap-4 w-full text-left hover:text-[#10B981] transition-colors group"
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className="w-12 h-12 rounded-lg bg-[#151922] border border-[#374151] flex items-center justify-center group-hover:border-[#10B981] transition-colors"
                            >
                                <FaLinkedin className="w-5 h-5 text-[#10B981]" />
                            </motion.div>
                            <span className="text-gray-300">{contact.linkedinUrl.replace('https://', '')}</span>
                        </motion.button>

                        {/* GitHub */}
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, x: 10 }}
                            onClick={handleGithubClick}
                            className="flex items-center gap-4 w-full text-left hover:text-[#10B981] transition-colors group"
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className="w-12 h-12 rounded-lg bg-[#151922] border border-[#374151] flex items-center justify-center group-hover:border-[#10B981] transition-colors"
                            >
                                <FaGithub className="w-5 h-5 text-[#10B981]" />
                            </motion.div>
                            <span className="text-gray-300">{contact.githubUrl.replace('https://', '')}</span>
                        </motion.button>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#151922] border border-[#374151] rounded-xl p-8"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name Field */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <input
                                    id="name"
                                    type="text"
                                    {...register('name', { required: true, minLength: 2 })}
                                    className="w-full px-4 py-3 bg-[#0A0E14] border border-[#374151] rounded-lg focus:outline-none focus:border-[#10B981] text-white placeholder-gray-500 transition-colors"
                                    placeholder="Name"
                                />
                                {errors.name && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="mt-1 text-sm text-red-400"
                                    >
                                        {t('validation.nameRequired')}
                                    </motion.p>
                                )}
                            </motion.div>

                            {/* Email Field */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <input
                                    id="email"
                                    type="email"
                                    {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                                    className="w-full px-4 py-3 bg-[#0A0E14] border border-[#374151] rounded-lg focus:outline-none focus:border-[#10B981] text-white placeholder-gray-500 transition-colors"
                                    placeholder="Email"
                                />
                                {errors.email && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="mt-1 text-sm text-red-400"
                                    >
                                        {t('validation.emailInvalid')}
                                    </motion.p>
                                )}
                            </motion.div>

                            {/* Message Field */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <textarea
                                    id="message"
                                    rows={5}
                                    {...register('message', { required: true, minLength: 10 })}
                                    className="w-full px-4 py-3 bg-[#0A0E14] border border-[#374151] rounded-lg focus:outline-none focus:border-[#10B981] text-white placeholder-gray-500 resize-none transition-colors"
                                    placeholder="Message"
                                />
                                {errors.message && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="mt-1 text-sm text-red-400"
                                    >
                                        {t('validation.messageTooShort')}
                                    </motion.p>
                                )}
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full px-6 py-3 bg-[#10B981] hover:bg-[#059669] text-white font-medium rounded-lg transition-colors focus-visible"
                            >
                                Send Message
                            </motion.button>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center text-green-400"
                                >
                                    {t('contact.successMessage')}
                                </motion.p>
                            )}
                            {submitStatus === 'error' && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center text-red-400"
                                >
                                    {t('contact.errorMessage')}
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
