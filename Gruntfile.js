/*
Copyright 2015 Justin Obara

Licensed under the MIT license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://raw.githubusercontent.com/jobara/phaser-game/master/LICENSE
*/

// Declare dependencies
/* global module */

module.exports = function(grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            all: ["**/*.js"],
            buildScripts: ["Gruntfile.js"],
            options: {
                jshintrc: true
            }
        },
        jsonlint: {
            all: ["src/**/*.json"]
        }
    });

    // Load the plugin(s):
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-jsonlint");

    // Custom tasks:
    grunt.registerTask("lint", "Apply jshint and jsonlint", ["jshint", "jsonlint"]);
    grunt.registerTask("default", ["lint"]);
};
