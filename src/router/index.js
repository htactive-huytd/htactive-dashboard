import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
//import authentication
import Signin from '../views/authentication/Signin.vue'
import Signup from '../views/authentication/Signup.vue'
import SignupConfirm from '../views/authentication/SignupConfirm.vue'
import ForgotPassword from '../views/authentication/ForgotPassword.vue'


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
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/SignupConfirm',
    name: 'SignupConfirm',
    component: SignupConfirm
  },
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
