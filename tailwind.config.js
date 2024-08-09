
module.exports = {
  content: ['./views/**/*.ejs', './assets/js/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui'),require('tailwindcss-scrollbar')],
  daisyui:{
    logs:false,
    themes:['wireframe','dim']
  }
}
