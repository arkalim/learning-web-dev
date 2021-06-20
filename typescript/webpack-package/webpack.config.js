// webpack configuration file for development (automatically read by webpack)
const path = require("path");

module.exports = {
    mode: "development", // development mode

    entry: "./src/app.ts", // entry point of the project

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"), // absolute path of output file
        publicPath: "dist", // generate temporary bundle file during development
    },

    devtool: "inline-source-map", // use source maps for debugging

    module: {
        // tells webpack how to work with TS files
        rules: [
            {
                test: /\.ts$/, // check for the files that end in .ts
                use: "ts-loader", // use ts-loader to handle the TS files
                exclude: /node_modules/, // ignore node_modules
            },
        ],
    },

    resolve: {
        extensions: [".ts", ".js"], // bundle all .ts and .js files that are imported
    },
};
