import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/index.js";

Vue.config.productionTip = false;

const importAll = function (r) {
  r.keys().forEach(key => r(key))
}
importAll(require.context('./assets/icons', true)) // building svg-sprite


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
