/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['"SF Pro Display"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
        },
        colors: {
          'apple-blue': '#007AFF',
          'apple-gray': '#8E8E93',
          'apple-background': '#F2F2F7',
          'apple-card': '#FFFFFF',
        },
        boxShadow: {
          'apple-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
          'apple-medium': '0 10px 15px rgba(0, 0, 0, 0.15)',
          'apple-heavy': '0 15px 25px rgba(0, 0, 0, 0.2)',
        },
        borderRadius: {
          'apple-card': '20px',
        },
        animation: {
          'subtle-bounce': 'subtle-bounce 0.5s ease-in-out',
        },
        keyframes: {
          'subtle-bounce': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-5px)' },
          },
        },
        backgroundImage: {
          'apple-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3))',
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }
