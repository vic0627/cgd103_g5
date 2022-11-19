import {
    src,
    dest,
    series,
    parallel,
    watch
} from 'gulp';

function defaultTask(cb){
    console.log('gulp ok');
    cb();
}

export {defaultTask as c};

// task A
function A(cb){
    console.log('a mission')
    cb();
}
// task B
function B(cb){
    console.log('b mission')
    cb();
}
const sync = series(A, B);
const async = parallel(A, B);
export {sync as sync};
export {async as async};
// 以上使用在最後打包流程控管



function file(){
    return src(['src/*.html', 'src/*.css', 'src/**/*.js', '!src/about.html']).pipe(dest('dist/')) // 打包複數格式檔案
}

exports.f = file;


// rename 改檔名
const rename = require('gulp-rename');

function cssname(){
    return src('src/*.css')
    .pipe(rename({
        extname : '.min.css'
    }))
    .pipe(dest('dist/css'))
}

exports.recss = cssname;
// 壓縮css
const cleanCSS = require('gulp-clean-css');

function cssminify(){
    return src('src/*.css')
    .pipe(cleanCSS())
    .pipe(rename({
        extname : '.min.css'
    }))
    .pipe(dest('dist/css'))
}

exports.css = cssminify;

// 壓縮js
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

function jsminify(){
    return src('src/js/*.js')
    .pipe(uglify())
    .pipe(rename({
        extname : '.min.js'
    }))
    .pipe(dest('dist/js'));
}

exports.js = jsminify;

function jsConcat(){
    return src([
        "./node_modules/gsap/dist/gsap.min.js",
        './node_modules/three/build/three.module.js',
    ])
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(dest('dist/js'))
}

export {jsConcat as jsConcat};
//合併執行壓縮
exports.cssjs = parallel(cssminify, jsminify);


// sass => css
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

function styleSass() {
    return src(['src/sass/*.scss', 'src/sass/**/*.scss', 'src/css/*.css'])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest('dist/css'));
}

exports.style = styleSass;

// html layout
const fileinclude = require('gulp-file-include');

function includeHTML() {
    return src('src/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('dist'));
}
exports.html = includeHTML;

// 監看
function watchfile(){
    watch(['src/*.html', 'src/layout/*.html'], includeHTML).on('change', reload);
    watch(['src/sass/*.scss', 'src/sass/**/*.scss'], styleSass).on('change', reload);
}

exports.w = watchfile;

// 圖片壓縮
const imagemin = require('gulp-imagemin');

function min_images(){
    return src(['src/images/*.*','src/images/**/*.*'])
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 70, progressive: true}) // 壓縮品質      quality越低 -> 壓縮越大 -> 品質越差 
    ]))
    .pipe(dest('dist/images'))
}

exports.minify = min_images;

// 圖片搬家

function img (){
    return src(['src/images/*.*','src/images/**/*.*']).pipe(dest('dist/images'))
}

// 瀏覽器監看
const browserSync = require('browser-sync');
const reload = browserSync.reload;

function browser(done) {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "index.html"
        },
        port: 3000
    });
    watch(['src/*.html', 'src/layout/*.html'], includeHTML).on('change', reload);
    watch(['src/sass/*.scss', 'src/sass/**/*.scss'], styleSass).on('change', reload);
    watch(['src/images/*.*','src/images/**/*.*'], img).on('change', reload);
    watch(['src/js/*.js','src/js/**/*.js'], jsminify).on('change', reload);
    done();
}
// exports.default = browser;
// js 打包 es6 -> es5
const babel = require('gulp-babel');

function babel5() {
    return src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('dist/js'));
};

exports.es5  = babel5;

// 清除舊檔案
const clean = require('gulp-clean');

function clear() {
  return src('dist' ,{ read: false ,allowEmpty: true })//不去讀檔案結構，增加刪除效率  / allowEmpty : 允許刪除空的檔案
  .pipe(clean({force: true})); //強制刪除檔案 
}

exports.cls = clear;



// ---------- 開發用 ---------- // html sass js img搬運 browser
exports.default = series(parallel(includeHTML, styleSass, img, jsminify), browser);

// ---------- 上線用 ---------- // html sass->prefix->mini es6->es5(mini) 壓圖 
exports.online = series(clear, parallel(includeHTML, styleSass, min_images, babel5))