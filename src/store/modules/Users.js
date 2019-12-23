import localStore from "../../common/localStore";
// import router from '../../router/index'
import { RepositoryFactory } from "../../api/RepositoryFactory";
const UsersRepository = RepositoryFactory.get("users");

const state = {
  loading: false,
  // error: null,
  totalUsersActive: 0,
  usersActive: [],
  options: {},
  filter: {
    // dateStart: new Date().toISOString().substr(0, 10),
    dateStart: "",

    // dateEnd: new Date().toISOString().substr(0, 10),
    dateEnd: "",

    full_name: "",
    phoneNumber: "",
    email: "",
    username: ""
  }
};

const getters = {
  loading(state) {
    return state.loading
  },
  // error(state) {
  //   return state.error
  // },
  totalUsersActive(state) {
    return state.totalUsersActive
  },
  usersActive(state) {
    return state.usersActive
  },
  options(state) {
    // console.log('mutation-options', state.options);
    return state.options
  },
  filter(state) {
    return state.filter
  }
};

const mutations = {
  setLoading(state, payload) {
    state.loading = payload
  },
  // setError(state, payload) {
  //   state.error = payload
  // },
  // clearError(state) {
  //   state.error = null
  // },
  setTotalUsersActive(state, payload) {
    state.totalUsersActive = payload
  },
  setUsersActive(state, payload) {
    state.usersActive = payload
  },
  setOptions(state, payload) {
    state.options = payload
  },
  setFilter(state, payload) {
    console.log("payload-send", payload);
    state.filter = payload
  },
  clearFilter(state) {
    state.filter = {
      dateStart: "",
      dateEnd: "",
      full_name: "",
      phoneNumber: "",
      email: "",
      username: ""
    }
  }
};

const actions = {
  // clearError({ commit }) {
  //   commit('clearError')
  // },
  async fetchUsersActive({ commit, state }) {
    commit('setLoading', true)
    const { sortBy, sortDesc, page, itemsPerPage } = state.options;
    // console.log('options-huy', state.options);
    const body = {
      blocked: false,
      sort: {
        [sortBy[0]]: sortDesc[0] ? -1 : 0
      },
      // filter: {
      //   startDate: "",
      //   endDate: "",
      //   full_name: "",
      //   phoneNumber: "",
      //   email: "",
      //   username: ""
      // },
      filter: state.filter,
      pagination: {
        pageSize: itemsPerPage === -1 ? state.totalUsersActive : itemsPerPage,
        // pageSize: itemsPerPage,
        page: page
      }
    };
    console.log('body-tras', body);
    const data = await UsersRepository.getAllUsers(body, localStore.headerBearerToken())
    commit('setLoading', false)
    // console.log('api return', data);
    commit('setUsersActive', data.results)
    commit('setTotalUsersActive', data.count)
    // console.log('totalUsersActive', state.totalUsersActive);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}