var webpack = require('webpack');
var path = require('path');
module.exports = {
    devtool: 'inline-source-map',
    entry: [
      'webpack-dev-server/client?http://127.0.0.1:8080/',
      'webpack/hot/only-dev-server',
      "bootstrap-loader",
      "./src"
    ],
    output: {
        path: path.join(__dirname, "public"),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extension: ['', '.js', '.scss']
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: [
                'style',
                'css',
                'autoprefixer?browsers=last 3 versions',
                'sass?outputStyle=expanded'
            ]
        },
        {
            test: /\.html$/,
            loader: 'raw'
        },
        {
          test: /\.(png|jpg|svg)$/,
          loader: 'url?limit=5000000'
        },
        {
            test: /\.(woff2?|ttf|eot|svg)$/,
            loader: 'url?limit=10000'
        },
        {
            test: /bootstrap-sass\/assets\/javascripts\//,
            loader: 'imports?jQuery=jquery'
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
            hot: true,
            proxy: {
                '*': 'http://localhost:3000'
            }
    }
};
