// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// 引入axios 模块，启用ajax
import axios from 'axios';
// 设置默认请求路径，发起请求时自动将前缀加在请求路径上
axios.defaults.baseURL = 'http://localhost:8080/';
// 在Vue.prototype下绑定axios便于在模块内使用this.$http调用axios
Vue.prototype.$http = axios;

Vue.use(iView);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
