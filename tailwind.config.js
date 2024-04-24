/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "false",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: "#94A3B8",
        todo: "#FFEE93",
        workingOn: "#306BFF",
        checking: "#FFB57F",
        completed: "#78C552",
        colorTag: "#33BFFF",
      },
      backgroundColor: {
        todo: "#FFEE93",
        workingOn: "#306BFF",
        checking: "#FFB57F",
        completed: "#78C552",
        bgTag: "#F0FAFF",
      },
      width: {
        todoCardWidth: "23.60%",
        90: "90px",
      },
      fontFamily: {
        SFProDisplay: ["SFProDisplay", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
