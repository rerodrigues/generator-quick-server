module.exports = function(grunt) {
    grunt.config('uglify', {
        options: {
            report: 'min',
            mangle: {
                screw_ie8: true
            },
            sourceMap: false,
            banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        app: {
          src: ['<%= babel.app.dest %>/**/*.js'],
          dest: 'app/assets/js/app.min.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};
