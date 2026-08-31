export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hospital: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#0d9488',
          600: '#0f766e',
          700: '#115e59',
          900: '#134e4a'
        },
        clinical: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        }
      }
    }
  },
  plugins: []
}
