export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'walch-bingo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://ui.meredithcorp.io/v1/css/bootstrap.min.css'
      },
    ],
    script: [{
        src: 'https://ui.meredithcorp.io/v1/js/jquery-3.5.1.slim.min.js',
        body: true,
      },
      {
        src: 'https://ui.meredithcorp.io/v1/js/bootstrap.min.js',
        body: true,
      },
    ],

    // adding scripts
    __dangerouslyDisableSanitizers: ['script'],
    script: [{
        hid: 'voice-wrapper',
        src: 'js/artyom.window.min.js',
        defer: false
      },
      {
        hid: 'voice-wrapper-init',
        innerHTML: `
          var artyom = new Artyom();

          //commands
          var commands = [
            {
              indexes: ["Hello"],
                action: function(){
                  artyom.say("Hello, how are you ?");
                  }
                },
                {
              indexes: ["Good night"],
                action: function(){
                  artyom.say("Hello, how are you ?");
                  }
                },
              {
              indexes: ["Good morning"],
                action: function(){
                  artyom.say("Hello, how are you ?");
                }
              }
            ];

            artyom.addCommands(commands);

            `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],


  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
