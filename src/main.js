import Vue from 'vue'
import App from './App.vue'
import './filters.js'
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
