const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['babel-polyfill','./client'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].bundle.js'
    },
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 8000,
        historyApiFallback: true,
        hot: true,
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '/api': 'http://localhost:5000'
        }
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
                loader: 'url-loader'
            },
            { 
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'client', 'index.html') }),
    ]
}