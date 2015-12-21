module.exports = function () {
  return {
    all: {
      options: {
        hostname: '*',
        port: process.env.PORT || '6789',
        base: 'dist/',
        livereload: true
      }
    }
  };
};
