module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: [
    '.src/**/*.tsx',
  ],
  theme: {
    extend: {},
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
    },
  },
  variants: {
    opacity: ['hover']
  },
  plugins: [],
}
