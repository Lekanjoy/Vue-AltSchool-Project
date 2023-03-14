import HomePage from "../views/HomePage.vue";
import CounterPage from "../views/CounterPage.vue";
import Page404 from "../views/404-Page.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/counter",
      component: CounterPage,
    },
    {
      path: "/404",
      component: Page404,
    },
    {
      path: "/:pathMatch(.*)*",
      component: Page404,
    },
  ],
});

export default router;
