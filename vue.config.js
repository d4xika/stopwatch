const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    iconPaths: {
      favicon32: 'img/icons/kittyIcon_192x192.png',
      favicon16: 'img/icons/kittyIcon_192x192.png',
      appleTouchIcon: 'img/icons/kittyIcon_192x192.png',
      maskIcon: 'img/icons/kittyIcon_192x192.png',
      msTileImage: 'img/icons/kittyIcon_192x192.png'
    }
  }
})
