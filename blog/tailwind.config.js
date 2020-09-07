module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
    './projects/design/**/*.html',
    './projects/design/**/*.ts',
    "./projects/shortcodes/**/*.html",
    "./projects/shortcodes/**/*.ts",
  ],
  theme: {
    extend: {
      colors: {
        blue: 'var(--blue)',
        'blue-opacity-10': 'rgba(var(--blue-rgb), 0.1)',
        cyan: 'var(--cyan)',
        'cyan-opacity-10': 'rgba(var(--cyan-rgb), 0.1)',
        'dark-blue': 'var(--dark-blue)',
        'dark-blue-opacity-10': 'rgba(var(--dark-blue-rgb), 0.1)',
        background: 'var(--background)',
        'background-opac': 'var(--background-opac)',
        'background-light': 'var(--background-light)',
        'background-shade': 'var(--background-shade)',
        color: 'var(--text)',
        'color-light': 'var(--text-light)',
        'color-shade': 'var(--text-shade)',
        tabs: 'var(--tabs)',
        danger: 'var(--danger)',
        code: 'var(--code)',
      },
      fontFamily: {
        sans: ['Muli'],
      },
      inset: {
        4: '1rem',
        8: '2rem',
        12: '3rem',
        16: '4rem',
        24: '6rem',
        32: '8rem',
      },
      maxHeight: {
        '248': '248px',
        '384': '384px',
        '524': '524px',
      },
      transformOrigin: {
        '0': '0%',
      },
      zIndex: {
        '-1': '-1',
      },
      borderRadius: {
        xl: '22px',
      },
      minHeight: {
        18: '4.5rem',
        24: '6rem',
        80: '20rem',
      },
    },
    screens: {
      xx: '0px',
      xs: '256px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      dark: { raw: '(prefers-color-scheme: dark)' },
      light: { raw: '(prefers-color-scheme: light)' },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
  },
  plugins: [],
};
