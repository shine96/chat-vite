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

router.beforeEach((to, from, next) => {
 if (typeof(to.meta.title) === 'string') {
    document.title = to.meta.title
 }
 next()
});

export default router