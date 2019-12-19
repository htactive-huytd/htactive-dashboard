import Repository from './Repository';

const resource = "/user"

export default {
  getAllUsers(payload, option) {
    return Repository.post(`${resource}`, payload, option)
  }
}
