module.exports = function(grunt) {
    grunt.config('sass', {
        options: {
            sourceMap: false,
            outputStyle: (grunt.option('ENV') || '').toLowerCase() === 'prod' ? 'compressed' : 'expanded'
        },
        app: {
            files: [{
                cwd: 'app/assets/scss',
                src: '*.scss',
                dest: 'app/assets/css',
                ext: '.css',
                expand: true
            }]
        }
    });

    grunt.loadNpmTasks('grunt-sass');
};
