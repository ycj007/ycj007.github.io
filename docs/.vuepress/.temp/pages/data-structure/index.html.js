import comp from "/Users/yuanchongjie/trae/ycj007.github.io/docs/.vuepress/.temp/pages/data-structure/index.html.vue"
const data = JSON.parse("{\"path\":\"/data-structure/\",\"title\":\"数据结构与算法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"数据结构与算法\",\"description\":\"页面的描述\"},\"headers\":[{\"level\":3,\"title\":\"数据结构\",\"slug\":\"数据结构\",\"link\":\"#数据结构\",\"children\":[]},{\"level\":3,\"title\":\"算法\",\"slug\":\"算法\",\"link\":\"#算法\",\"children\":[]},{\"level\":3,\"title\":\"数据结构与算法的关系\",\"slug\":\"数据结构与算法的关系\",\"link\":\"#数据结构与算法的关系\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"data-structure/README.md\"}")
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
