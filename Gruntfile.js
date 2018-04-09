'use strict';

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        eslint: {
            all: ['lib/**/*.js', 'test/**/*.js', 'examples/**/*.js', 'Gruntfile.js']
        },

        nodeunit: {
            all: ['test/**/*-test.js']
        },

        webpack: {
            prod: require('./webpack.config')
        }
    });

    // Load the plugin(s)
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-webpack');

    // Tasks
    grunt.registerTask('default', ['eslint', 'nodeunit']);
    // Tasks for building es5
    grunt.registerTask('build', ['webpack']);
};
