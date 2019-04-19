const tailwindcss = require('tailwindcss')

const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project 
  content: [
    './pages/**/*.html',
    './pages/**/*.js',
    './pages/**/*.jsx',
  ],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-Za-z0-9-_:/]+/g) || [];
        }
      },

      // Specify all of the extensions of your template files 
      extensions: ['html', 'js', 'jsx', /* etc. */]
    }
  ]
})

module.exports = {
  plugins: [
    require('postcss-easy-import'),
    tailwindcss('./tailwind.js'),
    require('autoprefixer'),
    ...process.env.APP_ENV === 'production'
      ? [purgecss]
      : []
  ]
}