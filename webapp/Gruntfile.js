module.exports = function (grunt){
    grunt.initConfig({
        concat: {
            assemblage: {
                src: ['js/modules/*.js', 'js/controllers/*.js', 'js/services/*.js', 'js/directives/*.js', 'js/filters/*.js', 'js/*.js'],
                dest: 'build/scripts.js'
            }
        },
        uglify : {
            uglification : {
                files: {
                    'build/scripts.min.js': ['build/scripts.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
};