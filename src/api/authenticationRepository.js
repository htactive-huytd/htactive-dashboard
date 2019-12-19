import Repository from './Repository';

const resource = "/auth"

export default {
  signin(payload) {
    return Repository.post(`${resource}/signIn`, payload)
      .then(response => {
        return response.data
      })
      .catch(error => {
        return error.response.data;
      });
  },
  signup(payload) {
    return Repository.post(`${resource}/signUp`, payload)
      .then(response => {
        return response.data
      })
      .catch(error => {
        return error.response.data;
      });
  },
  signinConfirm(payload) {
    return Repository.post(`${resource}/signUp-confirm`, payload)
      .then(response => {
        return response.data
      })
      .catch(error => {
        return error.response.data;
      });
  },
  forgotPassword(payload) {
    return Repository.post(`${resource}/forgot-password`, payload)
      .then(response => {
        return response.data
      })
      .catch(error => {
        return error.response.data;
      });
  },
  resetPassword(payload) {
    return Repository.post(`${resource}/reset-password`, payload)
      .then(response => {
        return response.data
      })
      .catch(error => {
        return error.response.data;
      })
  },
  updatePassword(payload, option) {
    return Repository.put(`${resource}/update-password`, payload, option)
      .then(response => {
        return response.data
      })
      .catch(error => {
        return error.response.data;
      })
  }
}
