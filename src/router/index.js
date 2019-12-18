import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
//import authentication
import Signin from '../views/authentication/Signin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
