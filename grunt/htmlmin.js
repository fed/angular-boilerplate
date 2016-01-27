module.exports = function () {
  return {
    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: [{
        expand: true,
        cwd: 'src/',
        src: ['{,**/}*.html'],
        dest: 'dist/'
      }]
    }
  };
};
