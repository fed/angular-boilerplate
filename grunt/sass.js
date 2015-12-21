module.exports = function () {
  return {
    dist: {
      options: {
        outputStyle: 'compressed',
        includePaths: [
          'node_modules/bootstrap-sass/assets/stylesheets',
          'node_modules/font-awesome/scss'
        ]
      },
      files: {
        'dist/css/app.min.css': 'src/css/app.scss'
      }
    }
  };
};
