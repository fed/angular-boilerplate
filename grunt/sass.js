module.exports = function () {
  return {
    all: {
      compress: true,
      files: {
        'dist/css/app.min.css': 'src/css/app.less'
      }
    }
  };
};
