/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F3460",
        dark: "#1A1A2E",
        navy: "#16213E",
        light: "#F9F9F9", 
        accent: "#E94560",
      },
      fontFamily: {
        sans_M_plus: ['M PLUS 1p', 'sans-serif'],
        cursive: ['Clicker Script', 'cursive'],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        'neumorphic': '1.5px 1.5px 3px rgba(0, 0, 0, 0.6), -.5px -.5px 3px rgba(255, 255, 255, 0.3)',
        'neumorphic-inset': 'inset 2px 2px 3px rgba(0, 0, 0, 0.6), inset -.5px -.5px 3px rgba(255, 255, 255, 0.3)',
      },
      backgroundImage: {
        'card': 'linear-gradient(150deg, #01010235, #8282821e)'
      }
    },
  },
  plugins: [

  ],
}
  