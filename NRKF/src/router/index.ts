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
      path: '/academic',
      name: 'academic',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/admission',
      name: 'admission',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/facilities',
      name: 'facilities',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/notice',
      name: 'notice',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/AboutView.vue')
    },
  ],
  linkExactActiveClass: 'LinkActiveClass'
})

export default router
