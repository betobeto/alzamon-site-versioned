// alzamon.art gulpfile.js
// ===========================
// for image maintenance and other tasks


// first call required modules

const gulp = require ('gulp'),
imagemin = require ('gulp-imagemin'),
imageresize = require('gulp-image-resize'),
rename = require ('gulp-rename');
// concat = require ('gulp-concat'),
// clean = require('gulp-rimraf');

// define source and destination folders

const folder ={
    srcPortfolio: 'assets_NOEXPORT/**/*.{jpg,jpeg,gif,png}',
    distPortfolio: 'assets/images/_exported',
    srcComics: 'assets_NOEXPORT/comics',
    distComics: 'assets/images/comics'
}

// define archive paths
const paths ={
    imgSrcPortfolio:[folder.srcPortfolio + ''],
    imgDistPortfolio: [folder.distPortfolio +'']
};

//gulp task: check current path variables
//===================================================================
function checkPath(done) {
    console.log(folder.srcPortfolio,folder.distPortfolio,folder.srcComics, folder.distComics);
    done();
  }
  exports.checkPath = checkPath;

//gulp task: copy and optimize images
//==============================================================

function copyImages(done){
    // define generated img sizes
    [400,900,1500].forEach(function(size){
      return gulp.src(paths.imgSrcPortfolio)
      // do resizing and renaming
      .pipe(imageresize({ width: size }))
      .pipe(rename(function (path) { path.basename = `${path.basename}@${size}w`; }))
      .pipe(imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 80, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            { removeViewBox: true },
            { cleanupIDs: false }
          ]
        })
      ]))
      .pipe(gulp.dest(paths.imgDistPortfolio))
    });
    done();
    }
    exports.copyImages = copyImages;