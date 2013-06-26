###
# darbak
# https://github.com/amitport/darbak
#
# Copyright (c) 2013 Amit Portnoy
# Licensed under the MIT license.
###

module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig

    # Before generating any new files, remove any previously-created files.
    clean: 
      tests: ['tmp'] 

    # Configuration to be run (and then tested).
    darbak: 
        test: 
          files: [
            {expand: true, cwd: 'test/fixtures', src: ['**/*.*'], dest: 'tmp/', ext: '.js'}
          ]

    # Unit tests.
    nodeunit: 
      tests: ['test/*_test.coffee']
      
  # Actually load this plugin's task(s).
  grunt.loadTasks 'tasks'

  # These plugins provide necessary tasks.
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-nodeunit'
  grunt.loadNpmTasks 'grunt-contrib-coffee'

  # Whenever the "test" task is run, first clean the "tmp" dir, then run this
  # plugin's task(s), then test the result.
  grunt.registerTask 'test', ['clean', 'darbak', 'nodeunit']
  
  # By default, run test.
  grunt.registerTask 'default', ['test']
