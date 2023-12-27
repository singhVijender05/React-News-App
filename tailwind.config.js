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
        'Google': ['Google Sans Text'],
      },
      fontWeight:{
        'extra-light': 100,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'mota': 550,
        'semi-bold': 600,
        'bold': 700,
        'extra-bold': 800,
        'black': 900, 
    },
  },
  plugins: [],
}
}
