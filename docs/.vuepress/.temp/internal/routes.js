export const redirects = JSON.parse("{\"/data-structure/sorting-algorithms.html\":\"/data-structure/sorting-algorithms/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yuanchongjie/trae/ycj007.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"技术博客简介"} }],
  ["/data-structure/", { loader: () => import(/* webpackChunkName: "data-structure_index.html" */"/Users/yuanchongjie/trae/ycj007.github.io/docs/.vuepress/.temp/pages/data-structure/index.html.js"), meta: {"title":"数据结构与算法"} }],
  ["/data-structure/sorting-algorithms/", { loader: () => import(/* webpackChunkName: "data-structure_sorting-algorithms_index.html" */"/Users/yuanchongjie/trae/ycj007.github.io/docs/.vuepress/.temp/pages/data-structure/sorting-algorithms/index.html.js"), meta: {"title":"排序算法"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/yuanchongjie/trae/ycj007.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
