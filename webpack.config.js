var path = require("path");

module.exports = {
    entry: {
        docs: "./docs/index.js"
    },
    devServer: {
        contentBase: "./docs/",
        inline: true,
        port: 4000,
        host: "10.0.0.31"
    },
    output: {
        path: __dirname + "/docs/dist",
        publicPath: path.resolve(__dirname, "/dist"),
        filename: "index.js"
    },
    resolve: {
        extensions: ['.js', '.md', '.txt'],
        alias: {
            'muszoo-react': __dirname + '/src',
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/,
            }
        ]
    }
};