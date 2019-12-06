//vue.config.js
module.exports = {
    assetsDir: './',
    devServer: {
        port: 9090,

        host: "localhost",

        https: false,

        open: false,
        proxy: {
            "/api": {
                target: "http://106.54.186.184:9999", //设置调用的接口域名和端口
                changeOrigin: true, //是否跨域
                ws: true,
                pathRewrite: {
                    "^/rpc": ""
                }
            }
        }
    }
}
