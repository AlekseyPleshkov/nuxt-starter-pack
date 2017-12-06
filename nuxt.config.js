module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'hydra-webpack-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vue/Nuxt starter pack' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Plugins
  */
  plugins: [
    '~plugins/vue-the-mask',
    '~plugins/vue-scrollto',
    '~plugins/vue-resource',
    '~plugins/vue-scroll-show',
    '~plugins/vue-scroll-focus'
  ],
  /*
   ** Router
   */
  router: {
    // base: '/dir/',
    // mode: 'hash',
    // extendRoutes (routes, resolve) {
    //   routes.push({
    //     name: '/',
    //     path: '/:type?/:model?/:detail?',
    //     component: resolve(__dirname, 'pages/index.vue')
    //   })
    // }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
