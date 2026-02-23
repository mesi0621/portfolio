# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern dark/light theme with space-themed design
- 🌍 Multi-language support (English & Amharic)
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- ♿ Accessible with keyboard navigation
- 🎭 Smooth animations and transitions
- 💎 Glassmorphism UI effects

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Form Handling**: React Hook Form
- **Internationalization**: react-i18next
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Testing**: Vitest + React Testing Library + fast-check

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Testing

Run tests:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:ui
```

## Project Structure

```
portfolio-website/
├── public/
│   ├── images/          # Project images and profile photo
│   └── cv/              # CV/Resume PDF
├── src/
│   ├── components/      # React components
│   ├── contexts/        # React contexts (Theme, Language)
│   ├── data/            # Portfolio data configuration
│   ├── locales/         # Translation files
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── test/            # Test setup
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Customization

### Update Personal Information

Edit `src/data/portfolioData.ts` to update:
- Personal info (name, title, location)
- About section (bio, info cards)
- Skills (project showcases)
- Projects (accomplishments)
- Contact info (email, LinkedIn, GitHub)

### Add Images

1. Add your profile photo to `public/images/profile.jpg`
2. Add project screenshots to `public/images/`
3. Add your CV to `public/cv/meseret-mezgebu-cv.pdf`

### Update Translations

Edit translation files:
- `src/locales/en.json` - English translations
- `src/locales/am.json` - Amharic translations

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

## License

MIT License - feel free to use this template for your own portfolio!
