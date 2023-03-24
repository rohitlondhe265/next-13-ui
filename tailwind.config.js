/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            h2: {
              color: 'red',
              margin: '0px 0px 9px 0px',
            },
            h3: {
              color: 'blue',
              margin: '0px 0px 6px 0px',
            }
          },
        },
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
