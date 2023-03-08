import CounterPage from "../views/CounterPage.vue";
import Page404 from "../views/404-Page.vue";
import { createRouter, createWebHistory } from "vue-router";

// Vue.use(createRouter)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/counter",
    },
    {
        path:'/counter',
        componenet: CounterPage,
    },
    {
      path: "*",
      redirect: "/404",
    },
    {
      path: "/404",
      name: "404",
      component: Page404,
    },
  ],
});

// const router = new createRouter({
//     mode: 'history',
//     base: '/',
//     routes
// })

export default router;
