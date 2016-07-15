var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    eslint_teamcity = require('eslint-teamcity');

gulp.task('eslint', function () {
    return gulp.src(['main/app/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format(eslint_teamcity))
        .pipe(eslint.failAfterError());
});
