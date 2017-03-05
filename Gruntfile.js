var webp = require('./webpack.config.js');
webp.failOnError = false;

module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          "prod/css/style.css": "src/scss/style.scss"
        }
      }
    },
	  postcss: {
        options: {
            map: true,
            processors: [
                require('autoprefixer')({
                    browsers: ['last 2 versions']
                })
            ]
        },
        dist: {
            src: 'prod/css/style.css'
        }
    },
    // uglify: {
    //   dev: {
    //     files: {
    //       'prod/bundle.js': ['dist/**.js'],
    //       'prod/service.worker.js': './src/webapp/service.worker.js'
    //     }
    //   }
    // },
    htmlmin: {                                     // Task
      prod: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'prod/index.html': 'dist/index.html',     // 'destination': 'source'
        }
      },
    },
    copy: {
      webapp: {
        expand: true,
        cwd:'src/webapp/',
        src: ['.htaccess', '.manifest', 'manifest.json'],
        dest:'prod/'
      },
      webapp_icon: {
        expand: true,
        cwd: 'src/webapp/',
        src: 'fireworks-icon192x192.png',
        dest: 'prod/img'
      }
    },
    webpack: {
      prod: webp
    },
    watch: {
      styles: {
        files: ['./src/scss/**.scss'], // which files to watch
        tasks: ['sass', 'postcss'],
      },
      scripts: {
        files: ['Gruntfile.js', 'dist/**.js'],
        tasks: ['uglify'],
      }
    }
  });
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks("grunt-webpack");
  //grunt.loadNpmTasks('grunt-parallel');
  grunt.registerTask('watch-style', [ 'copy:webapp', 'copy:webapp_icon', 'sass', 'postcss', 'uglify', 'htmlmin:prod', 'watch:styles' ]);
  grunt.registerTask('default', ['webpack:prod', 'copy:webapp', 'copy:webapp_icon', 'sass', 'postcss', 'uglify', 'htmlmin:prod']);
};
