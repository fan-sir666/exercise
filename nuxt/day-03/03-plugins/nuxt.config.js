export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: '03-plugins',
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
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    // 注册插件
    plugins: [
        // '~/plugins/vant', // 直接写路径两端都会执行

        // 通过 mode 来设置插件执行在哪一端   client(客户端)、server(服务端)、both(两端)
        { src: '~/plugins/vant', mode: 'both' },
        { src: '~/plugins/axios', mode: 'both' },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}