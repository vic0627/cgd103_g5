import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/landing',
    //   name: 'landing',
    //   component: () => import('../views/LandingView.vue')
    // },
=======
      name: 'landing',
      component: () => import('../views/LandingView.vue')
    },
>>>>>>> origin/dev
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
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
      component:  () => import('../views/shopInfoViewB.vue')
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
