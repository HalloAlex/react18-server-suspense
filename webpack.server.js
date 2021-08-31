const path = require('path')

module.exports = {
    mode: 'development',
    entry: './client/server.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist/server'),
        libraryTarget: 'umd',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }]
    }
}