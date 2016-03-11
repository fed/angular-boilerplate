module.exports = {
  app: {
    src: [
      'src/js/app.js',
      'src/js/services/{,**/}*.js',
      'src/js/directives/{,**/}*.js',
      'src/js/controllers/{,**/}*.js'
    ],
    dest: 'dist/js/app.min.js'
  },
  vendor: {
    src: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-route/angular-route.min.js',
      'node_modules/angular-resource/angular-resource.min.js'
    ],
    dest: 'dist/js/vendor.min.js'
  }
};
