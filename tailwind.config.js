/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        border: 'var(--color-border)',
        text: 'var(--color-text)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        sans: ['VT323', 'monospace'],
        mono: ['VT323', 'monospace'],
      },
      boxShadow: {
        'glow-accent': '0 0 15px var(--color-accent)',
        'glow-primary': '0 0 15px var(--color-primary)',
      }
    },
  },
  plugins: [],
}