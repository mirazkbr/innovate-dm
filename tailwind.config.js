/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#192239',
        'logo': '#FF7628',
        'para': '#6C7D93',
        'imgThumb': '#C4C4C4',
        'blog-h': '#413F45',
        'blog-sh': '#474747',
        
      }
    },
    fontFamily: {
      'primary': ['Open Sans', 'sans-serif'],
      'para': ["Paprika", 'system-ui'],
      'subMenu': ["Roboto", "sans-serif"],
      'blog-header': ["Work Sans", "sans-serif"],
      'blog-sub-h': ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
}