import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import webpcss from 'gulp-webpcss';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import autoPrefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';

const sass = gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {sourcemaps: true})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(webpcss(
       {
           webpcss: ".webp",
           noWebpClass: ".no-webp"
       } 
    ))    
    .pipe(groupCssMediaQueries())
    .pipe(autoPrefixer({
        grid: true,
        overrideBrowserlist: ['last 3 versions'],
        cascade: true
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())    
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}