module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    concat:{
      options: {
        //定义一个字符串插入没个文件之间用于连接输出
        separator: false
      },
      bootstrap: {
        src: ['src/*.js'],
        dest: 'dist/<%= pkg.name %>.cat.js'
      }
    },
    uglify: {
      options: {
        compress: {
          warnings: false
        },
        mangle: true,
        preserveComments: 'some'
      },
      bootstrap: {
          src: '<%= concat.bootstrap.dest %>',//uglify concant->file.
          dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    qunit: {
      files: ['test/*.html']
    },
    jshint: {
        files: ['gruntfile.js', 'src/*.js', 'build/*.js'],
        options: {
            globals: {
                exports: true
            }
        }
    },
    watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify','concat','qunit','jshint']);

};