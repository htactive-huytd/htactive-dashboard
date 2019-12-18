export default {
  getToken() {
    return localStorage.getItem("token")
  },
  setToken(token) {
    return localStorage.setItem("token", token);
  },
  headerBearerToken() {
    const token = this.getToken();
    return { headers: { Authorization: `Bearer ${token}` } }
  }
}
