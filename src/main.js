import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

// eslint-disable-next-line no-undef
fetch(process.env.BASE_URL + "config.json")
  .then((response) => response.json())
  .then((config) => {
       Vue.prototype.$config = config
       new Vue({
        //  router,
        //  store,
         render: (h) => h(App)
       }).$mount("#app")
  })
