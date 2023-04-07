export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      '~static/style/variables.scss',
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@vueuse/nuxt'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    extractCSS: true, // 抽取css作为单独文件
    // publicPath: 'https://cdn.nuxtjs.org' // 设置静态资源服务器
  },

  // https://nuxtjs.org/docs/configuration-glossary/configuration-generate
  generate: {
    dir: 'generateDist',
    // 排除不需要静态化的路由
    exclude: [
      /^\/about/, // path starts with /about
    ],
    // 静态化动态路由
    routes() {
      return new Promise((resolve, reject) => {
        resolve(['/user/1', '/user/2', '/user/5'])
      })
    },
    fallback: '404.html',
  },
}
