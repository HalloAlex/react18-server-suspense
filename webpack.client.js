const path = require('path');

module.exports = {
    mode: 'development',
    entry: './client/client.js',
    output: {
        path: path.resolve(__dirname, 'dist/client'),
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