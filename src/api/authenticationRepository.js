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
  }
}
