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
      'primaryred' :'#FF334B',
      'primarygreen1' : '#2D4037',
      'primarygreen2' : '#004525',
      'primarygreen3' : '#006838',
      'primarylightgreen' : '#E7ECD6',
      'primarybggray' : '#EBEBEB',
      'primaryyellow' : '#FFB100',
      'gray-3' : '#CBCBCB',
      'gray-4' : '#757575',
      'yellowshiping' : '#FFE91F',
      'greenshiping' : '#3ACE15',
     }
    },
  },
  plugins: [],
} satisfies Config;
