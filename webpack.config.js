const path = require("path")

const conf = {
    entry:path.join(__dirname,"./src/index.js"),
    output: {
        path: path.join(__dirname,"dist"),
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader:"vue-loader"
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    "css-loader"
                ]
            },
            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader: "url-loader",
                        options: {
                            "limit":1024,
                            name:"[name]-aaa.[ext]"
                        }
                    }
                ]
            }
        ]
    }
}

module.exports = conf
