/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*{html,js}'],
  theme: {

    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    
    extend: {
      keyframes: {
        fliphorizontal: {
          '50%': { transform: 'rotateY(45deg)'},
        }
      },

      animation: {
        hflip: 'fliphorizontal 1s ease-in-out',
      }
      
    },
  },
  plugins: [],
}
