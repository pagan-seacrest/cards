const { watch } = require("gulp");

const browserSync = require("browser-sync").create();

const server = () => {
    browserSync.init({
        server: {
            baseDir: "./",
        },
        browser: "chrome",
    });
};

(function () {
    return watch("./index.html", (cb) => {
        server.reload();
        cb();
    });
    watch("./pucli/styles/*.css", styles);
    // watch("./src/js/*.js", scripts);
    // watch("./src/img/*", image);
});

// exports.watch = watchTask;
