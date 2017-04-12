module.exports = function(grunt) {
    grunt.config('connect', {
        server: {
            options: {
                base: 'app',
                port: 8000,
                hostname: 'localhost',
                livereload: true,
                open: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
