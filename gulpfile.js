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

// Variables
const imgSrc = './src/assets/img/';
const imgDist = './dist/assets/img/';
const jsSrc = './src/assets/js/';
const jsDist = './dist/assets/js/';
const scssSrc = './src/assets/css/';
const scssDist = './dist/assets/css/';

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './',
        },
    });
});

gulp.task('images', function() {
    return gulp
        .src(`${imgSrc}*.{jpg,png}`)
        .pipe(
            responsive(
                {
                    '*.png': [
                        {
                            width: 320,
                            rename: {
                                suffix: '-small',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 320 * 2,
                            rename: {
                                suffix: '-small@2x',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 320 * 3,
                            rename: {
                                suffix: '-small@3x',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 768,
                            rename: {
                                suffix: '-medium',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 768 * 2,
                            rename: {
                                suffix: '-medium@2x',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 768 * 3,
                            rename: {
                                suffix: '-medium@3x',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 1280,
                            rename: {
                                suffix: '-large',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 1280 * 2,
                            rename: {
                                suffix: '-large@2x',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 1280 * 3,
                            rename: {
                                suffix: '-large@3x',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 1440,
                            rename: {
                                suffix: '-xtralarge',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 1440 * 2,
                            rename: {
                                suffix: '-xtralarge@2x',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 1440 * 3,
                            rename: {
                                suffix: '-xtralarge@3x',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 320,
                            rename: {
                                suffix: '-small',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 320 * 2,
                            rename: {
                                suffix: '-small@2x',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 320 * 3,
                            rename: {
                                suffix: '-small@3x',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 768,
                            rename: {
                                suffix: '-medium',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 768 * 2,
                            rename: {
                                suffix: '-medium@2x',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 768 * 3,
                            rename: {
                                suffix: '-medium@3x',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 1280,
                            rename: {
                                suffix: '-large',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 1280 * 2,
                            rename: {
                                suffix: '-large@2x',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 1280 * 3,
                            rename: {
                                suffix: '-large@3x',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 1440,
                            rename: {
                                suffix: '-xtralarge',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 1440 * 2,
                            rename: {
                                suffix: '-xtralarge@2x',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 1440 * 3,
                            rename: {
                                suffix: '-xtralarge@3x',
                                extname: '.webp',
                            },
                        },
                    ],
                    '*.jpg': [
                        {
                            width: 320,
                            rename: {
                                suffix: '-small',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 320 * 2,
                            rename: {
                                suffix: '-small@2x',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 320 * 3,
                            rename: {
                                suffix: '-small@3x',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 768,
                            rename: {
                                suffix: '-medium',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 768 * 2,
                            rename: {
                                suffix: '-medium@2x',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 768 * 3,
                            rename: {
                                suffix: '-medium@3x',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 1280,
                            rename: {
                                suffix: '-large',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 1280 * 2,
                            rename: {
                                suffix: '-large@2x',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 1280 * 3,
                            rename: {
                                suffix: '-large@3x',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 1440,
                            rename: {
                                suffix: '-xtralarge',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 1440 * 2,
                            rename: {
                                suffix: '-xtralarge@2x',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 1440 * 3,
                            rename: {
                                suffix: '-xtralarge@3x',
                                extname: '.jpg',
                            },
                        },
                        {
                            width: 320,
                            rename: {
                                suffix: '-small',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 320 * 2,
                            rename: {
                                suffix: '-small@2x',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 320 * 3,
                            rename: {
                                suffix: '-small@3x',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 768,
                            rename: {
                                suffix: '-medium',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 768 * 2,
                            rename: {
                                suffix: '-medium@2x',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 768 * 3,
                            rename: {
                                suffix: '-medium@3x',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 1280,
                            rename: {
                                suffix: '-large',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 1280 * 2,
                            rename: {
                                suffix: '-large@2x',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 1280 * 3,
                            rename: {
                                suffix: '-large@3x',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 1440,
                            rename: {
                                suffix: '-xtralarge',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 1440 * 2,
                            rename: {
                                suffix: '-xtralarge@2x',
                                extname: '.webp',
                            },
                        },
                        {
                            width: 1440 * 3,
                            rename: {
                                suffix: '-xtralarge@3x',
                                extname: '.webp',
                            },
                        },
                    ],
                },
                {
                    // Global configuration for all images
                    // The output quality for JPEG, WebP and TIFF output formats
                    quality: 100,
                    // Use progressive (interlace) scan for JPEG and PNG output
                    progressive: true,
                    // Strip all metadata
                    withMetadata: false,
                    // Do not emit the error when image is enlarged.
                    errorOnEnlargement: false,
                }
            )
        )
        .pipe(gulp.dest(`${imgDist}`));
});
