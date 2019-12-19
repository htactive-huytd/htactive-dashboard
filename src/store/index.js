import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/Authentication'
import users from './modules/Users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    auth,
    users
  }
})
