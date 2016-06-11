module.exports = function(grunt) {
  require( 'load-grunt-tasks' )( grunt );

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-rename');
  grunt.loadNpmTasks('grunt-newer');

  grunt.initConfig({
    clean: {
      css: ['css/*.css'],
      js: ['js/*.js']
    },
    concat: {
      options: {
        separator: ';',
      },
      css: {
        src: ['_assets/css/reset.css', '_assets/css/syntax.css', '_assets/css/screen.css'],
        dest: '_assets/css/app.css',
      },
      js: {
        src: ['_assets/js/jquery-1.11.1.js',
              '_assets/js/jquery-ui-1.10.4.custom.js', 
              '_assets/main.js'],
        dest: '_assets/js/app.js',
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/app.min.css': ['_assets/css/app.css']
        }
      }
    },        
    uglify: {
      main: {
        files: {
          'js/app.min.js': ['_assets/js/app.js']
        }
      }
    }
  });

  grunt.registerTask('default', ['clean', 'concat', 'cssmin', 'uglify']);
};
