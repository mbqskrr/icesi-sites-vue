import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import IcesiSites from '../views/IcesiSites.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomeView
    },
    {
      path: '/Icesi-Sites',
      name: 'Icesi-Sites',
      component: IcesiSites
    }
  ]
})

export default router
