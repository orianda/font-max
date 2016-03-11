'use strict';

var gulp = require('gulp-help')(require('gulp'));

gulp.task('build:less', 'Build css using less source.', function () {
    var less = require('gulp-less');
    return gulp.src([
        './less/max.less',
        './less/max-common.less',
        './less/max-expert.less'
    ])
        .pipe(less())
        .pipe(gulp.dest('./css'));
});

gulp.task('build:scss', 'Build css using scss source.', function () {
    var scss = require('gulp-sass');
    return gulp.src([
            './scss/max.scss',
            './scss/max-common.scss',
            './scss/max-expert.scss'
        ])
        .pipe(scss())
        .pipe(gulp.dest('./css'));
});

gulp.task('build:min', 'Build compressed css.', function () {
    var cssmin = require('gulp-cssmin'),
        rename = require('gulp-rename');
    return gulp.src([
        './css/*.css',
        '!./css/*.min.css'
    ])
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css'));
});

gulp.task('build', 'Build css files.', function (done) {
    var runSequence = require('run-sequence');
    runSequence('build:less', 'build:min', done);
});