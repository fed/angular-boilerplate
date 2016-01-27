module.exports = function () {
  return {
    options: {
      configFile: 'grunt/conf/eslint.json'
    },
    target: [
      'Gruntfile.js',
      'grunt/{,**/}*.js',
      'src/js/{,**/}*.js'
    ]
  };
};
