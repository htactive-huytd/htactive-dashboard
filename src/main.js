import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

// Importing the global css file
import "@/assets/global.css"

//import global components
import AlertCmp from './components/Alert.vue'

Vue.config.productionTip = false

Vue.component('AlertCmp', AlertCmp)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
