module.exports = function () {
  return {
    options: {
      csslintrc: 'grunt/conf/csslintrc.json'
    },
    all: {
      src: [
        'dist/css/{,**/}*.css',
        '!dist/css/vendor.min.css'
      ]
    }
  };
};
