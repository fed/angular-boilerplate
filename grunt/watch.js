module.exports = function () {
  return {
    js: {
      files: ['Gruntfile.js', 'src/js/{,**/}*.js'],
      tasks: ['js', 'copy'],
      options: {
        livereload: true
      }
    },
    css: {
      files: ['src/css/{,**/}*.less'],
      tasks: ['css', 'copy'],
      options: {
        livereload: true
      }
    },
    html: {
      files: ['src/{,**/}*.html'],
      tasks: ['copy'],
      options: {
        livereload: true
      }
    }
  };
};
