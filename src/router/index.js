import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
Vue.use(Router)

const createRouter = () => new Router({
  mode: 'history', // require service support
  base: process.env.VUE_APP_ROUTE_BASE,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      name: 'home',
      meta: {
        title: 'home'
      },
      children: [
        {
          path: '/home',
          name: 'home',
          meta: {
            title: 'home'
          },
          component: () => import(/* webpackChunkName: "orderList" */ '@/views/home.vue')
        }
      ]
    }
  ]
})

const router = createRouter()
export default router
