import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/what-we-do",
    name: "what-we-do",
    component: () => import("../views/WhatWeDoView.vue"),
  },
  {
    path: "/the-digital-divide",
    name: "the-digital-divide",
    component: () => import("../views/TheDigitalDivideView.vue"),
  },
  {
    path: "/get-involve",
    name: "get-involve",
    component: () => import("../views/GetInvolveView.vue"),
  },
  {
    path: "/our-network",
    name: "our-network",
    component: () => import("../views/OurNetworkView.vue"),
  },
  {
    path: "/insights",
    name: "insights",
    component: () => import("../views/InsightsView.vue"),
  },
  {
    path: "/learn",
    name: "learn",
    component: () => import("../views/LearnView.vue"),
  },
  {
    path: "/donate",
    name: "donate",
    component: () => import("../views/DonateView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
