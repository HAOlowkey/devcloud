import Vue from "vue";
import VueRouter from "vue-router";
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
      {
        path: "dashboard2",
        component: () => import("@/views/dashboard/index2"),
        name: "Dashboard2",
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

export default router;
