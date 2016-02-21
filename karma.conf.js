module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["mocha", "browserify", "fixture"],
    files: [
      "test/**/*.spec.js",
      "test/fixtures/**/*.html"
    ],
    exclude: [],
    preprocessors: {
      "test/**/*.spec.js": "browserify",
      "test/fixtures/**/*.html": "html2js"
    },
    browserify: {
      debug: true,
      transform: [
        ["babelify", {plugins: ["babel-plugin-espower"]}]
      ]
    },
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ["PhantomJS"],
    singleRun: true,
    concurrency: Infinity
  })
}
