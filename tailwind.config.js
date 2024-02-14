/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        // Application
        'primary': '#1A1A1A',
        'contrast': '#2ECC71',
        
        // Menu
        'menuText': '#7D7D7D',
        'menuHover': '#262626',

        // OpenFiles
        'openFilesText': '#7D7D7D',
        'openFilesSelected': '#262626',
      },
      keyframes: {
        scale: {
          'from': { 
            'width': '100%',
            'height': '100%'
          },
          'to': { 
            'width': '100px',
            'height': '100px'
          },
        }
      },
      animation: {
        'loadingbar': 'width 0.05s ease-in-out',
        'shrinkbox': 'scale 1s ease-in-out 1 forwards',
      },
    },
    fontFamily: {
      'JetBrains': ['JetBrains Mono', 'monospace'],
      'Inter': ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
};