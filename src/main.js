/*
 * @Author: your name
 * @Date: 2020-06-07 20:19:20
 * @LastEditTime: 2020-06-10 15:06:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuemian\app\src\main.js
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import plugins from "./plugins/element.js";
/* import Counter from "./Counter.vue"; */

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  plugins,

  render: (h) => h(App),
}).$mount("#app");

/* new Vue({
  Counter,
  render: (b) => b(Counter),
}).$mount("#Counter");
 */
