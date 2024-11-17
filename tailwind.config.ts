import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors:{
      'primarygray' : '#DAD9D9',
      'primarytextgray' : '#5E5E5D',
      'primarygray1' : '#7E7F80',
      'primarydarkgray' : '#100F07',
      'primarygreen' : '#7DB29A',
      'cream' :'#FFE4BB',
      'cream-1' : '#FEF8EC',
      'cream-2' : '#FBDEA4',
      'cream-3' : '#C7B590',
      'cream-4' : '#8B7A59',
      'gray-1' : '#F9F9F9',
      'gray-2' : '#EDEDED',
      'gray-3' : '#CBCBCB',
      'gray-4' : '#757575',
      'yellowshiping' : '#FFE91F',
      'greenshiping' : '#3ACE15',
     }
    },
  },
  plugins: [],
} satisfies Config;
