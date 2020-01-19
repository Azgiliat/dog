const path = require('path')
module.exports = {
  chainWebpack: config => {
    config.module.rule('svg')
      .uses.clear()
    config.module.rule('svg-sprite')
      .test(/\.svg$/)
      .include
      .add(path.join(__dirname, '/src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .end()
      .use('svgo-remove-fill')
      .loader('svgo-loader')
      .options({
        plugins: [
          {
            removeAttrs: {
              attrs: 'fill'
            }
          }
        ]
      })
      .end()
    config.module.rule('svg')
      .test(/\.svg$/)
      .exclude
      .add(path.join(__dirname, '/src/assets/icons'))
      .end()
      .use('file-loader')
      .loader(require.resolve('file-loader'))
      .options({
        name: 'img/[name].[ext]'
      })
  }
}
