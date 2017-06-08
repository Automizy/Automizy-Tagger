module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        requirejs: {
            compile: {
                options: {
                    baseUrl: "src/",
                    paths: {
						AutomizyTagger: ''
                    },
                    name: "AutomizyTagger/at",
                    optimize: "none",
                    out: "dist/automizy-tagger.js"
                }
            },
            css: {
                options: {
                    cssIn: "src/at.css",
                    out: "dist/automizy-tagger.css"
                }
            },
            cssMin: {
                options: {
                    cssIn: "dist/automizy-tagger.css",
                    optimizeCss: "default",
                    out: "dist/automizy-tagger.min.css"
                }
            }
        },
		uglify: {
			all: {
				files: {
					"dist/automizy-tagger.min.js": ["dist/automizy-tagger.js"]
				},
				options: {
					preserveComments: false,
					sourceMap: true,
					sourceMapName: "dist/automizy-tagger.min.map",
					report: "min",
					beautify: {
						"ascii_only": true
					},
					compress: {
						hoist_funs: false,
						loops: false,
						unused: false,
						dead_code: false,
						conditionals: false,
						comparisons: false,
						evaluate: false,
						booleans: false,
						if_return: false,
						join_vars: false,
						warnings: false,
						negate_iife: false,
						drop_console: false
					}
				}
			}
		},
		copy: {
			main: {
				files: [
                    {expand: true, cwd: '.bower/automizy-project-initializer/dist/', src: '**/*', dest: 'src/vendor/automizy-project-initializer'},
					{expand: true, cwd: '.bower/jquery/dist/', src: 'jquery.min.*', dest: 'src/vendor/jquery'},
                    {expand: true, cwd: '.bower/jquery-ui/', src: 'jquery-ui.*', dest: 'src/vendor/jquery-ui'},
                    {expand: true, cwd: '.bower/jquery-ui/themes/', src: '**/*', dest: 'src/vendor/jquery-ui/themes'},
					{expand: true, cwd: '.bower/requirejs/', src: 'require.js', dest: 'src/vendor/requirejs'},
					{expand: true, cwd: '.bower/fontawesome/css', src: '**/*', dest: 'src/vendor/fontawesome/css'},
					{expand: true, cwd: '.bower/fontawesome/fonts', src: '**/*', dest: 'src/vendor/fontawesome/fonts'}
				]
			},
			copytodist: {
				files: [
                    {expand: true, cwd: 'src/vendor/', src: '**/*', dest: 'dist/vendor'},
                    {expand: true, cwd: 'src/images/', src: '**/*', dest: 'dist/images'}
				]
			}
		},
        compress: {
            main: {
                options: {
                    archive: 'dist/automizy-tagger.zip'
                },
                files: [
                    {
                        expand: true,
                        cwd : "dist/",
                        src: [
                            './vendor/**',
                            './images/**',
                            './languages/**',
                            '*.js',
                            '*.css',
                            '*.map'
                        ]
                    }
                ]
            }
        }
    });
	
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadTasks('build/tasks');
    grunt.registerTask("default", ["requirejs", "require_clear", "uglify", "copy:main", "copy:copytodist", "compress"]);
    grunt.registerTask("bower", ["copy"]);
};

