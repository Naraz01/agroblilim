import webpack from 'webpack-stream';

export const libs = () => {
    return app.gulp.src(app.path.src.libs, {sourcemaps: true})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "libs",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(webpack({
        mode: 'development',
        output: {
            filename: 'libs.min.js',
        }
    }))
    .pipe(app.gulp.dest(app.path.build.libs))
    .pipe(app.plugins.browsersync.stream());
 }