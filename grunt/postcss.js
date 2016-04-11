module.exports = {
  options: {
    processors: [
      require('autoprefixer')({ browsers: 'last 2 versions' })
    ]
  },
  dist: {
    src: 'dist/css/app.min.css'
  }
};
