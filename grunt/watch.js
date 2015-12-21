module.exports = function () {
  return {
    js: {
      files: ['Gruntfile.js', 'src/js/{,**/}*.js'],
      tasks: ['js'],
      options: {
        livereload: true
      }
    },
    css: {
      files: ['src/css/{,**/}*.{sass,scss,css}'],
      tasks: ['css'],
      options: {
        livereload: true
      }
    },
    html: {
      files: ['src/{,**/}*.html'],
      tasks: ['build'],
      options: {
        livereload: true
      }
    }
  };
};
