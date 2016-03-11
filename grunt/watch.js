module.exports = {
  js: {
    files: ['src/js/{,**/}*.js'],
    tasks: ['js'],
    options: {
      livereload: true
    }
  },
  css: {
    files: ['src/css/{,**/}*.scss'],
    tasks: ['css'],
    options: {
      livereload: true
    }
  },
  html: {
    files: ['src/{,**/}*.html'],
    tasks: ['html'],
    options: {
      livereload: true
    }
  }
};
