import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Xeito',
  description: 'The offical blog for the Xeito project',
  head: [
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  ]
})
