// webpack configuration file for production (not automatically read by webpack)
// it is specified in the scripts in package.json
const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "production", // production mode

    entry: "./src/app.ts", // entry point of the project

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"), // absolute path of output file
    },

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

    plugins: [
        // add plugins to the entire project
        new CleanPlugin.CleanWebpackPlugin(), // auto clean dist before rebuilding
    ],
};
