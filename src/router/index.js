/*
 * @Author: your name
 * @Date: 2020-06-07 20:20:39
 * @LastEditTime: 2020-07-14 20:58:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuemian\app\src\router\index.js
 */

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Counter from "../views/Counter.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/counter",
    name: "counter",
    component: Counter,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
