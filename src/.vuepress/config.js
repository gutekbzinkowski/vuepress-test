const { description } = require('../../package')
const { path } = require('@vuepress/shared-utils')

module.exports = {
  base: '/vuepress-test/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Docplanner Integrations Hub',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Integrations Hub',
      description: 'Integrations Hub'
    },
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    },
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/guide/': getGuideSidebar(
          ),
        }
      },
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@image": path.resolve(__dirname, '../assets/img')
      }
    }
  }
}

function getGuideSidebar () {
  return [
    // 'Getting Started',
    // 'Tools and libraries',
    // 'Fundamentals',
    // 'Explaining API objects',
    // 'Callbacks',
    // 'Mapping'
    {
      title: 'Getting Started',
      collapsable: false,
      children: [
        '',
        'integration-process',
        'testing',
      ]
    },
    {
      title: 'Tools and libraries',
      collapsable: false,
      children: [
        'tools-and-libraries/sdk-php',
        'tools-and-libraries/sdk-dotnet',
        'tools-and-libraries/postman-collection',
      ]
    },
    {
      title: 'Fundamentals',
      collapsable: false,
      children: [
      	'fundamentals/authorization.md',
        'fundamentals/errors.md',
        'fundamentals/scopes.md',
        'fundamentals/rate-limits.md',
      ]
    }
  ]
}
