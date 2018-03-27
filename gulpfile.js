const browserSync = require('browser-sync');
const del = require('del');
const critical = require('critical');
const eslint = require('eslint');
const autoprefixer = require('gulp-autoprefixer');
const cached = require('gulp-cached');
const changed = require('gulp-changed');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const csso = require('gulp-csso');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const plumber = require('gulp-plumber');
const responsive = require('gulp-responsive');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');
const gulp = require('gulp');
const stylelintConfigStandard = require('stylelint-config-standard');
const stylelintOrder = require('stylelint-order');
const stylelintScss = require('stylelint-scss');
const stylelint = require('stylelint');

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './',
    },
  });
});

/* Variables */
var imgSrc = './src/assets/img/*';
var imgDist = './dist/assets/img/';
var jsSrc = './src/assets/js/*.js';
var jsDist = './dist/assets/js/*.js';
var cssSrc = './src/assets/css/*.css';
var cssDist = './dist/assets/css/*.css';
