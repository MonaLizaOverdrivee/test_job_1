import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../Views/Home"),
  },
  {
    path: "/:id",
    name: "Article",
    component: () => import(/* webpackChunkName: "article" */ "../Views/ArticlePage"),
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
