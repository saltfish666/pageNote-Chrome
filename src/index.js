
import Vue from 'vue'
import App from './App.vue'

/* eslint-disable */
import normalize from "./normalize.css"

Vue.config.productionTip = false

const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
  render: (h) => h(App)
}).$mount(root)
