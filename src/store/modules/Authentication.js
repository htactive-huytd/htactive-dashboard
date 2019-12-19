import localStore from "../../common/localStore";
import router from '../../router/index'
import { RepositoryFactory } from "../../api/RepositoryFactory";
const AuthenticationRepository = RepositoryFactory.get("authentication");

const state = {
  loading: false,
  error: null
};

const getters = {
  loading(state) {
    return state.loading
  },
  error(state) {
    return state.error
  }
};

const mutations = {
  setLoading(state, payload) {
    state.loading = payload
  },
  setError(state, payload) {
    state.error = payload
  },
  clearError(state) {
    state.error = null
  }
};

const actions = {
  async signin({ commit }, payload) {
    commit('setLoading', true)
    commit('clearError')
    const isSignin = await AuthenticationRepository.signin(payload);
    commit('setLoading', false)
    if (isSignin.status === true) {
      localStore.setToken(isSignin.token)
      commit('clearError')
      router.push("/");
    } else {
      commit('setError', isSignin.error)
    }
  },
  clearError({ commit }) {
    commit('clearError')
  },
  async signup({ commit }, payload) {
    commit('setLoading', true)
    commit('clearError')
    const isSignup = await AuthenticationRepository.signup(payload);
    commit('setLoading', false)
    console.log('isSignup', isSignup);
    if (isSignup.status === true) {
      commit('clearError')
      router.push("/");
    } else {
      commit('setError', isSignup.error)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}