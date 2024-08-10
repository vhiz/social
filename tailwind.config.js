
module.exports = {
  content: ['./views/**/*.ejs', './assets/js/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui'),require('tailwind-scrollbar')],
  daisyui:{
    logs:false,
    themes:['wireframe','dim']
  }
}
