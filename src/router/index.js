import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/SignUp.vue')
    },
    {
      path: '/taskform',
      name: 'taskform',
      component: () => import('../components/TaskForm.vue')
    }
  ]
})

export default router
