import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import IcesiSites from '../views/IcesiSites.vue'
import Form from '../views/Form.vue'
import InfoView from '../views/InfoView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'

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
    },
    {
      path: '/Add-Site',
      name: 'Add-Site',
      component: Form
    },
    {
      path: '/site/ :siteId',
      name: 'info-site',
      component: InfoView
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignInView
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUpView
    }
  ]
})

export default router
