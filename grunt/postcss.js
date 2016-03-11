module.exports = {
  options: {
    processors: [
      require('pixrem')(),
      require('autoprefixer')({ browsers: 'last 2 versions' }),
      require('cssnano')()
    ]
  },
  dist: {
    src: 'dist/css/app.min.css'
  }
};
