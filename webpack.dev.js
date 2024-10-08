const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
        compress: true,
    },
})
