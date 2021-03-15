
module.exports={

    lintOnSave:"warning",
    devServer: {
        proxy: {
          '/api': {
            target: '<url>',
            ws: true,
            changeOrigin: true
          },
          '/foo': {
            target: '<other_url>'
          }
        }
      }





}