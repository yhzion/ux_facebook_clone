module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        clean: {
            all: ['dist'],
            delete_tmp: ['dist/**/*.tmp']
        },

        pkg: grunt.file.readJSON('package.json'),
        //uglify 설정
        uglify: {
            build: {
                src: 'dist/assets/js/optimized.js', //uglify할 대상 설정
                dest: 'dist/assets/js/optimized.min.js' //uglify 결과 파일 설정
            }
        },
        cssmin: {
            build: {
                src: 'dist/assets/css/style.css', //uglify할 대상 설정
                dest: 'dist/assets/css/style.min.css' //uglify 결과 파일 설정
            }
        },
        //concat 설정
        concat: {
            js_concat: {
                src: ['bower_components/jquery/dist/jquery.js','src/assets/js/sns.js'],
                dest: 'dist/assets/js/optimized.js' //concat 결과 파일
            },
            css_concat: {
                src: [
                    'src/assets/css/*.css',
                    'bower_components/Ionicons/css/ionicons.css',
                    'bower_components/font-awesome/css/font-awesome.css'
                ],
                dest: 'dist/assets/css/style.css'
            },
            html_concat: {
                src: ['src/index.html'],
                dest: 'dist/index.tmp'
            }
        },
        'useminPrepare': {
            html: 'dist/index.tmp'
        },
        'usemin': {
            html: ['dist/index.tmp']
        },
        'htmlmin': {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dist/index.tmp'
                }
            }
        },
        copy : {
            ionic: {
                expand: true,
                cwd:'bower_components/Ionicons/fonts/',
                src: ['**'],
                dest: 'dist/assets/fonts/'
            },
            font_awesome: {
                expand: true,
                cwd:'bower_components/font-awesome/fonts/',
                src: ['**'],
                dest: 'dist/assets/fonts/'
            }
        }
    });

    // Load the plugin that provides the "uglify", "concat" tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-usemin');

    // Default task(s).
    grunt.registerTask('default', ['clean:all','useminPrepare','copy','concat', 'cssmin', 'uglify', 'usemin', 'htmlmin', 'clean:delete_tmp']); //grunt 명령어로 실행할 작업

};