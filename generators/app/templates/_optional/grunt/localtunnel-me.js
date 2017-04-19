module.exports = function(grunt) {
    grunt.config('localtunnel', {
        server: {
            options: {
                local_host: 'localhost',
                port: 8000,
                /* eslint-disable no-unused-vars*/
                handleTunnelError(err) {},
                handleTunnelSuccess(tunnel) {}
                /* eslint-enable no-unused-vars*/
            }
        }
    });

    grunt.loadNpmTasks('grunt-localtunnel-me');
};
