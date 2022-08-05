import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import codeNote from './codeNote'
import erpModal from './erpModal'
import wordsModal from './wordsModal'

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
  ...erpModal,
  ...wordsModal
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
