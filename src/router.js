import Vue from 'vue'
import Router from 'vue-router'
require('./components/HelloWorld.vue')
require('./components/Demo.vue')
require('./components/About.vue')
Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history', // 一定要是history模式
    routes: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "hello" */ './components/HelloWorld.vue')
      },
      {
        path: '/demo',
        component: () => import(/* webpackChunkName: "demo" */ './components/Demo.vue')
      },
      {
        path: '/about',
        component: () => import(/* webpackChunkName: "about" */ './components/About.vue')
      }
    ]
  })
}
