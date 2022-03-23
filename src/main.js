import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 加载 svg icons
import "./icons";

// 加载 Element UI组件

import Cookies from "js-cookie";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 加载全局样式
import "./styles/index.scss";

// 加载全局指令
import "./directives";

// 加载全局过滤器
import "./filters";

// 加载全局组件
import "./components";

Vue.use(Element, {
  // set element-ui default size
  size: Cookies.get("size") || "mini",
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
