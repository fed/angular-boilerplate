module.exports = function () {
  return {
    html: {
      cwd: 'src/',
      expand: true,
      src: ['{,**/}*.html'],
      dest: 'dist/'
    },
    images: {
      expand: true,
      flatten: true,
      filter: 'isFile',
      src: [
        'src/images/**'
      ],
      dest: 'dist/images/'
    },
    fonts: {
      expand: true,
      flatten: true,
      filter: 'isFile',
      src: [
        'node_modules/font-awesome/fonts/**'
      ],
      dest: 'dist/fonts/'
    }
  };
};
