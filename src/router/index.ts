/**
 * @name: index
 * @author: evil
 * @date: 2022-04-21 18:12
 * @description：index
 * @update: 2022-04-21 18:12
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/App.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
