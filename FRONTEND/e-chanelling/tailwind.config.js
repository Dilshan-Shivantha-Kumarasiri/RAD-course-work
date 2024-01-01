/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'pattern-bg': "url('https://www.echannelling.com/images/homeTile/hometile-bg.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [
    'flowbite/plugin',
  ],
}

