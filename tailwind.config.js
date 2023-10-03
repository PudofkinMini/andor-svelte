/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'lights': "url('header-backdrop.jpg')",
        'hslide0': "url('hslide0.jpg')",
        'hslide1': "url('hslide1.jpg')",
        'hslide2': "url('hslide2.jpg')",
        'hslide3': "url('hslide3.jpg')",
        'hslide4': "url('hslide4.jpg')"
        
      }
    },
  },
  plugins: [],
}

