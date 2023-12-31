/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'ffffffb2':"#ffffffb2",
        'fe424c':"#081f55",
        '722d68':"#722d68"
      },
      width:{
        '800':"800px",
        'half':"48%",
        '70%':"70%",
        '30%':"30%",
        '24%':"24%",
      },
      minHeight:{
      '200':"200px",
      '240':"250px",
      '400':"420px",
      },
      minWidth:{
        '60':"240px"
      },
      screens:{
        'xmd':"950px"
      },
      height:{
        "o":"450px"
      }
    },
  },
  plugins: [],
}
