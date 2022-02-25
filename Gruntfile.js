module.exports = function(grunt) {
    var pkgJson = require('./package.json');
    // console.log(pkgJson);

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
                        author: pkgJson.author,
                        projectTitle: pkgJson.title,
                        filename: function(src) {
                            return src[0].match(/\/(.*).md/);
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
                    layout: "assets/md2html/templates/bootstrap.html",
                    templateData: {
                        basePath: "../",
                        author: pkgJson.author,
                        projectTitle: pkgJson.title,
                        filename: function(src) {
                            return src[0].match(/\/(.*).md/);
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
                files: ['topics/*.md', 'README.md'], // files to watch
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


    // SAVING AS A SAMPLE ONLY
    // const fs = require('fs-extra');
    // const path = require('path');
    // // copy all the weeks from the template
    // grunt.task.registerTask('copyRename', 'run when finished', function() {
    //     for (let i = 1; i < 15; i++) {
    //         try {
    //             fs.copySync(
    //                 path.resolve(__dirname, 'week-00.md'),
    //                 `week-${String(i).padStart(2, '0')}.md`, {
    //                     overwrite: false
    //                 }
    //             );
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     }
    //     console.log("🔥 all done");
    // });
    // //register the build task
    // grunt.registerTask('default', ['shell', 'copyRename']);


    // enable plugins, register tasks
    grunt.loadNpmTasks('grunt-md2html');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['jshint', 'md2html', 'shell', 'alldone']);
};
