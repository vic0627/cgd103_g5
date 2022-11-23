import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/landing',
      name: 'landing',
      component: () => import('../views/LandingView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component:  () => import('../views/newsView.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component:  () => import('../views/shopView.vue')
    },
    {
      path: '/shopInfo',
      name: 'shopInfo',
      component:  () => import('../views/shopInfoView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component:  () => import('../views/cartView.vue')
    },
    {
      path: '/game',
      name: 'game',
      component:  () => import('../views/gameView.vue')
    },
    {
      path: '/custom',
      name: 'custom',
      component:  () => import('../views/customView.vue')
    },
    {
      path: '/showcase',
      name: 'showcase',
      component:  () => import('../views/customView.vue')
    },
    {
      path: '/race',
      name: 'race',
      component:  () => import('../views/raceView.vue')
    },
    {
      path: '/member',
      name: 'member',
      component:  () => import('../views/memberView.vue')
    },
  ]
})

export default router
