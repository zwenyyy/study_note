import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import codeNote from './codeNote'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  ...codeNote
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
