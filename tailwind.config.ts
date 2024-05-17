import { root } from "postcss";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height:{
        "screen-2":"200vh",

      },
      colors:{
        pwhite:"#F8f5f1",
        pgrey:"#454545",
        nav:"#e3dedd",
        green:"#114232",
        light:"#CCC8AA",
        use:"#393E46",
        spblack:"#00171f",
        cream:"#fdfffc",
        darkblack:"#393e41",
        spspgrey:"#403d39",
        newgrey:"#201e1f",

      },
      fontFamily:{
        abc:["Micro-5"],
      },
    },
    
  },
  plugins: [],
};
export default config;
