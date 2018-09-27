module.exports = function(src, filename) {
    if (fileName.endsWith(".scss")) {
        return processSass(src);
    }
    return babelJest.process(src, filename);
};
