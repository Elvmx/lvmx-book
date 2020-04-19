import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('../views/Index'),
      children: [
        {
          path: '/home',
          component: () => import('../views/Index/Home')
        },
        {
          path: '/list',
          component: () => import('../views/Index/List')
        },
        {
          path: '/my',
          component: () => import('../views/Index/My')
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../views/Login')
    }
  ]
})

export default router
