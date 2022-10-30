module.exports = function(grunt) {
    var pkgJson = require('./package.json');
    // console.log(pkgJson);

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js'],
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
            // multiple_files: {
            //     options: {
            //         layout: "assets/md2html/templates/bootstrap.html",
            //         templateData: {
            //             basePath: "../",
            //             author: pkgJson.author,
            //             projectTitle: pkgJson.title,
            //             filename: function(src) {
            //                 return src[0].match(/\/(.*).md/);
            //             },
            //         },
            //     },
            //     files: [{
            //         expand: true,
            //         cwd: 'topics',
            //         src: ['**/*.md'],
            //         dest: 'www', // destination directory
            //         ext: '.html' // new file ext
            //     }]
            // }
        },
        watch: {
            configFiles: {
                files: ['Gruntfile.js'], // watch/validate grunt config
                tasks: ['jshint'],
                options: {
                    reload: true
                }
            },
            grunt: {
                files: ['Gruntfile.js', 'topics/*.md', 'README.md', 'assets/css/*', 'assets/md2html/templates/*'],
                tasks: ['shell', 'md2html', 'build_slides', 'alldone']
            }
        },
        shell: {
            command: [
                "echo [🙌 running grunt-shell]",
                // "touch hello.txt", //test
                // "marp", // call marp for slides
                // "sh run_pandoc.sh"
            ].join(' && ')
        }
    });

	// because marp doesn't let you specify an output directory
	// and it doesn't work using grunt-shell
	// see build_slides.sh for more
	grunt.task.registerTask('build_slides', '', function() {
		var exec = require('child_process').execSync;
		var result = exec("./build_slides.sh", {
			encoding: 'utf8'
		});
		grunt.log.writeln(result);
	});

	// a custom task
	grunt.task.registerTask('alldone', 'Task alias that is run when everything is finished', function() {
		console.log("🔥 all done");
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

	// enable plugins
	grunt.task.loadNpmTasks('grunt-md2html');
	grunt.task.loadNpmTasks('grunt-contrib-jshint');
	grunt.task.loadNpmTasks('grunt-contrib-watch');
	grunt.task.loadNpmTasks('grunt-shell');

	// register tasks
	grunt.task.registerTask('default', ['jshint', 'md2html', 'build_slides', 'alldone']);
};
