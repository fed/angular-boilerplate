module.exports = function () {
  return {
    js: {
      src: [
        'src/js/app.js',
        'src/js/services/{,**/}*.js',
        'src/js/directives/{,**/}*.js',
        'src/js/controllers/{,**/}*.js'
      ],
      dest: 'dist/js/app.min.js'
    },
    jsVendor: {
      src: [
        'node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/angular-resource/angular-resource.min.js'
      ],
      dest: 'dist/js/vendor.min.js'
    },
    cssVendor: {
      src: [
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css'
      ],
      dest: 'dist/css/vendor.min.css'
    }
  };
};
