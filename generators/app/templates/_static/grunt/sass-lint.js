module.exports = function(grunt) {
    grunt.config('sasslint', {
        app: ['<%= sass.app.files[0].cwd %>/**/*.scss']
    });

    grunt.loadNpmTasks('grunt-sass-lint');
};
