import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 加载 svg icons
import "./icons";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
