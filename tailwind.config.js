/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html", 
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'maximum-blue-purple': '#C4B6F0',
        'purple-x-11': '#9440FF',
        'artic-lime': '#C7F320',
        'emerald': '#06D27F',
        'misty-rose': '#F2D8D6',
        'spanish-gray': '#9E9E9E',
        'midnight-green': '#004751',
        'space-cadet': '#1A1A33',
        'tea-green': '#D1FFB4',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      cursor:{
        'tea-green-16': 'url(https://res.cloudinary.com/dhovmuhja/image/upload/f_auto,q_auto/v1/stoic-records/edited/cursors/stoic-logo-tea-green-cursor-16x16), pointer',
        'space-cadet-16': 'url(https://res.cloudinary.com/dhovmuhja/image/upload/f_auto,q_auto/v1/stoic-records/edited/cursors/stoic-logo-space-cadet--cursor-16x16), pointer',
        'm-blue-purple-16': 'url(https://res.cloudinary.com/dhovmuhja/image/upload/f_auto,q_auto/v1/stoic-records/edited/cursors/stoic-logo-maximum-blue-purple-cursor-16x16), pointer',
        'emerald-16': 'url(https://res.cloudinary.com/dhovmuhja/image/upload/f_auto,q_auto/v1/stoic-records/edited/cursors/stoic-logo-emerald-cursor-16x16), pointer',
        'artic-lime-16': 'url(https://res.cloudinary.com/dhovmuhja/image/upload/f_auto,q_auto/v1/stoic-records/edited/cursors/stoic-logo-artic-lime-cursor-16x16), pointer',
        
        'tea-green-24': 'url(https://res.cloudinary.com/dhovmuhja/image/upload/f_auto,q_auto/v1/stoic-records/edited/cursors/stoic-logo-tea-green-cursor-24x24), default',
        'space-cadet-24': 'url(https://res.cloudinary.com/dhovmuhja/image/upload/f_auto,q_auto/v1/stoic-records/edited/cursors/stoic-logo-space-cadet--cursor-24x24), default',
        'm-blue-purple-24': 'url(https://res.cloudinary.com/dhovmuhja/image/upload/f_auto,q_auto/v1/stoic-records/edited/cursors/stoic-logo-maximum-blue-purple-cursor-24x24), default',
        'emerald-24': 'url(https://res.cloudinary.com/dhovmuhja/image/upload/f_auto,q_auto/v1/stoic-records/edited/cursors/stoic-logo-emerald-cursor-24x24), default',
        'artic-lime-24': 'url(https://res.cloudinary.com/dhovmuhja/image/upload/f_auto,q_auto/v1/stoic-records/edited/cursors/stoic-logo-artic-lime-cursor-24x24), default'
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}