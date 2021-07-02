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
          component: () => import(/* webpackChunkName: "orderList" */ '@/views/home-view.vue')
        },
        {
          path: '/team',
          name: 'team',
          meta: {
            title: 'team'
          },
          component: () => import(/* webpackChunkName: "orderList" */ '@/views/team-view.vue')
        },
        {
          path: '/writing',
          name: 'writing',
          meta: {
            title: 'writing'
          },
          component: () => import(/* webpackChunkName: "writing" */ '@/views/writing.vue')
        },
        {
          path: '/select-blazon',
          name: 'selectBlazon',
          meta: {
            title: 'select blazon'
          },
          component: () => import(/* webpackChunkName: "writing" */ '@/views/select-blazon.vue')
        },
        {
          path: '/test',
          name: 'test',
          meta: {
            title: 'test'
          },
          component: () => import(/* webpackChunkName: "writing" */ '@/views/test.vue')
        }
      ]
    }
  ]
})

const router = createRouter()
export default router
