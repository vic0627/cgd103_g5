import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: () => import("../views/LandingView.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/aboutView.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/newsView.vue"),
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("../views/shopView.vue"),
    },
    {
      path: "/shopInfo",
      name: "shopInfo",
      component: () => import("../views/shopInfo2View.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/cartView.vue"),
    },
    {
      path: "/game",
      name: "game",
      component: () => import("../views/GameView.vue"),
    },
    {
      path: "/custom",
      name: "custom",
      component: () => import("../views/CustomizeView.vue"),
    },
    {
      path: "/showcase",
      name: "showcase",
      component: () => import("../views/ShowCaseView.vue"),
    },
    {
      path: "/race",
      name: "race",
      component: () => import("../views/raceView.vue"),
    },
    {
      path: "/member",
      name: "member",
      component: () => import("../views/memberView.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/signinView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/registerView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/memProfile.vue"),
    },
    {
      path: "/CustomizedOrders",
      name: "CustomizedOrders",
      component: () => import("../views/CustomizedOrders.vue"),
    },
    {
      path: "/NormalOrders",
      name: "NormalOrders",
      component: () => import("../views/NormalOrders.vue"),
    },
    {
      path: "/backend",
      name: "backend",
      component: () => import("../views/backend/backend.vue"),
    },
    {
      path: "/aboutbackend",
      name: "aboutbackend",
      component: () => import("../views/backend/aboutBackend.vue"),
    },
    {
      path: "/shoppingCartStep2",
      name: "shoppingCartStep2",
      component: () => import("../views/shoppingCartStep2.vue"),
    },
    {
      path: "/orderComplete",
      name: "orderComplete",
      component: () => import("../views/orderComplete.vue"),
    },
    {
      path: "/machineView",
      name: "machineView",
      component: () => import("../views/machineView.vue"),
    },
    {
      path: "/articleView",
      name: "articleView",
      component: () => import("../views/articleView.vue"),
    },
    {
      path: "/apply",
      name: "apply",
      component: () => import("../views/applyView.vue"),
    },
  ],
});

export default router;
