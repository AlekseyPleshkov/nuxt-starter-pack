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
  ** Load global style
  */
  css: [
    { src: './assets/css/default.css', lang: 'postcss' }
  ],

  /*
  ** Plugins
  */
  plugins: [
    '~plugins/vue-axios',
    '~plugins/vue-scrollto',
    '~plugins/vue-the-mask',
    '~plugins/vue-scroll-show',
    '~plugins/vue-scroll-focus',
    '~plugins/vue-form-send'
  ],

  /*
   ** Router
   */
  router: {
    mode: 'hash'
    // base: '/dir/',
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
  loading: {
    color: '#3B8070'
  },

  /*
  ** Build configuration
  */
  build: {
    // Extract css to file
    extractCSS: true,
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
    },

    /*
    ** Postcss plugins
    */
    postcss: [
      require('postcss-inject')({
        cssFilePath: 'assets/css/var.css'
      }),
      require('postcss-import')({
        path: ['assets/css']
      }),
      require('postcss-cssnext')({
        browsers: ['last 2 versions', '> 1%']
      }),
      require('postcss-nested-ancestors')(),
      require('postcss-nested')(),
      require('lost')(),
      require('postcss-bgimage')({
        mode: 'cutter'
      }),
      require('postcss-pxtorem')({
        propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
        replace: false
      })
    ]
  },

  /**
   * Modules
   */
  modules: [
    ['nuxt-social-meta', {
      url: 'Site url',
      title: 'Title site',
      description: 'Description site',
      img: 'Link to image in static folder',
      locale: 'ru_RU',
      twitter: '@UserName',
      themeColor: '#ThemeColor'
    }]
  ]
}
