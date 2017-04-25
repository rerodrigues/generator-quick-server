module.exports = function(grunt) {
    grunt.config('localtunnel_client', {
        server: {
            options: {
                port: 8000,
                local_host: 'localhost',
                subdomain: '<%= name.toLowerCase().replace(/\s/g, "_") %>',
                /* eslint-disable no-unused-vars*/
                onSuccess(tunnel) {},
                onError(err) {}
                /* eslint-enable no-unused-vars*/
            }
        }
    });

    grunt.loadNpmTasks('grunt-localtunnel-client');
};
