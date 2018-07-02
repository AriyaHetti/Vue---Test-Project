import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DesktopOne from '@/components/SignupOptions'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signupoptions',
      name: 'SignupOptions',
      component: DesktopOne
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
