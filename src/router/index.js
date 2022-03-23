import Vue from "vue";
import VueRouter from "vue-router";
import { beforeEach, afterEach } from "./permission";
import LayoutPage from "@/layout/index";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: () => import("@/views/dashboard/index"),
  // },
  {
    path: "/",
    component: LayoutPage,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index"),
        name: "Dashboard",
      },
    ],
  },
  {
    path: "/cmdb",
    component: LayoutPage,
    redirect: "/cmdb/search",
    children: [
      {
        path: "search",
        component: () => import("@/views/dashboard/index"),
        name: "search",
      },
      {
        path: "hosts",
        component: () => import("@/views/host/index"),
        name: "hosts",
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index"),
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import("@/views/error-page/404"),
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 添加了导航守卫
router.beforeEach(beforeEach);
router.afterEach(afterEach);

export default router;
