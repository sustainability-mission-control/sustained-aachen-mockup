
/** @type {import('tailwindcss').Config} */

module.exports = {

    content: [
  
      "./src/app/**/*.{js,ts,jsx,tsx}",
  
      "./src/pages/**/*.{js,ts,jsx,tsx}",
  
      "./src/components/**/*.{js,ts,jsx,tsx}",
  
    ],
  
    theme: {
  
      extend: {
  
        colors: {
  
          primary: {
  
            50: '#f0f9ff',
  
            500: '#0ea5e9',
  
            600: '#0284c7',
  
          },
  
          secondary: {
  
            50: '#f0fdfa',
  
            500: '#14b8a6',
  
            600: '#0d9488',
  
          },
  
          neutral: {
  
            200: '#e5e5e5',
  
          },
  
        },
  
        boxShadow: {
  
          'card': '0 2px 4px rgba(0, 0, 0, 0.05)',
  
          'card-hover': '0 10px 15px rgba(0, 0, 0, 0.1)',
  
        }
  
      },
  
    },
  
    plugins: [],
  
  }
  