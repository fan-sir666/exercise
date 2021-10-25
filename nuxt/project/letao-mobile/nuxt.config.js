export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'letao-mobile',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'vant/lib/index.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/vant'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // nuxt内置的axios模块
        '@nuxtjs/axios',
        // 前台使用 nuxt内置的代理 解决跨域问题
        '@nuxtjs/proxy'
    ],
    axios: {
        // 基准路径
        baseURL: 'http://localhost:9000',
        // 开启代理
        proxy: true,
        // 自动加前缀
        prefix: '/api'
    },
    proxy: {
        '/api': {
            target: 'http://localhost:9000',
            pathRewrite: {
                '^/api': '/'
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}