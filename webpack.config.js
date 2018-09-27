const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

// webpack 4
module.exports = {
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
        // filename: "[name].[chunkhash].js" // caching using chunkhash (prebuilt with webpack 4)
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    devtool: "source-map",
    module: {
        rules: [
            // {
            //     test: /\.YOUR_FILE_EXTENSION/,
            //     exclude: /SOMETHING THAT IS THE EXTENSION BUT SHOULD NOT BE PROCESSED/,
            //     use: [
            //         loader: "loader for you file extension or a group of loaders"
            //     ]
            // }
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        clientLogLevel: "error",
        compress: true,
        stats: "errors-only",
        contentBase: path.join(__dirname, "dist"),
        port: 4000,
        // open: true, // opens automatically in browser
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins: [
        new ErrorOverlayPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
};
