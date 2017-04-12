module.exports = function(grunt) {
    grunt.config('babel', {
        app: {
            expand: true,
            src: [
                '*.src.js',
                '*/*.js'
            ],
            cwd: 'app/assets/js/',
            dest: '.tmp',
            ext: '.babel.js'
        }
    });

    grunt.loadNpmTasks('grunt-babel');
};
