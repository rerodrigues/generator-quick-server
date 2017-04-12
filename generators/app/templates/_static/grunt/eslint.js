module.exports = function(grunt) {
    grunt.config('eslint', {
        options: {
            configFile: '.eslintrc'
        },
        app: {
            src: [
                'app/assets/js/**/*.src.js',
                'app/assets/js/*/*.js'
            ]
        },

        tools: {
            src: ['Gruntfile.js', 'grunt/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-eslint');
};
