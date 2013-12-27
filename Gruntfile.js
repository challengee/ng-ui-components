module.exports = function (grunt) {

    grunt.initConfig({
        pkg    : grunt.file.readJSON('package.json'),
        concat : {
            options: {
                separator: ''
            },
            library: {
                src : [
                    'src/ng-ui-components/ng-ui-components.prefix',
                    'src/ng-ui-components/ng-ui-components.js',
                    'src/ng-ui-components/directives/**/*.js',
                    'src/ng-ui-components/filters/**/*.js',
                    'src/ng-ui-components/services/**/*.js',
                    'src/ng-ui-components/ng-ui-components.suffix'
                ],
                dest: 'dist/ng-ui-components.js'
            }
        },
        uglify : {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            jid    : {
                files: {
                    'dist/ng-ui-components.min.js': ['<%= concat.library.dest %>']
                }
            }
        },
        jshint : {
            beforeConcat: {
                src: ['gruntfile.js', 'ng-ui-components/**/*.js']
            },
            afterConcat : {
                src: [
                    '<%= concat.library.dest %>'
                ]
            },
            options     : {
                // options here to override JSHint defaults
                globals     : {
                    jQuery  : true,
                    console : true,
                    module  : true,
                    document: true,
                    angular : true
                },
                globalstrict: false
            }
        },
        connect: {
            server: {
                options: {
                    port      : 9000,
                    base      : './',
                    hostname  : 'localhost',
                    keepalive : true,
                    livereload: true
                }
            }
        },
        watch  : {
            options: {
                livereload: true
            },
            files  : [
                'Gruntfile.js',
                'src/**/*'
            ],
            tasks  : ['default']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['jshint:beforeConcat', 'concat', 'jshint:afterConcat', 'uglify']);
    grunt.registerTask('serve', ['connect']);
    grunt.registerTask('livereload', ['default', 'watch']);

};