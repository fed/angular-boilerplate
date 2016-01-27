module.exports = function () {
  return {
    allFiles: [
      'src/css'
    ],
    options: {
      config: 'grunt/conf/.scss-lint.yml',
      colorizeOutput: true
    }
  };
};
