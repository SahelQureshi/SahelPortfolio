/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Heading 1
        "h1-xs": ["1.75rem", { lineHeight: "1.2" }],
        "h1-sm": ["2.25rem", { lineHeight: "1.2" }],
        "h1-md": ["3rem", { lineHeight: "1.15" }],
        "h1-lg": ["2.8rem", { lineHeight: "1.15" }],
        "h1-lgg": ["3rem", { lineHeight: "1.15" }],
        "h1-xl": ["3.2rem", { lineHeight: "1.15" }],
        "h1-2xl": ["4rem", { lineHeight: "1.15" }],

        // Heading 2
        "h2-xs": ["1.5rem", { lineHeight: "1.25" }],
        "h2-sm": ["1.75rem", { lineHeight: "1.25" }],
        "h2-md": ["2rem", { lineHeight: "1.2" }],
        "h2-lg": ["2.25rem", { lineHeight: "1.2" }],
        "h2-lgg": ["2.3rem", { lineHeight: "1.1" }],
        "h2-xl": ["2.5rem", { lineHeight: "1.25" }],
        "h2-2xl": ["3rem", { lineHeight: "1.25" }],

        // Heading 3
        "h3-xs": ["1.25rem", { lineHeight: "1.3" }],
        "h3-sm": ["1.5rem", { lineHeight: "1.3" }],
        "h3-md": ["1.75rem", { lineHeight: "1.25" }],
        "h3-lg": ["1.75rem", { lineHeight: "1.25" }],
        "h3-lgg": ["1.85rem", { lineHeight: "1.2" }],
        "h3-xl": ["2rem", { lineHeight: "1.2" }],
        "h3-2xl": ["2.4rem", { lineHeight: "1.1" }],

        // Heading 4
        "h4-xs": ["1.125rem", { lineHeight: "1.4" }],
        "h4-sm": ["1.25rem", { lineHeight: "1.4" }],
        "h4-md": ["1.5rem", { lineHeight: "1.3" }],
        "h4-lg": ["1.75rem", { lineHeight: "1.3" }],
        "h4-lgg": ["1.875rem", { lineHeight: "1.25" }],
        "h4-xl": ["2rem", { lineHeight: "1.25" }],
        "h4-2xl": ["2.25rem", { lineHeight: "1.2" }],

        // Heading 5 (adjusted to fit hierarchy)
        "h5-xs": ["1rem", { lineHeight: "1.4" }],
        "h5-sm": ["1.125rem", { lineHeight: "1.4" }],
        "h5-md": ["1.25rem", { lineHeight: "1.3" }],
        "h5-lg": ["1.5rem", { lineHeight: "1.3" }],
        "h5-lgg": ["1.625rem", { lineHeight: "1.25" }],
        "h5-xl": ["1.75rem", { lineHeight: "1.25" }],
        "h5-2xl": ["1.875rem", { lineHeight: "1.2" }],

        // Paragraph
        "p-xs": ["0.975rem", { lineHeight: "1.5" }],
        "p-sm": ["1rem", { lineHeight: "1.5" }],
        "p-md": ["1.025rem", { lineHeight: "1.5" }],
        "p-lg": ["1.050rem", { lineHeight: "1.5" }],
        "p-lgg": ["1rem", { lineHeight: "1.5" }],
        "p-xl": ["1.2rem", { lineHeight: "1.5" }],
        "p-2xl": ["1.27rem", { lineHeight: "1.4" }],
      },

      // Custom breakpoints (optional)
      screens: {
        xs: "480px",
        smx: "500px",
        sm: "640px",
        md: "768px",
        lg: "991px",
        lgg: "1024px",
        xl: "1280px",
        xxl: "1368px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
