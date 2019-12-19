// import localStore from "../../common/localStore";
// import router from '../../router/index'
// import { RepositoryFactory } from "../../api/RepositoryFactory";
// const UsersRepository = RepositoryFactory.get("users");

const state = {
  loading: false,
  error: null,
  totalUsersActive: 0,
  usersActive: [],
  options: {},
};

const getters = {
  loading(state) {
    return state.loading
  },
  error(state) {
    return state.error
  },
  totalUsersActive(state) {
    return state.totalUsersActive
  },
  usersActive(state) {
    return state.usersActive
  },
  options(state) {
    return state.options
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
  },
  setTotalUsersActive(state, payload) {
    state.totalUsersActive = payload
  },
  setUsersActive(state, payload) {
    state.usersActive = payload
  },
  setOptions(state, payload) {
    state.options = payload
  },

};

const actions = {
  clearError({ commit }) {
    commit('clearError')
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}