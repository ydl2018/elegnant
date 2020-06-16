module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output: {
        path: path.resolve(__dirname, './lib'),
        // 打包多出口文件
        filename: './main.js'
    },
    devServer:{
        port:8080,
        writeToDisk:true
    }
}