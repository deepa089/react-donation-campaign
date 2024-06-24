/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'home-banner': "url('./src/assets/images/donationBackImage.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      opacity: {
        '999999': '999999',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

