import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { markdownTabPlugin } from '@vuepress/plugin-markdown-tab'
import { catalogPlugin } from '@vuepress/plugin-catalog'
import { searchPlugin } from '@vuepress/plugin-search'
import { watermarkPlugin } from '@vuepress/plugin-watermark'
import { commentPlugin } from '@vuepress/plugin-comment'
export default defineUserConfig({
  plugins: [
    markdownTabPlugin({
      // 启用代码选项卡
      codeTabs: true,
      // 启用选项卡
      tabs: true,
    }),
    searchPlugin({
      // 配置项
      locales: {
        '/': {
          placeholder: ' ',
        },
        '/zh/': {
          placeholder: ' ',
        },
      },
      isSearchable: (page) => page.path !== '/',
    }),
    catalogPlugin({
      // 你的选项
      extendsPage: (page) => {
        // 在 routeMeta 中设置目录信息
        page.routeMeta = {
          // 目录标题
          title: page.title,
          // ... 其他信息
        }
      },
    }),
    watermarkPlugin({
      // options
      enabled:  true,
      watermarkOptions: {
        content: '杰哥的博客',
        font: '微软雅黑',
        fontsize: 20,
        fontcolor: '#000000',
        opacity: 0.2,
        rotate: -45,
        width: 200,
        height: 200,
      }
     
    }),
    commentPlugin({
      // 选项
      provider: 'Giscus',
      repo: 'ycj007/ycj007.github.io',
      repoId: 'MDEwOlJlcG9zaXRvcnkyODAwNjIzMjY=',
      category: 'Announcements',
      categoryId: 'DIC_kwDOELFpds4Cn5A6',
      mapping: 'title',
      strict: false,
      reactionsEnabled: true,
      inputPosition: 'bottom',
      lang: 'zh-CN',
      lazyLoading: true,
      darkTheme: 'dark',
      lightTheme: 'light',
      crossorigin: 'anonymous',
      async: true,
    }),
  ],
  base: '/',
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/images/logo.png',
    title: '杰哥的博客',
    description: '记录学习的点滴', 
    home: '/',
    repo:'https://github.com/ycj007', 

    navbar: [
      {
        text: '首页',
        link: '/'
      },{
        text: '数据结构与算法',
        link: '/data-structure/',
      },
      {
        text: '工具',
        children: [
          {
            text: '前端工具',
            children: [
              { text: 'MDN官网', link: 'https://developer.mozilla.org', target: '_blank' },
              { text: 'JavaScript.info官网', link: 'https://javascript.info/', target: '_blank' },
              { text: 'Vue官网', link: 'https://cn.vuejs.org/', target: '_blank' },
              { text: 'TypeScript官网', link: 'https://ts.nodejs.cn/', target: '_blank' },
              { text: 'VuePress v2官网', link: 'https://v2.vuepress.vuejs.org/zh/', target: '_blank' },
              { text: '牧涯前端学习笔记', link: 'https://muyacode.github.io/FrontEndLearnNotes/', target: '_blank' },
          
       
            ]
          },{
            text: '实用工具',
            children: [
              { text: '百度脑图', link: 'https://naotu.baidu.com/', target: '_blank' },
            ]
          }
        ]
      },
      
    ],
    sidebar: {
      '/tools/frontend-tools/': [
        {
          text: '前端工具',
          children: [
            '/tools/frontend-tools/',
          ],
        },
      ],
      '/data-structure/': [
        {
          text: '数据结构与算法',
          children: [
            '/data-structure/',
            {
              text: '排序算法',
              link: '/data-structure/sorting-algorithms',
            },
          ],
        },
      ],
    },
  }),
})