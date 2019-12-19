import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
//import authentication
import Signin from '../views/authentication/Signin.vue'
import Signup from '../views/authentication/Signup.vue'
import SignupConfirm from '../views/authentication/SignupConfirm.vue'
import ForgotPassword from '../views/authentication/ForgotPassword.vue'
import ResetPassword from '../views/authentication/ResetPassword.vue'
import UpdatePassword from '../views/authentication/UpdatePassword.vue'

//dashboard
import DashBoard from '../views/dashboard/DashBoard.vue'



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
  {
    path: '/ResetPassword',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/UpdatePassword',
    name: 'UpdatePassword',
    component: UpdatePassword
  },
  {
    path: '/DashBoard',
    name: 'DashBoard',
    component: DashBoard,
    // children: [
    //   { path: 'useractive', component: UserActive },
    //   {
    //     path: 'userblock', component: UserBlock
    //   }
    //   // {
    //   //   path: 'profile', components: {
    //   //     default: Profile,
    //   //     help: UserEdit
    //   //   }
    //   // }
    // ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
