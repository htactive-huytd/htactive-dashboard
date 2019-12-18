import axios from 'axios';

const baseDomain = "https://huy-bind.herokuapp.com"

const baseURL = `${baseDomain}/api`

export default axios.create({
  baseURL
})
