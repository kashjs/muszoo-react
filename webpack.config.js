var path = require("path");

module.exports = {
    entry: {
        docs: "./docs/index.js"
    },
    devServer: {
        contentBase: "./docs/",
        inline: true,
        port: 4000
        // host: '10.0.0.91'
    },
    output: {
        path: __dirname + "/docs/dist",
        publicPath: path.resolve(__dirname, "/dist"),
        filename: "index.js"
    },
    resolve: {
        extensions: ['', '.js', '.md', '.txt'],
        alias: {
            'muszoo-react': __dirname + '/src',
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