module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.JEKYLL_ENV == 'production'
      ? [require('cssnano')({ preset: 'default' })]
      : [])
  ]
}

module.exports = {
    content: [
      './_includes/*.html',
      './_layouts/*.html',
      './works/*.md',
      './*.html',
    ],
    theme: {
      theme: {
        extend: {},
      },
    },
    plugins: []
  }
  