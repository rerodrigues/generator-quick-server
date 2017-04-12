module.exports = function(grunt) {
    grunt.config('watch', {
        livereload: {
            options: {
                livereload: true
            },
            files: [
                'app/*.html',
                'app/assets/{css,js}/**/*.{css,min.js}'
            ]
        },
        tools: {
            files: ['<%= eslint.tools.src %>'],
            tasks: ['eslint:tools', 'notify:eslint']
        },
        scripts: {
            files: ['<%= eslint.app.src %>'],
            tasks: ['eslint:app', 'babel:app', 'uglify:app', 'clean:tmp', 'notify:scripts']
        },
        styles: {
            files: ['<%= sass.app.files[0].cwd %>/**/*.scss'],
            tasks: ['sasslint:app', 'sass:app', 'notify:styles']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
