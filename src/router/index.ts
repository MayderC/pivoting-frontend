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
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/metodo-pivoteo',
      component: () => import('../views/MetodosPivoteo.vue'),
      name: 'metodo-pivoteo',
      redirect: { name: 'escalonado' },
      children: [
        {
          path: 'escalonado',
          name: 'escalonado',
          component: () => import('../views/EscalonadoView.vue')
        },
        {
          path: 'parcial',
          name: 'parcial',
          component: () => import('../views/ParcialView.vue')
        }
      ]
    }
  ]
})

export default router
