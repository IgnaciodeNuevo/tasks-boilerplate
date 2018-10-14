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

gulp.task('serve', function() {
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
                            // -small.webp is 320 pixels wide
                            width: 320,
                            rename: {
                                suffix: '-small',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -small@2x.webp is 640 pixels wide
                            width: 320 * 2,
                            rename: {
                                suffix: '-small@2x',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -small@3x.webp is 960 pixels wide
                            width: 320 * 3,
                            rename: {
                                suffix: '-small@3x',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -medium.webp is 768 pixels wide
                            width: 768,
                            rename: {
                                suffix: '-medium',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -medium@2x.webp is 1.536 pixels wide
                            width: 768 * 2,
                            rename: {
                                suffix: '-medium@2x',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -medium@3x.webp is 2.304 pixels wide
                            width: 768 * 3,
                            rename: {
                                suffix: '-medium@3x',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -large.webp is 1.280 pixels wide
                            width: 1280,
                            rename: {
                                suffix: '-large',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -large@2x.webp is 2.560 pixels wide
                            width: 1280 * 2,
                            rename: {
                                suffix: '-large@2x',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -large@3x.webp is 3.840 pixels wide
                            width: 1280 * 3,
                            rename: {
                                suffix: '-large@3x',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -extralarge.webp is 1.440 pixels wide
                            width: 1440,
                            rename: {
                                suffix: '-extralarge',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -extralarge@2x.webp is 2.880 pixels wide
                            width: 1440 * 2,
                            rename: {
                                suffix: '-extralarge@2x',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -extralarge@3x.webp is 4.320 pixels wide
                            width: 1440 * 3,
                            rename: {
                                suffix: '-extralarge@3x',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -small.webp is 320 pixels wide
                            width: 320,
                            rename: {
                                suffix: '-small',
                                extname: '.webp',
                            },
                        },
                        {
                            // -small@2x.webp is 640 pixels wide
                            width: 320 * 2,
                            rename: {
                                suffix: '-small@2x',
                                extname: '.webp',
                            },
                        },
                        {
                            // -small@3x.webp is 960 pixels wide
                            width: 320 * 3,
                            rename: {
                                suffix: '-small@3x',
                                extname: '.webp',
                            },
                        },
                        {
                            // -medium.webp is 768 pixels wide
                            width: 768,
                            rename: {
                                suffix: '-medium',
                                extname: '.webp',
                            },
                        },
                        {
                            // -medium@2x.webp is 1.536 pixels wide
                            width: 768 * 2,
                            rename: {
                                suffix: '-medium@2x',
                                extname: '.webp',
                            },
                        },
                        {
                            // -medium@3x.webp is 2.304 pixels wide
                            width: 768 * 3,
                            rename: {
                                suffix: '-medium@3x',
                                extname: '.webp',
                            },
                        },
                        {
                            // -large.webp is 1.280 pixels wide
                            width: 1280,
                            rename: {
                                suffix: '-large',
                                extname: '.webp',
                            },
                        },
                        {
                            // -large@2x.webp is 2.560 pixels wide
                            width: 1280 * 2,
                            rename: {
                                suffix: '-large@2x',
                                extname: '.webp',
                            },
                        },
                        {
                            // -large@3x.webp is 3.840 pixels wide
                            width: 1280 * 3,
                            rename: {
                                suffix: '-large@3x',
                                extname: '.webp',
                            },
                        },
                        {
                            // -extralarge.webp is 1.440 pixels wide
                            width: 1440,
                            rename: {
                                suffix: '-extralarge',
                                extname: '.webp',
                            },
                        },
                        {
                            // -extralarge@2x.webp is 2.880 pixels wide
                            width: 1440 * 2,
                            rename: {
                                suffix: '-extralarge@2x',
                                extname: '.webp',
                            },
                        },
                        {
                            // -extralarge@3x.webp is 4.320 pixels wide
                            width: 1440 * 3,
                            rename: {
                                suffix: '-extralarge@3x',
                                extname: '.webp',
                            },
                        },
                    ],
                    '*.jpg': [
                        {
                            // -small.webp is 320 pixels wide
                            width: 320,
                            rename: {
                                suffix: '-small',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -small@2x.webp is 640 pixels wide
                            width: 320 * 2,
                            rename: {
                                suffix: '-small@2x',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -small@3x.webp is 960 pixels wide
                            width: 320 * 3,
                            rename: {
                                suffix: '-small@3x',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -medium.webp is 768 pixels wide
                            width: 768,
                            rename: {
                                suffix: '-medium',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -medium@2x.webp is 1.536 pixels wide
                            width: 768 * 2,
                            rename: {
                                suffix: '-medium@2x',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -medium@3x.webp is 2.304 pixels wide
                            width: 768 * 3,
                            rename: {
                                suffix: '-medium@3x',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -large.webp is 1.280 pixels wide
                            width: 1280,
                            rename: {
                                suffix: '-large',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -large@2x.webp is 2.560 pixels wide
                            width: 1280 * 2,
                            rename: {
                                suffix: '-large@2x',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -large@3x.webp is 3.840 pixels wide
                            width: 1280 * 3,
                            rename: {
                                suffix: '-large@3x',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -extralarge.webp is 1.440 pixels wide
                            width: 1440,
                            rename: {
                                suffix: '-extralarge',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -extralarge@2x.webp is 2.880 pixels wide
                            width: 1440 * 2,
                            rename: {
                                suffix: '-extralarge@2x',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -extralarge@3x.webp is 4.320 pixels wide
                            width: 1440 * 3,
                            rename: {
                                suffix: '-extralarge@3x',
                                extname: '.jpg',
                            },
                        },
                        {
                            // -small.webp is 320 pixels wide
                            width: 320,
                            rename: {
                                suffix: '-small',
                                extname: '.webp',
                            },
                        },
                        {
                            // -small@2x.webp is 640 pixels wide
                            width: 320 * 2,
                            rename: {
                                suffix: '-small@2x',
                                extname: '.webp',
                            },
                        },
                        {
                            // -small@3x.webp is 960 pixels wide
                            width: 320 * 3,
                            rename: {
                                suffix: '-small@3x',
                                extname: '.webp',
                            },
                        },
                        {
                            // -medium.webp is 768 pixels wide
                            width: 768,
                            rename: {
                                suffix: '-medium',
                                extname: '.webp',
                            },
                        },
                        {
                            // -medium@2x.webp is 1.536 pixels wide
                            width: 768 * 2,
                            rename: {
                                suffix: '-medium@2x',
                                extname: '.webp',
                            },
                        },
                        {
                            // -medium@3x.webp is 2.304 pixels wide
                            width: 768 * 3,
                            rename: {
                                suffix: '-medium@3x',
                                extname: '.webp',
                            },
                        },
                        {
                            // -large.webp is 1.280 pixels wide
                            width: 1280,
                            rename: {
                                suffix: '-large',
                                extname: '.webp',
                            },
                        },
                        {
                            // -large@2x.webp is 2.560 pixels wide
                            width: 1280 * 2,
                            rename: {
                                suffix: '-large@2x',
                                extname: '.webp',
                            },
                        },
                        {
                            // -large@3x.webp is 3.840 pixels wide
                            width: 1280 * 3,
                            rename: {
                                suffix: '-large@3x',
                                extname: '.webp',
                            },
                        },
                        {
                            // -extralarge.webp is 1.440 pixels wide
                            width: 1440,
                            rename: {
                                suffix: '-extralarge',
                                extname: '.webp',
                            },
                        },
                        {
                            // -extralarge@2x.webp is 2.880 pixels wide
                            width: 1440 * 2,
                            rename: {
                                suffix: '-extralarge@2x',
                                extname: '.webp',
                            },
                        },
                        {
                            // -extralarge@3x.webp is 4.320 pixels wide
                            width: 1440 * 3,
                            rename: {
                                suffix: '-extralarge@3x',
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
