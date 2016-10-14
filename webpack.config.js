module.exports = {
    entry: {
        docs: "./docs/js/app.js"
    },
    output: {
        path: __dirname + "/docs/dist",
        filename: "app.js"
    },
    resolve: {
        extensions: ['', '.js', '.md', '.txt'],
        alias: {
            'react-cubes': __dirname + '/src',
        },
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    'babel-loader'
                ],
                exclude: /node_modules/,
            }
        ]
    }
};