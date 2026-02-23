import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Meseret Mezgebu',
        title: 'Full-Stack Developer | React & Node.js Enthusiast',
        location: 'Based in Ethiopia 🇪🇹',
        photoUrl: '/images/profile.jpg',
        cvUrl: '/cv/Meseret Mezgebu Sisay.pdf',
    },
    about: {
        bio: 'I am a third-year Software Engineering student at Wollo University with a passion for building web applications and solving real-world problems using technology. Skilled in React and Node.js, I aim to become a proficient full-stack developer.',
        infoCards: [
            {
                id: 'education',
                title: 'Education',
                content: 'Wollo University',
                icon: 'FaGraduationCap',
            },
            {
                id: 'career-goal',
                title: 'Career Goal',
                content: 'Full-Stack Developer',
                icon: 'FaCode',
            },
            {
                id: 'tech-passion',
                title: 'Tech Passion',
                content: 'React & Node.js',
                icon: 'FaReact',
            },
            {
                id: 'current-focus',
                title: 'Current Focus',
                content: 'Learning DSA & APIs',
                icon: 'FaChartLine',
            },
        ],
    },
    skills: {
        projectShowcases: [
            {
                id: 'ecommerce',
                title: 'E-Commerce Website',
                description: 'Full-stack e-commerce platform with payment integration',
                imageUrl: '/images/ecommerce.png',
                techStack: ['React', 'Node.js', 'MongoDB', 'express'],
                liveDemoUrl: 'https://modoo-ecomerce.vercel.app/',
                githubUrl: 'https://github.com/mesi0621/modo-ecommerce',
            },
            {
                id: 'elearning',
                title: 'E-Learning Platform',
                description: 'Online learning management system',
                imageUrl: '/images/elearning.png',
                techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
                liveDemoUrl: 'https://elearning-demo.vercel.app/',
                githubUrl: 'https://github.com/mesi0621/E-learning',
            },
            {
                id: 'joblink',
                title: 'JobLink Africa',
                description: 'Job portal connecting employers and job seekers',
                imageUrl: '/images/joblink.png',
                techStack: ['React', 'Node.js', 'PostgreSQL', 'Express'],
                liveDemoUrl: 'https://joblink-africa.vercel.app/',
                githubUrl: 'https://github.com/mesi0621/joblink-africa',
            },
        ],
    },
    projects: {
        accomplishments: [
            'Built full-stack REST APIs',
            'Integrated payment systems (Chapa, Telebirr)',
            'Deployed backend on Render',
            'Hosted frontend on Vercel',
        ],
    },
    contact: {
        email: 'mezgebemessi@gmail.com',
        phone: '+251924531549',
        linkedinUrl: 'https://linkedin.com/in/messi-mezgebe-8bb536365',
        githubUrl: 'https://github.com/mesi0621',
    },
};
