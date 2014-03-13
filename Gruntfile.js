module.exports = function(grunt) {
  grunt.initConfig({
    lesslint: {
      src: ['modules/styles.mod/styles/init.less']
    }
  });

  grunt.loadNpmTasks('grunt-lesslint');
};
