module.exports = function () {
  return {
    images: {
      expand: true,
      flatten: true,
      filter: 'isFile',
      src: ['src/images/**'],
      dest: 'dist/images/'
    },
    fonts: {
      expand: true,
      cwd: 'src/fonts',
      src: ['{,**/}*'],
      dest: 'dist/fonts/'
    },
    glyphicons: {
      expand: true,
      cwd: 'node_modules/bootstrap-sass/assets/fonts',
      src: ['{,**/}*'],
      dest: 'dist/fonts/'
    }
  };
};
