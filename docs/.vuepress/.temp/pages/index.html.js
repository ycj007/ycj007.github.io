import comp from "/Users/yuanchongjie/trae/ycj007.github.io/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"技术博客简介\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1741702572000,\"contributors\":[{\"name\":\"yuanchongjie\",\"username\":\"yuanchongjie\",\"email\":\"1010321558@qq.com\",\"commits\":1,\"url\":\"https://github.com/yuanchongjie\"}],\"changelog\":[{\"hash\":\"add2b927c6d3d34e00261a9eacfa8acd6fa07b5f\",\"time\":1741702572000,\"email\":\"1010321558@qq.com\",\"author\":\"yuanchongjie\",\"message\":\"vuepress first\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
