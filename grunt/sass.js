module.exports = function () {
  return {
    dist: {
      options: {
        outputStyle: 'compressed',
        includePaths: [
          'node_modules/bootstrap-sass/assets/stylesheets'
        ]
      },
      files: {
        'dist/css/app.min.css': 'src/css/app.scss'
      }
    }
  };
};
