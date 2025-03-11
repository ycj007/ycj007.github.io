import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/',
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/images/logo.png',
    title: '杰哥的博客',
    navbar: [
      {
        text: '首页',
        link: '/'
      },
       
      {
        text: '数据结构与算法',
        link: '/data-structure/',
      }
    ],
    sidebar: {
      '/data-structure/': [
        {
          text: '数据结构与算法',
          children: [
            '/data-structure/',
            {
              text: '经典排序算法',
              link: '/data-structure/sorting-algorithms',
            },
          ],
        },
      ],
    },
  }),
})