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
          component: () => import(/* webpackChunkName: "selectBlazon" */ '@/views/select-blazon.vue')
        },
        {
          path: '/select-Inscription',
          name: 'selectInscription',
          meta: {
            title: 'select Inscription'
          },
          component: () => import(/* webpackChunkName: "selectInscription" */ '@/views/select-Inscription.vue')
        },
        {
          path: '/edit-blazon',
          name: 'EditBlazon',
          meta: {
            title: 'EditBlazon'
          },
          component: () => import(/* webpackChunkName: "EditBlazon" */ '@/views/edit-blazon.vue')
        },
        {
          path: '/edit-Inscription',
          name: 'EditInscription',
          meta: {
            title: 'EditInscription'
          },
          component: () => import(/* webpackChunkName: "EditInscription" */ '@/views/edit-Inscription.vue')
        },

        {
          path: '/snapshotable',
          name: 'Snapshotable',
          meta: {
            title: 'Snapshotable'
          },
          component: () => import(/* webpackChunkName: "snapshotable" */ '@/views/snapshotable.vue')
        },
        {
          path: '/test',
          name: 'test',
          meta: {
            title: 'test'
          },
          component: () => import(/* webpackChunkName: "writing" */ '@/views/test.vue')
        },
        {
          path: '/drops',
          name: 'drops',
          meta: {
            title: 'drops'
          },
          component: () => import(/* webpackChunkName: "drops" */ '@/views/drops.vue')
        }
      ]
    }
  ]
})

const router = createRouter()
export default router
