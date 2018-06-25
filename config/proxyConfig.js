//index.js代理引入模块
module.exports = {
    proxy: {
        '/api': { //将www.exaple.com印射为/apis
            target: 'http://192.168.1.107:9090', // 接口域名
            changeOrigin: true, //是否跨域
            pathRewrite: {
                '^/api': '' //需要rewrite的,
            }
        },

        '/auth': {
            target: 'http://www.eiduo.cc', // 接口域名
            changeOrigin: true, //是否跨域
            pathRewrite: {
                '^/auth': '' //需要rewrite的,
            }
        },

    }
}
