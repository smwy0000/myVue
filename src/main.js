// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api';
import App from './App.vue'
import router from './router/index.js'
// import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
//自定义全局组件
import "./icons";

import '../src/styles/main.scss'

Vue.use(ElementUI);
Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

