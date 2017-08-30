const path = require('path')
const webpack = require('webpack')
const os = require('os')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var vueLoaderConfig = {
    loaders: cssLoaders({
        sourceMap: false,
        extract: process.env.NODE_ENV === 'production'
    })
}

function getIp() {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}

function cssLoaders(options) {
    options = options || {}

    function generateLoaders(loader, loaderOptions) {
        var loaders = [{
            loader: 'css-loader',
            options: {
                minimize: process.env.NODE_ENV === 'production',
                sourceMap: options.sourceMap
            }
        }]
        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            })
        }
        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader'
            })
        } else {
            return ['vue-style-loader'].concat(loaders)
        }
    }
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        // sass: generateLoaders('sass', { indentedSyntax: true }),
        // scss: generateLoaders('sass'),
        // stylus: generateLoaders('stylus'),
        // styl: generateLoaders('stylus')
    }
}

module.exports = {
    entry: {
        main: './html/src/main.js',
    },
    output: {
        path: path.resolve(__dirname, './html/static'),
        publicPath: '/html/static/',
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './html/src/template.html',
            title: '学交易',
            hash: true,
            filename: '../index.html'
        }),
        // extract css into its own file
        new ExtractTextPlugin('[name].css')
    ],
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: Object.assign(vueLoaderConfig, {
                cssModules: {
                    //localIdentName: '[name]-[local]-[hash:base64:5]',
                    localIdentName: '_[hash:5]',
                    camelCase: true
                },
                postcss: [
                    autoprefixer({
                        browsers: ['last 2 versions', '> 1%']
                    })
                ]
            })
        }, {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'less-loader'
            ]
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[hash:18].[ext]'
            }
        }],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        //contentBase:'../../',
        historyApiFallback: true,
        noInfo: true,
        host: getIp(),
        port: 8888,
        proxy: {
            '/v1/': {
                target: 'http://test.xuejiaoyi.com.cn/',
                changeOrigin: true,
                cookieDomainRewrite: {
                    "www.xuejiaoyi.com.cn": getIp(),
                    "*": ""
                }
            }
        }
    },
    performance: {
        hints: false
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            //sourceMap: true,
            compress: {
                warnings: false
            }
        })
    ])
} else {
    module.exports.devtool = '#source-map'
}