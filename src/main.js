import Vue from 'vue'
import App from './App'
import "@/assets/css/mui.css"
import "@/assets/css/base.css"
import "@/assets/js/mui.js"
import router from './router'
var echarts=require("echarts");
Vue.prototype.echarts=echarts;
Vue.config.productionTip = false

/* eslint-disable no-new 生命周期*/
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
