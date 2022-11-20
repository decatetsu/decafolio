const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    // List of bundle entries
    entry: {
        // bundle_name: path
        app: path.resolve(__dirname, '../src/js/index.js')
    },
    output: {
        // path and filename for bundles (name means bundle_name)
        filename: 'js/[name].[contenthash].js',
        path: path.resolve(__dirname, '../build'),
    },
    optimization: {
        // If you have a lot of vendor packages you need to make
        // mode advanced configuration of splitChunks
        splitChunks: {
            chunks: 'all',
            name: false,
        },
    },
    plugins: [
        // Cleans output folder
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: [
                path.resolve(__dirname, '../jekyll/css/*'),
                path.resolve(__dirname, '../jekyll/js/*'),
                path.resolve(__dirname, '../jekyll/assets/*'),
                path.resolve(__dirname, '../jekyll/_layouts/default.html'),
            ],
        }),
        // Copying public static assets (images, fonts etc)
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../src/assets'),
                    to: path.resolve(__dirname, '../build/assets'),
                },
            ],
        }),
        // Use html as template to automatically insert
        // necessary js and css (if you need more pages,
        // create array of them and map to HtmlWebpackPlugin
        // objects)
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, '../src/pages/default.html'),
            filename: path.resolve(__dirname, '../build/pages/default.html'),
        }),
    ],
    module: {
        rules: [
            // Assets rule
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                type: 'asset'
            },
        ],
    },
};
