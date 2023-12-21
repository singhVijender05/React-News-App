/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'bangers': ['Bangers', 'cursive'],
        'josefin': ['Josefin Sans', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'Baloo': ['Baloo Bhai 2', 'cursive'],
        'Archivo': ['Archivo Black', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

