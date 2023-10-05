/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'lights': "url('general-img/header-backdrop.jpg')",
        'marble': "url('general-img/marble.jpg')",
        'hslide0': "url('general-img/hslide0.jpg')",
        'hslide1': "url('general-img/hslide1.jpg')",
        'hslide2': "url('general-img/hslide2.jpg')",
        'hslide3': "url('general-img/hslide3.jpg')",
        'hslide4': "url('general-img/hslide4.jpg')",
        'radial-gradient': 'radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)',d
        
      }
    },
  },
  plugins: [],
}

