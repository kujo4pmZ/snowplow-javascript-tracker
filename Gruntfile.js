/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['src/js/banner.js',
              'src/js/lib/json.js',
              'src/js/lib/jstz.js',
              'src/js/init.js',
              'src/js/helpers.js',
              'src/js/lib/sha1.js',
              'src/js/lib/murmur.js',
              'src/js/lib/base64.js',
              'src/js/payload.js',
              'src/js/tracker.js',
              'src/js/snowplow.js',
              'src/js/constructor.js'],
              
        dest: 'dist/concatenate.js'
      }
    },

    min: {
      options: {
        beautify: {
          max_line_len: 1000,
        }
      },
      js: {
        files: {
          'dist/yuied.js': ['dist/concatenate.js']
        }
      }    
    }
    
  });

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-yui-compressor');

grunt.registerTask('default', ['concat', 'min']);

}


 