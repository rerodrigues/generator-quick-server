module.exports = function(grunt) {
    grunt.loadTasks('grunt');

    grunt.registerTask('compile', ['sass:app', 'babel:app', 'uglify:app', 'clean:tmp']);
<% if(expose) { %>
    grunt.registerTask('expose', ['localtunnel_client:server:keepalive']);
    grunt.registerTask('default', ['compile', 'localtunnel_client', 'connect', 'watch']);
<% } else { %>
    grunt.registerTask('default', ['compile', 'connect', 'watch']);
<% } %>
};
