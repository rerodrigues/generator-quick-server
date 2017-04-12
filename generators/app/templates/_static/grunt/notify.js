module.exports = function(grunt) {
    grunt.config('notify', {
        options: {
            title: 'GRUNT: ',
            message: 'Tasks successfully completed!'
        },
        eslint: {
            options: {
                message: 'ESLint successfully completed!'
            }
        },
        scripts: {
            options: {
                message: 'Scripts successfully generated!'
            }
        },
        styles: {
            options: {
                message: 'Estilos successfully generated!'
            }
        }
    });

    grunt.loadNpmTasks('grunt-notify');
};
