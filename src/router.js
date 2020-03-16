import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter(){
  return new Router({
    mode: 'history', //一定要是history模式
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
        component: () => import(/* webpackChunkName: "demo" */ './components/About.vue')
      },
    ]
  })
}
