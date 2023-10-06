const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed'})) /* comprime os arquivos css */
        .pipe(gulp.dest('./dist/css')); /* envia o arquivo para a pasta destino */
}

function images() {
    return gulp.src('./src/images/**/*') 
        .pipe(imagemin()) /* comprime os arquivos imagens */
        .pipe(gulp.dest('./dist/images')); /* envia o arquivo para a pasta destino */
}

exports.default = gulp.parallel(styles); /* tarefa default do npm run build */

exports.watch = function() { /* faz com que o gulp fique olhando para qualquer alteração */
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}