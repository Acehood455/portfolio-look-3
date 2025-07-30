/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white50: 'var(--color-white-50)', // ✅ does not override `white`
        black50: 'var(--color-black-50)',
        black100: 'var(--color-black-100)',
        black200: 'var(--color-black-200)',
        blue50: 'var(--color-blue-50)',
        blue100: 'var(--color-blue-100)',
      },
    },
  },
  plugins: [],
}
