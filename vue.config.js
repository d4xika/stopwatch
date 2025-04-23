const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    iconPaths: {
      favicon32: 'img/icons/kittyIcon.JPEG',
      favicon16: 'img/icons/kittyIcon.JPEG',
      appleTouchIcon: 'img/icons/kittyIcon.JPEG',
      maskIcon: 'img/icons/kittyIcon.JPEG',
      msTileImage: 'img/icons/kittyIcon.JPEG'
    }
  }
})
