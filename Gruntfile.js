module.exports = function(grunt) {
    // let path = require('path');


    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js'
                // , 'src/**/*.js', 'test/**/*.js'
            ],
            options: {
                jshintrc: true // tell JSHint to search for .jshintrc
            }
        },
        md2html: {
            one_file: {
                options: {
                    layout: "assets/md2html/templates/bootstrap.html",
                    templateData: {
                        basePath: "",
                        author: "Owen Mundy",
                        projectTitle: "Learn Computing",
                        filename: function(src) {
                            return  src[0].match(/\/(.*).md/);
                        },
                    },
                },
                files: [{
                    src: ['README.md'],
                    dest: 'index.html'
                }]
            },
            multiple_files: {
                options: {
                    // layout: "assets/md2html/templates/basic.html",
                    layout: "assets/md2html/templates/bootstrap.html",
                    templateData: {
                        basePath: "../",
                        author: "Owen Mundy",
                        projectTitle: "Learn Computing",
                        filename: function(src) {
                            return  src[0].match(/\/(.*).md/);
                        },
                    },
                },
                files: [{
                    expand: true,
                    cwd: 'topics',
                    src: ['**/*.md'],
                    dest: 'www', // destination directory
                    ext: '.html' // new file ext
                }]
            }
        },
        watch: {
            grunt: {
                files: ['Gruntfile.js', 'assets/css/*', 'assets/md2html/templates/*'],
                tasks: ['shell', 'md2html', 'alldone']
            },
            configFiles: {
                files: ['Gruntfile.js'], // watch/validate grunt config
                tasks: ['jshint'],
                options: {
                    reload: true
                }
            },
            markdown: {
                // files to watch
                files: ['topics/*.md', 'README.md'],
                tasks: ['md2html', 'shell'], // run these tasks
                options: {
                    spawn: false,
                },
            }
        },
        shell: {
            // makeDir: {
            //     command: 'mkdir test'
            // },
            command: [
                "echo [🙌 running grunt-shell]",
                // "touch hello.txt", //test
                "marp", // call marp for slides
                // "sh run_pandoc.sh"
            ].join('&&')
        }
    });


    // a custom task
    grunt.task.registerTask('alldone', 'run when finished', function() {
        console.log("🔥 all done");
        // grunt.log.writeln('🔥🔥 all done'); // not sure if flag required --verbose
    });

    // enable plugins, register tasks
    grunt.loadNpmTasks('grunt-md2html');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['jshint', 'md2html', 'shell', 'alldone']);
};
