const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed'})) /* comprime os arquivos css */
        .pipe(gulp.dest('./dist/css')); /* envia o arquivo para a pasta destino */
}

exports.default = styles; /* tarefa default do npm run build */
exports.watch = function() { /* faz com que o gulp fique olhando para qualquer alteração */
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}