/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        protest: ['Protest Revolution'],
        ubuntu: ['Ubuntu'],
        nunito: ['Nunito Sans'],
        lato: ['lato'],
        mukta:['mukta'],
        poppins: ['poppins'],
        caption: ['PT Sans Caption'],
        hanuman: ['Hanuman']
      }
    },
  },
  plugins: [],
}

