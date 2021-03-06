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
  }
}
