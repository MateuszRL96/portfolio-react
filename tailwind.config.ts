import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            h1: {
              fontWeight: '800',
              fontSize: '3em',
              marginTop: '2em',
              marginBottom: '1em',
              lineHeight: '1.2',
            },
            h2: {
              fontWeight: '700',
              fontSize: '2.25em',
              marginTop: '2em',
              marginBottom: '1em',
              lineHeight: '1.2',
            },
            h3: {
              fontWeight: '600',
              fontSize: '1.75em',
              marginTop: '1.5em',
              marginBottom: '1em',
              lineHeight: '1.2',
            },
            'h1 + p, h2 + p, h3 + p': {
              marginTop: '1.5em',
            },
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            pre: {
              backgroundColor: '#1e293b',
              color: '#e2e8f0',
              padding: '1em',
              borderRadius: '0.5em',
              overflow: 'auto',
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            code: {
              color: '#e2e8f0',
              backgroundColor: '#1e293b',
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
              fontSize: '0.875em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            blockquote: {
              borderLeftColor: '#3b82f6',
              fontStyle: 'normal',
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            img: {
              borderRadius: '0.5em',
              marginTop: '2em',
              marginBottom: '2em',
            },
            a: {
              color: '#3b82f6',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            strong: {
              fontSize: '1.2em',
              fontWeight: '700',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

export default config; 