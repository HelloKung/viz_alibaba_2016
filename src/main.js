import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import { configRouter } from './route-config'

require('./static/initial.styl')

Vue.use(VueRouter)
Vue.use(require('vue-resource'))

const router = new VueRouter({
    //启用如下选项，浏览器访问路由路径404,需要nginx设置try file解决
    // history: true,
    // saveScrollPosition: true
})

configRouter(router)

router.start(App, '#app')

window.router = router
