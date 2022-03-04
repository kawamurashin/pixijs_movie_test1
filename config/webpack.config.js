const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/public/index/main.ts',
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist/public/script/'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    externals:[
       {"pixi.js": "PIXI"}
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    }
};
