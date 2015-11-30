module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
    },
    jasmine : {
      // Your project's source files
      src : 'src/**/*.js',
      options: {
        // Your Jasmine spec files
        specs : 'specs/**/*spec.js',
        // Your spec helper files
        helpers : 'specs/helpers/*.js'
      }
    },
    watch: {
        files: ['Gruntfile.js'],
        tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jasmine', 'jshint']);
};