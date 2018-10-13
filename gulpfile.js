const autoPrefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const changed = require('gulp-changed');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const critical = require('critical');
const del = require('del');
const eslint = require('eslint');
const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const responsive = require('gulp-responsive');
const sass = require('gulp-sass');
const sourceMaps = require('gulp-sourcemaps');
const styleLint = require('stylelint');
const styleLintConfigStandard = require('stylelint-config-standard');
const styleLintOrder = require('stylelint-order');
const styleLintScss = require('stylelint-scss');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');

/* Variables */
const imgSrc = './src/assets/img/';
const imgDist = './dist/assets/img/';
const jsSrc = './src/assets/js/';
const jsDist = './dist/assets/js/';
const scssSrc = './src/assets/css/';
const scssDist = './dist/assets/css/';
const watch = {
    js: [`${jsSrc}/**/*.js`],
    sass: [`${scssSrc}/**/*.scss`],
};

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './',
        },
    });
});

gulp.task('watch', function() {
    gulp.watch(watch.sass, { interval: 500 }, ['sass']);
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
