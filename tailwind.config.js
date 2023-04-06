/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["layouts/**/*.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      }),
      animation: {
        bounce: "bounce 1s infinite",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["responsive", "hover", "focus", "group-hover"],
      animation: ["hover", "focus", "group-hover"],
      scale: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
