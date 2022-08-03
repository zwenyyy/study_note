import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import codeNote from './codeNote'
import erpModal from './erpModal'

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
  ...codeNote,
  ...erpModal
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
