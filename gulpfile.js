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

/* Variables */
const imgSrc = './src/assets/img/';
const imgDist = './dist/assets/img/';
const jsSrc = './src/assets/js/';
const jsDist = './dist/assets/js/';
const cssSrc = './src/assets/css/';
const cssDist = './dist/assets/css/';

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './',
        },
    });
});

gulp.task('imgrwd', function() {
    // Set images route
    return (
        gulp
            .src(`${imgSrc}*.{png,jpg}`)
            .pipe(
                responsive(
                    {
                        '*.png': [
                            {
                                // Set image size
                                width: 300,
                                rename: {
                                    // Add suffix
                                    suffix: '-300px',
                                    extname: '.jpg',
                                },
                                // Choose format
                                format: 'jpeg',
                            },
                            {
                                width: 600,
                                rename: {
                                    suffix: '-600px',
                                    extname: '.jpg',
                                },
                            },
                            {
                                width: 1200,
                                rename: {
                                    suffix: '-1200px',
                                    extname: '.jpg',
                                },
                            },
                        ],
                    },
                    {
                        quality: 80,
                        progressive: true,
                        withMetadata: false,
                        errorOnEnlargement: false,
                    }
                )
            )
            // Output folder
            .pipe(gulp.dest(`${imgDist}`))
    );
});

gulp.task('webp', () =>
    // Set images route
    gulp
        .src(`${imgSrc}*.jpg`)
        .pipe(webp())
        // Output folder for WebP Images
        .pipe(gulp.dest(`${imgDist}`))
);
