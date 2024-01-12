import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Application
        'primary': '#1A1A1A',
        
        // Menu
        'menuText': '#7D7D7D',
        'menuHover': '#262626',

        // OpenFiles
        'openFilesText': '#7D7D7D',
        'openFilesSelected': '#262626',

        // Warnings
        'warningText': '#000000',
        'warningBg': '#f1c40f',
      }
    },
    fontFamily: {
      'JetBrains': ['JetBrains Mono', 'monospace'],
      'Inter': ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
};

export default config;