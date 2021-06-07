// path module
const path = require("path");

// platform specific separator (\)
console.log(path.sep);

// join paths
console.log(path.join("/system", "ark", "name", "folder", "file.txt"));

// get the basename
console.log(path.basename("folder\\file.txt"));

// get the absolute path where this module is located
console.log(path.resolve(__dirname));
