module.exports = function () {
  return {
    all: [
      'Gruntfile.js',
      'grunt/{,**/}*.js',
      'src/js/{,**/}*.js'
    ],
    options: {
      jshintrc: 'grunt/conf/jshintrc.json'
    }
  };
};
