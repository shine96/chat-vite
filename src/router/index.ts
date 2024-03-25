import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home/Home.vue"),
      meta: {
        title: "首页",
      }
    }
  ],
});

router.beforeEach((to, _from, next) => {
  document.title = to.meta.title as string;
  next();
});

export default router